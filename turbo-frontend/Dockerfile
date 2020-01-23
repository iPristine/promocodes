FROM node:8
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build