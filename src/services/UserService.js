export const validateUserInfo = (
  firstname,
  lastname,
  address,
  city,
  postalcode
) => {
  let errors = {};

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const postalCodeRegex = /^\d{5}$/;

  if (!nameRegex.test(firstname)) {
    errors.firstname = "Förnamn måste vara minst 3 bokstäver.";
  }

  if (!nameRegex.test(lastname)) {
    errors.lastname = "Efternamn måste vara minst 3 bokstäver.";
  }

  if (!nameRegex.test(address)) {
    errors.address = "Obligatoriskt!";
  }

  if (!nameRegex.test(city)) {
    errors.city = "Obligatoriskt!";
  }

  if (!postalCodeRegex.test(postalcode)) {
    errors.postalcode = "Postnummer måste vara 5 siffror.";
  }

  return errors;
};
