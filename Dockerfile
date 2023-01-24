FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

RUN yarn generate

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
ENV PORT 8080

CMD [ "yarn", "start" ]