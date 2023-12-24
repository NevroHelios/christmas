let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;

        const wheel = document.getElementById('wheel');
        const degrees = Math.floor(Math.random() * 360) + 3600;

        // Play spin sound
        const spinSound = new Audio('spin-sound.mp3'); // Replace with the path to your spin sound file
        spinSound.play();

        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${degrees}deg)`;

        setTimeout(() => {
            wheel.style.transition = 'none';
            wheel.style.transform = `rotate(${degrees % 360}deg)`;
            spinning = false;

            // Determine the color segment the wheel stopped on
            const color = getColorSegment(degrees % 360);

            // Apply weather effects based on the color
            applyWeatherEffect(color);
        }, 3000);
    }
}

function getColorSegment(degrees) {
    // Calculate which color segment the wheel stopped on
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#bbf0f0']; // Distinct colors
    const segmentSize = 360 / colors.length;
    const segmentIndex = Math.floor(degrees / segmentSize);
    return colors[segmentIndex];
}

function applyWeatherEffect(color) {
    // Remove existing weather elements
    removeWeatherElements();

    // Create and append weather elements based on color
    switch (color) {
        case '#ff0000':
            createSnowfall();
            playAudio('christmas/home-page/spinwheel/285311-Mountain_Wind-rushing_gusts_through_a_snowy_forest-snowfall.wav');
            break;
        case '#00ff00':
            createDrizzle();
            playAudio('christmas/home-page/spinwheel/150672-Weather_29-Rain_forest_downpour_heavy_steady_loop-SFX_Bible-2011.wav');
            break;
        case '#0000ff':
            createFog();
            playAudio('fog-sound.mp3');
            break;
        case '#ffff00':
            createChillWinds();
            playAudio('wind-sound.mp3');
            break;
        case '#bbf0f0':
            createIce();
            playAudio('ice-sound.mp3');
            break;
        default:
            break;
    }
}

function removeWeatherElements() {
    const existingWeatherElements = document.querySelectorAll('.weather-element');
    existingWeatherElements.forEach(element => element.remove());
}

function createSnowfall() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'weather-element snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        body.appendChild(snowflake);
    }
}

function createDrizzle() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'weather-element droplet';
        droplet.style.left = `${Math.random() * 100}vw`;
        droplet.style.animationDuration = `${Math.random() * 1 + 1}s`;
        body.appendChild(droplet);
    }
}

function createFog() {
    const body = document.body;
    const fog = document.createElement('div');
    fog.className = 'weather-element fog';
    body.appendChild(fog);

    // Clear fog after 15 seconds
    setTimeout(() => {
        fog.remove();
    }, 15000);
}

function createChillWinds() {
    const body = document.body;
    const wind = document.createElement('div');
    wind.className = 'weather-element wind';
    body.appendChild(wind);

    for (let i = 0; i < 5; i++) {
        const windLine = document.createElement('div');
        windLine.className = 'weather-element wind-line';
        windLine.style.left = `${Math.random() * 100}vw`;
        windLine.style.top = `${Math.random() * 100}vh`;
        windLine.style.animationDuration = `${Math.random() * 1 + 2}s`;
        wind.appendChild(windLine);
    }
}

function createIce() {
    const body = document.body;
    const ice = document.createElement('div');
    ice.className = 'weather-element ice';
    body.appendChild(ice);

    for (let i = 0; i < 50; i++) {
        const iceCrystal = document.createElement('div');
        iceCrystal.className = 'weather-element ice-crystal';
        iceCrystal.style.left = `${Math.random() * 100}vw`;
        iceCrystal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        ice.appendChild(iceCrystal);
    }
}

function playAudio(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}


/* function createIce() {
    const body = document.body;
    const ice = document.createElement('div');
    ice.className = 'weather-element ice';
    body.appendChild(ice);

    for (let i = 0; i < 50; i++) {
        const iceCrystal = document.createElement('div');
        iceCrystal.className = 'weather-element ice-crystal';
        iceCrystal.style.left = `${Math.random() * 100}vw`;
        iceCrystal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        ice */


