//Navibar
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
//whatsapp
const wppButton = document.getElementById('wpp-link');
const wppForm = document.getElementById('wpp-form');
const closeButton = document.getElementById('close-bt');
const phone = document.getElementById('telefone');
const mask = document.querySelector('#wpp-fix .mask');
const response = document.querySelector('#wpp-form .response-output');
const wppoptions = document.getElementById('wppoptions');

function getData(form) {
  var formData = new FormData(form);
  return Object.fromEntries(formData);
}

function phoneMask(value) {
  if (!value) return '';
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

phone.onkeyup = e => phone.value = phoneMask(e.target.value);

wppButton.onclick = () => {
  wppButton.classList.add('hide-this');
};

mask.onclick = () => {
  wppButton.classList.remove('hide-this');
};

closeButton.onclick = () => {
  wppButton.classList.remove('hide-this');
};

wppForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = getData(e.target);
  wppForm.classList.add('submitting');
  response.innerHTML += '<p>Você será redirecionado para o WhatsApp</p>';

  setTimeout(() => {
    wppForm.classList.remove('submitting');
    wppForm.classList.add('sent');

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?text=Olá meu nome é ${formData.nome}, gostaria de saber mais sobre os seus serviços! Esses são os meus contatos:%0D%0A Telefone: ${formData.telefone} %0D%0A Email: ${formData.email}&phone=5531982148490`, '_self');
    }, 700);

  }, 2000);

});

document.addEventListener('keyup', e => {
  if (e.key == 'Escape') {
    wppButton.classList.remove('hide-this');
  }
});

wppoptions.addEventListener('change', e => {
  let selectedItem = e.target.value;
});

