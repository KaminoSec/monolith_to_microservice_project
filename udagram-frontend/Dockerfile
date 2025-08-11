### Build stage
FROM beevelop/ionic as build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN ionic build --prod

### Production stage
FROM nginx:alpine

COPY --from=build-stage /usr/src/app/www /usr/share/nginx/html
