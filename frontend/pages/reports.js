import Link from "next/link";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../component/clientSlider";
import Blog2 from "../element/blog-2";
import Counter2 from "../element/counter2";
import About from "../element/pageaboutsus"
import Header from "../layout/header-3";
import Footer2 from "./../layout/footer-2";
import Testimonial2 from "../element/testimonial-2";
import OurFeatures from "../element/our-features"
import OurFeatures3 from "../element/our-features-3"
// import OurFeatures2 from "../element/our-features-2"
import AboutUs from "../element/aboutUs";
import AboutUs_3 from "../element/aboutUs-3"
import AllServices2 from "../element/cbos"
import AllServices from "../element/all-services"
import AllServices3 from "../element/all-services-3"
import { fetchStrapiData } from "../lib/fetchStrapiData";
function Reports({reports}) {
  const [isOpen, setOpen] = useState(false);
// const [reports, setReports] = useState(null);
//    useEffect(()=>{
//      const fetchReport  = async () => {
//     const response = await fetch("http://localhost:1337/api/reports?populate=*");
//     const data = await response.json();
//     setReports(data.data)
//      }
//      fetchReport();
//   },[])
  console.log("reports", reports)
  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || "report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/cover.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Reports</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                   Reports
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        {/* <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR STEPS
              </h6>
              <h2 className="title">How It’s Work</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Designing</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Launching</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- About us --> */}
 

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow m-5 fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
          <table class="table table-bordered">
  <thead>
    <tr>
      {/* <th scope="col"  className="text-center">#</th> */}
      <th scope="col"  className="text-center">Document Name</th>
      <th scope="col"  className="text-center">Year of Publication</th>
      <th scope="col"  className="text-center">Download</th>
    </tr>
  </thead>
  <tbody>
   {reports?.map((report)=>(
       <tr>
   
       <td className="text-center">{report?.name}</td>
       <td className="text-center">{report?.period}</td>
       <td className="d-flex align-items-center justify-content-center">
       <a href={report.reportFile.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
       <button type="button" class="btn btn-dark">Download</button>
</a>
                </td>
     </tr>
    ))} 
   
    
    
    {/* <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export async function getServerSideProps() {
  const reports = await fetchStrapiData("reports?populate=*");
  return {
    props: {
      reports, 
    },
  };
}
export default Reports;
