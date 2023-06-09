import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { validateForm } from "../services/PaymentService";
import { OrderContext } from "../contexts/OrderContext";
import { validateUserInfo } from "../services/UserService";

function Betalning() {
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [paymentFormSubmitted, setPaymentFormSubmitted] = useState(false);
  const [cvc, setCVC] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // ¨¨¨¨¨¨¨¨User Info¨¨¨¨¨¨¨baka in sedan
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");

  const location = useLocation();
  const totalSum =
    location.state && location.state.totalSum ? location.state.totalSum : 0;
  const [deliveryTime, setDeliveryTime] = useState(0);
  const { setOrder } = useContext(OrderContext);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handlePhoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleCardholderNameInput = (event) => {
    setCardholderName(event.target.value);
  };
  const handleCardNumberInput = (event) => {
    setCardNumber(event.target.value);
  };
  const handleExpiryDateInput = (event) => {
    setExpiryDate(event.target.value);
  };
  const handleCVCInput = (event) => {
    setCVC(event.target.value);
  };

  // ¨¨¨¨¨¨¨¨¨¨User info¨¨¨¨¨¨¨¨¨¨¨
  const handleFirstnameInput = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameInput = (event) => {
    setLastname(event.target.value);
  };

  const handleAddressInput = (event) => {
    setAddress(event.target.value);
  };

  const handleCityInput = (event) => {
    setCity(event.target.value);
  };

  const handlePostalcodeInput = (event) => {
    setPostalcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {
      ...validateForm(
        paymentMethod,
        phoneNumber,
        cardholderName,
        cardNumber,
        expiryDate,
        cvc
      ),
      ...validateUserInfo(firstname, lastname, address, city, postalcode),
    };

    setFormErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (paymentMethod === "") {
        setPaymentFormSubmitted(true);
      } else {
        setPaymentSubmitted(true);

        // Clear the forms
        setPaymentMethod("");
        setPhoneNumber("");
        setCardholderName("");
        setCardNumber("");
        setExpiryDate("");
        setCVC("");
        setOrder([]);
      }
    } else {
      setPaymentFormSubmitted(false);
    }
  };

  const getRandomDeliveryTime = () => {
    return Math.floor(Math.random() * 30) + 1;
  };

  useEffect(() => {
    const time = getRandomDeliveryTime();
    setDeliveryTime(time);
  }, []);

  return (
    <div className="payment-page">
      {paymentSubmitted ? (
        <div className="payment-confirmation">
          <h1 className="receipt-header">Kvitto</h1>
          <h3>Tack för din betalning!</h3>
          <p>
            Betald ink. moms: <em>{totalSum}</em> kr
          </p>
          <div>
            <p>
              Din order är på väg med beräknad ankomsttid:
              <em>{deliveryTime} </em> minuter
            </p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="payment-header">Dina information</h1>
          <form onSubmit={handleSubmit} className="payment-form-container">
            <div className="user-info">
              <div className="firstname info-card">
                <input
                  placeholder="Förnamn"
                  type="text"
                  value={firstname}
                  onChange={handleFirstnameInput}
                />
                {formErrors.firstname && <p>{formErrors.firstname}</p>}
              </div>
              <div className="lastname info-card">
                <input
                  placeholder="Efternamn"
                  type="text"
                  value={lastname}
                  onChange={handleLastnameInput}
                />
                {formErrors.lastname && <p>{formErrors.lastname}</p>}
              </div>
              <div className="address info-card">
                <input
                  placeholder="Adress"
                  type="text"
                  value={address}
                  onChange={handleAddressInput}
                />
                {formErrors.address && <p>{formErrors.address}</p>}
              </div>
              <div className="city-postalcode info-card">
                <div className="city">
                  <input
                    placeholder="Ort"
                    type="text"
                    value={city}
                    onChange={handleCityInput}
                  />
                  {formErrors.city && <p>{formErrors.city}</p>}
                </div>
                <div className="postalcode">
                  <input
                    placeholder="Postnummer"
                    type="text"
                    value={postalcode}
                    onChange={handlePostalcodeInput}
                  />
                  {formErrors.postalcode && <p>{formErrors.postalcode}</p>}
                </div>
              </div>
            </div>

            <div className="payment-alternative-swish">
              <label>
                {/* <h4 className="delivery-time">
                  Leveranstid: <em>{deliveryTime}</em> min
                </h4> */}
                <h1 className="payment-header">Välj betalningsmetod</h1>
                <input
                  type="radio"
                  value="swish"
                  checked={paymentMethod === "swish"}
                  onChange={handlePaymentMethodChange}
                />
                Swish
              </label>
            </div>
            <div className="payment-alternative-card">
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={handlePaymentMethodChange}
                />
                Kort
              </label>
            </div>

            {paymentMethod === "swish" && (
              <div className="payment-swish">
                <input
                  placeholder="Telefonnummer"
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberInput}
                />
                {formErrors.phoneNumber && <p>{formErrors.phoneNumber}</p>}
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="payment-card">
                <input
                  placeholder="Kortinnehavare"
                  type="text"
                  value={cardholderName}
                  onChange={handleCardholderNameInput}
                />

                <input
                  placeholder="Kortnummer"
                  type="number"
                  value={cardNumber}
                  onChange={handleCardNumberInput}
                />
                {formErrors.cardNumber && <p>{formErrors.cardNumber}</p>}

                <div className="expire-cvc">
                  <div className="expiery-date">
                    <input
                      placeholder="MM/ÅÅ"
                      type="number"
                      value={expiryDate}
                      onChange={handleExpiryDateInput}
                    />
                    {formErrors.expiryDate && <p>{formErrors.expiryDate}</p>}
                  </div>
                  <div className="cvc">
                    <input
                      placeholder="CVC"
                      type="number"
                      value={cvc}
                      onChange={handleCVCInput}
                    />
                    {formErrors.cvc && <p>{formErrors.cvc}</p>}
                  </div>
                </div>
              </div>
            )}

            {paymentFormSubmitted && paymentMethod === "" && (
              <p className="error-message">Vänligen välj en betalningsmetod.</p>
            )}

            <div className="payment-action">
              <h2>Total summa: {totalSum} kr</h2>
              <button type="submit">Betala</button>
            </div>
          </form>

          {paymentSubmitted && (
            <div className="payment-confirmation">
              <h1 className="receipt-header">Kvitto</h1>
              <h3>Tack för din betalning!</h3>
              <p>
                Betald ink. moms: <em>{totalSum}</em> kr
              </p>
              <div>
                <p>
                  Din order är på väg med beräknad ankomsttid:
                  <em>{deliveryTime} </em> minuter
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Betalning;
