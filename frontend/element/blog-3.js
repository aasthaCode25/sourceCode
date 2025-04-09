import Link from "next/link"
import Blogdata from "../data/blogdata.json"
import { useState } from "react";
import { useContext } from "react";
import { UpdateContext } from "../context/updatedata";
// import Image from "../public/children.jpg"
function Blog3({ blogs, totalPages, currentPage, onPageChange }) {
	const { blogData } = useContext(UpdateContext);
	
console.log("pageeeeeeeeeeeeeee",blogs)
	// const [blog, setBlog] = useState(null);
	//  const data = blogs;
	// console.log("dataaaaaaa", data)
	// const { title } = data[1];
	// const image = blog[1]?.title;
	// console.log("image",image)
  return (
    <>
     {/* <!-- Blog --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Blog & News</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
               {blogs?.map((blog)=>(
				<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="dlab-blog blog-half m-b30">
					<div className="dlab-media">
						 <Link href="blog-details-3"><a><img src={blog?.image1?.formats?.thumbnail?.url} 
        alt={blog.title || "Blog post"} style={{height:"200px"}}/></a></Link> 
					</div>
					<div className="dlab-info">
						<h5 className="dlab-title">
							<Link href={`/ourstories/${blog.documentId}`}><a>{blog?.titile}</a></Link>
						</h5>
						<p><Link href={`/ourstories/${blog.documentId}`}><a>{blog?.intro?.length > 70 ? `${blog.intro.slice(0, 100)}...` : blog?.intro}</a></Link> </p>
						<div className="dlab-meta">
							<ul>
								<li className="post-date"><i className="flaticon-clock m-r10"></i>{blog?.publishDate}</li>
								{/* <li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li> */}
								{/* <li className="post-share"><i className="flaticon-share"></i>
									<ul>
										<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
										<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
										<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
									</ul>
								</li> */}
							</ul>
						</div>								
					</div>
				</div>
			</div>
			   ))}
					
					
					
					
				</div>
				{totalPages > 1 && (
            <div className="pagination text-center mt-4 d-flex justify-content-center ">
              <button
                className="btn btn-primary me-2"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="btn btn-primary ms-2"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
			</div>
		</section>
    </>
  )
}

export default Blog3;