# Fix DNS Configuration - Squarespace with Custom Nameservers

## The Problem

1. **You're using custom nameservers** - DNS records shown in Squarespace are NOT active
2. **CNAME conflict** - Can't use CNAME on root domain (`@`) when A records exist
3. **DNS records need to be added** where your custom nameservers point (Google Domains)

## Solution

### Step 1: Find Your Custom Nameservers

1. In Squarespace DNS Settings, look at the warning: "You're using custom nameservers"
2. Note where your nameservers are pointing (likely Google Domains)

### Step 2: Add DNS Records in Google Domains (Not Squarespace)

Since you're using custom nameservers, you MUST add DNS records where those nameservers point.

1. **Go to Google Domains**: https://domains.google.com
2. **Select** `akiturhstechsolutionsllp.com`
3. **Click** "DNS" in left sidebar
4. **Scroll** to "Custom resource records"

### Step 3: Add A Records for GitHub Pages

**DO NOT use CNAME** - Use A records instead (since you have MX records for email):

Add these 4 A records **one by one**:

**Record 1:**
- Click "Add record"
- **Name**: Leave blank (or `@`)
- **Type**: `A`
- **Data**: `185.199.108.153`
- **TTL**: `3600`
- Click "Save"

**Record 2:**
- Click "Add record"
- **Name**: Leave blank (or `@`)
- **Type**: `A`
- **Data**: `185.199.109.153`
- **TTL**: `3600`
- Click "Save"

**Record 3:**
- Click "Add record"
- **Name**: Leave blank (or `@`)
- **Type**: `A`
- **Data**: `185.199.110.153`
- **TTL**: `3600`
- Click "Save"

**Record 4:**
- Click "Add record"
- **Name**: Leave blank (or `@`)
- **Type**: `A`
- **Data**: `185.199.111.153`
- **TTL**: `3600`
- Click "Save"

### Step 4: Remove/Cancel CNAME in Squarespace

1. In Squarespace DNS Settings
2. **CANCEL** the CNAME record you're trying to add
3. Don't save it - CNAME on root domain conflicts with A records

### Step 5: Verify in GitHub (After 5-10 minutes)

1. Go to: https://github.com/Ashu1864/akiturhs-site/settings/pages
2. Under "Custom domain", ensure `akiturhstechsolutionsllp.com` is entered
3. Click "Save"
4. Click "Check again"
5. Wait for ✅ green checkmark

## Important Notes

- **Don't add DNS records in Squarespace** - They won't work because you're using custom nameservers
- **Use A records, not CNAME** - A records work with email (MX records), CNAME doesn't
- **Add records in Google Domains** - Where your custom nameservers point
- **Keep existing MX records** - Don't delete Google Workspace email records

## Why A Records Instead of CNAME?

- Root domain (`@`) with CNAME conflicts with MX records (email)
- A records work alongside MX records
- GitHub Pages supports both A records and CNAME

## Verify Nameservers

To check where your DNS is managed:

1. In Squarespace: DNS Settings → "Domain Nameservers"
2. Note the nameserver addresses
3. Add DNS records where those nameservers point (likely Google Domains)
