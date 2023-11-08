$.preload = {
    create: function () {
        $("body").prepend('<div class="preloader">' +
            '  <div class="showbox">' +
            '    <div class="loader">' +
            '      <svg class="circular" viewBox="25 25 50 50">' +
            '        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' +
            '      </svg>' +
            '    </div>' +
            '  </div>' +
            '</div>');
    },
    remove: function () {
        $(".preloader").remove();
    },
};

$(window).on("beforeunload", function (event) {
    event = event || window.event;
    if (event) {
        $.preload.create();
    }
});

$(document).on('submit', 'form, form[data-pjax]', function(){
    $.preload.create();
});

$(document).on('pjax:complete', function() {
    $.preload.remove();
});

$(document).on("ajaxStop", function(){
    $.preload.remove();
});
