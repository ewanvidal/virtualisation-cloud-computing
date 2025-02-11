FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json in order to install dependencies
COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build the React application
RUN npm run build

# Use NGINX to serve the application
FROM nginx:alpine

# Copy the build folder from React to the NGINX folder
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
