(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    htmlAndBody: document.querySelectorAll('[data-no-scroll]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.htmlAndBody[0].classList.toggle('no-scroll');
    refs.htmlAndBody[1].classList.toggle('no-scroll');
  }
})();
