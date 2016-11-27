#FROM ubuntu:latest
#ENTRYPOINT ["/bin/logspout"]
#VOLUME /mnt/routes
#EXPOSE 80


#
#COPY ./build.sh /src/build.sh
#RUN chmod +x /src/build.sh
#ADD ./build.sh /src/test.sh
#RUN chmod +x /src/test.sh
#COPY ./modules.go /src/modules.go
#RUN chmod +x /src/modules.go
#RUN ls /src
#RUN whoami
#WORKDIR /src
#RUN ls
#RUN "test.sh"
#RUN /bin/sh --login -c "test.sh"

#ONBUILD COPY ./build.sh /src/build.sh
#ONBUILD RUN chmod +x /src/build.sh
#ONBUILD COPY ./modules.go /src/modules.go
#ONBUILD RUN chmod +x /src/modules.go
#ONBUILD RUN cd /src && ./build.sh

FROM gliderlabs/logspout:master
RUN apk add --update bash && rm -rf /var/cache/apk/*
COPY ./wait-for-it.sh .
RUN chmod +x wait-for-it.sh



