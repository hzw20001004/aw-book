FROM java:alpine
VOLUME /tmp
ADD mogu_admin-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8061
ENTRYPOINT ["java","-Xms256m","-Xmx256m","-jar","/app.jar"]
