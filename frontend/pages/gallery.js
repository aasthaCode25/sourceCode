import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Header from '../layout/header-3';
import Footer2 from '../layout/footer-2';
import { useEffect } from 'react';
import { fetchStrapiData } from '../lib/fetchStrapiData';
function Gallery({pics}) {
  
   


  const options = {
    buttons: {
      backgroundColor: '#1C7293',
      iconColor: '#e8eddf',
      iconPadding: '7px'
    },
    caption: {
      captionColor: '#e8eddf',
      captionFontSize: '22px'
    },
    thumbnails: {
      thumbnailsOpacity: 1
    },
    settings: {
      overlayColor: 'rgba(6, 90, 130, 0.9)',
      showThumbnails: false, // Hide thumbnails by default
      transitionSpeed: 500,
      hideControlsAfter: false
    },
    progressBar: {
      height: '3px',
      fillColor: '#e8eddf',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* Banner */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/cover.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Gallery</h1>
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Gallery
                  </li>
                </ul>
              </nav>
              {/* Breadcrumb Row End */}
            </div>
          </div>
        </div>

        <section
          className="content-inner-2 wow m-5 fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
        
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="clearfix">
                  <ul id="masonry" className="row" data-column-width="3">
                    {pics?.map((pic, index) => (
                      <li
                        key={index}
                        className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.1s"
                      >
                        <div className="dlab-box style-2 m-b30">
                          <div className="dlab-media">
                            <a href={pic?.image?.formats?.large?.url}>
                              <Image
                                src={pic?.image?.formats?.small?.url}
                                layout="responsive"
                                width={320}
                                height={320}
                                alt="galleryImage"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export async function getServerSideProps() {
  const pics = await fetchStrapiData("galleries?populate=*");
  return {
    props: {
      pics, 
    },
  };
}
export default Gallery;
