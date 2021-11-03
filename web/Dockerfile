FROM node:14-alpine as build-step
WORKDIR /dstore
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN yarn build

FROM nginx:1.21.3-alpine
COPY --from=build-step /dstore/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
