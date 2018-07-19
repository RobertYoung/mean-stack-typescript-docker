#!/bin/sh

: ${MONGO_HOST:=mean-stack-database}
: ${MONGO_PORT:=27017}
: ${MONGO_DATABASE:=mean}
: ${MONGO_COLLECTION:=users}

until nc -z $MONGO_HOST $MONGO_PORT
do
    echo "Waiting for Mongo ($MONGO_HOST:$MONGO_PORT) to start..."
    sleep 0.5
done

# eval $*


# NUM_OF_ITEMS = $(mongo --eval 'printjson(db.runCommand({ dataSize: "mean.users" }))' | awk '{print}' | tail -n+3 | jq '.numObjects')

# if [ $NUM_OF_ITEMS -eq 0 ]
# then
# echo "Seeding database"
mongoimport --host ${MONGO_HOST} --port ${MONGO_PORT} --db ${MONGO_DATABASE} --collection ${MONGO_COLLECTION} --mode upsert --type json --file /init.json --jsonArray
# else
# echo "Ignoring seed due to items existing in the database"
# fi
