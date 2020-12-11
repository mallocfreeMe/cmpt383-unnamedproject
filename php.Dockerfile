FROM php:7.4-cli

RUN set -e; \
    apt-get update; \
    apt-get install -y --no-install-recommends git zip unzip gdb libffi-dev; \
    docker-php-ext-configure ffi; \
    docker-php-ext-install -j$(nproc) ffi pcntl;

WORKDIR /app
COPY . .
CMD php74 php abs.php