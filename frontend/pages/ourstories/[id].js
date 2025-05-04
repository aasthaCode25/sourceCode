import Footer2 from "../../layout/footer-2";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UpdateContext } from "../../context/updatedata";
import ReactMarkdown from "react-markdown";

function Storydetails() {
  const router = useRouter();
  const { id } = router.query;
  const { blogData } = useContext(UpdateContext);

  const selectedBlog = blogData?.filter((item) => item.documentId === id);

  if (!selectedBlog || selectedBlog.length === 0) {
    return <div>Blog not found.</div>;
  }

  const selectedBlogItem = selectedBlog[0]; // Assuming there's only one match

  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* Banner */}
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/cover.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Story</h1>
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <Link href="/ourstories">
                  <li className="breadcrumb-item active " style={{ cursor: "pointer" }} aria-current="page">Our Story</li></Link>
                  
                </ul>
              </nav>
              {/* Breadcrumb Row End */}
            </div>
          </div>
        </div>
        {/* Banner End */}

        {/* Blog Large */}
        <section className="content-inner bg-img-fix" style={{ backgroundImage: "url(images/background/bg2.png)", backgroundSize: "contain" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* blog start */}
                <div className="dlab-blog blog-single style-2">
                  
                     <div className="dlab-media rounded-md shadow">
                    {selectedBlogItem?.image1?.formats?.thumbnail?.url && (
                      <img src={selectedBlogItem?.image1?.formats?.large?.url || selectedBlogItem?.image1?.formats?.small?.url || selectedBlogItem?.image1?.formats?.thumbnail?.url } alt="" style={{maxHeight:"600px"}}/>
                    )}
                  
                  </div>
                  <div className="dlab-meta m-t30">
                    <ul>
                      <li className="post-date"><i className="flaticon-clock m-r10"></i>{selectedBlogItem?.publishDate}</li>
                      {/* <li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li> */}
                    </ul>
                  </div>
                  <h4 className="dlab-title">{selectedBlogItem?.title}</h4>
                  <div className="dlab-post-text">
                    {selectedBlogItem?.section1 && (
                      <ReactMarkdown>{selectedBlogItem?.section1}</ReactMarkdown>
                    )}
					<img  width="300" src={selectedBlogItem?.image2?.formats?.small?.url} alt="" />
                    {selectedBlogItem?.section2 && (
                      <ReactMarkdown>{selectedBlogItem?.section2}</ReactMarkdown>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default Storydetails;
