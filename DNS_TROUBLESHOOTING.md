# DNS Troubleshooting Guide

## Current Error
"Both akiturhstechsolutionsllp.com and its alternate name are improperly configured - Domain's DNS record could not be retrieved"

## Common Causes & Solutions

### 1. DNS Records Not Added Yet
**Check**: Go to https://domains.google.com → Select your domain → DNS section
**Solution**: Add the DNS records as instructed in GOOGLE_DOMAINS_STEPS.md

### 2. Wrong DNS Records Added
**Check**: Verify the records in Google Domains:
- CNAME should point to: `ashu1864.github.io` (NOT `github.io` or `github.com`)
- A records should be the exact IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**Common Mistakes**:
- ❌ Pointing to `github.com` instead of `ashu1864.github.io`
- ❌ Using wrong IP addresses
- ❌ Adding `www` prefix when it should be root domain
- ❌ Typo in the domain name

### 3. Conflicting DNS Records
**Issue**: If you have both A records AND CNAME records for the root domain, they conflict
**Solution**: 
- Use EITHER CNAME OR A records, not both
- If using CNAME, remove all A records for root domain
- If using A records, remove CNAME record

### 4. DNS Propagation Not Complete
**Check**: Use https://dnschecker.org to see if DNS has propagated globally
**Solution**: Wait 5-60 minutes (can take up to 48 hours in rare cases)

### 5. Google Domains Name Servers Issue
**Check**: In Google Domains → DNS → Name servers
**Solution**: Ensure you're using Google Domains name servers (not custom ones)

## Step-by-Step Verification

### Step 1: Verify DNS Records in Google Domains

1. Go to: https://domains.google.com
2. Click on `akiturhstechsolutionsllp.com`
3. Click "DNS" in left sidebar
4. Scroll to "Custom resource records"

**What you should see:**
- Either ONE CNAME record: `@` → `ashu1864.github.io`
- OR FOUR A records: `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**What you should NOT see:**
- Both CNAME and A records for root domain (@)
- Records pointing to wrong values
- Records with `www` prefix (unless you want www subdomain)

### Step 2: Remove Conflicting Records

If you have conflicting records:

1. In Google Domains DNS section
2. Find any A records or CNAME records for root domain (@)
3. Click the delete/trash icon next to conflicting records
4. Keep only ONE set (either CNAME OR A records)

### Step 3: Add Correct Records

**If using CNAME:**
- Name: `@` (or blank)
- Type: `CNAME`
- Data: `ashu1864.github.io` (exact match, no spaces)
- TTL: `3600`

**If CNAME not allowed, use A records:**
Add 4 separate A records:
- Record 1: `@` → `185.199.108.153`
- Record 2: `@` → `185.199.109.153`
- Record 3: `@` → `185.199.110.153`
- Record 4: `@` → `185.199.111.153`

### Step 4: Wait and Verify

1. Wait 5-10 minutes after adding records
2. Check DNS propagation: https://dnschecker.org
   - Enter: `akiturhstechsolutionsllp.com`
   - Select record type: `A` or `CNAME`
   - Click "Search"
   - Should show GitHub Pages IPs or `ashu1864.github.io`

3. In GitHub Pages settings:
   - Go to: https://github.com/Ashu1864/akiturhs-site/settings/pages
   - Click "Check again" button
   - Wait for green checkmark

### Step 5: Verify GitHub Pages Configuration

In GitHub Pages settings, ensure:
- ✅ Custom domain: `akiturhstechsolutionsllp.com` (no www, no http://)
- ✅ "Enforce HTTPS" is checked (after DNS is verified)

## Quick Fix Checklist

- [ ] DNS records added in Google Domains
- [ ] Only ONE type of record (CNAME OR A records, not both)
- [ ] CNAME points to `ashu1864.github.io` (exact match)
- [ ] A records use correct IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- [ ] No conflicting records for root domain
- [ ] Waited at least 5-10 minutes after adding records
- [ ] Clicked "Check again" in GitHub Pages settings
- [ ] Verified DNS propagation using dnschecker.org

## Still Not Working?

If DNS is still not working after following all steps:

1. **Double-check record values** - Copy/paste exact values to avoid typos
2. **Remove ALL root domain records** and add fresh ones
3. **Try A records instead of CNAME** (or vice versa)
4. **Contact Google Domains support** if records aren't saving
5. **Wait longer** - DNS can take up to 48 hours in rare cases

## Verify Current DNS Configuration

Run these commands to check current DNS:

```bash
# Check A records
nslookup akiturhstechsolutionsllp.com

# Check CNAME records  
nslookup -type=CNAME akiturhstechsolutionsllp.com

# Check all records
dig akiturhstechsolutionsllp.com ANY
```

The domain should resolve to GitHub Pages IPs or `ashu1864.github.io`.
