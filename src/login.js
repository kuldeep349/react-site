import logo from './unl_logo.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Login() {
    return (
        <Router>
            <section class="pricing section-padding-100-70">

            <div class="container" style={{background:"#edf6fd"}}>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 rounded-lg card-authentication1 mx-auto my-5 single_price_table_content active text-center wow fadeInUp" >
                        <div class="text-center">
                            <img src={logo} class="img-responsive" style={{width:"200px"}} alt=""/>
                        </div>
                        <div class="">
                            <div class="">
                                <p style={{color:"red",textAlign: "center"}}></p>
                                <fieldset>
                                    <form action="" method="post"  accept-charset="utf-8">
                                        <div class="form-group">
                                            <label>Username or Email:</label>
                                            <input type="text" name="user_id" value="" class="form-control" placeholder="User ID  or Email Address" required="true" />
                                            <span class="text-danger"> </span>
                                        </div>
                                        <div class="form-group">
                                            <label>Password:</label>
                                            <input type="password" name="password" value="" class="form-control" placeholder="Enter Your Password" required="true" />
                                            <span class="text-danger"> </span>
                                        </div>
                                        <div class="form-group text-center">
                                            <button type="submit" class="btn btn-primary" name="Submit" value="Login">Sign in
                                            </button>
                                        </div>
                                        <div class="form-group">
                                            <span>Don't have an account?  
                                            <Link to="/" class=""> here </Link> 
                                            for
                                                Signup</span>
                                        </div>
                                        <div class="form-group">
                                            <Link to="/" class="text-danger">Forgot Password</Link>
                                        </div>
                                    </form> 
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            </section>
        </Router>
    );
  }
export default Login;