var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'bai.json')
var quotes = null
xmlhttp.onreadystatechange = function ()
{
	if (xmlhttp.readyState == xmlhttp.DONE)
	{
        quotes = JSON.parse(xmlhttp.responseText)
        $('#newquotes').attr("disabled",false);
        document.getElementById('numofquotes').innerHTML = "载入完成。本站目前已经收录语录".concat(quotes.length, "条。")
	}
}
xmlhttp.send()
var t1
var r = -1
t1 = r
function newquote()
{
    do
    {
        r = Math.floor(Math.random()*quotes.length)
    }
    while(t1 == r)
    t1 = r
    document.getElementById('quote').innerHTML = quotes[r]
    $('#copy').attr("disabled",false);
}
function copyText()
{
    var val = document.getElementById('quote')
	window.getSelection().selectAllChildren(val)
	document.execCommand("Copy")
	alert("复制完了！")
}
