// Sélectionner le bouton de mode sombre
const darkModeToggle = document.getElementById("darkModeToggle");

// Ajouter un écouteur d'événements pour basculer le mode sombre
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Mettre à jour le texte du bouton
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Mode clair";
  } else {
    darkModeToggle.textContent = "Mode sombre";
  }
});

// Ajouter des écouteurs pour les boutons "Ajouter au panier"
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produit ajouté au panier !");
  });
});
