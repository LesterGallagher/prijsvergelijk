const fs = require('fs');

fs.readdirSync('../vergelijken').forEach(file => {
    fs.writeFileSync('iframe-' + file, `---
---
{% assign page = site.pages | where: "name", "${file}" | first %}
{{ page.content }}`);
});