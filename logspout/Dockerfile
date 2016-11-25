FROM gliderlabs/logspout:master
RUN apk add --update bash && rm -rf /var/cache/apk/*
COPY ./wait-for-it.sh .
RUN chmod +x wait-for-it.sh



