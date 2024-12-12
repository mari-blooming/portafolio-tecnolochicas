document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name-contact").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`¡Gracias por contactarme, ${name}! Me pondré en contacto contigo pronto.`);
    this.reset(); 
});
