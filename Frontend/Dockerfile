FROM node:lts-bookworm-slim as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .


RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]