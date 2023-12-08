import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TextField from "@mui/material/TextField";
// import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import img from "./images/Cohorts 1.png";
import Slider from "./Slider";
import Testimonial from "./Sliders";
import "./App.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
    
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Additional form submission logic can be added here
    if (isValidEmail && email.trim() !== "") {
      console.log("Form submitted with email:", email);
      window.location.href = "https://app.loch.one/welcome";
    } else {
      console.error("Form submission failed due to validation errors or empty email.");
    }
  };
  return (
    <div>
      <div className="main_dv">
        <div className="bgblue_dv">
          <div className="upper_dv">
            <div className="content_wrapper ">
              <span>
                <NotificationsNoneIcon />
              </span>
              <h2>Get notified when a highly correlated whale makes a move</h2>
              <p>
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="slider_div">
              <Slider />
            </div>
          </div>
          <div className="mid_dv">
            <div className="img_box">
              <img src={img} alt="Cohorts 1" />
            </div>
            <div className="content_wrapper right_s">
              <span>
                <RemoveRedEyeIcon />
              </span>
              <h2>Watch what the whales are doing</h2>
              <p>
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
          <div className="lower_dv">
            <div className="Testimonials_wrapper">
              <h2>Testimonials</h2>
              <hr></hr>
              <div className="slider_testimonial_dv">
                <div className="VECTOR_dv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
        <div className="bgwhite_dv">
          <form className="form_dv">
            <h2>Sign up for exclusive access.</h2>
            <TextField
              label="Your email address"
              placeholder="Type here..."
              variant="outlined"
              fullWidth
              margin="normal"
              error={!isValidEmail}
              helperText={isValidEmail ? "" : "Please enter a valid email"}
              onChange={handleEmailChange}
              autoComplete="off"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "black" }}
              onClick={ handleSubmit }
            >
              Get started
            </Button>
            <p>You’ll receive an email with an invite link to join.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
