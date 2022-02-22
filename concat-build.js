var concat = require('concat');

const es2015= ['./dist/weather-widget/runtime.js',
'./dist/weather-widget/polyfills.js',
'./dist/weather-widget/main.js'];

concat(es2015, './dist/weather-widget/elements.js');
