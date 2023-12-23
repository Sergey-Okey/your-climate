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

// Burger Menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
});

