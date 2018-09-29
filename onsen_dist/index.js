const fs = require('fs');

fs.readdirSync('../vergelijken').forEach(file => {
    fs.writeFileSync('iframe-' + file, `---
layout: vergelijker-iframe
---
{% assign page = site.pages | where: "name", "${file}" | first %}
{{ page.content }}`);
});