const formData = "feedback-msg";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

form.addEventListener('submit', handleSubmit);
emailInput.addEventListener('input', onEmailInput);
messageInput.addEventListener('textarea', onTextareaMsg);

function onEmailInput(event) {
    const value = event.target.value;
    localStorage.setItem(formData, value);
}

function handleSubmit(event) {
    event.preventDefault();

    if(!formData.email || !formData.message) {
        alert('Please, fill all fields');
        return;
    }
    event.currentTarget.reset();
    localStorage.removeItem(formData);
}