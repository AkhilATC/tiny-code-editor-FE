#stage 1
FROM node:12-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build-step /app/dist/tiny-code-playground /usr/share/nginx/html
