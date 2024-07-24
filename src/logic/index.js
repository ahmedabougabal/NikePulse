let isMenuOpen = false;

export const toggleMenu = () => {
  isMenuOpen = !isMenuOpen;
  const navLinks = document.getElementById('nav-links');
  if (isMenuOpen) {
    navLinks.classList.remove('hidden');
  } else {
    navLinks.classList.add('hidden');
  }
};

