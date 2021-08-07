drumButtons = document.querySelectorAll('.drum');

function checkEvent(value){
    switch (value) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;  
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break; 
            
        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break; 
        case 'k':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break; 
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;               
        default:
            console.log("none");
            break;
    }
}

document.addEventListener('keydown', function(event){
    checkEvent(event.key);
    buttonAnimation(event.key);
})

for(var i=0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener('click', function(){
        var buttonText = this.innerHTML; 
        checkEvent(buttonText);
        buttonAnimation(buttonText);
    });
}

function buttonAnimation(currentKey){
 document.querySelector('.' + currentKey).classList.add('pressed');
    function removeStyle(){
        document.querySelector('.' + currentKey).classList.remove('pressed');
    }
    setTimeout(removeStyle, 100);
}


