// addeventlistner = event sunega 
// domcontentloaded = html ready hone ka wait karega
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector("nav ul");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
    });
  }
// card click krne pr color change hona 
  const cards = document.querySelectorAll(".cards div");
  cards.forEach(card => {
    card.addEventListener("click", function () {
      this.style.backgroundColor = "#faf3e0";
      this.style.color = "#3e272e";
    });
  });

  // ek ek pr alag image lana
  const img = document.querySelector(".about-section img");
  if (img) {
    img.addEventListener("click", function () {
      if (this.src.includes("house2.jpeg")) {
        this.src = "house4.jpeg";
      } else {
        this.src = "house3.jpeg";
      }
    });
  }

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form && successMsg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); //page reload na ho

      successMsg.style.display = "block";
      successMsg.innerText = "Contact saved successfully";
      successMsg.style.color = "brown";
      successMsg.style.fontWeight = "bold";
      successMsg.style.fontSize = "1.5rem";

      form.reset();  // form ko clear krna
    });
  }

});

// scroll reveal home page
ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 200
});

// Heading ke liye
ScrollReveal().reveal('.home-section h2', {
  origin: 'left'
});

// Paragraph ke liye
ScrollReveal().reveal('.home-section p', {
  origin: 'right',
  delay: 300
});

// scroll reveal home page
ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 200
});

// Heading ke liye
ScrollReveal().reveal('.about-section h2', {
  origin: 'left'
});

// Paragraph ke liye
ScrollReveal().reveal('.about-section p', {
  origin: 'right',
  delay: 300
});

ScrollReveal().reveal('.about-section h5', {
  origin: 'right',
  delay: 300
});
ScrollReveal().reveal('.about-section h6', {
  origin: 'right',
  delay: 300
});



// scroll reveal home page
ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 200
});


ScrollReveal().reveal('.gallery-section h2', {
  origin: 'left'
});

ScrollReveal().reveal('.gallery-section h5', {
  origin: 'right',
  delay: 300
});

ScrollReveal().reveal('.about-section h4', {
  origin: 'right',
  delay: 300
});

// contact ke liye
ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.contact-section h2', {
  origin: 'left'
});

ScrollReveal().reveal('.contact-section h3', {
  origin: 'right',
  delay: 300
});


function showText(img) {
  img.nextElementSibling.style.opacity = "1";
}

function hideText(img) {
  img.nextElementSibling.style.opacity = "0";
}
