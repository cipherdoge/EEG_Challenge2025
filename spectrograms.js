// List all image filenames manually or fetched via script if using a build tool
const imageFiles = [
  "E74_spectrogram.png",
  "E81_spectrogram.png",
  "E82_spectrogram.png",
  "E88_spectrogram.png"
  // Add more if needed
];

const container = document.getElementById('spectrogram-container');

imageFiles.forEach(filename => {
  const title = filename.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");

  const div = document.createElement('div');
  div.className = 'spectrogram';

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const img = document.createElement('img');
  img.src = `ssveps/${filename}`;
  img.alt = title;

  div.appendChild(h2);
  div.appendChild(img);
  container.appendChild(div);
});
