import { useState } from "react";
import google from "./assets/google.svg";
import eyeslash_fill from "./assets/eyeslash-fill.svg";
import eye from "./assets/eye.svg";
import image from "./assets/left_image.jpg";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import "./App.css";
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <div className="warp">
        <div className="leftBox">
          <img src={image} alt="" />
        </div>
        <div className="rightBox">
          <article className="rightBox_title">
            You are one step away from your dream offer！
          </article>
          <main className="rightBox_main">

            <div className="rightBox_main_searchBox">
              <article>Your Email Address</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type="text"
                />
              </div>
            </div>
            <div className="rightBox_main_searchBox">
              <article>Your PassWord</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type={show ? "text" : "password"}
                />
                <img
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="rightBox_main_button_img rightBox_main_button_img_eye"
                  src={show ? eye : eyeslash_fill}
                  alt=""
                />
              </div>
            </div>
            <div className="rightBox_main_searchBox">
              <article>Confirm Password</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type="text"
                />
              </div>
            </div>
            <div className="rightBox_main_select">
              <input type="checkbox" />
              By checking this box, you are agreeing to our terms of use
            </div>
            <div className="rightBox_main_submit">Create Account</div>
            <div className="rightBox_width_pading ">
              <span>Or sign up with</span>
            </div>
            {/* <div className="rightBox_main_button">
              <img className="rightBox_main_button_img" src={google} alt="" />
              <span className="rightBox_main_button_span" onClick={goGogleBtn}>
                Sign up with Google
              </span>
            </div> */}
            <GoogleLogin onSuccess={responseMessage} />
            <div className="rightBox_main_submit_desc">
              Already have an account?
              <a className="rightBox_main_submit_desc_a" href="#">
                Log in
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;