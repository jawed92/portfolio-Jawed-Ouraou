const cards = document.querySelectorAll('.card-portfolio');

// Parcourez chaque carte et ajoutez un gestionnaire d'événements
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Obtenez l'ID de la modale à partir de l'attribut data-modal-id
    const modalId = card.getAttribute('data-modal-id');
    // Sélectionnez la modale correspondante et affichez-la
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  });
});
