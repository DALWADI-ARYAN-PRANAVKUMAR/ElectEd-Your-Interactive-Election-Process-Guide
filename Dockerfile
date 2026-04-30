# Use official lightweight nginx image
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy our static site files into the nginx public folder
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY app.js     /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run sends traffic on port 8080 by default
EXPOSE 8080

# Start nginx in foreground (required for containers)
CMD ["nginx", "-g", "daemon off;"]
