FROM node:11
WORKDIR '/app'

COPY . .

RUN npm install

RUN cd client && npm install

CMD ["npm", "run", "dev"]