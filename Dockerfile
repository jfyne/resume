from abiosoft/caddy

COPY conf/Caddyfile /etc/Caddyfile
COPY dist /srv/app

EXPOSE 80
