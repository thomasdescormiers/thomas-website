window.onload = function() {
    setTimeout(showEnvelope, 3500); // 3.5 secondes de "chargement"
}

function showEnvelope() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("invitation").style.display = "block";
    document.getElementById("additional-text").style.display = "block"; // Afficher le texte supplémentaire
}

document.querySelector('.envelope').addEventListener('click', function() {
    document.querySelector('.envelope-cover').style.top = '-100px';
    document.querySelector('.envelope-letter').style.opacity = '1';
    document.getElementById('additional-text').style.opacity = '0'; // Faire disparaître le texte
    setTimeout(() => {
        document.getElementById('additional-text').style.display = 'none'; // Cacher le texte après l'animation
    }, 500); // Cacher après 500 ms pour que la transition se termine
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    this.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.querySelector('.envelope-cover').style.top = '-100px';
    document.querySelector('.envelope-letter').style.opacity = '1';
    document.getElementById('additional-text').style.display = 'block'; // Afficher le texte supplémentaire

    // Afficher le message de félicitations et le GIF
    document.getElementById('congratulation-message').style.display = 'block';

    // Cacher le message après 2 secondes
    setTimeout(function() {
        document.getElementById('congratulation-message').style.display = 'none';
        document.getElementById('restaurant-form').style.display = 'block'; // Afficher le formulaire
    }, 3000); // 3 secondes
});

function sendMail() {  
    // Récupérer les valeurs des champs
    let restaurantName = document.getElementById('restaurant-choice').value.trim();
    let dateChoice = document.getElementById('date-choice').value.trim();
    let timeChoice = document.getElementById('time-choice').value.trim();

    // Vérifier que tous les champs sont remplis
    if (restaurantName === "" || dateChoice === "" || timeChoice === "") {
        alert("All fields (restaurant, date, and time) must be filled mothafuckaaaa!");
        return; // Arrêter l'exécution de la fonction si l'un des champs est vide
    }

    // Paramètres pour l'envoi de l'e-mail
    let parms =  {
        restaurant: restaurantName,
        date: dateChoice,      // Ajouter la date au template
        time: timeChoice       // Ajouter l'heure au template
    };

    // Envoyer l'e-mail via EmailJS
    emailjs.send("service_8ze7lc8", "template_hw40b8v", parms)
        .then(function(response) {
            alert("Email with your choice was sent successfully to your Choco!");
            
            // Masquer les éléments visuels actuels
            document.getElementById('invitation').style.display = 'none';
            document.getElementById('restaurant-form').style.display = 'none';
                        
            // Afficher le nouveau message et le GIF
            showPreparationMessage();
            
            
            
        }, function(error) {
            alert("Failed to send email. Please try again."); // Message d'erreur en cas d'échec
        });
}

// Fonction pour afficher le message "Prépare toi" et le GIF
function showPreparationMessage() {
    // Créer un conteneur pour le nouveau message
    let prepMessage = document.createElement('div');
    prepMessage.setAttribute('id', 'preparation-message');
    prepMessage.style.textAlign = 'center';
    prepMessage.style.marginTop = '20px';
    
    // Ajouter le texte "Prépare toi"
    let messageText = document.createElement('p');
    messageText.innerText = "Get Ready...";
    messageText.style.fontSize = '30px';
    messageText.style.color = '#ff6699'; // Couleur du texte
    prepMessage.appendChild(messageText);

    // Ajouter un GIF sous le texte
    let gif = document.createElement('img');
    gif.setAttribute('src', 'images/preparation.gif'); // Assurez-vous d'avoir ce fichier GIF dans le bon dossier
    gif.setAttribute('alt', 'Preparation GIF');
    gif.style.width = '200px'; // Ajustez la taille selon vos préférences
    prepMessage.appendChild(gif);

    // Ajouter le message au body
    document.body.appendChild(prepMessage);
}

document.querySelector('.envelope').addEventListener('click', function() {
    // Ouvrir l'enveloppe
    document.querySelector('.envelope-cover').style.top = '-100px';
    document.querySelector('.envelope-letter').style.opacity = '1';

    // Ajouter des cœurs et des confettis qui sortent
    for (let i = 0; i < 20; i++) {
        let heart_explosion = document.createElement('div');
        heart_explosion.classList.add('heart_explosion');
        document.body.appendChild(heart_explosion);
        animateElement(heart_explosion);
    }

    for (let i = 0; i < 20; i++) {
        let confetti_explosion = document.createElement('div');
        confetti_explosion.classList.add('confetti_explosion');
        document.body.appendChild(confetti_explosion);
        animateElement(confetti_explosion);
    }
});

// Fonction pour animer un élément (coeur ou confetti)
function animateElement(el) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Supprimer l'élément après l'animation
    setTimeout(() => {
        el.remove();
    }, 2000); // Après 2 secondes
}
