let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;

        const wheel = document.getElementById('wheel');
        const degrees = Math.floor(Math.random() * 360) + 3600;

        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${degrees}deg)`;

        setTimeout(() => {
            wheel.style.transition = 'none';
            wheel.style.transform = `rotate(${degrees % 360}deg)`;
            spinning = false;
        }, 3000);
    }
}
