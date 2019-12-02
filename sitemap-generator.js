const SitemapGenerator = require("sitemap-generator");
const sitemapUrl = "https://www.reactseofriendlyspatemplate.com/";

const generator = SitemapGenerator(sitemapUrl, {
  filepath: `${__dirname}/public/sitemap.xml`,
  lastMod: true,
  stripQuerystring: true
});

// register event listener (SUCCESS => sitemaps created)
generator.on("done", () => {
  console.log(`sitemap.xml successfully created for URL: ${sitemapUrl}\n`);
});

// register event listener (ERROR => { code: 404, message: 'Not found.', url: 'http://example.com/foo' })
generator.on("error", (error) => {
  console.error(`${JSON.stringify(error)}\n`);
});

generator.start();
