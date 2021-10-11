#!/bin/bash
flag=`cat ./flag`
echo $flag
if [ $flag == 1 ];
then
    echo "Trigger CD"
    python3 cd.py
fi;
echo 0 > ./flag
