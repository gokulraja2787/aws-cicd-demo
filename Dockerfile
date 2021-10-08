FROM nginx:latest
ADD ./aws-cicd-demo.tar.xz /tmp/aws-cicd-demo.tar.xz
RUN cd /usr/share/nginx/html; rm * -rf
RUN mv /tmp/aws-cicd-demo.tar.xz/build/* ./; rm /tmp/aws-cicd-demo.tar.xz -rf
RUN ls -l
