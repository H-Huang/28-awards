$( document ).ready(function() {
    $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1X_YICdgYBW2lBv291sTHWPSM4g-xBMV13cVjPrY0wks/od6/public/values?alt=json",
        success: function(data) {
            var template = $('#awards').html();
            var templateScript = Handlebars.compile(template);
            var context = data.feed.entry;
            var html = templateScript(context);
            $("#placeholder").replaceWith(html);
        }
    });
});