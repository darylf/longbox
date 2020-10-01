FROM node:12-alpine as builder

WORKDIR /srv/www/

COPY package.json yarn.lock /srv/www/
RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]