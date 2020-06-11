FROM arm32v7/node:13
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

WORKDIR /app

ENV NODE_ENV=production

COPY ./build/ .
COPY ./package.json .
RUN yarn install --production=true

EXPOSE 8000
CMD [ "yarn", "start" ]
