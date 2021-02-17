const SitemapGenerator = require('sitemap-generator');

const _sitemapUrl = 'https://www.reactseofriendlyspatemplate.com';

const generator = SitemapGenerator(_sitemapUrl, {
  lastMod: true,
  stripQuerystring: true,
  filepath: `${__dirname}/public/sitemap.xml`,
});

// register event listener (SUCCESS => sitemaps created)
generator.on('done', () => {
  console.log(`sitemap.xml successfully created for URL: ${_sitemapUrl}\n`);
});

// register event listener (ERROR => { code: 404, message: 'Not found.', url: 'http://example.com/foo' })
generator.on('error', (error) => {
  console.error(`${JSON.stringify(error)}\n`);
});

generator.start();
