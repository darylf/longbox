# build environment
FROM node:15.4-alpine as build
ARG API_URL
ENV API_URL=$API_URL
WORKDIR /srv/www/
COPY package.json yarn.lock /srv/www/
RUN yarn install --silent
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine as production
COPY --from=build /srv/www/public /usr/share/nginx/html
COPY --from=build /srv/www/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
