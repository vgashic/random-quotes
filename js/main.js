function randomColor() {
    var h = Math.floor(Math.random() * 360);
    var hsl = "hsl(" + h + ", 50%, 80%)";
    // console.log(hsl);

    $("body").css("background-color", hsl);
    $(".quote-wrapper").css("color", hsl);
    $(".button").css("color", hsl).css("border-color", hsl);
}


function newQuote() {

    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
        headers: {
            "X-Mashape-Key": "n2cpDFkAWNmshcsvwhW9LbKHIV65p1kzowfjsnLBcsUEYQNdr2",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        success: function(response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;

            randomColor();
            $("#quote").text(currentQuote);
            $("#quote-author").text(currentAuthor);

            $("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

        },
        error: function() {
            randomColor();
            $("#quote").text("Something went wrong");
            $("#quote-author").text("Random guy");
        }
    });
}



$(document).ready(function() {

    newQuote();



    $("#new-quote").on("click", newQuote);
});
