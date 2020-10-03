FROM node:12-alpine

WORKDIR /srv/www/

COPY package.json yarn.lock /srv/www/
RUN yarn install --silent

COPY . .

CMD ["yarn", "run", "start"]