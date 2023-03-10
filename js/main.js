// DECLARING VARIABLES 
const form = document.getElementById('form');

const submitbutton = document.getElementById("submit");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const msgtextarea = document.getElementById("message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event)
{
    
    event.preventDefault();

    const formData = {};
    const errors = [];

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const msgValue = msgtextarea.value.trim();

    if (nameValue !== "") 
    {
        formData.fullname = nameValue;
    } else {
        errors.push("Name is required.");
    }

    if (emailValue !== "") 
    {
        if (emailRegex.test(emailValue)) {
          formData.email = emailValue;
        } else {
          errors.push("Invalid email address.");
        }
      }

      if (msgValue !== "") 
      {
        formData.message = msgValue;
      } 

      else 
      {
        errors.push("Message is required.");
      }

      if (errors.length > 0) 
      {
        console.error("Form submission failed:", errors);
      } else 
      {
        console.log("Form submitted successfully:", formData);
        nameInput.value = "";
        emailInput.value = "";
        msgTextarea.value = "";   
  };
}

submitbutton.addEventListener('click', validateForm);
