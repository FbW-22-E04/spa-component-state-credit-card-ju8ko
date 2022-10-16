import React from "react";
import "./app.css";

function App() {
  return (
    <div className="App">
      <CreditCard cardInfo={cardInfo} />
    </div>
  );
}
const cardInfo = {
  bankName: "N26",
  creditCardNumber: "5555 5555 5555 5555",
  expirationDate: "12/29",
  name: "Julia Kobzar",
};
const CreditCard = (props) => {
  return (
    <div className="credit-card">
      <span className="bank-name">{props.cardInfo.bankName}</span>
      <span>{props.cardInfo.creditCardNumber}</span>
      <span className="expiration-date">{props.cardInfo.expirationDate}</span>
      <span>{props.cardInfo.name}</span>
    </div>
  );
};

export default App;
