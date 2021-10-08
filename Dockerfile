FROM nginx:latest
ADD ./aws-cicd-demo.tar.xz /tmp/aws-cicd-demo.tar.xz
RUN cd /usr/share/nginx/html; rm * -rf
RUN cd /usr/share/nginx/html; mv /tmp/aws-cicd-demo.tar.xz/build/* ./;\
 rm /tmp/aws-cicd-demo.tar.xz -rf; ls -l
RUN cd /usr/share/nginx/html; mkdir error; cd error;
ADD ./html/404.html /usr/share/nginx/html/error/404.html
ADD ./html/500.html /usr/share/nginx/html/error/500.html
ADD ./html/502.html /usr/share/nginx/html/error/502.html
ADD ./html/503.html /usr/share/nginx/html/error/503.html
ADD ./html/504.html /usr/share/nginx/html/error/504.html
RUN cd /etc/nginx/conf.d; rm default.conf
ADD ./conf.d/default.conf /etc/nginx/conf.d/default.conf
