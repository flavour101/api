FROM node:alpine
ENV DB_HOST host.docker.internal
COPY dist /
CMD node server.js
