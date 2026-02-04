FROM nginx:alpine

COPY first.html /usr/share/nginx/html/index.html
COPY second.css /usr/share/nginx/html/second.css
COPY third.js /usr/share/nginx/html/third.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
