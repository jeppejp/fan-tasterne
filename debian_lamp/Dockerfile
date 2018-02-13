FROM debian:latest
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    mysql-server \
    php \
    php-mysql \
    php-pear \
    apache2

ADD mysql.sql /mysql.sql
ADD entry.sh /entry.sh

ENTRYPOINT /entry.sh
