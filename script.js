
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  const emailBody = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

 
  window.location.href = `yvonnemartinkatumbi@gmail.com=${encodeURIComponent(emailBody)}`;
});