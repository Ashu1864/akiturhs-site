# ✅ Squarespace DNS Solution - Domain Migrated from Google Domains

## Important Update
Your domain `akiturhstechsolutionsllp.com` has been **migrated to Squarespace** (as of July 10, 2024). All DNS management is now done in **Squarespace**, not Google Domains.

## Current Status
✅ You already have the correct DNS records configured in Squarespace:
- 4 A records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Google Workspace email records (MX, TXT)

## Why GitHub Still Shows Error

The error "Domain's DNS record could not be retrieved" could be due to:

1. **DNS Propagation Delay** - Changes can take 15 minutes to 48 hours
2. **Nameserver Configuration** - Need to ensure nameservers are correct
3. **Record Verification** - GitHub needs to verify the records

## Solution Steps

### Step 1: Verify Nameservers in Squarespace

1. Go to Squarespace: https://www.squarespace.com
2. Log in to your account
3. Go to: **Settings → Domains**
4. Click on `akiturhstechsolutionsllp.com`
5. Click **"Domain Nameservers"** or **"DNS Settings"**
6. **Verify nameservers are Squarespace nameservers** (not custom)

**If using custom nameservers:**
- You need to either:
  - Switch to Squarespace nameservers, OR
  - Add DNS records where your custom nameservers point

### Step 2: Verify DNS Records in Squarespace

1. In Squarespace DNS Settings
2. **Confirm** you have these 4 A records:
   - `@` → `185.199.108.153`
   - `@` → `185.199.109.153`
   - `@` → `185.199.110.153`
   - `@` → `185.199.111.153`

3. **Ensure** no conflicting CNAME records on root domain (`@`)

### Step 3: Wait for DNS Propagation

**Wait 15-30 minutes** after any changes, then:

1. **Check DNS propagation:**
   - Visit: https://dnschecker.org
   - Enter: `akiturhstechsolutionsllp.com`
   - Select: `A` record type
   - Should show GitHub Pages IPs globally

2. **Verify in GitHub:**
   - Go to: https://github.com/Ashu1864/akiturhs-site/settings/pages
   - Click **"Check again"** button
   - Wait for ✅ green checkmark

### Step 4: If Still Not Working

**Option A: Switch to Squarespace Nameservers**

1. In Squarespace: DNS Settings → Domain Nameservers
2. **Switch** to Squarespace nameservers (if using custom)
3. Wait 15-30 minutes for propagation
4. Check again in GitHub

**Option B: Verify Records Are Active**

1. Check if you see warning: "You're using custom nameservers"
2. If yes, DNS records in Squarespace are NOT active
3. Either:
   - Switch to Squarespace nameservers, OR
   - Add records where custom nameservers point

## Contact Squarespace Support

If DNS is still not working after following these steps:

1. **Contact Squarespace Support:**
   - Visit: https://support.squarespace.com
   - Explain: "Domain migrated from Google Domains, DNS records not working for GitHub Pages"
   - Provide: Domain name and GitHub Pages IPs

2. **Verify Domain Migration:**
   - Ensure domain fully migrated to Squarespace
   - Check if any pending actions needed

## Quick Checklist

- [ ] Domain migrated to Squarespace (confirmed)
- [ ] DNS records exist in Squarespace (confirmed - 4 A records)
- [ ] Nameservers are Squarespace nameservers (verify)
- [ ] No conflicting CNAME records on root domain
- [ ] Waited 15-30 minutes for DNS propagation
- [ ] Checked DNS propagation using dnschecker.org
- [ ] Clicked "Check again" in GitHub Pages settings
- [ ] Contacted Squarespace support if still not working

## Important Notes

- **Google Domains is no longer active** - All management is in Squarespace
- **DNS records in Squarespace are active** (if using Squarespace nameservers)
- **Keep email records** - Don't delete MX and TXT records for Google Workspace
- **Propagation takes time** - Be patient, DNS changes can take up to 48 hours
