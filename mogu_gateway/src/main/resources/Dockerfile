FROM java:alpine
VOLUME /tmp
MAINTAINER aw
#EXPOSE 映射端口
#EXPOSE 9100
ADD mogu_gateway-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Xms256m","-Xmx256m","-jar","/app.jar"]
