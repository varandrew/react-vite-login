FROM node:16-slim as build-stage

WORKDIR /app
ADD package.json .
RUN npm i --registry=https://registry.npm.taobao.org

COPY . .
RUN npm run build:prod

FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage ./app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
