FROM node:alpine
COPY dist /
COPY package.json package.json
RUN npm install --production
CMD node server.js
