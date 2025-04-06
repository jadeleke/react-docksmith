#Building the React application
FROM node:14 AS build
WORKDIR /app

# Installing all dependencies (use package.json and package-lock.json if available)
COPY package.json package-lock.json* ./

#using npm ci for clean and reproducible builds
RUN npm ci

# Copying the rest of the source code and building the app
COPY . .
RUN npm run build

# Serving the built app with Nginx
FROM nginx:alpine

# Removing the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copying the build output from the build stage to Nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# Exposing port 80 to access the app
EXPOSE 80

# Runing Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
