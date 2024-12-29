import "./assets/css/login.css";
import blob from  "./assets/images/blob.svg";
import blob_1 from  "./assets/images/blob_1.svg";
import blob_2 from  "./assets/images/blob_2.svg";
import email from "./assets/images/email.svg";
import password from "./assets/images/password.svg";
import eye_open from "./assets/images/eye_open.svg";
import eye_close from "./assets/images/eye_close.svg";

import {Link} from "react-router-dom";


const Login = ()=>{
    return(
        <>
                <div class="my_main_wrap">
        <div class="my_main_inside">
            <div class="my_login_wrap">
                <div class="my_login_inside grid justify_sp_between">
                    <div class="my_login_left_wrap">
                        <div class="my_login_left__inside flex justify_sp_between flex_column">
                            
                            <div class="my_login_left_blob">
                                <img src={blob}/>
                                <p class="my_login_left_blob_text">Welcome</p>
                            </div>
                            <div class="my_login_left_blob_1">
                                <img src={blob_1}/>
                            </div>
                            <div class="my_login_left_blob_2">
                                <img src={blob_2}/>
                            </div>

                        </div>

                    </div>
                    <div class="my_login_right_wrap">
                        <div class="my_login_right__inside flex justify_sp_between flex_column align_center">
                            <div class="my_login_right_top_text">
                                <p>My Market</p>

                            </div>
                            <div class="my_login_right_mid_wrap">
                                <div class="my_login_right_mid_inside">
                                    <div class="my_login_right_welcome text_center">
                                        <p>Sign In</p>
                                    </div>
                                    <div class="my_login_right_login_text text_center">
                                        <p>Enter your email and password to access your account</p>
                                    </div>
                                    <div>
                                        <label>Email / Phone No.</label>
                                    </div>
                                    <div class="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your email / phone no."/>
                                        <span class="my_login_right_email_icon">
                                            <img src={email}/>
                                        </span>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div class="my_login_right_password_text">
                                        <input type="password" placeholder="Enter your password"/>
                                        <span class="my_login_right_password_icon">
                                            <img src={password}/>
                                        </span>
                                        <span class="my_login_right_show_hide_icon">
                                            <img src={eye_open}/>
                                            <img src={eye_close} style={{"display": "none"}}/>
                                        </span>
                                    </div>
                                    <div class="my_login_right_remember_forgot flex justify_sp_between">
                                        <div class="my_login_right_remember_me">
                                            <input type="checkbox" id="remember_me" /><label for="remember_me">Remember me</label>
                                        </div>
                                        <div>
                                            <label><Link to="/forgotpass">Forgot Password</Link></label>
                                        </div>
                                    </div>
                                    <div class="sign_in_button">
                                        <a href="#">Login</a>
                                    </div>
                                    <div class="login_separator">
                                        <hr/>
                                        <span>
                                            <p>OR</p>
                                        </span>
                                    </div>
                                    <div class="google_sign_in_button">
                                        <a href="#">Sign In with Google</a>
                                    </div>
                                    
                                    

                                </div>

                            </div>
                            <div class="my_login_right_bottom_text">
                                <p class="my_login_right_bottom_text_unit">Dont have an account? <span><Link to="/register">Sign Up</Link></span></p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
        </>
    )
}
export default Login;