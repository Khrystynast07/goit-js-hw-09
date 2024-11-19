const formData = {email: "", message: ""};
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

emailInput.value = formData.email = JSON.parse(localStorage.getItem('feedback-form-state')).email || "";
messageInput.value = formData.message = JSON.parse(localStorage.getItem('feedback-form-state')).message || "";;

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);

function savedToStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleInput(event) {
    const {name, value} = event.target;
    formData[name] = value;
    savedToStorage();
}

function handleSubmit(event) {
    event.preventDefault();

    if(!formData.email || !formData.message) {
        alert('Please, fill all fields');
        return;
    }
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";

    
}
