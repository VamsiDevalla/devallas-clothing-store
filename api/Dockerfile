FROM node:14-alpine as build-step
WORKDIR /dstore
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build

FROM node:14-alpine
WORKDIR /dstore
COPY --from=build-step /dstore/build .
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production
EXPOSE 8080
RUN chown -R node /dstore/
USER node
CMD ["yarn", "start"]
