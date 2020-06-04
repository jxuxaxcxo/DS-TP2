FROM alpine:latest

RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY . /app

RUN npm install

CMD [ "node", "pub_subClient.js" ]