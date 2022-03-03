const btnEntrar = document.getElementById('entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');

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

function charsTextArea() {
  const maxChars = 500;
  const charsValue = textArea.value.length;
  const totalChars = maxChars - charsValue;
  document.getElementById('counter').innerText = totalChars;
}

textArea.addEventListener('input', charsTextArea);

function getFullName() {
  const name = document.getElementById('input-name').value;
  return `${name} ${document.getElementById('input-lastname').value}`;
}

function getFamily() {
  const family = document.querySelectorAll('.family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) return family[i].value;
  }
}

function getMaterias() {
  const materias = [];
  const subject = document.querySelectorAll('.subject');
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      materias.push(` ${subject[i].value}`);
    }
  }
  return materias;
}

function getRating() {
  const rating = document.querySelectorAll('.rating');
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checked) return rating[i].value;
  }
}

function createResp(campos, info) {
  for (let i = 0; i < campos.length; i += 1) {
    const p = document.createElement('p');
    p.textContent = `${campos[i]}: ${info[campos[i]]}`;
    form.appendChild(p);
  }
}

function submitForm(event) {
  event.preventDefault();

  const info = {
    Nome: getFullName(),
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: getFamily(),
    Matérias: getMaterias(),
    Avaliação: getRating(),
    Observações: textArea.value,
  };

  form.innerHTML = '';
  const campos = Object.keys(info);
  createResp(campos, info);
}

submitBtn.addEventListener('click', submitForm);
