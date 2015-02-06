Package.describe({
  summary: 'This package is deprecated. Use numeral:numeral instead.',
  name: 'vsivsi:numeral',
  version: '1.5.3_3',
  git: 'https://github.com/vsivsi/meteor-numeral.git'
});

Package.on_use(function(api) {
  api.export('numeral');
  api.add_files(['numeral/numeral.js', 'meteor-numeral.js'], ['server','client']);
});

Package.on_test(function (api) {
  api.use(['vsivsi:numeral', 'tinytest']);
  api.add_files('meteor-numeral-tests.js', ['server', 'client']);
});
