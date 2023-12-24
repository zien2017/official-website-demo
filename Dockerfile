FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm add prisma@4.16.2 -D

COPY . .
ARG POSTGRES_URL_NON_POOLING
ARG POSTGRES_PRISMA_URL
EXPOSE 3000

RUN pnpm run build
CMD [ "pnpm", "start" ]
