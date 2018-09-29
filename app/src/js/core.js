
function getJSON(url, cb) {
    var xmlhttp = new XMLHttpRequest();
    var onError = window.ons.notification.alert.bind(window.ons.notification, {
        message: 'Je bent niet verbonden met de server. De gegevens die worden weergegeven zijn mogelijk verouderd.',
    });

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                cb(JSON.parse(this.responseText));
            }
        }
    };
    xmlhttp.onerror = onError;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};