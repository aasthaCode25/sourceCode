
import Link from 'next/link';
import { useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix  " >
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark" >
                           <Link href="/">
								<a>
                                <img  style={{ width: '90px', height: '90px' }} src="/images/new.jpg" alt="" />

									{/* <img className="custom-logo" src="/images/logo/asthalogo.png" alt="" /> */}
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        {/*  */}
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo/asthalogo.png"  style={{ width: '60px', height: '60px' }}alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
								<li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/aboutPage"><a>About Us</a></Link></li>
                                {/* <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Wishlist</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
										<li><Link href="/about-us-1"><a>About Us</a></Link></li>
										<li><Link href="/faq-1"><a>Faq</a></Link></li>
										<li><Link href="/pricing-table-1"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-1"><a>Team</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li> */}
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Our Work</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        {/* <li><Link href="/hivInterventionWork"><a>HIV INtervention Work </a></Link></li> */}
										<li><Link href="/children"><a>Children</a></Link></li>
                                        <li><Link href="/alternativelivelihoods"><a>Alternative Livelihood</a></Link></li>
                                        <li><Link href="/health"><a>Health</a></Link></li>
                                        {/* <li><Link href="/hiv-aids"><a>HIV / AIDS</a></Link></li> */}
                                    </ul>
                                </li>
                                {/* <li className={`${open === "our-resources" ? "open" : ""}`}><a onClick={() => setOpen("our-resources")}><span>Our Resources</span><i className="fa fa-chevron-down"></i></a>
                                     <ul className="sub-menu">
                                        <li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li>
										<li><Link href="/blog-details-1"><a>Blog Details</a></Link></li>
                                    </ul> 
                                </li> */}
                                <li><Link href="/ourstories"><a>Our Stories</a></Link></li>
                                <li className={`${open === "supportus" ? "open" : ""}`}><a onClick={() => setOpen("supportus")}><span>Our Resources</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/donations"><a>Resources</a></Link></li>
										<li><Link href="/reports"><a>Reports</a></Link></li>
                           
                                        {/* <li><Link href="/wishlistPage"><a>Amazon Wishlists</a></Link></li> */}
                                    </ul>
                                </li>
                               
                                 <li><Link href="/gallery"><a>Gallery</a></Link></li> 
                               
                        
                                <li><Link href="/careers"><a>Careers</a></Link></li>
                                <li className={`${open === "supportus" ? "open" : ""}`}><a onClick={() => setOpen("supportus")}><span>Support Us</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/donations"><a>Donate</a></Link></li>
										<li><Link href="/internships"><a>Internships</a></Link></li>
                                        <li><Link href="/volunteer"><a>Volunteers</a></Link></li>
                                        
                                        {/* <li><Link href="/wishlistPage"><a>Amazon Wishlists</a></Link></li> */}
                                    </ul>
                                </li>
                                <li><Link href="/contactus"><a>Conatct Us</a></Link></li>
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
                                    <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
                                    <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="contact-us-1"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>