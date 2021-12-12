const building = document.getElementById('building')
const image = building.querySelector('.building__image')

image.onload = function () {
  building.style.display = 'block';
}
