# Stage 1: Build Angular app

FROM node:12 AS build

WORKDIR /app

# Copy package.json and install dependencies

COPY package*.json ./

RUN npm install --legacy-peer-deps

# Install Angular CLI globally (match Angular version)

RUN npm install -g @angular/cli@7.3.6

# Copy source code and build (dev build)

COPY . .

RUN ng build --output-path=dist

# Stage 2: Serve with Nginx

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
 