// import nextra from 'nextra';
// import withMDX from '@next/mdx';

// const withNextra = nextra({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.jsx'
// })

// export default withNextra()

// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/
//   });

//   module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'mdx'],
//   });

// // If you have other Next.js configurations, you can pass them as the parameter:
// // export default withNextra({ /* other next.js config */ })

import withNextra from 'nextra';

const nextConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],// Support all file types
  // Add any additional Next.js configurations here if necessary
});

export default nextConfig;

