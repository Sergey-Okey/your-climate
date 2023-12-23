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

// Проверка, является ли устройство мобильным
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Обработчик события
function toggleModal() {
  var modal = document.getElementById('modal');
  var modalDisplay = window.getComputedStyle(modal).getPropertyValue('display');

  if (modalDisplay === 'none') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

// Добавление обработчика события в зависимости от устройства
if (isMobile) {
  document.getElementById('openModal').addEventListener('touchstart', toggleModal);
} else {
  document.getElementById('openModal').addEventListener('click', toggleModal);
}

document.getElementsByClassName('close')[0].addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
// Burger Menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});

