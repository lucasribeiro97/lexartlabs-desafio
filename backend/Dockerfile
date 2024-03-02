FROM node:16.14-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
