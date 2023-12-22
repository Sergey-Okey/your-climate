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

// Дополнительная логика для адаптивности к мобильным устройствам
var isMobile = window.innerWidth <= 767; // Подстройте порог по необходимости

if (isMobile) {
  // Добавление обработчиков событий или изменение поведения для мобильных устройств
  // Например, можно закрыть модальное окно при касании вне его области
  document.body.addEventListener('click', function (event) {
    var modal = document.getElementById('modal');
    if (event.target !== modal && !modal.contains(event.target)) {
      modal.style.display = 'none';
    }
  });
}
