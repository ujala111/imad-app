console.log('Loaded!');

//change the text of main page.
var element= document.getElementById('main-text');
element.innerHTML= 'New Value';

//move the image.
var img= document.getElementById('modi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick= function() {
    var interval= setInterval(moveRight, 100);
} ;