$(document).ready(function() {


    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    //today.toLocaleDateString("en-US", options)
    //today.toLocaleDateString("hi-IN", options)
    $(".today_date").html(today.toLocaleDateString("en-US", options))
});