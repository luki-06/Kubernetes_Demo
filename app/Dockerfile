FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY server.js .

ARG VERSION="Version 1"
ARG COLOR="#3498db"
ENV APP_VERSION=$VERSION
ENV APP_COLOR=$COLOR

EXPOSE 3000
CMD ["node", "server.js"]
