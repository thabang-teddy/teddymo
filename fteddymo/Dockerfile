# Stage 1: Build the app
FROM node:18-alpine as build

WORKDIR /var/www/root

COPY . .

# COPY package*.json ./
RUN npm install
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

COPY --from=build /var/www/root /var/www/build
# or /app/build for CRA

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
