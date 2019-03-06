'use strict';
// --- Mustache --- 
var templateSlide = document.getElementById('template-slide').innerHTML;
Mustache.parse(templateSlide);
var dataHello = {i: '1', image: 'Smith', title: 'Cos tam'};
var generatedHello = Mustache.render(templateSlide, dataHello);
	
	// Pozostaje nam dodać wygenerowany kod HTML na naszej stronie, na końcu diva z id="results".
	
	var results = document.getElementById('results');
	
	results.insertAdjacentHTML('beforeend', generatedHello);


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