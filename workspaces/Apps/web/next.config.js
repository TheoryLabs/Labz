// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
// const withTM = require('next-transpile-modules')(['@theorylabs/bar'])
//
// module.exports = withTM()

//
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
//
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       /* development only config options here */
//     }
//   }
//
//   return {
//     /* config options for all phases except development here */
//   }
// }

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@theorylabs/clock-state',
  '@theorylabs/page-layout',
  '@theorylabs/clock-component',
  '@theorylabs/counter-component',
  '@theorylabs/nav-component',
  '@theorylabs/use-interval-hook',
  '@theorylabs/bar'
]);

module.exports = withPlugins([ withTM ], {
  webpack5: true
});
