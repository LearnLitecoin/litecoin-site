to access the site go to: https://learnlitecoin.github.io/litecoin-site/#  for now

Will need to connect the domain learnlitecoin.com, use chagpt

1. Update Your DNS Settings (at your domain registrar):
First, you need to configure the DNS settings at your domain registrar (where you purchased the domain). The exact process varies depending on the registrar, but in general:

Login to your domain registrar account (e.g., GoDaddy, Namecheap, etc.).

Find the DNS settings (also called DNS management or DNS records).

Add two CNAME or A records:

CNAME Record:

Name: www (or leave it blank for the root domain if the registrar automatically adds this for you).
Type: CNAME.
Value: your-username.github.io (replace your-username with your GitHub username).
A Record (optional, for direct root domain connection):

Type: A.
Value: 185.199.108.153 (GitHub Pages IP address). You may need to add several of these IP addresses, such as:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
After adding the necessary DNS records, the changes might take a few minutes to a few hours to propagate.

2. Update the GitHub Repository Settings:
Go to your GitHub repository.
Click on the Settings tab.
Scroll down to the GitHub Pages section.
In the Custom domain field, enter your domain name learnlitecoin.com.
Click Save.
This will tell GitHub to serve your site from learnlitecoin.com.

3. Enforce HTTPS (Optional but Recommended):
In the GitHub Pages section of the settings, you’ll see an option to Enforce HTTPS. Make sure this is checked.
GitHub automatically provides a free SSL certificate for custom domains. Enforcing HTTPS will ensure that your site is served securely.
4. Verify the Connection:
After waiting for the DNS changes to propagate (it could take a few hours), you should be able to access your site at https://learnlitecoin.com.

Additional Notes:
Make sure your DNS settings are correct; double-check the entries if the connection doesn't work after a few hours.
If you’re using a root domain (e.g., learnlitecoin.com without www), the A records are necessary. For www.learnlitecoin.com, the CNAME record is enough.
