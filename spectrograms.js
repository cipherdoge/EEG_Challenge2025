const imageFiles = [
  "E74_spectrogram.png",
  "E81_spectrogram.png",
  "E82_spectrogram.png",
  "E88_spectrogram.png"
];

let currentIndex = 0;

const titleElement = document.getElementById('spectrogram-title');
const imgElement = document.getElementById('spectrogram-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const fullscreenButton = document.getElementById('fullscreen-button');

function updateViewer() {
  const filename = imageFiles[currentIndex];
  const title = filename.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
  titleElement.textContent = title;
  imgElement.src = `ssveps/${filename}`;
  imgElement.alt = title;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === imageFiles.length - 1;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateViewer();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < imageFiles.length - 1) {
    currentIndex++;
    updateViewer();
  }
});

fullscreenButton.addEventListener('click', () => {
  if (imgElement.requestFullscreen) {
    imgElement.requestFullscreen();
  } else if (imgElement.webkitRequestFullscreen) {
    imgElement.webkitRequestFullscreen();
  } else if (imgElement.msRequestFullscreen) {
    imgElement.msRequestFullscreen();
  }
});

updateViewer();
