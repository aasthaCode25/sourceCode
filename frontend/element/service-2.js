import { useState } from 'react';
import Link from 'next/link';
 // Import Bootstrap 4 CSS

function Service2() {
  const [open, setOpen] = useState("p2");
s
  return (
    <>
      {/* <!-- Service --> */}
      <section className="content-inner-2" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
        <div className="container">
          <div className="row">
            {/* Header Section */}
            <div className="col-md-4 col-sm-12">
              <div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <h6 className="sub-title text-primary bgl-primary mb-3">AREAS OF WORK</h6>
              </div>
            </div>

            {/* Service Items */}
            <div className="col-md-4 col-sm-12">
              <a href="/children">
                <div
                  className={`${open === "p1" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                  onMouseOver={() => setOpen("p1")}
                >
                  <div className="icon-bx-sm radius bgl-primary">
                    <Link href="/children">
                      <a className="icon-cell">
                        <i className="flaticon-healthcare"></i> {/* HIV/STI care */}
                      </a>
                    </Link>
                  </div>
                  <div className="wraper-effect"></div>
                  <div className="icon-content">
                    <h6 className="dlab-title mb-3">HIV/STI Prevention, Treatment and care and support</h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 col-sm-12">
              <a href="/alternativelivelihoods">
                <div
                  className={`${open === "p2" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                  onMouseOver={() => setOpen("p2")}
                >
                  <div className="icon-bx-sm radius bgl-primary">
                    <Link href="/alternativelivelihoods">
                      <a className="icon-cell">
                        <i className="flaticon-pregnant"></i> {/* Sexual Reproductive Health */}
                      </a>
                    </Link>
                  </div>
                  <div className="wraper-effect"></div>
                  <div className="icon-content">
                    <h6 className="dlab-title mb-3">Sexual Reproductive Health</h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 col-sm-12">
              <a href="/health">
                <div
                  className={`${open === "p3" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                  onMouseOver={() => setOpen("p3")}
                >
                  <div className="icon-bx-sm radius bgl-primary">
                    <Link href="/health">
                      <a className="icon-cell">
                        <i className="flaticon-money-bag"></i> {/* Economic strengthening */}
                      </a>
                    </Link>
                  </div>
                  <div className="wraper-effect"></div>
                  <div className="icon-content">
                    <h6 className="dlab-title mb-3">Economic strengthening</h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p4" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-barrier"></i> {/* Structural barriers */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Addressing structural barriers</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p5" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-shield"></i> {/* Gender-Based Violence */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Gender-Based Violence education and support</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p6" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-megaphone"></i> {/* Advocacy and Sensitization */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Advocacy and Sensitization sessions for police, health care workers and other public services institutions</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p7" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p7")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-insurance"></i> {/* Social Protection */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Social Protection and Social Entitlements</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p8" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p8")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-graduation-cap"></i> {/* Academic and health support */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Academic and health support for children of sex workers</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div
                className={`${open === "p9" ? "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 mb-4 box-hover wow fadeInUp"}`}
                onMouseOver={() => setOpen("p9")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <Link href="#">
                    <a className="icon-cell">
                      <i className="flaticon-tools"></i> {/* Skill building */}
                    </a>
                  </Link>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h6 className="dlab-title mb-3">Alternate Livelihood and Skill building</h6>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;