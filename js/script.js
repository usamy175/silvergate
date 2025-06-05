function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

  // Inicializa o EmailJS com sua chave pública
  (function () {
    emailjs.init("pRicgC8zG9631d-pH"); 
  })();

  // Captura o formulário e o elemento de mensagem
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("default_service", "template_90gy7se", form)
      .then(function () {
        formMessage.style.color = "green";
        formMessage.textContent = "Inscrição realizada com sucesso! 🚀 Bem-vindo ao SilverGate!";
        form.reset();
      }, function (error) {
        formMessage.style.color = "red";
        formMessage.textContent = "Erro ao enviar sua inscrição. Tente novamente.";
        console.error("EmailJS error:", error);
      });
  });


