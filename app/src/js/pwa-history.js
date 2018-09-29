document.addEventListener("DOMContentLoaded", function (event) {
    var websiteTitle = document.title;
    if (window.ons.platform.isWebView() && window.history) {
        window.fn.navigator.addEventListener('postpush', function (e) {
            if (e.detail.enterPage.id === 'splitter') return;
            var title = e.detail.enterPage.querySelector('.toolbar__center').innerText;
            document.title = websiteTitle + ' - ' + title;
            window.history.pushState(null, document.title);
        });
        var historyAPI = true;
        window.fn.navigator.addEventListener('postpop', function (e) {
            historyAPI = !!e.detail.enterPage.data.historyAPI;
            if (!e.detail.enterPage.data.historyAPI) history.back();
        });
        window.addEventListener('popstate', function (e) {
            if (historyAPI) window.fn.navigator.popPage({ data: { historyAPI: true } });
            historyAPI = true;
        });
    }
});