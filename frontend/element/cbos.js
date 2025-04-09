import { useState } from "react";

function Cbos() {
    const [open, setOpen] = useState("p2")
    return (
        <>
        
        {/* <!-- Service --> */}
        <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
            <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR CBOS
              </h6>
              <h2 className="title">Community Based Organizations</h2>
            </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <div className={`${open === "p1" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p1")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-office"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Vishwas Sehat Mahila Mandal</h4>
                                <p>Bar-based population in Malwani, Malad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className={`${open === "p2" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p2")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-website"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Jagruti Mahila Sanstha</h4>
                                <p>Bar-based population in Chembur, Mumbai</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className={`${open === "p3" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p3")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-pie-charts"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Gaurav</h4>
                                <p>Male sex worker population across Mumbai</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className={`${open === "p4" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p4")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-dollar"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Pragati Mahila Sanstha</h4>
                                <p>Home-based population in Dombivili, Thane</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-line-graph"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Triveni Samaj Vikas Kendra</h4>
                                <p>Hijra population in Malwani, Malad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className={`${open === "p6" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-help"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Asha Darpan</h4>
                                <p>Brothel-based population in Grant Road, Mumbai</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-line-graph"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Triveni Samaj Vikas Kendra</h4>
                                <p>Hijra population in Malwani, Malad</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-line-graph"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Kranti Mahila Sanstha –</h4>
                                <p> Home-based population in Gowandi, Mumbai </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
                            {/* <div className="icon-bx-sm radius bgl-primary"> 
                                <a href="#" className="icon-cell">
                                    <i className="flaticon-line-graph"></i>
                                </a> 
                            </div> */}
                            <div className="wraper-effect"></div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Sangini Mahila Sanstha –</h4>
                                <p> Brothel-based population in Navi Mumbai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cbos;