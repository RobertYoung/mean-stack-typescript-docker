#!/bin/sh

: ${MONGO_HOST:=mean-stack-database}
: ${MONGO_PORT:=27017}

until nc -z $MONGO_HOST $MONGO_PORT
do
    echo "Waiting for Mongo ($MONGO_HOST:$MONGO_PORT) to start..."
    sleep 0.5
done

# eval $*

mongoimport --host ${MONGO_HOST} --port ${MONGO_PORT} --db mean --collection users --mode upsert --type json --file /init.json --jsonArray
