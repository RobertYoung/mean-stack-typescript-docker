FROM alpine

COPY init.json /init.json

COPY seed-database.sh /seed-database.sh

RUN apk add --update mongodb-tools netcat-openbsd

CMD ["/bin/sh", "seed-database.sh"]
