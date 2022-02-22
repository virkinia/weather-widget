const fs = require('fs-extra');
const concat = require('concat');


(async function build() {
  const files = [
    './dist/weather-widget/elements.js'
  ];
  await fs.ensureDir('weather-widget');
  await concat(files, 'weather-widget/weather-widget-element.js');

})()
