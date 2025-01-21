FROM nginx:latest

COPY frontend/index.html /usr/share/nginx/html/index.html
EXPOSE 80
RUN apt update && apt full-upgrade -y

CMD [ "nginx", "-g", "daemon off;" ]