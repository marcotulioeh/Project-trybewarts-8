const btnEntrar = document.getElementById('entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function checkPassword() {
  if (email.value === 'tryber@teste.com') {
    if (senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEntrar.addEventListener('click', checkPassword);

function checkAgreement() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('change', checkAgreement);
