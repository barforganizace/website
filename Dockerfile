FROM nginx:alpine

# Copy the Markdown files to the nginx web directory
COPY obchodni-podminky.md /usr/share/nginx/html/
COPY zasady-ochrany-osobnich-udaju.md /usr/share/nginx/html/

# Copy a custom nginx configuration to enable directory listing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80