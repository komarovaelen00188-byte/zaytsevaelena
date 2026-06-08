#!/bin/bash
# Скрипт первичной настройки VPS
# Запускается ОДИН РАЗ на чистом Ubuntu LTS
# Использование: sudo bash vps-setup.sh yourdomain.ru

set -e

DOMAIN=${1:-"zaytsevaelena.ru"}
APP_DIR="/opt/zaytsevaelena"
REPO_URL="https://github.com/YOUR_USERNAME/zaytsevaelena.git"  # ← заменить

echo "=== Обновление системы ==="
apt-get update && apt-get upgrade -y

echo "=== Установка Docker ==="
apt-get install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  > /etc/apt/sources.list.d/docker.list
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "=== Установка Certbot ==="
apt-get install -y certbot

echo "=== Клонирование репозитория ==="
mkdir -p $APP_DIR
git clone $REPO_URL $APP_DIR

echo "=== Получение SSL-сертификата ==="
certbot certonly --standalone \
  -d $DOMAIN -d www.$DOMAIN \
  --non-interactive --agree-tos \
  -m admin@$DOMAIN

echo "=== Настройка авто-обновления сертификата ==="
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && docker compose -f $APP_DIR/docker-compose.yml restart nginx") | crontab -

echo "=== Запуск приложения ==="
cd $APP_DIR
docker compose up -d --build

echo ""
echo "✅ Готово! Сайт доступен на https://$DOMAIN"
echo "   Не забудь обновить REPO_URL в этом скрипте перед следующим использованием."
