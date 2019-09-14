const {override, fixBabelImports, addLessLoader, useBabelRc} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#3A811D'},
  }),
);
