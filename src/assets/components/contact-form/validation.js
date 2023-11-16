function handleInput(ev) {
  // Use the empty string to indicate that the element does not have a custom validity error
  ev.target.setCustomValidity("");
  ev.target.setAttribute("title", ev.target.validationMessage);

  // Revaluate the constraints only on this field and also fire an "invalid" event if needed
  ev.target.checkValidity();
}

function handleInvalid(ev) {
  // Investigate why an element's value fails to validate
  const invalidFieldElem = ev.target;
  const invalidFieldName = ev.target.name;
  const itsValidityState = ev.target.validity;

  // Check which constraints the form's field has violated
  // Then set different error messages depending on whether the value is missing, too low, or too high, etc.
  switch (invalidFieldName) {
    case "name":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Please provide your name; this is a necessary field.");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "email":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Please provide your email address so that I can contact you. Email is a mandatory field.");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      if (itsValidityState.typeMismatch) {
        invalidFieldElem.setCustomValidity("The email address you gave appears to be incorrect; please update it.");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "subject":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Your message's subject is a required field.");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "message":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("What is the message you want to send? This is a mandatory field.");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
  }
}

// *** TEST ***
function submitForm(shouldError) {
  // Pretend it is hitting the network
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error("Error submitting the form!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
// *** TEST ***

export { handleInput, handleInvalid, submitForm };
