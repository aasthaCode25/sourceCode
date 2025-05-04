import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="https://res.cloudinary.com/dohfnsylp/image/upload/v1742278470/329556531_2513679922129189_7598771351180623195_n_4fe221c950.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">Empowering Marginalised Communities Across Mumbai and Thane.</h2>
							<p>Aastha Parivaar (AP), a registered organization dedicated to empowering the sex worker community in Mumbai and Thane. We provide a common platform that supports various groups within this community, including bar girls, street-based workers, home-based workers, and male/transgender workers. Since our registration on April 13, 2009, under the Society’s Registration Act, we have focused on addressing vital areas of need within the key population (KP) community to foster a sustainable impact. Our initiatives encompass Sexual Reproductive Health and Rights, resource availability, crisis intervention, legal advocacy, social protection, and efforts to reduce risk and vulnerability for both sex workers and their children. We have been privileged to implement a wide range of projects and activities across Maharashtra, significantly benefiting marginalized KP members. Our organization holds certifications for 12A, 80G, FCRA, and CSR 1, validating our commitment to transparency and focused impact.

</p>
						</div>
						{/* <ul className="list-check primary m-b30">
							<li>Suspendisse ullamcorper mollis orci in facilisis.</li>
							<li>Etiam orci magna, accumsan varius enim volutpat.</li>
							<li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
							<li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li>
						</ul> */}
						{/* <Link href="/about-us-2"> */}
						<a className="btn btn-primary rounded-xl gradient" href="/aboutPage">Learn More</a>
						{/* </Link> */}
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;
