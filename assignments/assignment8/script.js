const runningMan = document.getElementById('running-man');

const thermometer = document.getElementById('thermometer');

const temperatureInput = document.getElementById('temperature-input');


temperatureInput.addEventListener('input', () => 
{

    const inputValue = parseFloat(temperatureInput.value);

    const gradientStop = Math.min(Math.max(inputValue, 0), 100);

    const gradientColor = `linear-gradient(to right, #ff0000 0%, #ff0000 ${gradientStop}%, #ffffff ${gradientStop}%, #ffffff 100%)`;

    thermometer.style.background = gradientColor;

});

function toggleRunningMan() {

    if (runningMan.src.includes('walking')) {

        runningMan.src = "running.png";

    } else {

        runningMan.src = 'walking.png';

    }

}

let manPosition = 0;

setInterval(() => {

    manPosition += 10;

    runningMan.style.setProperty('--man-left', `${manPosition}px`);

    toggleRunningMan();

}, 500);