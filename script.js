let openButton = document.querySelector('.open-preview');
let catalogList = document.querySelector('.subcatalog-wrapper');

catalogList.classList.add('subcatalog-close');

openButton.addEventListener('click', () => {
  if (catalogList.classList.contains('subcatalog-close')) {
    catalogList.classList.remove('subcatalog-close');
    catalogList.classList.add('subcatalog-open');
  } else {
    catalogList.classList.remove('subcatalog-open');
    catalogList.classList.add('subcatalog-close');
  }
});
