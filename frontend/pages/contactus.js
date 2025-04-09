import Link from "next/link";
import Contactusform from "../element/contactusform";
import Footer2 from "../layout/footer-2";
import Header3 from "../layout/header-3";


function Contactus() {
  return (
    <>
	<Header3/>
	<div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/cover.jpg)" }}
        >
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Contact Us</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Get A Quote --> */}
		{/* <Quote2/> */}
        <Contactusform/>
		{/* <section className="section-b2">
        <div className="container">
          <div className="row">
            <div className="col-12"> 
              <iframe 
                title="Map of Location" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.0967124717263!2d72.885383!3d19.059485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89809e780fd%3A0x2b0523a175480ad7!2sAastha%20Parivaar!5e0!3m2!1sen!2sus!4v1737894533927!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
              /> 
            </div>
          </div>
        </div>
      </section> */}
	</div>
	<Footer2/>
       </>
  )
}

export default Contactus;