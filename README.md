# MyShieldLabs single-page website

A responsive, single-page static website built with HTML, CSS and vanilla JavaScript. It is designed for GitHub Pages and does not require a backend, build process or paid hosting.

## Files

- `index.html` — page structure and website copy
- `style.css` — responsive styling
- `script.js` — mobile navigation, current year and contact-email setting
- `assets/myshieldlabs-logo.png` — supplied MyShieldLabs logo with transparent background
- `assets/favicon.svg` — browser tab icon

## Before publishing

1. Open `script.js`.
2. Set `CONTACT_EMAIL` to the official public email address you want visitors to use. Leave it blank if you are not ready to publish an email address.
3. Review the wording in `index.html`, especially the company description and HerSafeWalk prototype status.
4. Replace or add social links only when you have official URLs.

The HerSafeWalk section is intentionally described as a prototype in development. Do not present it as a released or validated safety product until that is accurate.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `myshieldlabs-website`.
2. Upload the contents of this folder (not the ZIP itself) to the repository's root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub Pages will provide a `github.io` URL after deployment.

## Connect a custom domain

1. Buy your domain from a registrar.
2. In **Repository → Settings → Pages → Custom domain**, enter your domain (for example `www.example.com`) and save.
3. At your domain registrar, add the DNS records GitHub Pages currently recommends for your chosen hostname.
   - For a `www` subdomain, this is generally a `CNAME` record pointing to your GitHub Pages hostname (for example `your-user.github.io`).
   - For an apex/root domain (for example `example.com`), GitHub generally uses four `A` records for its Pages IP addresses; check GitHub's current documentation before entering them.
4. Wait for DNS propagation. Then enable **Enforce HTTPS** in the Pages settings when it becomes available.

Do not copy DNS values from an old tutorial without checking GitHub's current official documentation:
https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Notes

- The site is static and can be hosted on GitHub Pages.
- Google Fonts are loaded from Google Fonts; if you prefer no third-party font request, remove the font links and use the system font stack in `style.css`.
- No analytics, tracking scripts, cookies or external JavaScript libraries are included.
- The contact button requires a real email address in `script.js` to open a working email draft.
