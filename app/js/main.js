const building = document.getElementById('building')
const image = building.querySelector('.building__image')
const preloader = document.getElementById('preloader')

image.onload = function () {
  preloader.style.display = 'none';
  building.style.display = 'block';
}
