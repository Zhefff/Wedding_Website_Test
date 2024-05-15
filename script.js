document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
  
    function checkScroll() {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
  
        if (scrollY > sectionTop - windowHeight + sectionHeight / 2 && scrollY < sectionTop + sectionHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });
  
// Set the date of the wedding
const weddingDate = new Date('2024-12-31T00:00:00');

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML with the calculated values
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // If the countdown is over, clear the interval
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('timer').innerHTML = '<span>It\'s our wedding day!</span>';
  }
}
