#stage 1 build to build npm module
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2 only copy final compiled files for production
FROM nginx:alpine
RUN adduser -S appuser -G nginx

COPY --from=node /app/dist/frontend /usr/share/nginx/html

RUN chown -R appuser:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html && \
        chown -R appuser:nginx /var/cache/nginx && \
        chown -R appuser:nginx /var/log/nginx && \
        chown -R appuser:nginx /var/run/ && \
        chown -R appuser:nginx /etc/nginx/conf.d

USER appuser
EXPOSE 80