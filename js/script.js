window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").classList.add("scrolled");
  } else {
    document.querySelector(".header").classList.remove("scrolled");
  }
}

// Плаваня прокрутка к ссылкам.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal Windows
document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
  var modal = document.getElementById('modal');

  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//Open img

document.getElementById('fullscreen-image').addEventListener('click', function () {
  if (this.style.width === "50%") {
    this.style.width = "auto";
    this.style.position = "static";
  } else {
    // код для увеличения изображения на 70% ширины экрана
    this.style.width = "50%";
    this.style.position = "fixed";
    this.style.top = "50%";
    this.style.left = "50%";
    this.style.transform = "translate(-50%, -50%)";
  }
});

// Burger Menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});

