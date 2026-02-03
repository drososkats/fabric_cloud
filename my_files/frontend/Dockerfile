# Stage 1: Build the React application
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine
# Copy the build output to replace the default nginx contents
COPY --from=build-stage /app/build /usr/share/nginx/html
# Expose port 80 for the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]