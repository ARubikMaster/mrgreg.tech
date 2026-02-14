fetch('/radioactive/status.json')
    .then((response) => response.json())
    .then((json) => doShit(json));

function doShit(data) {
    for (var i=0, item; item = data.statuses[i]; i++) {
        document.getElementById("statuses").innerHTML += ("<pre><small>  "+item.date+"</small></pre> <p>"+item.text+"</p> <hr>")
    }

}   