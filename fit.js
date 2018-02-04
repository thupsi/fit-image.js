function fit(width, ratio) {
    height = width * ratio;
    return height;
}
$(document).ready(function () {
    $(".fit-gallery").each(function () {
        galleryRatio = $(this).attr("data-ratio");
        $(this).find('img').each(function () {
            var width = $(this).width();
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
            var width = $(this).width();
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