FROM nginx:1.20

COPY dist /usr/share/nginx/html/dist

COPY nginx/conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80