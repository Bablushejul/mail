import { useRef } from "react";
import classes from './AuthFrom.module.css'

const ForgotPassword = () => {
  const emailInput = useRef();

  const forgotPasswordHandler = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA_d7k8l39N4GuM-CKSPYhBbhDrsJ-MQJQ",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: emailInput.current.value,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        let errorMessage = "Authentication Failed";
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={classes.auth}>
      <form onSubmit={forgotPasswordHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInput} required />
        </div>
        <div className={classes.actions}>
          <button type="submit">Forgot Password</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;