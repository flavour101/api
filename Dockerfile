FROM node:alpine
ENV DB_HOST host.docker.internal
COPY *.tgz /
RUN tar zxvf *.tgz
CMD cd package && npm start
