FROM caddy:2-alpine

WORKDIR /srv

COPY . /srv
RUN mv /srv/Caddyfile /etc/caddy/Caddyfile

EXPOSE 3000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
