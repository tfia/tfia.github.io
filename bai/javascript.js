var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'bai.json')
var quotes = null
xmlhttp.onreadystatechange = function (){
	if (xmlhttp.readyState == xmlhttp.DONE)
	{
		quotes = JSON.parse(xmlhttp.responseText)
	}
}
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
}
