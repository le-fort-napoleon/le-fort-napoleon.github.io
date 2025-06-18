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

// Variable de contrôle pour POI 4
let poi4Unlocked = false;

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

// Fonction POI 4 (avec blocage la première fois)
function showPOI4() {
  if (!poi4Unlocked) {
    showAlertPopup();
    poi4Unlocked = true;
  } else {
    showPopup(imagesPOI4, 0);
  }
}

// Fonction POI 5
function showPOI5() {
  showPopup(imagesPOI5, 0);
}

// Fonction pour afficher une alerte bloquée
function showAlertPopup() {
  const existingAlert = document.getElementById('popup-alert');
  if (existingAlert) existingAlert.remove();

  const overlay = document.createElement('div');
  overlay.id = 'popup-alert';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 999999;
  overlay.style.background = 'rgba(0, 0, 0, 0.8)';

  const box = document.createElement('div');
  box.style.background = '#3B1503';
  box.style.color = 'white';
  box.style.padding = '30px 10px';
  box.style.borderRadius = '30px';
  box.style.textAlign = 'center';
  box.style.maxWidth = '80%';
  box.style.fontFamily = `'EB Garamond', serif`;

  const titre = document.createElement('div');
  titre.innerText = 'Alerte';
  titre.style.fontFamily = `'Antiquarian-Scribe', cursive`;
  titre.style.fontSize = '64px';
  titre.style.marginBottom = '20px';

  const texte = document.createElement('p');
  texte.innerHTML = `⚠️ Ce point d’intérêt n’est pas encore débloqué.<br>Approchez-vous de la zone pour y accéder.`;
  texte.style.fontSize = '20px';

  const btn = document.createElement('button');
  btn.innerText = "D'accord";
  btn.style.marginTop = '25px';
  btn.style.padding = '10px 30px';
  btn.style.fontSize = '20px';
  btn.style.fontWeight = 'bold';
  btn.style.fontFamily = `'EB Garamond', serif`;
  btn.style.backgroundColor = 'white';
  btn.style.color = '#3B1503';
  btn.style.border = 'none';
  btn.style.borderRadius = '20px';
  btn.style.cursor = 'pointer';
  btn.onclick = () => overlay.remove();

  box.appendChild(titre);
  box.appendChild(texte);
  box.appendChild(btn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
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
    bg.style.width = '100%';
    bg.style.maxWidth = '90vw';
    bg.style.height = 'auto';

    // Détermine la source de l'iframe selon le POI
    let iframeSrc = "https://www.youtube.com/embed/U2h0hLJ5ZkQ?si=aHzIrShNfilP-dCm?controls=1"; // valeur par défaut
    if (images === imagesPOI1) {
      iframeSrc = "https://www.youtube.com/embed/LPOHxxthINM?si=k_kMMSyEAotjLd0I";
    } else if (images === imagesPOI2) {
      iframeSrc = "https://www.youtube.com/embed/L3btZn76XyY?si=8VOI32YoS3XFoC0D";
    } else if (images === imagesPOI3) {
      iframeSrc = "https://www.youtube.com/embed/KEVgelqNllA?si=HZZFK9bEDrQi_Bs_";
    } else if (images === imagesPOI4) {
      iframeSrc = "https://www.youtube.com/embed/L3btZn76XyY?si=8VOI32YoS3XFoC0D";
    }
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
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
  texteContent = `Bienvenue au cœur du Fort Napoléon. Plongez dans l’année 1793 et revivez les événements marquants du siège de Toulon à travers notre capsule vidéo.<br><br>Cliquez sur la flèche pour lancer le podcast.`;
  texte.style.fontSize = '20px';
  texte.style.marginTop = '20px';
  texte.style.maxWidth = '80vw';
texte.style.wordBreak = 'break-word';
texte.style.overflowWrap = 'break-word';

} else if (images === imagesPOI2) {
  texteContent = `Depuis ce point de vue stratégique, observez l’horizon marin et découvrez l’arrivée des navires. Plongez au cœur de l’assaut à travers notre capsule vidéo.<br><br>Cliquez sur la flèche pour lancer le podcast.`;
  texte.style.fontSize = '20px';
  texte.style.marginTop = '20px';
  texte.style.maxWidth = '80vw';
  texte.style.wordBreak = 'break-word';
  texte.style.overflowWrap = 'break-word';

} else if (images === imagesPOI3) {
  texteContent = `Après cette reprise du fort par Napoléon, des modifications stratégiques ont été apportées. Pour mieux les comprendre, imaginons-nous dans la peau de ses adversaires.
  <br><br>Cliquez sur la flèche pour lancer le podcast.`;
  texte.style.fontSize = '19px';
  texte.style.marginTop = '70px';
texte.style.maxWidth = '80vw';
texte.style.wordBreak = 'break-word';
texte.style.overflowWrap = 'break-word';

} else if (images === imagesPOI4) {
  texteContent = `Le tracé en étoile du Fort Napoléon n’est pas un hasard. Dans cette capsule, vous découvrirez les fondements de l’architecture de type Vauban et l’ingéniosité qui se cache derrière cette forme défensive.
  <br><br>Sébastien Le Prestre de Vauban, marquis de Vauban, né le 1er mai 1633 et mort le 30 mars 1707 à Paris, était un ingénieur, architecte militaire, urbaniste, hydraulicien et essayiste français.
  <br><br>Il fut nommé maréchal de France par Louis XIV.
  <br><br>Cliquez sur la flèche pour lancer le podcast.`;
   texte.style.fontSize = '16px';
  texte.style.marginTop = '8okpx';
  texte.style.width = '72%';
  texte.style.setProperty('padding', '7vw', 'important');

} else if (images === imagesPOI5 && index === 0) {
  texteContent = `<p>À l’origine conçu comme un bastion défensif, le Fort Napoléon n’a en réalité jamais été attaqué. L’évolution des techniques militaires, notamment l’essor de l’artillerie, l’a rapidement rendu obsolète. Il fut alors utilisé comme poste d’observation, caserne militaire et entrepôt de munitions.</p>`;
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';
  texte.style.maxWidth = '80vw';
  texte.style.wordBreak = 'break-word';
  texte.style.overflowWrap = 'break-word';

} else if (images === imagesPOI5 && index === 1) {
  texteContent = `<p>Durant la Seconde Guerre mondiale, les forces allemandes ont investi le fort en raison de sa position dominante. Elles y ont installé un canon anti-aérien et des tranchées, mais le site n’a jamais subi de bombardement. Préservé des destructions, il a été désarmé dans les années 1970 et appartient désormais à la ville de La Seyne, intégré à un espace naturel protégé.</p>`;
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';
  texte.style.maxWidth = '80vw';
  texte.style.wordBreak = 'break-word';
  texte.style.overflowWrap = 'break-word';
} else if (images === imagesPOI5 && index === 2) {
  texteContent = `
    <p style="text-align: center;"><strong>Merci pour votre visite au Fort Napoléon.</strong></p>
    <p>
      Nous espérons que cette exploration interactive vous a permis de découvrir le site autrement, à travers ses secrets, ses points de vue et son histoire.<br><br>
      Revenez nous voir bientôt… l’histoire continue à se vivre ici.
    </p>`;
  
  texte.style.fontSize = '18px';
  texte.style.marginTop = '10px';
  texte.style.maxWidth = '80vw';
  texte.style.textAlign = 'justify';



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

function toggleMenu() {
  const menu = document.getElementById('extra-buttons');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex'; // afficher
  } else {
    menu.style.display = 'none'; // cacher
  }
}
