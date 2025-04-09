import Link from "next/link";
import Footer2 from "../layout/footer-2";
import Header3 from "../layout/header-3";
import resources from "../data/resources.json" 
import Image from "next/image";
function Ourresources() {
    console.log(resources)
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/cover.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Resources</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Our resources
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg18.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
                {resources.map((resource)=>(
                     <div
                     className="col-lg-4 col-sm-6 wow fadeInUp"
                     data-wow-duration="2s"
                     data-wow-delay="0.1s"
                   >
                     <div className="dlab-team style-3 m-b30">
                       <div className="dlab-media">
                         <Link href="#"><a>
                         <Image 
          src={resource.image} 
          alt={resource?.title} 
          width={200} 
          height={150} 
          layout="responsive" 
          onError={(e) => {
            console.error('Error loading image:', e); 
            // Optional: Display an error message or fallback image
          }} 
        />
                         </a></Link>
                         {/* <div className="overlay-content">
                           <ul className="dlab-social-icon">
                             <li>
                               <a
                                 href="https://www.facebook.com/"
                                 className="fa fa-facebook"
                               ></a>
                             </li>
                             <li>
                               <a
                                 href="https://www.instagram.com/"
                                 className="fa fa-instagram"
                               ></a>
                             </li>
                             <li>
                               <a
                                 href="https://ads.twitter.com/login"
                                 className="fa fa-twitter"
                               ></a>
                             </li>
                           </ul>
                         </div> */}
                       </div>
                       <div className="dlab-content">
                         <div className="clearfix">
                           <h3 className="dlab-name">
                             {resource?.title}
                           </h3>
                           <span className="dlab-position">
                             {resource?.desc}
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                ))}
             
             
             
              
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default Ourresources;
