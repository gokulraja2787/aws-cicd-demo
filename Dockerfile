FROM nginx:latest
ADD ./aws-cicd-demo.tar.xz /tmp/aws-cicd-demo.tar.xz
RUN cd /tmp/; tar -xzf aws-cicd-demo.tar.xz; \
    cd /usr/share/nginx/html; rm * -rf; \
    mv /tmp/build/* ./; rm /tmp/build -rf

