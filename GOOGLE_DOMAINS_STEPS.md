# Step-by-Step: Add DNS Records in Google Domains

## Quick Steps for Google Domains

### Step 1: Access Google Domains
1. Go to: **https://domains.google.com**
2. Sign in with your Google account (same one used for Google Workspace)

### Step 2: Select Your Domain
1. You'll see a list of your domains
2. Click on **`akiturhstechsolutionsllp.com`**

### Step 3: Navigate to DNS Settings
1. In the left sidebar, click on **"DNS"**
2. Or go directly to: https://domains.google.com/registrar/akiturhstechsolutionsllp.com/dns

### Step 4: Add DNS Record for GitHub Pages

**Scroll down to the "Custom resource records" section**

#### Option A: Add CNAME Record (Try this first)

1. Click **"Add record"** button
2. Fill in the fields:
   - **Name**: Leave blank or enter `@`
   - **Type**: Select `CNAME` from dropdown
   - **Data**: Enter `ashu1864.github.io`
   - **TTL**: `3600` (or leave default)
3. Click **"Save"**

**Note**: If Google Domains doesn't allow CNAME on root domain, use Option B below.

#### Option B: Add A Records (If CNAME doesn't work)

Add these 4 A records one by one:

**Record 1:**
- Click **"Add record"**
- **Name**: Leave blank or enter `@`
- **Type**: Select `A` from dropdown
- **Data**: `185.199.108.153`
- **TTL**: `3600`
- Click **"Save"**

**Record 2:**
- Click **"Add record"** again
- **Name**: Leave blank or enter `@`
- **Type**: Select `A`
- **Data**: `185.199.109.153`
- **TTL**: `3600`
- Click **"Save"**

**Record 3:**
- Click **"Add record"** again
- **Name**: Leave blank or enter `@`
- **Type**: Select `A`
- **Data**: `185.199.110.153`
- **TTL**: `3600`
- Click **"Save"**

**Record 4:**
- Click **"Add record"** again
- **Name**: Leave blank or enter `@`
- **Type**: Select `A`
- **Data**: `185.199.111.153`
- **TTL**: `3600`
- Click **"Save"**

### Step 5: Verify in GitHub (After 5-10 minutes)

1. Go to: **https://github.com/Ashu1864/akiturhs-site/settings/pages**
2. Under **"Custom domain"**, ensure `akiturhstechsolutionsllp.com` is entered
3. Click **"Save"**
4. Wait for the DNS check to show ✅ (green checkmark)
   - If it shows ❌, click **"Check again"** button
   - DNS propagation can take 5-60 minutes
5. Once verified, check the **"Enforce HTTPS"** checkbox

### Step 6: Test Your Site

Visit: **https://akiturhstechsolutionsllp.com**

The site should now load correctly!

## Important Notes

- **Don't remove existing DNS records** - Keep all your current records (especially MX records for email)
- **DNS propagation takes time** - Usually 5-60 minutes, but can take up to 48 hours
- **If CNAME doesn't work** - Some DNS providers don't allow CNAME on root domain, so use A records instead

## Troubleshooting

**If DNS check still fails after 1 hour:**
1. Double-check the records are saved correctly in Google Domains
2. Verify you didn't add `www` prefix (should be just the domain name)
3. Try the "Check again" button in GitHub Pages settings
4. Use https://dnschecker.org to verify DNS propagation globally
