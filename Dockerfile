FROM nginx:latest
ADD ./aws-cicd-demo.tar.xz /tmp/aws-cicd-demo.tar.xz
RUN cd /tmp/; cd /usr/share/nginx/html; rm * -rf; \
    mv /tmp/build/* ./; rm /tmp/build -rf

