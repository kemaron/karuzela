'use strict';

// --- Ustawienia karuzeli --- 
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  hash: true
});

// --- Ustawienia przycisku Restart --- 
var buttonRestart = document.querySelector ('.button');

buttonRestart.addEventListener('click', function(event) {  
  flkty.selectCell (0, false, false);
});

// --- Ustawienia paska postępu --- 
var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});