function bold(){
    document.getElementById('textarea1').style.fontWeight = "bold";
}
function italic(){
    document.getElementById('textarea1').style.fontStyle = "italic";
}
function left(){
    document.getElementById('textarea1').style.textAlign = "left";
}
function center(){
    document.getElementById('textarea1').style.textAlign = "center";
}
function right(){
    document.getElementById('textarea1').style.textAlign = "right";
}
function justify(){
    document.getElementById('textarea1').style.textAlign = "justify";
}

function uppercase(){
    document.getElementById('textarea1').style.textTransform = "uppercase";
}
function normalcase(){
    document.getElementById('textarea1').style.textTransform = "lowercase";
}

function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("textarea1").style.fontSize = listValue
}
function colorStyle(clickElementId){
    if(clickElementId === "favcolor"){
        const colorCode = document.getElementById('color').value;
        document.getElementById("textarea1").style.color = colorCode;
    }
}



