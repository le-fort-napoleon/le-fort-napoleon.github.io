// Images pour POI 1
const imagesPOI1 = ['popup1.png', 'popup1.2.png'];

// Images pour POI 2
const imagesPOI2 = ['popup2.png', 'popup2.1.png'];

// Images pour POI 3
const imagesPOI3 = ['popup3.png', 'popup3.1.png'];

// Images pour POI 4
const imagesPOI4 = ['popup4.png', 'popup4.1.png'];

// Images pour POI 5
const imagesPOI5 = ['popup5.png', 'popup5.1.png'];



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
  // Supprimer l'ancien overlay s'il existe
  const oldOverlay = document.getElementById('popup-overlay');
  if (oldOverlay) {
    oldOverlay.remove();
  }

  // Créer l'overlay
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

  // Container pour l'image et les boutons
  const popup = document.createElement('div');
  popup.style.position = 'relative';

  // Affichage conditionnel : image ou iframe selon l'index
  let content;
  if (['popup1.2.png', 'popup2.1.png', 'popup3.1.png', 'popup4.1.png', 'popup5.1.png'].includes(images[index])) {
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
    bg.style.margin = '0 auto';
    bg.style.objectFit = 'cover';
    bg.style.borderRadius = '15px';

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/U2h0hLJ5ZkQ?si=aHzIrShNfilP-dCm?controls=1";
    iframe.style.position = 'absolute';
    iframe.style.top = '52%';
    iframe.style.left = '50%';
    iframe.style.transform = 'translate(-50%, -60%) rotate(90deg)';
    iframe.style.width = '65vh';
    iframe.style.height = '80vw';
    iframe.style.border = 'none';
    iframe.style.borderRadius= '15px';
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;control";
    iframe.allowFullscreen = true;
    iframe.style.pointerEvents = 'auto';
    iframe.style.zIndex = '2';

    content.appendChild(bg);
    content.appendChild(iframe);
  } else {
    // Affiche une image sinon, avec texte centré et justifié par-dessus l'image
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
    texte.innerText = 'C’est par ici que les visiteurs pénètrent dans le Fort Napoléon. L’entrée est protégée par un pont-levis et un système défensif qui témoigne de l’ingéniosité militaire du XIXe siècle.';
    texte.style.position = 'absolute';
    texte.style.top = '50%';
    texte.style.left = '50%';
    texte.style.transform = 'translate(-50%, -50%)';
    texte.style.color = '#3B1503';
    texte.style.fontFamily = 'EB Garamond, serif';
    texte.style.fontSize = '22px';
    texte.style.textAlign = 'justify';
    texte.style.width = '70%';

    content.appendChild(bg);
    content.appendChild(texte);
  }

  // Boutons navigation
  const nav = document.createElement('div');
  nav.style.position = 'absolute';
  nav.style.bottom = '20px';
  nav.style.left = '50%';
  nav.style.transform = 'translateX(-50%)';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.padding = '10px';
  nav.style.borderRadius = '20px';

  // Flèche gauche
  const left = document.createElement('img');
  left.src = 'left-arrow.png';
  left.style.width = '30px';
  left.style.marginRight = '20px';
  left.style.cursor = 'pointer';
  left.addEventListener('click', () => {
    const newIndex = (index - 1 + images.length) % images.length;
    showPopup(images, newIndex);
  });

  // Flèche droite
  const right = document.createElement('img');
  right.src = 'right-arrow.png';
  right.style.width = '30px';
  right.style.marginLeft = '20px';
  right.style.cursor = 'pointer';
  right.addEventListener('click', () => {
    const newIndex = (index + 1) % images.length;
    showPopup(images, newIndex);
  });

  // Points (● ○)
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

  // Bouton de fermeture
  const close = document.createElement('img');
  close.src = 'close.png';
  close.style.position = 'absolute';
  close.style.top = '15px';
  close.style.right = '25px';
  close.style.width = '16px';
  close.style.cursor = 'pointer';
  close.addEventListener('click', () => {
    overlay.remove();
  });

  // Assembler
  popup.appendChild(content);
  popup.appendChild(nav);
  popup.appendChild(close);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

const popup = document.createElement('div');
popup.classList.add('popup-slide-up'); // 👈 Ajouter l'animation
popup.style.position = 'relative';
popup.style.display = 'flex';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'center';
popup.style.maxWidth = '90%';
popup.style.maxHeight = '90%';

  function toggleMenu() {
    const menu = document.getElementById('extra-buttons');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex'; // afficher
    } else {
      menu.style.display = 'none'; // cacher
    }
  }

  function changeLanguage() {
    // Redirige vers ta version anglaise
    window.location.href = 'index_en.html'; 
  }
const map = L.map('map', {
  center: [43.0942, 5.8933], // centre du Fort Napoléon
  zoom: 17,
  minZoom: 16,
  maxZoom: 18,
  maxBounds: [
    [43.0925, 5.8890],
    [43.0955, 5.8955] 
  ],
  maxBoundsViscosity: 1.0 // bloque complètement en dehors de la zone
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


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
    color: '#1D79C2' // orange
  },
  {
    coords: [43.0946, 5.8929],   // POI 5
    action: showPOI4,
    color: '#6F3B00' // vert foncé kaki
  }
];
pois.forEach(poi => {
  L.circleMarker(poi.coords, {
    radius: 10,
    color: poi.color,
    fillColor: poi.color,
    fillOpacity: 0.9
  })
  .addTo(map)
  .on('click', function () {
  map.setView(poi.coords, 19); // centre et zoom
  poi.action();                // déclenche le popup
});
});