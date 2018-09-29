
$(function () {
    $('.daisyconfeed').each(function () {
        daisyconFeed(this.getAttribute('data-params'), this);
    })
});

function daisyconFeed(params, container) {
    var url = 'https://ess-server.herokuapp.com/daisycon-proxy/' + params;
    $.ajax({
        url: url,
        data: {},
        success: processFeed,
        error: error,
        type: "GET",
        dataType: 'json',
    });

    function error(err) {
        console.error(err);
    }

    function processFeed(data, status, xhr) {
        var products = data.datafeed.programs[0].products;
        for(var i = 0; i < products.length; i++) {
            (function(product) {
                $(container).append($(
'<a class="col col-xxs-12 col-xs-6 col-sm-4 col-lg-3" target="_system" href="' + product.product_info.link + '"><article class="panel panel-primary">\
<div class="panel-heading">' + product.product_info.title + '</div>\
<img alt="' + product.product_info.images[0].type + '" \
src="' + product.product_info.images[0].location + '" \
style="width: 100%" class="img-responsive">\
<div class="panel-body">' + product.product_info.description + '</div>\
</article></a>'
                ));
            })(products[i]);
        }
    }
}
