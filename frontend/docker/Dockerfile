# Stage 1: install vue
FROM node:lts-alpine3.21 AS frontend-build

WORKDIR /app

COPY ./frontend/package*.json .

RUN npm install

COPY ./frontend .

RUN npm run build

# Stage 2: install nginx
FROM nginx:alpine

COPY --from=frontend-build /app/dist /usr/share/nginx/html

COPY ./frontend/docker/config/nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]
