FROM node:lts-bookworm-slim as build

WORKDIR /app

# Accept build argument
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

COPY package*.json ./

RUN npm install

COPY . .

# Ensure the environment variable is available during build
RUN echo "REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}" && npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]
