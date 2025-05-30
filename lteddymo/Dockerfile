# Use an official PHP image as a parent image with Node.js
FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk update && apk add --no-cache \
    git \
    curl \
    zip \
    unzip \
    libpng-dev \
    libzip-dev \
    sqlite-dev \
    freetype-dev

# Install PHP extensions
RUN docker-php-ext-install pcntl
RUN docker-php-ext-install pdo_sqlite
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Clear cache
RUN apk del --no-cache libpng-dev

# Set the working directory
WORKDIR /var/www/html

# Copy the application code
COPY . /var/www/html

# Install Composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Set file permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html

# Generate application key
RUN php artisan key:generate --ansi
RUN npm run dev

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start the PHP-FPM server
CMD ["php-fpm", "-F"]