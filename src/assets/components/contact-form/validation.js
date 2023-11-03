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
        invalidFieldElem.setCustomValidity("Proszę podać imię");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "email":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Proszę podać email");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      if (itsValidityState.typeMismatch) {
        invalidFieldElem.setCustomValidity("Proszę podać właściwy adres email");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "subject":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Proszę podać tytuł komunikatu");
        invalidFieldElem.setAttribute("title", invalidFieldElem.validationMessage);
      }
      break;
    case "message":
      if (itsValidityState.valueMissing) {
        invalidFieldElem.setCustomValidity("Proszę podać treść komunikatu");
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
