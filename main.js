"use strict";

let buecher = [];

let formularAngezeigt = false;

// Buch hinzufügen
function buchHinzufuegen() {
  let titel = document.getElementById('titel').value;
  let autor = document.getElementById('autor').value;
  let seiten = document.getElementById('seiten').value;
  let gelesen = document.getElementById('gelesen').checked;

  // Eingabefelder
  if (titel === '' || autor === '' || seiten === '') {
    alert('Please fill out the form');
    return;
  }

  let neuesBuch = {
    titel: titel,
    autor: autor,
    seiten: seiten,
    gelesen: gelesen
  };

  buecher.push(neuesBuch);
  buecherAnzeigen();
  formularZuruecksetzen();
}

// Bücher anzuzeigen
function buecherAnzeigen() {
  let bookshelf = document.getElementsByClassName('bookshelf')[0]; 
  bookshelf.innerHTML = '';

  for (let i = 0; i < buecher.length; i++) {
    let buch = buecher[i];

    let buchDiv = document.createElement('div');
    buchDiv.className = 'book';

    let buchInfo = document.createElement('span');
    buchInfo.innerHTML = buch.titel + ' <br>from ' + buch.autor + ', <br>' + buch.seiten + ' pages, ';
    if (buch.gelesen) {
      buchInfo.innerHTML += '<br>read';
    } else {
      buchInfo.innerHTML += '<br>not read';
    }

    let loeschenButton = document.createElement('button');
    loeschenButton.textContent = 'Remove';
    loeschenButton.addEventListener('click', function() {
      buchLoeschen(i);
    });

    let statusButton = addButton(i);

    buchDiv.appendChild(buchInfo);
    buchDiv.appendChild(loeschenButton);
    buchDiv.appendChild(statusButton);
    bookshelf.appendChild(buchDiv); 
  }
}

// Buch löschen
function buchLoeschen(index) {
  buecher.splice(index, 1);
  buecherAnzeigen();
}

// Lesestatus 
function buchLesestatusAendern(index) {
  buecher[index].gelesen = !buecher[index].gelesen;
  buecherAnzeigen();
}

// Read/Not Read Button 
function addButton(index) {
  let button = document.createElement('button');
  button.textContent = buecher[index].gelesen ? 'not read' : 'read';
  button.addEventListener('click', function() {
    buchLesestatusAendern(index);
  });
  return button;
}

// Formular zurücksetzen
function formularZuruecksetzen() {
  document.getElementById('titel').value = '';
  document.getElementById('autor').value = '';
  document.getElementById('seiten').value = '';
  document.getElementById('gelesen').checked = false;
}

document.getElementById('neues-buch-formular').addEventListener('submit', function(event) {
  event.preventDefault();
  buchHinzufuegen();
});

document.getElementById('hinzufuegen-button').addEventListener('click', function() {
  let formular = document.getElementById('neues-buch-formular');
  if (formularAngezeigt) {
  formular.style.display = 'none';
  formularAngezeigt = false;
  } else {
  formular.style.display = 'block';
  formularAngezeigt = true;
  }
  });
