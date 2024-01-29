// Buttons listen for "click" event & calls function
let buttons = document.querySelectorAll('.drum');

buttons.forEach(btn => {
    // Play audio on mouse click
    btn.addEventListener('click', (event) => {
        playAudio(btn.textContent);
        buttonAnimation(btn.textContent);
    });
    // Play audio on keypress
    btn.addEventListener('keydown', (event) => {
        playAudio(event.key);
        buttonAnimation(event.key);
    });
});

// Function which plays sounds
function playAudio(eventValue) {
    switch (eventValue) {
        case 'w':
            const tom1Audio = new Audio('sounds/tom-1.mp3');
            tom1Audio.play();
            break;
        case 'a':
            const tom2Audio = new Audio('sounds/tom-2.mp3');
            tom2Audio.play();
            break;
        case 's':
            const tom3Audio = new Audio('sounds/tom-3.mp3');
            tom3Audio.play();
            break;
        case 'd':
            const tom4Audio = new Audio('sounds/tom-4.mp3');
            tom4Audio.play();
            break;
        case 'j':
            const snareAudio = new Audio('sounds/snare.mp3');
            snareAudio.play();
            break;
        case 'k':
            const crashAudio = new Audio('sounds/crash.mp3');
            crashAudio.play();
            break;
        case 'l':
            const kickAudio = new Audio('sounds/kick-bass.mp3');
            kickAudio.play();
            break;
    }
}

// Function which animates buttons
function buttonAnimation(eventValue) {
    let buttons = document.querySelectorAll('.drum');
    switch (eventValue) {
        case 'w':
            console.log(buttons[0].classList);
            buttons[0].classList.add('pressed');
            setTimeout(() => {
                buttons[0].classList.remove('pressed');
            },50);
            break;
        case 'a':
            buttons[1].classList.add('pressed');
            setTimeout(() => {
                buttons[1].classList.remove('pressed');
            },50);
            break;
        case 's':
            buttons[2].classList.add('pressed');
            setTimeout(() => {
                buttons[2].classList.remove('pressed');
            },50);
            break;
        case 'd':
            buttons[3].classList.add('pressed');
            setTimeout(() => {
                buttons[3].classList.remove('pressed');
            },50);
            break;
        case 'j':
            buttons[4].classList.add('pressed');
            setTimeout(() => {
                buttons[4].classList.remove('pressed');
            },50);
            break;
        case 'k':
            buttons[5].classList.add('pressed');
            setTimeout(() => {
                buttons[5].classList.remove('pressed');
            },50);
            break;
        case 'l':
            buttons[6].classList.add('pressed');
            setTimeout(() => {
                buttons[6].classList.remove('pressed');
            },50);
            break;
    }
}



