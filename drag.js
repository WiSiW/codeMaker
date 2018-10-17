var htmlCode = ""
$("#left-right-line").myDrag({
    direction:'x',
    randomPosition:false,
    dragEnd: function (x,y) {
        $("#content-left").css("width",x);
        var a = $(".main-content").width();
        $("#content-right").css("width",a-x);
    }
})
$("#show-css-line").myDrag({
    direction:'y',
    randomPosition:false,
    dragEnd: function (x,y) {
        $("#content-show").css("height",y);
        var a = $("#content-left").height();
        $("#content-css").css("height",a-y);
    }
})
$("#html-js-line").myDrag({
    direction:'y',
    randomPosition:false,
    dragEnd: function (x,y) {
        $("#content-html").css("height",y);
        var a = $("#content-right").height();
        $("#content-js").css("height",a-y);
    }
});


function runCode(){
    var htmlCode = $("#content-html").html().replace(/\<pre\>/g,"").replace(/\<\/pre\>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">");
    var cssCode = $("#content-css").html().replace(/\<pre\>/g,"").replace(/\<\/pre\>/g,"");
    var jsCode = $("#content-js").html().replace(/\<pre\>/g,"").replace(/\<\/pre\>/g,"");

    var o = document.getElementById("show-content");
    var ed = document.all?o.contentWindow.document:o.contentDocument;
    ed.open();
    ed.write("<html><head><style>"+cssCode+"</style></head><body>"+htmlCode+"</body></html>")
    ed.close();
    ed.designMode = "on";
}
//runCode()