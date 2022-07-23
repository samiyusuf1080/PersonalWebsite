function changeCSS()
{
    var defaultCSS = document.getElementById("CSS").href;
    var CSSLink = defaultCSS.split("/")
    if(CSSLink.at(-1) == "index1.css")
    {
        var newCSS = "index.css"
        document.getElementById("CSS").href = newCSS;
    }
    else if (CSSLink.at(-1) == "index.css"){
        var newCSS = "index1.css"
        document.getElementById("CSS").href = newCSS;
    }
    localStorage.setItem("currCSS", newCSS);
}

function setDefaultCSS()
{
    var defaultCSS = localStorage.getItem("currCSS");
    if(!defaultCSS){
        localStorage.setItem("currCSS", "index.css");
    }
}

window.onload = function(){
    setDefaultCSS();
    document.getElementById("CSS").href = localStorage.getItem("currCSS");
}