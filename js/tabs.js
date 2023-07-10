/***************************/
$(document).ready(function () {

    //Tab
    $(".tab").hide();
    $(".tab:first").fadeIn();
    $(".inner-tabs li").click(function () {
        var activeTab = $(this).find("a").attr("href");
        $(".inner-tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab").hide();
        $(activeTab).fadeIn();
        $.cookie('selectedTab', activeTab, { expires: 1 }); // Save active tab in cookie
        return false
    });

    //tab_notice
    $(".tab_notice").hide();
    $(".tab_notice:first").fadeIn();
    $(".inner-tabs li").click(function () {
        var activeTab = $(this).find("a").attr("href");
        $(".inner-tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_notice").hide();
        $(activeTab).fadeIn();
        $.cookie('selectedTab', activeTab, { expires: 1 }); // Save active tab in cookie
        return false
    });


    var activeTab = $.cookie('selectedTab'); // Retrieve active tab
    if (activeTab) {
        $('.inner-tabs li:has(a[href="' + activeTab + '"])').click(); // And simulate clicking it
    }
});