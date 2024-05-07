FROM node:18-alpine

RUN node -v
RUN npm -v

WORKDIR /app

RUN apk add --update --no-cache git bash yarn nano

RUN apk add --update --no-cache autoconf libtool automake alpine-sdk

# Définir la variable d'environnement pour OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN yarn install
