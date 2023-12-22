FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm add prisma@4.16.2 -D

COPY . .

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]