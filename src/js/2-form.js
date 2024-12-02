const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');
// const { email: emailInput, message: messageInput } = form.elements;

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const data = JSON.parse(savedData);
    emailInput.value = data.email || '';
    messageInput.value = data.message || '';
  }
}
loadFormData();


function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData ));
}


function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  if (email.value.trim() === "" || message.value.trim() === "") {
    alert('Please, fill all fields');
    return;
  }

  console.log('Submitted data:', {email: email.value.trim(), message:message.value.trim()});
  
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
}
