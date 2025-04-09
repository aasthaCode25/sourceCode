import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header3 from '../layout/header-3';
import Footer2 from '../layout/footer-2';
const WishlistPage = () => {
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <section
          className="content-inner-2 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
				<div className="row">
   
          <h1>Amazon Wishlist</h1>
          <p>
            Aastha Parivaar has partnered with Amazon to bring everyday items to the women and children of our community living in slums. 
          </p>
          <p>
            Simply order any of the items on our wishlists and Amazon will deliver them directly to their door.
          </p>
          <p>
            These items are simple and inexpensive, but make a massive difference to the lives of the women and children we support.
          </p>
          <p>
            There is a wide range of items available to order; including nutritional, household and sanitary products for women; and clothing, stationary and toys for children.
          </p>
          <p>
            Let's make wishes come true! 
          </p>
          {/* <Link to="/wishlist-items" className="btn btn-primary">
            Be a Genie
          </Link>  */}
          </div>
          <div className="row">
          <div className="col-lg-5 col-md-5 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								{/* <div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div> */}
								<h4 className="dlab-title">
									<a href="/https://www.amazon.in/hz/wishlist/ls/14F43UGKQD83M/ref=cm_go_nav_hz"><a>Children</a></a>
								</h4>
								{/* <p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p> */}
							</div>
							<div className="dlab-media dlab-img-effect zoom">
                            <img src="/children.jpg" alt=""/>
							</div>
						</div>
                        </div>

                        <div className="col-lg-5 col-md-5 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								{/* <div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div> */}
								<h4 className="dlab-title">
									<a href="/https://www.amazon.in/hz/wishlist/ls/16W3HQUBGZWPN/ref=cm_go_nav_hz"><a>Women</a></a>
								</h4>
								{/* <p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p> */}
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/about/women.jpg" alt=""/>
							</div>
						</div>
                        </div>
                        </div>
    </div>


 
          </section>
          </div>
    <Footer2/>
    </>
    
  )}

export default WishlistPage