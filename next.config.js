/** @type {import('next').NextConfig} */
const nextConfig = {
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
          hostname: 'img01.ztat.net'
        },
        {
          protocol: 'https',
          hostname: 'cdn.authentic-shoes.com'
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
      ],
    },
  };

module.exports = nextConfig

