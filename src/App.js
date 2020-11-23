import React from 'react';
import logo from './unl_logo.png';
import './App.css';
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
class MyComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {class:"navbar navbar-expand-lg navbar-white fixed-top"}
      window.addEventListener('scroll', (event) => {
        if(window.scrollY > 86){
          console.log('change class');
          this.setState({class:"navbar navbar-expand-lg navbar-white fixed-top shrink",});
        }else{
          this.setState({class:"navbar navbar-expand-lg navbar-white fixed-top",});
        }
    
      })
    }
  render() {
      return (
              // <p>{this.state.backgroundColor}</p>
              <Router>
          <nav class={this.state.class} id="banner">
            <div class="container">
              <Link to="/" class="navbar-brand"><span><img src={logo} alt="logo"/></span></Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                  </li> 
                  <li class="nav-item">
                      <Link to="/about" class="nav-link">About Us</Link>
                  </li> 
                  <li class="nav-item">
                      <Link to="/services" class="nav-link">Services</Link>
                  </li> 
                  <li class="nav-item">
                      <Link to="/faq" class="nav-link">FAQ</Link>
                  </li> 
                  <li class="nav-item">
                      <Link to="/pricing" class="nav-link">Pricing</Link>
                  </li> 
                  <li class="nav-item">
                    <li class="lh-55px"><Link to="/about" class="btn login-btn ml-50">Signup</Link></li>
                  </li> 
                  <li class="nav-item">
                    <li class="lh-55px"><Link to="/login" class="btn login-btn ml-50">Login</Link></li>
                  </li> 
                </ul>
              </div>  
            </div>
            
          </nav>  
          
        
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
      <Footer />
      </Router>
      )
}
}


export default MyComponent;
function Home() {
  return (
    <section class="hero-section header3 relative section-padding" id="home">
      <div class="hero-section-content">
          <div class="container h-100">
              <div class="row h-100 mb-50 align-items-center">
                  <div class="col-12 col-lg-6 col-md-12">
                      <div class="welcome-content">
                          <div class="promo-section wow fadeInLeft" data-wow-delay="0.2s">
                              <h3 class="special-head gradient-text cyan">Business grow strategy is our mission</h3>
                          </div>
                          <h1 class="w-text wow fadeInUp" data-wow-delay="0.3s">UNILYSIS: A New Digital Payment Method </h1>
                          <p class="g-text wow fadeInUp" data-wow-delay="0.4s">We are a leading cryptocurrency trading company that uses breakthrough and evolving proprietary technologies and deal in cryptocurrency trading services to help businesses and individuals to yield higher profits.</p>
                          <div class="dream-btn-group wow fadeInUp" data-wow-delay="0.5s">
                              <a href="https://play.google.com/store/apps/details?id=com.unlfianance.mobileapp">
                                <img src="https://unl.finance/SiteAssets/img/playstore-logo.png" alt="logo" class="android-icon"/></a>
                              <a href="https://unl.finance/SiteAssets/unl-finance-whitepaper.pdf" class="btn more-btn" Download> Download Whitepaper</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-12"> </div>
                
              </div>
          </div>
      </div>
  </section>
  );
}

function About() {
  return (
    <Router>
      <section class="about-us-area special section-padding-100-85 clearfix " style={{paddingTop: "130px"}} id="about">
        <div class="container">
            <div class="row align-items-center">  
                <div class="services-column col-lg-6 col-xs-12">
                    <div class="services-block-four how wow fadeInUp" data-wow-delay="0.5s">
                        <div class="inner-box">
                            <div class="step">1</div>
                            <h3><Link to="/" class="normal">Register/create an account</Link></h3>
                            <div class="text">Just take a step further to create an account at our website free of cost. You just need to give your email and you will be done with your registration process</div>
                            
                        </div>
                    </div>
                    <div class="services-block-four how wow fadeInUp" data-wow-delay="0.7s">
                        <div class="inner-box">
                            <div class="step">2</div>
                            <h3><Link to="/" class="normal">Select A plan</Link></h3>
                            <div class="text">There are flexible plans to select from. The plan should be according to your comfort and suitability.</div>
                        </div>
                    </div>
                    <div class="services-block-four how wow fadeInUp" data-wow-delay="0.9s" style={{marginBottom:"0"}}>
                        <div class="inner-box">
                            <div class="step">3</div>
                            <h3><Link to="/" class="normal">Fund Withdrawals</Link></h3>
                            <div class="text">At our website, we provide a completely automated payment system. Once the plan is matured, one can withdraw his/her funds with just an easy process. The most vital thing is that these funds can be used for admission fees at a university or any other reason.
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-lg-6 no-padding-right">
                    <div class="welcome-meter wow fadeInRight" data-wow-delay="0.8s">
                        <img class="img-responsive center-block mb-30" alt="" src="https://unl.finance/SiteAssets/img/core-img/digital-4.png"/>
                    </div>
                </div>
        
            </div>
          </div>
          <div class="container">
            <div class="row align-items-center">
                
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="who-we-contant">
                        <div class="dream-dots text-left wow fadeInLeft" data-wow-delay="0.5s" >
                            <span class="gradient-text cyan">CONTACT US NOW IF YOU HAVE ANY QUESTION</span>
                        </div>
                        <h4 class="w-text bold wow fadeInLeft" data-wow-delay="0.7s">Get in Touch with us so Easy.</h4>
                        <p class="g-text wow fadeInLeft" data-wow-delay="0.8s">UNILYSIS is a peer-to-peer technology-dependent, eliminating the need for central authorities or banks. It is the entire responsibility of the network to manage transactions. Even, the UNILYSIS coins are issued collectively by the network.</p>
                        <div class="subscribe-section has-shadow mt-30 wow fadeInLeft" data-wow-delay="0.9s">
                            <div class="input-wrapper">
                                <i class="fa fa-home"></i>
                                <input type="email" placeholder="Enter your Email"/>
                            </div>
                            <button class="btn more-btn orange mt-sm-15 ml-15">subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="container has-shadow">
          <div class="section-heading text-center">
              <div class="dream-dots justify-content-center wow fadeInLeft" data-wow-delay="0.3s" >
                  <span class="gradient-text blue">OUR SERVICES</span>
              </div>
              <h2 class="wow fadeInRight" data-wow-delay="0.3s" >What we Offer</h2>
              <p class="wow fadeInUp" data-wow-delay="0.4s">It is a form of payment, which can be exchanged online to buy goods and 
              services. There are lots of companies, which have issued their own currencies known as tokens. These currencies can be
              traded particularly for the service or goods that the company offers.</p>
          </div>
          <div class="row align-items-center">
              <div class="col-lg-4 col-md-6 col-sm-12 mt-md-30">
                  <div class="services-block-four v2 wow fadeInLeft"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/1.png" alt=""/>
                          </div>
                          <h3><Link to="/">Investment Advise</Link></h3>
                          <div class="text">To simplify its understanding, we can go through a simple analogy that is a Google Doc.</div>
                      </div>
                      <Link to="/" class="icon_foot"><i class="fa fa-long-arrow-right"></i></Link>
                  </div>
                  <div class="services-block-four v2 wow fadeInLeft"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/2.png" alt=""/>
                          </div>
                          <h3> <Link to="/" >Wealth Management</Link></h3>
                          <div class="text">This is the way in which a decentralized distribution chain is being created, where everyone can access this document at the same time. </div>
                      </div>
                      <Link to="/" class="icon_foot"> <i class="fa fa-long-arrow-right"></i></Link>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 mt-md-30">
                  <div class="services-block-four v2 wow fadeInUp"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/3.png" alt=""/>
                          </div>
                          <h3> <Link to="/" >Technical Support</Link></h3>
                          <div class="text">UNILYSIS is a peer-to-peer technology-dependent, eliminating the need for central authorities or banks. It is the entire responsibility of the network to manage transactions. </div>
                        
                      </div>
                      <Link to="/" class="icon_foot"> <i class="fa fa-long-arrow-right"></i></Link>
                  </div>
                  <div class="services-block-four v2 wow fadeInUp"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/4.png" alt=""/>
                          </div>
                          <h3><Link to="/"> Financial Planning</Link></h3>
                          <div class="text">It is a form of payment, which can be exchanged online to buy goods and services. There are lots of companies, which have issued their own currencies known as tokens.</div>
                      </div>
                      <Link to="/" class="icon_foot"> <i class="fa fa-long-arrow-right"></i></Link>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 mt-md-30 mt-sm-0">
                  <div class="services-block-four v2 wow fadeInRight"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/5.png" alt=""/>
                          </div>
                          <h3><Link to="/">Market Base</Link></h3>
                          <div class="text">Any can use it at the same time. The modifications done to the doc are being recorded in real-time so that the changes become entirely transparent. </div>
                      </div>
                      <Link to="/" class="icon_foot"> <i class="fa fa-long-arrow-right"></i></Link>
                  </div>
                  <div class="services-block-four v2 wow fadeInRight"  data-wow-delay="0.5s">
                      <div class="inner-box">
                          <div class="icon-img-box">
                              <img src="https://unl.finance/SiteAssets/img/icons/6.png" alt=""/>
                          </div>
                          <h3><Link to="/">Consulting Services</Link></h3>
                          <div class="text">These currencies can be traded particularly for the service or goods that the company offers.</div>
                        </div>
                        <Link to="/" class="icon_foot"> <i class="fa fa-long-arrow-right"></i></Link>
                  </div>
              </div>

          </div>
          
      </div>
      </section>
    </Router>
  );
}
function Services() {
  return (
    <section class="section-padding-100-70 ico-about-bg relative clearfix" id="services">
      <div class="container">
          <div class="section-heading text-center">
              <div class="dream-dots justify-content-center wow fadeInDown" data-wow-delay="0.3s">
                  <span class="gradient-text blue">OUR FEATURES</span>
              </div>
              <h2 class="wow fadeInLeft" data-wow-delay="0.3s"> Why Choose Us</h2>
              <p class="wow fadeInRight" data-wow-delay="0.4s">
                We are an expert team of qualified professionals, traders, analysts, diligent bankers, and other 
                individuals who have a complete understanding and knowledge of bonds, stocks, forex, futures, and 
                specially cryptocurrencies. We can provide you with reliable and excellent investment ideas, leaving 
                you with great profits in the end. 
              </p>
          </div>
          <div class="row">
              <div class="col-12 col-md-6 col-lg-4 wow fadeInDown" data-wow-delay="0.5s">
                  <div class="service_single_content text-left mb-100">
                      <div class="service_icon">
                          <img src="https://unl.finance/SiteAssets/img/icons/corporate/1.svg" alt=""/>
                      </div>
                      <h6>Go Live in Minutes</h6>
                      <p>A private network of computers associated with a shared program is utilized to carry out a number of transactions and process any kind of payments in UNILYSIS coins.</p>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="service_single_content text-left mb-100 ">
                      <div class="service_icon">
                          <img src="https://unl.finance/SiteAssets/img/icons/corporate/2.svg" alt=""/>
                      </div>
                      <h6>Manage like A Pro</h6>
                      <p>The first and primary benefit of UNILYSIS coins is that there is no need to get entered in the process of paying taxes. Let’s understand the process.</p>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 wow fadeInDown" data-wow-delay="0.8s">
                  <div class="service_single_content text-left mb-100">
                      <div class="service_icon">
                          <img src="https://unl.finance/SiteAssets/img/icons/corporate/3.svg" alt=""/>
                      </div>
                      <h6>Scale to Success</h6>
                      <p>When it comes to international purchases and standard wire transfers, fees, and cost required to exchange one currency to another are included.</p>
                  </div>
              </div>
              
          </div>
      </div>
      </section>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function Footer() {
  return (
    <Router>
    <footer class="footer-area bg-img">
        <div class="striples-bg">
	        <section class="our_team_area section-padding-100-70 clearfix" id="team">
	            <div class="container">
	                <div class="row">
	                    <div class="col-12">
	                        <div class="section-heading text-center">
                                <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.5s">
	                                <span>Our Creative Team</span>
	                            </div>
	                            <h2 class="wow fadeInUp" data-wow-delay="0.7s">We Have a Great Team</h2>
	                            <p class="wow fadeInUp" data-wow-delay="0.8s">to find the ones who get it right. We trust our future with experts everyday</p>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="col-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
	                       <div class="our-team ico-team">
	                            <div class="team_img">
	                                <img src="https://unl.finance/SiteAssets/img/team-img/member1.png" class="mt-30 width-80" alt="chef-1"/>
	                                <ul class="social">
                                      <Link to="/"><i class="fa fa-facebook"></i></Link>
                                      <Link to="/"><i class="fa fa-twitter"></i></Link>
                                      <Link to="/"><i class="fa fa-google-plus"></i></Link>
	                                </ul>
	                            </div>
	                            <div class="team-content">
	                                <h4 class="title">Randy crishen</h4>
	                                <span class="post">Founder</span>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
	                       <div class="our-team ico-team">
	                            <div class="team_img">
	                                <img src="https://unl.finance/SiteAssets/img/team-img/member2.png" class="mt-30 width-80" alt="chef-1"/>
	                                <ul class="social">
                                      <Link to="/"><i class="fa fa-facebook"></i></Link>
                                      <Link to="/"><i class="fa fa-twitter"></i></Link>
                                      <Link to="/"><i class="fa fa-google-plus"></i></Link>
	                                </ul>
	                            </div>
	                            <div class="team-content">
	                                <h4 class="title">Monica Ashker</h4>
	                                <span class="post">Founder</span>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
	                       <div class="our-team ico-team">
	                            <div class="team_img">
	                                <img src="https://unl.finance/SiteAssets/img/team-img/member3.png" class="mt-30 width-80" alt="chef-1"/>
	                                <ul class="social">
	                                    
                                    <Link to="/"><i class="fa fa-facebook"></i></Link>
                                    <Link to="/"><i class="fa fa-twitter"></i></Link>
                                    <Link to="/"><i class="fa fa-google-plus"></i></Link>
	                                </ul>
	                            </div>
	                            <div class="team-content">
	                                <h4 class="title">Tollay Ramzomi</h4>
	                                <span class="post">Founder</span>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay="0.9s">
	                       <div class="our-team ico-team">
	                            <div class="team_img">
	                                <img src="https://unl.finance/SiteAssets/img/team-img/member4.png" class="mt-30 width-80" alt="chef-1"/>
	                                <ul class="social">
                                    <Link to="/"><i class="fa fa-facebook"></i></Link>
                                    <Link to="/"><i class="fa fa-twitter"></i></Link>
                                    <Link to="/"><i class="fa fa-google-plus"></i></Link>
	                                </ul>
	                            </div>
	                            <div class="team-content">
	                                <h4 class="title">Jacke Wilson</h4>
	                                <span class="post">Founder</span>
	                            </div>
	                        </div>
	                    </div>

	                </div>
	            </div>
	        </section>
	    </div>
        <div class="footer-content-area mt-0">
            <div class="container">
                <div class="row ">
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="footer-copywrite-info">
                            <div class="copywrite_text fadeInUp" data-wow-delay="0.2s">
                                <div class="footer-logo mb-4">
                                    <Link to="/"><img src="https://unl.finance/SiteAssets/img/logo.png" alt="logo" style={{width:"100px"}}/></Link>
                                </div>
                              </div>
                            <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                                <Link to="/"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/"><i class="fa fa-google-plus" aria-hidden="true"></i></Link>
                                <Link to="/"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="/"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-3 col-md-6">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                                <h5>PRIVACY & TOS</h5>

                                <Link to="/"><p>Advertiser Agreement</p></Link>
                                <Link to="/"><p>Acceptable Use Policy</p></Link>
                                <Link to="/"><p>Privacy Policy</p></Link>
                                <Link to="/"><p>Technology Privacy</p></Link>
                                <Link to="/"><p>Developer Agreement</p></Link>
                            </div>
                        </div>
                    </div>
                      
                    <div class="col-12 col-lg-2 col-md-6 ">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                <h5>NAVIGATE</h5>
                                <Link to="/"><p>Advertisers</p></Link>
                                <Link to="/"><p>Developers</p></Link>
                                <Link to="/"><p>Resources</p></Link>
                                <Link to="/"><p>Company</p></Link>
                                <Link to="/"><p>Connect</p></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-6 ">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                                <h5>CONTACT US</h5>
                                <p>Brandon C Espinoza 4729 Matheson StreetKenora; ON M4C 1M5</p>
                                <p>+1 8074663826</p>
                                <p>unilysys@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </footer>
    </Router>
  );
}
function Pricing() {
  return (
    <Router>
    <section class="pricing section-padding-100-70"  id="pricing">
      <div class="container">
          <div class="section-heading text-center"> 
              <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.5s">
                  <span class="gradient-text blue">PRICING PLANS</span>
              </div>
              <h2 class="wow fadeInUp" data-wow-delay="0.6s">Our Pricing Plans</h2>
              <p class="wow fadeInUp" data-wow-delay="0.7s">We are a leading cryptocurrency trading company that uses breakthrough 
                and evolving proprietary technologies and deal in cryptocurrency trading services to help businesses and individuals
               to yield higher profits. 
              </p>
          </div>
          <div class="row no-gutters">
              <div class="col-lg-4 col-md-6">
                  <div class="single_price_table_content text-center wow fadeInLeft" data-wow-delay="0.8s" >
                      <div class="price_table_text">
                          <h5>Begginer</h5>
                          <h1>Free</h1>
                          <p>Always</p>
                      </div>
                      <div class="table_text_details">
                          <p>250GB Bandwidth</p>
                          <p>08 Email Account</p>
                          <p>Unlimited Database </p>
                          <p>10GB Free Disk </p>
                          <p>24/7 Support</p>
                      </div>
                      <div class="table_btn mt-50">
                      <Link to="/" class="btn more-btn">Start</Link>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="single_price_table_content active text-center wow fadeInUp" data-wow-delay="0.8s" >
                      <div class="price_table_text">
                          <h5>Business</h5>
                          <h1>$24.99</h1>
                          <p>Per Month</p>
                      </div>
                      <div class="table_text_details">
                          <p>250GB Bandwidth</p>
                          <p>08 Email Account</p>
                          <p>Unlimited Database </p>
                          <p>10GB Free Disk </p>
                          <p>24/7 Support</p>
                      </div>
                      <div class="table_btn mt-50">
                      <Link to="/" class="btn more-btn">Start</Link>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="single_price_table_content text-center wow fadeInRight" data-wow-delay="0.8s" >
                      <div class="price_table_text">
                          <h5>professional</h5>
                          <h1>$84.99</h1>
                          <p>Per Month</p>
                      </div>
                      <div class="table_text_details">
                          <p>250GB Bandwidth</p>
                          <p>08 Email Account</p>
                          <p>Unlimited Database </p>
                          <p>10GB Free Disk </p>
                          <p>24/7 Support</p>
                      </div>
                      <div class="table_btn mt-50">
                        <Link to="/" class="btn more-btn">Start</Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </section>
      </Router>
  );
}
function Faq() {
  return (
    <Router>
    <div class="faq-timeline-area section-padding-100-85" id="faq">
      <div class="container">
        <div class="section-heading text-center">
            
            <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.3s">
                <span class="gradient-text blue">REPEATED QUESTIONS</span>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay="0.5s">  Frequently Questions</h2>
            <p class="wow fadeInUp" data-wow-delay="0.7s">Below are some common frequently asked questionshendrerit justo quisque quis rhoncus exeget semper semlamat lobortis velit estibulum ante.</p>
        </div>
        <div class="row align-items-center">
            <div class="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
                <img src="https://unl.finance/SiteAssets/img/core-img/digital-3.png" alt="" class="center-block img-responsive wow fadeInLeft" data-wow-delay="0.7s"/>
            </div>
            <div class="col-12 col-lg-6 col-md-12">
                <div class="dream-faq-area mt-s ">
                    <dl style={{marginBottom:"0"}}>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s">What is Cryptocurrency?</dt>
                        <dd class="wow fadeInRight" data-wow-delay="0.9s">
                            <p>It is one of the innovative internet-based medium to exchange money that relies on crypto graphical functions to manage financial transactions. It is controlled by the blockchain technology to attain transparency, decentralization, and immutability.</p>
                        </dd>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s"> How cryptocurrencies can be sent?</dt>
                        <dd>
                            <p>These currencies can be sent directly between 2 parties through the utilization of public and private keys. To do such transfers, there is a minimal fee required that permits users to neglect the unreasonable fees charged by traditional financial centers like banks, or more.</p>
                        </dd>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s">What is UNILYSIS?</dt>
                        <dd>
                            <p>It is a consensus network, which offers a new payment system based on the internet. It is entirely a digital money. It requires no central authority or brokers. If we see the user’s point of view, then it can be taken as pretty much cash for the internet.</p>
                        </dd>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s">What are the advantages of UNILYSIS?</dt>
                        <dd>
                            <p>There are many benefits of UNILYSIS. It gives us payment freedom, demands very low fees, acquires fewer risks or scams, offers a higher level of security and control, etc. In addition, it is completely neutral and transparent.</p>
                        </dd>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s">Is UNILYSIS secure?</dt>
                        <dd>
                            <p> Of course, UNILYSIS has a great security record. It is one of the biggest distributed computing projects in the world. It is just a physical cash stored in a digital medium controlled by strong algorithms and protocols.</p>
                        </dd>
                        <dt class="v2 wave wow fadeInRight" data-wow-delay="0.9s">Is UNILYSIS legal?</dt>
                        <dd>
                            <p>As far as the legacy is concerned, there are different forms of cryptocurrencies that are not legal at all. Even, UNILYSIS is not legal in many countries, but some countries may restrict the licensing of such entities like UNILYSIS.</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
      </div>
    </div>
    </Router>
  );
}