/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname:"cdn.dummyjson.com",
        },
        {
          protocol: 'https',
          hostname: 'img.lazcdn.com'
        },
        {
          protocol: 'https',
          hostname: 'product.hstatic.net'
        },
        {
          protocol: 'https',
          hostname: 'www.melissashoes.vn'
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com'
        },
        {
          protocol: 'https',
          hostname: 'news.harvard.edu'
        },
        {
          protocol: 'https',
          hostname: 'img01.ztat.net'
        },
        {
          protocol: 'https',
          hostname: 'assets.adidas.com'
        },
        {
          protocol: 'https',
          hostname: 'bizweb.dktcdn.net'
        },
        {
          protocol: 'https',
          hostname: 'static.nike.com'
        },
        {
          protocol: 'https',
          hostname: 'storage.sg.content-cdn.io'
        },
        {
          protocol: 'https',
          hostname: 'images.timberland.com'
        },
        {
          protocol: 'https',
          hostname: 'lh5.googleusercontent.com'
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com'
        },
        {
          protocol: 'https',
          hostname: 'www.cln.com.ph'
        },
        {
          protocol: 'https',
          hostname: 'www.pedroshoes.com'
        },
        {
          protocol: 'https',
          hostname: 'eu.stuartweitzman.com'
        },
        {
          protocol: 'https',
          hostname: 'cdn.saksfifthavenue.com'
        },
        {
          protocol: 'https',
          hostname: 'cdn-images.farfetch-contents.com'
        },
        {
          protocol: 'https',
          hostname: 'media.gucci.com'
        },
        {
          protocol: 'https',
          hostname: 'assets.herringshoes.co.uk'
        },
        {
          protocol: 'https',
          hostname: 'cdn.authentic-shoes.com'
        },
      ],
    },
  };

module.exports = nextConfig

