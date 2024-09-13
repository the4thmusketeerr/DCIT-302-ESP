function setAmount(amount) {
  document.getElementById("custom-amount").value = `$${amount}`;
}

function showPaymentFields(method) {
  const cardDetails = document.getElementById("card-details");
  const googlePayDetails = document.getElementById("googlepay-details");

  if (method === "card") {
    cardDetails.style.display = "block";
    googlePayDetails.style.display = "none";
  } else if (method === "googlepay") {
    cardDetails.style.display = "none";
    googlePayDetails.style.display = "block";
  }
}

function submitDonation() {
  const amount = document.getElementById("custom-amount").value;
  const currency = document.getElementById("currency").value;
  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).value;

  let paymentDetails;
  if (paymentMethod === "card") {
    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const cardExpiry = document.getElementById("card-expiry").value;
    const cardCvv = document.getElementById("card-cvv").value;

    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      alert("Please fill out all card details");
      return;
    }

    paymentDetails = {
      method: "Card",
      cardName,
      cardNumber,
      cardExpiry,
      cardCvv,
    };
  } else if (paymentMethod === "googlepay") {
    paymentDetails = { method: "Google Pay" };
  }

  // Simulate submission
  console.log("Donation Amount:", amount);
  console.log("Currency:", currency);
  console.log("Payment Method:", paymentDetails.method);
  if (paymentDetails.method === "Card") {
    console.log("Card Details:", paymentDetails);
  }
  alert(
    `Donation of ${amount} ${currency} via ${paymentDetails.method} submitted!`
  );
}
