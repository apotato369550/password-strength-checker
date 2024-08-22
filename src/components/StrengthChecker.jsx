import React, { useState } from 'react';
import "./StrengthChecker.css"
import arrow_image from "../assets/arrow.png";

const StrengthChecker = () => {
    const [password, setPassword] = useState("");
    const [passwordBorderStyle, setPasswordBorderStyle] = useState({
        borderColor: '#ccc'
    });
    const [passwordMessageStyle, setPasswordMessageStyle] = useState({
        display: 'none',
        color: '#ededed'
    })
    const [passwordStrength, setPasswordStrength] = useState(""); 
    
    const checkPasswordStrength = () => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      const strengthCriteria = [hasUpperCase, hasNumber, hasSpecialChar].filter(
        Boolean
      ).length;

      if (password.length < 0) {
        setPasswordStrength("");
        setPasswordBorderStyle({
          borderColor: "#ccc",
        });
        setPasswordMessageStyle({
          display: "none",
          color: "#ededed",
        });
      } else if (password.length <= 4) {
        // If the password length is 4 or less, it's weak regardless of other criteria
        setPasswordStrength("weak");
        setPasswordBorderStyle({
          borderColor: "#ff5925",
        });
        setPasswordMessageStyle({
          display: "block",
          color: "#ff5925",
        });
      } else if (password.length >= 4 && password.length < 8) {
        // If the password length is between 4 and 8, consider strength criteria
        if (strengthCriteria === 3) {
          setPasswordStrength("strong");
          setPasswordBorderStyle({
            borderColor: "#26d730",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "#26d730",
          });
        } else if (strengthCriteria === 2) {
          setPasswordStrength("medium");
          setPasswordBorderStyle({
            borderColor: "yellow",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "yellow",
          });
        } else {
          setPasswordStrength("weak");
          setPasswordBorderStyle({
            borderColor: "#ff5925",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "#ff5925",
          });
        }
      } else if (password.length >= 8) {
        // If the password length is 8 or more, consider strength criteria
        if (strengthCriteria === 3) {
          setPasswordStrength("strong");
          setPasswordBorderStyle({
            borderColor: "#26d730",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "#26d730",
          });
        } else if (strengthCriteria === 2) {
          setPasswordStrength("medium");
          setPasswordBorderStyle({
            borderColor: "yellow",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "yellow",
          });
        } else {
          setPasswordStrength("weak");
          setPasswordBorderStyle({
            borderColor: "#ff5925",
          });
          setPasswordMessageStyle({
            display: "block",
            color: "#ff5925",
          });
        }
      }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkPasswordStrength();
    }

  return (
    <div className='container'>
        <div className="input-box">
            <input type="password" id="password" placeholder='Password' onChange={handlePasswordChange} style={passwordBorderStyle}/>
            <button type='submit'><img src={arrow_image} alt="" /></button>
            <p id="message" style={passwordMessageStyle}>Password is <span id="strength">{passwordStrength}</span></p>
        </div>
    </div>
  )
}

export default StrengthChecker