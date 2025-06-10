# Teddy Mo

dotnet ef migrations add InitialCreate
dotnet ef database update
# docker

docker-compose -f docker-compose.inertia.yml up --build

docker-compose -f docker-compose.api.yml up --build

docker-compose -f docker-compose.api.yml build --no-cache

docker exec -it laravel-app php artisan migrate


# Git

## 🚀 Git Hook Deployment Guide

### 🎯 Goal:
Push to a remote Git repo on your VPS → Automatically updates your Laravel / React / .NET website.

---

### 🗂️ VPS Setup: Create a Bare Git Repo


Create the User
```bash
sudo adduser deployer
sudo usermod -aG sudo deployer
sudo chown -R deployer:deployer /var/www

sudo usermod -aG docker deployer
```

```bash
cd /var/www
mkdir teddymo.git
cd teddymo.git
git init --bare
```

---

### 🔧 Create `post-receive` Hook

```bash
nano /var/www/teddymo.git/hooks/post-receive
---

---
```bash
#!/bin/bash

GIT_WORK_TREE=/var/www/teddymo-live
GIT_DIR=/var/www/teddymo.git

echo "Deploying to $GIT_WORK_TREE..."

# Checkout the latest code
mkdir -p $GIT_WORK_TREE
git --work-tree=$GIT_WORK_TREE --git-dir=$GIT_DIR checkout -f

# Go into the deployment folder
cd $GIT_WORK_TREE

# Run Docker Compose build and up
docker-compose -f docker-compose.live.yml up --build -d

Then make the script executable:
```bash
chmod +x /var/www/teddymo.git/hooks/post-receive
```

---

### 💻 Local Dev Machine: Add Remote

```bash
git remote add live ssh://user@your-vps-ip/var/www/teddymo.git
```

Then deploy with:
```bash
git push live master
```

---

### ✅ Output on push should look like:

```
Counting objects: ...
...
Deploying to /var/www/teddymo-live...
```

---

### 🔐 Permissions Tips:
- Make sure your VPS user has SSH access and write permission to `/var/www/teddymo-live`.
- You might want to `chown -R www-data:www-data` after deployment if using Nginx/Apache.

---

# git

   ```sh
   git remote add live ssh://deployer@your-vps-ip/var/www/teddymo.git
   ---
   git remote remove live
   ---
   git push live master
   ```

Now your database should be updated with the new schema! 🚀