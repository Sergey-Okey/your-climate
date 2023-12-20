window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

// Active Link
document.addEventListener('scroll', function () {
  var menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach(function (link) {
    var sectionId = link.getAttribute('href').substring(1);
    var section = document.getElementById(sectionId);

    if (section.offsetTop <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY) {
      menuLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
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
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});
