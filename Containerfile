FROM quay.io/chapeaux/deno:1.19.0

LABEL author="Luke Dary <ldary@redhat.com>"
LABEL description="Chapeaux Component Server"

WORKDIR /www
EXPOSE 8080/tcp
CMD [ "deno", "run", "--unstable", "--allow-env", "--allow-read", "--allow-net", "server.ts" ]