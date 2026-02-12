# DNS Configuration for GitHub Pages - Google Workspace/Google Domains

## Important Note
Google Workspace Admin console is for managing Google Workspace services (email, users, etc.), NOT DNS records. DNS records must be added at your **domain registrar** or **DNS provider**.

## Step-by-Step Instructions

### Option 1: If Your Domain is Registered with Google Domains

1. **Go to Google Domains** (separate from Google Workspace Admin):
   - Visit: https://domains.google.com
   - Sign in with your Google account

2. **Select Your Domain**:
   - Click on `akiturhstechsolutionsllp.com`

3. **Navigate to DNS Settings**:
   - Click on "DNS" in the left sidebar
   - Or go to: https://domains.google.com/registrar/akiturhstechsolutionsllp.com/dns

4. **Add DNS Records**:

   **For CNAME Record (Recommended):**
   - Scroll to "Custom resource records"
   - Click "Add record"
   - **Name**: `@` (or leave blank)
   - **Type**: `CNAME`
   - **Data**: `ashu1864.github.io`
   - **TTL**: 3600
   - Click "Save"

   **OR For A Records (If CNAME not allowed):**
   Add these 4 A records:
   
   Record 1:
   - **Name**: `@` (or leave blank)
   - **Type**: `A`
   - **Data**: `185.199.108.153`
   - **TTL**: 3600
   
   Record 2:
   - **Name**: `@` (or leave blank)
   - **Type**: `A`
   - **Data**: `185.199.109.153`
   - **TTL**: 3600
   
   Record 3:
   - **Name**: `@` (or leave blank)
   - **Type**: `A`
   - **Data**: `185.199.110.153`
   - **TTL**: 3600
   
   Record 4:
   - **Name**: `@` (or leave blank)
   - **Type**: `A`
   - **Data**: `185.199.111.153`
   - **TTL**: 3600

### Option 2: If Your Domain is Registered Elsewhere

1. **Find Your Domain Registrar**:
   - Check where you purchased `akiturhstechsolutionsllp.com`
   - Common registrars: GoDaddy, Namecheap, Cloudflare, etc.

2. **Log into Your Domain Registrar**:
   - Go to your registrar's website
   - Log in to your account

3. **Navigate to DNS Management**:
   - Look for "DNS Settings", "DNS Management", or "Name Servers"
   - This is usually under "Domain Settings" or "Manage Domain"

4. **Add the Same DNS Records** (as listed in Option 1 above)

### Option 3: If Using Google Cloud DNS

If you're using Google Cloud DNS:

1. Go to: https://console.cloud.google.com/net-services/dns
2. Select your project
3. Click on your DNS zone for `akiturhstechsolutionsllp.com`
4. Click "Add record set"
5. Add the CNAME or A records as described above

## After Adding DNS Records

1. **Wait for DNS Propagation** (5-60 minutes)

2. **Verify DNS in GitHub**:
   - Go to: https://github.com/Ashu1864/akiturhs-site/settings/pages
   - Under "Custom domain", ensure `akiturhstechsolutionsllp.com` is entered
   - Click "Save"
   - Wait for the DNS check to show green (may take a few minutes)
   - Once verified, enable "Enforce HTTPS"

3. **Test Your Site**:
   - Visit: https://akiturhstechsolutionsllp.com
   - The site should load correctly

## Troubleshooting

### If DNS Check Still Fails:
- Wait longer (DNS can take up to 48 hours, but usually works within 1 hour)
- Verify records are saved correctly in your DNS provider
- Check that you didn't add `www` prefix (should be just the domain name)
- Try using "Check again" button in GitHub Pages settings

### Verify DNS Records:
Use online tools to check:
- https://dnschecker.org - Enter `akiturhstechsolutionsllp.com`
- https://mxtoolbox.com/DNSLookup.aspx

The domain should resolve to GitHub Pages IPs or `ashu1864.github.io`.

## Important Notes

- **Google Workspace Admin ≠ DNS Management**: The Google Workspace Admin console (admin.google.com) is for managing users, email, and Google services. DNS records are managed separately at your domain registrar.

- **Don't Remove Existing Records**: Keep all existing DNS records (especially MX records for email). Only ADD the new records for GitHub Pages.

- **CNAME vs A Records**: If your DNS provider allows CNAME on root domain (@), use CNAME. Otherwise, use A records.
