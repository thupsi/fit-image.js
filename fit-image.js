function fit(width, ratio) {
    height = width * ratio;
    return height;
}
$(document).ready(function () {
    $(".fit-gallery").each(function () {
        galleryRatio = $(this).attr("data-ratio");
        $(this).find('img').each(function () {
            var orWidth = $(this).css("width");
            $(this).attr('original-width',orWidth);
            var width = $(this).width();
            var source = $(this).attr('src');
            if (typeof source == typeof undefined || source == false) {
                width = "100%";
                var margin = $(this).css("margin");
                $(this).css({ "width": width});
                width = $(this).width();
                $(this).css({ "width": width, "margin": 0});
                $( this).wrap( "<div class='placeholder' style='display:inline-block;background:#CCC;margin:"+margin+";'></div>" );
            }
            var height = fit(width, galleryRatio);
            $(this).css({ "height": height, "width": width, "object-fit": "cover" });
        });
    });
    $(".fit").each(function () {

        var width = $(this).width();
        var ratio = $(this).attr("data-ratio");
        var height = fit(width, ratio);
        $(this).css({ "height": height, "width": width, "object-fit": "cover" });

    });
});
$(window).resize(function () {
    $(".fit-gallery").each(function () {
        galleryRatio = $(this).attr("data-ratio");
        $(this).find('img').each(function () {
            $(this).css({ "width": ''});
            $(this).css({ "height": ''});
            var width = $(this).width();
            var source = $(this).attr('src');
            if (typeof source == typeof undefined || source == false) {
                if ( $( this).parent().is( ".placeholder" ) ) {
                    $( this).unwrap();
                 }
                width = "100%";
                var margin = $(this).css("margin");
                $(this).css({ "width": width});
                width = $(this).width();
                $(this).css({ "width": width, "margin": 0});
                $( this).wrap( "<div class='placeholder' style='display:inline-block;background:#CCC;margin:"+margin+";'></div>" );
            }
            var height = fit(width, galleryRatio);
            $(this).css({ "height": height, "width": width, "object-fit": "cover" });
        });
    });
    $(".fit").each(function () {
        $(this).css({ "height": "", "width": "" });
        var width = $(this).width();
        var ratio = $(this).attr("data-ratio");
        var height = fit(width, ratio);
        $(this).css({ "height": height, "width": width, "object-fit": "cover" });
    });
});