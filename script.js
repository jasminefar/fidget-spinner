const spinner = document.querySelector('.spinner');
let spinning = false;
let animation;

function startSpinner() {
  if (!spinning) {
    spinning = true;
    animation = spinner.style.animation;
    spinner.style.animation = 'spin 4s infinite linear';
  }
}

function stopSpinner() {
  if (spinning) {
    spinning = false;
    spinner.style.animation = animation;
  }
}

document.getElementById('startBtn').addEventListener('click', startSpinner);
document.getElementById('stopBtn').addEventListener('click', stopSpinner);
