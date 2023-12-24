let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;

        const wheel = document.getElementById('wheel');
        const degrees = Math.floor(Math.random() * 360) + 3600;
        const spinSound = new Audio('spin-sound.mp3'); // Replace with the path to your sound file
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
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff']; // Distinct colors
    const segmentSize = 360 / colors.length;
    const segmentIndex = Math.floor(degrees / segmentSize);
    return colors[segmentIndex];
}

function applyWeatherEffect(color) {
    const wheel = document.getElementById('wheel');

    // Remove existing effects classes
    wheel.classList.remove('snowfall', 'drizzle', 'fog');

    // Apply weather effect based on color
    switch (color) {
        case '#ff0000':
            wheel.classList.add('snowfall');
            break;
        case '#00ff00':
            wheel.classList.add('drizzle');
            break;
        case '#0000ff':
            wheel.classList.add('fog');
            break;
        default:
            break;
    }
}
