const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
loadFormData();


function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  savedToStorage();
}

function savedToStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData ));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please, fill all fields');
    return;
  }
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
}
