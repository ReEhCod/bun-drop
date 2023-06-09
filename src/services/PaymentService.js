const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^0[0-9]{9}$/;
  return phoneRegex.test(phoneNumber);
};

const validateCardNumber = (cardNumber) => {
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
};

const validateExpiryDate = (expiryDate) => {
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  return expiryDateRegex.test(expiryDate);
};

const validateCVC = (cvc) => {
  const cvcRegex = /^[0-9]{3}$/;
  return cvcRegex.test(cvc);
};

const validateCardholderName = (cardholderName) => {
  const nameRegex = /^[\p{L} ]{3,}$/u;
  return nameRegex.test(cardholderName);
};

const validateForm = (
  paymentMethod,
  phoneNumber,
  cardholderName,
  cardNumber,
  expiryDate,
  cvc
) => {
  let errors = {};

  if (paymentMethod === "swish") {
    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber =
        "Ogiltig telefonnummer!" + " OBS Landskod inte tillåten!";
    }
  } else if (paymentMethod === "card") {
    if (!validateCardNumber(cardNumber)) {
      errors.cardNumber = "Ogiltig kort nummer";
    }

    if (!validateExpiryDate(expiryDate)) {
      errors.expiryDate = "Ogiltig utgångsdatum! OBS format: MM/ÅÅ";
    }

    if (!validateCVC(cvc)) {
      errors.cvc = "Invalid CVC";
    }

    if (!validateCardholderName(cardholderName)) {
      errors.cardholderName = "Invalid name";
    }
  }

  return errors;
};

export { validateForm };
