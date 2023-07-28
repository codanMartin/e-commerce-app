import { useState, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import  { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles.js";

const PaymentForm = () => {
  const { cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandles = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: cartTotal * 100 }),
      });

      if (!response.ok) {
        // Handle non-200 HTTP response status
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const clientSecret = data.paymentIntent.client_secret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "guest",
          },
        },
      });

      setIsProcessingPayment(false);
      if (paymentResult.error) {
        alert(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment was successful");
        }
      }
    } catch (error) {
      console.log("Error:", error.message);
      // Handle the error gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandles}>
        <h2>Credit Cart Payment: </h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
