FROM node:14

EXPOSE 3000

WORKDIR /app

RUN npm install i npm@latest -g --

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]