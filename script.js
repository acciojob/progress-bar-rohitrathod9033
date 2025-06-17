const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
	currentActive++;
	update();
  }
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
	currentActive--;
	update();
  }
});

function update() {
  circles.forEach((circle, idx) => {
	if (idx < currentActive) {
	  circle.classList.add('active');
	} else {
	  circle.classList.remove('active');
	}
  });

  const activeCircles = document.querySelectorAll('.circle.active').length;
  const total = circles.length - 1;
  progress.style.width = ((activeCircles - 1) / total) * 100 + '%';

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}
