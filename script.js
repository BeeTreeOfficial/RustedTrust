document.getElementById('copy-ip-button').addEventListener('click', function () {
    const ipAddress = "rustedtrust.falixsrv.me"; // Wrap the string in quotes
    navigator.clipboard.writeText(ipAddress).then(function () {
        alert("Айпи Успешно Скопирован: " + ipAddress);
    }).catch(function (error) {
        console.error("Failed to copy IP address: ", error);
    });
});

document.addEventListener('click', function () {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');

    if (video.paused) video.play();
    if (audio.paused) audio.play();
});


let eventlist = document.querySelector("vlist").children;
const tarrow = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 64.12201345877133" width="20" height="64.12201345877133">
    <defs>
        <style class="style-fonts"></style>
    </defs>
    <g stroke-linecap="round">
        <g transform="translate(10 10) rotate(0 0 22.061006729385667)">
            <path d="M0 0 C0 16.31, 0 32.63, 0 44.12" stroke="white" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path>
        </g>
        <g transform="translate(10 10) rotate(0 0 22.061006729385667)">
            <path d="M-7.55 23.39 C-4.76 31.06, -1.97 38.72, 0 44.12" stroke="white" stroke-width="1.5" fill="none"></path>
        </g>
        <g transform="translate(10 10) rotate(0 0 22.061006729385667)">
            <path d="M7.55 23.39 C4.76 31.06, 1.97 38.72, 0 44.12" stroke="white" stroke-width="1.5" fill="none"></path>
        </g>
    </g>
    <mask></mask>
</svg>
`;

for (let i = 0; i < eventlist.length - 1; i += 2) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = tarrow;
    if (i % 4 == 0) {

        eventlist[i].style = "flex-direction: row-reverse;";

    }
    eventlist[i].insertAdjacentElement('afterend', tempContainer.firstElementChild);
}




const clickSound = new Audio('switch.mp3');
const zoom = new Audio('zooming.mp3');


function sw(){
    clickSound.currentTime = 0;
    clickSound.play();
    console.log("играем")
}


let thybuttons = document.querySelectorAll('feature, .inflat')
thybuttons.forEach(element => {
    element.addEventListener('mouseenter', sw);
    console.log("Добваляем")
});

let thyimg = document.querySelectorAll('img')
thyimg.forEach(element => {
    element.addEventListener('mouseenter', s2);
    console.log("Добваляем картинку")
});




function s2(){
    zoom.currentTime = 0;
    zoom.play();
    console.log("играем")
}