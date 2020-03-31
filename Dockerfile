FROM node:11
WORKDIR '/app'

COPY . .

RUN npm install

RUN cd client && npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]