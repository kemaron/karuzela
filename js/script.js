/* eslint-disable func-names */
'use strict';

// **** Mustache ****
var templateSlide = document.getElementById('template-slide').innerHTML;
Mustache.parse(templateSlide);
// --- na bazie szablonu Mustasche generuję kod z danymi z slidesDate
for (var i = 0; i < slidesData.length; i++) {
  var generatedSlide = Mustache.render(templateSlide,slidesData[i]);
  var results = document.getElementById('results');	
	results.insertAdjacentHTML('beforeend', generatedSlide);
}

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

var marker = [];
// Inicjuję mapę google
window.initMap = function() {
  // Mapę centruję na pierwszych koordynatach
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 5, center: slidesData[0].coords});
  // Ustawiam markery mapy na koordynaty z tabeli slidesDate
  for (let i = 0; i < slidesData.length; i++) {
    marker[i] = new google.maps.Marker({position: slidesData[i].coords, map: map}); 
    // dodaję addListener dla każdego markera
      google.maps.event.addListener(marker[i], 'click', function(){
        flkty.selectCell (i, false, false);  
      });
  }
  

// --- centrowanie mapy ----
flkty.on( 'change', function( index ) {
  console.log ('tu');
  map.setZoom(6);
  map.panTo(slidesData[index].coords);
});

}