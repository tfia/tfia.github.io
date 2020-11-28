var quotes = ['这个世界不是非黑即白的', '这个世界是需要缘分的']
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
