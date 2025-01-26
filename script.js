let catalogToggle = document.querySelector('.catalog-button-preview');
let catalogMain = document.querySelector('.subcatalog-wrapper');

catalogMain.classList.add('subcatalog-close');
catalogToggle.classList.add('submenu-closed');

catalogToggle.addEventListener('click', () => {
  catalogMain.classList.toggle('subcatalog-close');
  catalogToggle.classList.toggle('submenu-closed');
});
