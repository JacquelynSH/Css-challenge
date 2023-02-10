const menuButton = document.querySelector('.menu-container');

let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    menuButton.classList.add('open');
    menuOpen = true
    setTimeout(function () {
      menuButton.classList.add('cross')
    }, 500);
  } else {
    menuButton.classList.remove('open');
    menuButton.classList.remove('cross');
    menuOpen = false;
  }
});
