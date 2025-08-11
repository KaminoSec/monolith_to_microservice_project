# ---- build ----
FROM node:20-alpine AS build
WORKDIR /usr/src/app
RUN apk add --no-cache zip
COPY package*.json ./
RUN npm ci
COPY . .
# satisfy TS typing for bcryptjs during build
RUN mkdir -p node_modules/@types/bcryptjs && printf "declare module 'bcryptjs';\n" > node_modules/@types/bcryptjs/index.d.ts
# >>> ensure build script inputs exist
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