#!/bin/python3
import os, json, time

def getActiveTask():
    tasks = os.popen("aws ecs list-tasks --cluster=myapp-prod-cluster").read()
    output = json.loads(tasks)
    taskArn = ""
    if (len(output['taskArns']) > 0):
        taskArn = output['taskArns'][0]
        print("Actively running task % s" % taskArn)
    else:
        print("No task running actively")
    return taskArn

def getTaskStatus(taskArn):
    taskStatus = os.popen("aws ecs describe-tasks --cluster=myapp-prod-cluster --tasks={}".format(taskArn)).read()
    output = json.loads(taskStatus)['tasks']
    status = 'STOPPED'
    if (len(output) > 0):
        status=output[0]['lastStatus']
    else:
        print("Task don't exist")
    return status

def stopActiveTask():
    taskArn = getActiveTask()
    if (taskArn != ""):
        while getTaskStatus(taskArn) == 'RUNNING':
            print("Stopping % s" % taskArn)
            stopTaskCommand = 'aws ecs stop-task --task {} --cluster=myapp-prod-cluster'.format(taskArn)
            taskStatus = os.popen(stopTaskCommand).read()
            output = json.loads(taskStatus)['task']
            print('Result Task last status: {} & Task desired status: {}'.format(output['lastStatus'], output['desiredStatus']))
            if output['lastStatus'] == 'STOPPED':
                break
            else:
                print("Retry")
    else:
        print("No more task to stop")

def getTaskDef():
    taskDef = os.popen("aws ecs list-task-definitions --sort=DESC").read()
    print("Output is % s" % taskDef)
    output = json.loads(taskDef)
    taskDefArn = ""
    if (len(output['taskDefinitionArns']) > 0):
        print ("Found task definitions")
        if (len(output['taskDefinitionArns']) > 1):
            print ("Found multiple task definitions, choosing the latest version")
        taskDefArn = output['taskDefinitionArns'][0]
    else:
        print("Error no task def found")    
    return taskDefArn

def runNewTask(taskDefArn):
    print("Starting new task")
    taskStatus = os.popen("aws ecs run-task --cluster=myapp-prod-cluster --task-definition={} --launch-type=EC2".format(taskDefArn)).read()
    output = json.loads(taskStatus)['tasks'][0]
    newTaskArn = output['taskArn']
    while getTaskStatus(newTaskArn) == 'PENDING':
        print("Task still pending")
        time.sleep(5)
    print ("Task status: {}". format(getTaskStatus(newTaskArn)))


print("Starting CD")
taskDefArn = getTaskDef()
print ("Task Def picked % s" % taskDefArn)
if (taskDefArn != ""):
    stopActiveTask()
    runNewTask(taskDefArn)
else:
    print("Invalid setup. No task def found")
