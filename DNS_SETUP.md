# DNS Configuration for GitHub Pages

## Required DNS Records

To connect `akiturhstechsolutionsllp.com` to GitHub Pages, you need to add DNS records.

### Option 1: CNAME Record (Recommended)

Add a CNAME record pointing to your GitHub Pages site:

- **Type**: `CNAME`
- **Name**: `@` (or leave blank for root domain)
- **Value**: `ashu1864.github.io`
- **TTL**: 3600 (or default)

**Note**: Some DNS providers don't allow CNAME on the root domain (@). If that's the case, use Option 2.

### Option 2: A Records (If CNAME not allowed)

Add these four A records:

**Record 1:**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `185.199.108.153`
- **TTL**: 3600

**Record 2:**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `185.199.109.153`
- **TTL**: 3600

**Record 3:**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `185.199.110.153`
- **TTL**: 3600

**Record 4:**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `185.199.111.153`
- **TTL**: 3600

## Where to Add DNS Records

### If using Google Domains:
1. Go to [Google Domains](https://domains.google.com)
2. Select your domain `akiturhstechsolutionsllp.com`
3. Go to "DNS" section
4. Add the records above

### If using another DNS provider:
1. Log into your domain registrar/DNS provider
2. Navigate to DNS Management
3. Add the records above

## After Adding DNS Records:

1. Wait 5-60 minutes for DNS propagation
2. Go to GitHub repository: https://github.com/Ashu1864/akiturhs-site
3. Navigate to Settings → Pages
4. Under "Custom domain", enter: `akiturhstechsolutionsllp.com`
5. Click "Save"
6. Wait for DNS check to pass (green checkmark)
7. Enable "Enforce HTTPS" (will be available after DNS is verified)

## Verify DNS Configuration

You can check if DNS is configured correctly using:
- Online DNS checker: https://dnschecker.org
- Command line: `nslookup akiturhstechsolutionsllp.com`

The domain should resolve to GitHub Pages IPs or `ashu1864.github.io`.
