// Images pour POI 1
const imagesPOI1 = ['popup1.png', 'popup1.2.png'];

// Images pour POI 2
const imagesPOI2 = ['popup2.png', 'popup2.1.png'];

// Images pour POI 3
const imagesPOI3 = ['popup3.png', 'popup3.1.png'];

// Images pour POI 4
const imagesPOI4 = ['popup4.png', 'popup4.1.png'];

// Images pour POI 5
const imagesPOI5 = ['popup5.png', 'popup51.png','popup51.png'];

// Fonction POI 1
function showPOI1() {
  showPopup(imagesPOI1, 0);
}

// Fonction POI 2
function showPOI2() {
  showPopup(imagesPOI2, 0);
}

// Fonction POI 3
function showPOI3() {
  showPopup(imagesPOI3, 0);
}

// Fonction POI 4
function showPOI4() {
  showPopup(imagesPOI4, 0);
}

// Fonction POI 5
function showPOI5() {
  showPopup(imagesPOI5, 0);
}

// Fonction Popup
function showPopup(images, index) {
  const oldOverlay = document.getElementById('popup-overlay');
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement('div');
  overlay.id = 'popup-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 999999999;
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';

  const popup = document.createElement('div');
  popup.style.position = 'relative';

  let content;
  if (['popup1.2.png', 'popup2.1.png', 'popup3.1.png', 'popup4.1.png'].includes(images[index])) {
    content = document.createElement('div');
    content.style.position = 'relative';
    content.style.maxWidth = '90vw';
    content.style.maxHeight = '90vh';

    const match = images[index].match(/popup(\d+)/);
    const poiNumber = match ? match[1] : '1';
    const bg = document.createElement('img');
    bg.src = `fond.popup${poiNumber}.png`;
    bg.style.maxWidth = '100%';
    bg.style.maxHeight = '100%';
    bg.style.display = 'block';
    bg.style.margin = '-30px auto';
    bg.style.objectFit = 'cover';
    bg.style.borderRadius = '15px';

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/U2h0hLJ5ZkQ?si=aHzIrShNfilP-dCm?controls=1";
    iframe.style.position = 'absolute';
    iframe.style.top = '52%';
    iframe.style.left = '50%';
    iframe.style.transform = 'translate(-50%, -60%) rotate(90deg)';
    iframe.style.width = '60vh';
    iframe.style.height = '75vw';
    iframe.style.border = 'none';
    iframe.style.borderRadius= '15px';
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;control";
    iframe.allowFullscreen = true;
    iframe.style.pointerEvents = 'auto';
    iframe.style.zIndex = '2';

    content.appendChild(bg);
    content.appendChild(iframe);
  } else {
    content = document.createElement('div');
    content.style.position = 'relative';
    content.style.maxWidth = '90vw';
    content.style.width = '100%';
    content.style.height = 'auto';

    const bg = document.createElement('img');
    bg.src = images[index];
    bg.style.maxWidth = '90vw';
    bg.style.maxHeight = '90%';
    bg.style.width = 'auto';
    bg.style.height = 'auto';
    bg.style.display = 'block';
    bg.style.margin = '0 auto';
    bg.style.borderRadius = '15px';
    bg.style.objectFit = 'cover';

  const texte = document.createElement('div');
let texteContent = '';

if (images === imagesPOI1) {
  texteContent = `Dans cet endroit nous allons vous replonger en 1793 au moment du conflit lié à la première république.<br><br>Cliquez sur la flèche pour regarder le podcast vidéo.`;
  texte.style.fontSize = '20px';
  texte.style.marginTop = '20px';

} else if (images === imagesPOI2) {
  texteContent = `D'ici on peut voir la mer mais surtout l'arrivée des bateaux. Préparez vous à vivre l'assaut lancé sur ce Fort.<br><br>Cliquez sur la flèche pour regarder le podcast vidéo.`;
  texte.style.fontSize = '20px';
  texte.style.marginTop = '20px';

} else if (images === imagesPOI3) {
  texteContent = `Suite à cette bataille Napoléon a repris le fort et a entamé des changements dessus. Pour mieux comprendre sa stratégie, mettons nous à la place d'un ennemi.
  <br><br>Cliquez sur la flèche pour regarder le podcast vidéo.`;
  texte.style.fontSize = '19px';
  texte.style.marginTop = '70px';

} else if (images === imagesPOI4) {
  texteContent = `Cette forme n'est pas anodine, dans cette capsule nous allons voir l'architecture Vauban mais qui est t'il ?
  <br><br>Sébastien Le Prestre de Vauban, marquis de Vauban né le 1er mai 1633 et mort le 30 mars 1707 à Paris, est un ingénieur, architecte militaire, urbaniste, hydraulicien et essayiste français.
  <br><br>Il est nommé maréchal de France par Louis XIV.
  <br><br>Cliquez sur la flèche pour regarder le podcast vidéo.`;
   texte.style.fontSize = '16px';
  texte.style.marginTop = '20px';
  texte.style.width = '70%';
  texte.style.setProperty('padding', '7vw', 'important');

} else if (images === imagesPOI5 && index === 0) {
  texteContent = `<p>Le fort n’a presque jamais été utilisé pour se défendre. Même s’il était important pour Napoléon, il n’a jamais été attaqué. Avec les progrès de l’artillerie, il est vite devenu inutile pour résister à un siège. Il a seulement servi de lieu de surveillance, de garnison, puis de dépôt de munitions.</p>`;
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';

} else if (images === imagesPOI5 && index === 1) {
  texteContent = `<p>Pendant la Seconde Guerre mondiale, les Allemands l’ont utilisé pour sa position stratégique, y ont creusé des tranchées et installé un canon anti-aérien, mais le fort n’a jamais été bombardé. Il est resté intact et a été démilitarisé dans les années 1970. Aujourd’hui, il appartient à la ville de La Seyne et se trouve dans un espace naturel protégé.</p>`;
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';
} else if (images === imagesPOI5 && index === 2) {
  texteContent = `<p>MERCI BANDE DE CACA</p>`;
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';


}
// Styles communs
texte.innerHTML = texteContent;
texte.style.position = 'absolute';
texte.id = "textebox";
texte.maxWidth= '100vw';
texte.style.top = '15%';
texte.style.padding= '14vw';
texte.id = "textebox";
/*texte.style.transform = 'translate(-50%, -50%)';*/
texte.style.color = '#3B1503';
texte.style.fontFamily = 'EB Garamond, serif';
texte.style.textAlign = 'justify';


    content.appendChild(bg);
    content.appendChild(texte);
  }

  const nav = document.createElement('div');
  nav.style.position = 'absolute';
  nav.style.bottom = '10px';
  nav.style.left = '50%';
  nav.style.transform = 'translateX(-50%)';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.padding = '10px';
  nav.style.borderRadius = '20px';

  const left = document.createElement('img');
  left.src = 'left-arrow.png';
  left.style.width = '30px';
  left.style.marginRight = '20px';
  left.style.cursor = 'pointer';
  left.addEventListener('click', () => {
    const newIndex = (index - 1 + images.length) % images.length;
    showPopup(images, newIndex);
  });

  const right = document.createElement('img');
  right.src = 'right-arrow.png';
  right.style.width = '30px';
  right.style.marginLeft = '20px';
  right.style.cursor = 'pointer';
  right.addEventListener('click', () => {
    const newIndex = (index + 1) % images.length;
    showPopup(images, newIndex);
  });

  const dots = document.createElement('div');
  dots.style.display = 'flex';
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.innerHTML = i === index ? '●' : '○';
    dot.style.color = 'white';
    dot.style.margin = '0 5px';
    dot.style.cursor = 'pointer';
    dot.style.fontSize = '20px';
    dot.addEventListener('click', () => {
      showPopup(images, i);
    });
    dots.appendChild(dot);
  });

  nav.appendChild(left);
  nav.appendChild(dots);
  nav.appendChild(right);

  const close = document.createElement('img');
  close.src = 'close.png';
  close.style.position = 'absolute';
  close.style.top = '15px';
  close.style.right = '25px';
  close.style.width = '16px';
  close.style.cursor = 'pointer';
  close.style.zIndex = '9999999999';
  close.addEventListener('click', () => {
    overlay.remove();
  });

  popup.appendChild(content);
  popup.appendChild(nav);
  popup.appendChild(close);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}
// Initialisation de la carte Leaflet
const map = L.map('map', {
  center: [43.0942, 5.8933], // centre du Fort Napoléon
  zoom: 17,
  minZoom: 16,
  maxZoom: 18,
  maxBounds: [
    [43.0925, 5.8890],
    [43.0955, 5.8955]
  ],
  maxBoundsViscosity: 1.0
});

// Ajout des tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '' // on masque le texte en bas
}).addTo(map);

// Définition des POIs avec coordonnées, action et couleur
const pois = [
  {
    coords: [43.0940, 5.894058], // POI 1
    action: showPOI1,
    color: '#D06223' // orange
  },
  {
    coords: [43.0939, 5.8931],   // POI 2
    action: showPOI5,
    color: '#666F00' // vert
  },
  {
    coords: [43.0943, 5.8938],   // POI 3
    action: showPOI2,
    color: '#8B8635' // vert olive
  },
  {
    coords: [43.0945, 5.8934],   // POI 4
    action: showPOI3,
    color: '#1D79C2' // bleu
  },
  {
    coords: [43.0946, 5.8929],   // POI 5
    action: showPOI4,
    color: '#6F3B00' // kaki foncé
  }
];

// Création des marqueurs interactifs
pois.forEach(poi => {
  L.circleMarker(poi.coords, {
    radius: 10,
    color: poi.color,
    fillColor: poi.color,
    fillOpacity: 1.2
  })
  .addTo(map)
  .on('click', function () {
    map.setView(poi.coords, 19);
    poi.action();
  });
});