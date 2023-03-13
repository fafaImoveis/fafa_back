FROM node:18

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3033

CMD [ "yarn", "dev" ]