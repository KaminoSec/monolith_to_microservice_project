# ---- build ----
FROM node:20-alpine AS build
WORKDIR /usr/src/app
RUN apk add --no-cache zip
COPY package*.json ./
RUN npm ci
COPY . .
# ensure build script inputs exist (some templates expect these)
RUN [ -f .npmrc ] || touch .npmrc
RUN mkdir -p src/config
RUN npm run build

# ---- run ----
FROM node:20-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=build /usr/src/app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /usr/src/app/www ./www
EXPOSE 8080
CMD ["node","./www/server.js"]
