let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

function setup(){
    noCanvas();
}

function getText(){
    let title = document.getElementById('inputText').value;
    getArticle(title);
}

function getArticle(title){
    let searchUrl = url + title;
    loadJSON(searchUrl, showData, 'jsonp');
}

function showData(data){
    let heading = document.getElementById('articleHeading');
    let body = document.getElementById('articleBody');
    let link = document.getElementById('link');
    
    heading.innerHTML = data[1][0];
    body.innerHTML = data[2][0];
    link.innerHTML = "Click here to visit the original Wikipedia article"
    link.href = data[3][0];
}