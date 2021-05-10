let sound = new Audio("sounds/A.mp3");

document.addEventListener("keypress", (e)=> {
    switch (e.code) {
        case "KeyA":
            sound = new Audio("sounds/A.mp3");
            break;
        case "KeyS":
            sound = new Audio("sounds/S.mp3");
            break;
        case "KeyD":
            sound = new Audio("sounds/D.mp3");
            break;
        case "KeyF":
            sound = new Audio("sounds/F.mp3");
            break;
        case "KeyG":
            sound = new Audio("sounds/G.mp3");
            break;
        case "KeyH":
            sound = new Audio("sounds/H.mp3");
            break;
        case "KeyJ":
            sound = new Audio("sounds/J.mp3");
            break;
        case "KeyW":
            sound = new Audio("sounds/W.mp3");
            break;
        case "KeyE":
            sound = new Audio("sounds/E.mp3");
            break;
        case "KeyT":
            sound = new Audio("sounds/T.mp3");
            break;
        case "KeyY":
            sound = new Audio("sounds/Y.mp3");
            break;
        case "KeyU":
            sound = new Audio("sounds/U.mp3");
            break;
        default:
            sound = new Audio();
            break;
    }
    sound.load();
    sound.play();
})