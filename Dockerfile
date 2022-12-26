#stage 1 build to build npm module
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2 only copy final compiled files for production
FROM nginx:alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=node /app/dist/frontend /usr/share/nginx/html
USER appuser
EXPOSE 80