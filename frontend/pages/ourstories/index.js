import Footer2 from "../../layout/footer-2";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import Blog from "../../element/blog"
import Blog2 from "../../element/blog-2"
import Blog3 from "../../element/blog-3"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UpdateContext } from "../../context/updatedata";
import { fetchStrapiData } from "../../lib/fetchStrapiData";
function OurStories({blogs}) {
	const [currentPage, setCurrentPage] = useState(1); // Track the current page
	const [blogsPerPage] = useState(4);
	const { blogData, setBlogData } = useContext(UpdateContext);
	setBlogData(blogs)

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  // Calculate total pages
  const totalPages = Math.ceil((blogData?.length || 0) / blogsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  

  return (
   <>
	<Header3/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/cover.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Our Stories</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/">Home</Link></li>
							<Link href="/ourstories">
							<li className="breadcrumb-item active " style={{ cursor: "pointer" }} aria-current="page">Our Story</li></Link>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<Blog3 blogs={currentBlogs} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
	</div>
	<Footer2/>
    </>
  )
}

export async function getServerSideProps() {
  const blogs = await fetchStrapiData("blogs?populate=*");
  return {
	props: {
	  blogs, 
	},
  };
}
export default OurStories;
