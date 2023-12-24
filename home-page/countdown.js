// Calculate time remaining until December 25th
function getTimeRemaining() {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // December is month index 11
  
    // Check if Christmas has already passed this year, if yes, set it for next year
    if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
      christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }
  
    const timeRemaining = christmasDate.getTime() - currentDate.getTime();
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  
    return {
      total: timeRemaining,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  
  // Update countdown clock every second
  function updateClock() {
    const time = getTimeRemaining();
  
    document.getElementById('days').innerText = time.days;
    document.getElementById('hours').innerText = time.hours;
    document.getElementById('minutes').innerText = time.minutes;
    document.getElementById('seconds').innerText = time.seconds;
  

      document.getElementById('countdown-clock').innerText = 'Merry Christmas!';
      document.getElementById('countdown-clock').style.background = 'linear-gradient(to right, red 0%, #faf9fc 100%);'
  }
  
  // Initial call to start the countdown
  updateClock();
  const timerInterval = setInterval(updateClock, 1000);