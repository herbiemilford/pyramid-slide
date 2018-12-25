




selector = document.getElementById('brick');

selector.onchange = function(){
    height = document.getElementById("height").value;
    value = document.getElementById("brick").value;
    drawPyramid(height, value);
}

slider = document.getElementById("height");

slider.oninput = function(){
 height = document.getElementById("height").value;
 value = document.getElementById("brick").value;
 document.getElementById("height-label").innerText = height;
 drawPyramid(height, value,);
}

window.addEventListener('load', drawPyramid(8, "#"));
 
 function drawPyramid(height, brickChar) {

     
document.getElementById("pyramid").innerHTML = '';

     for (var row = 0; row < height; row++) {

         
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += brickChar;
         }


        textElem = document.createTextNode(rowStr);

  
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);


        document.getElementById("pyramid").appendChild(rowElem);
    }
}
