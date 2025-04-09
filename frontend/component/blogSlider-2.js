import Link from "next/link";
import Slider from "react-slick";
import { UpdateContext } from "../context/updatedata";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";

function BlogSlider2() {
  const { blogData } = useContext(UpdateContext);

  const fallbackImage = "/images/children.jpg";
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2, // 2 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600, // Below 600px (mobile)
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!blogData || blogData.length === 0) {
    return <div style={{ color: "#6c757d" }}>Loading blog posts...</div>;
  }

  function limitWordsMarkdown(markdownText, wordLimit) {
    if (!markdownText) return "";
    const words = markdownText.split(/\s+/);
    if (words.length <= wordLimit) return markdownText;
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  const wordLimit = 30;

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Slider
        {...settings}
        style={{
          maxWidth: "100%", // Ensure slider stays within container
          overflow: "hidden", // Prevent slider overflow
          padding: "0 10px", // Controlled spacing
        }}
      >
        {blogData?.map(({ titile, section1, publishDate, intro, documentId, image1 }) => (
          <div
            key={documentId}
            style={{
              padding: "0 10px", // Spacing between items
              maxWidth: "100%", // Ensure item fits slide
            }}
          >
            <a href={`/ourstories/${documentId}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#f8f9fa",
                  overflow: "hidden", // Prevent overflow
                  maxWidth: "100%", // Constrain to slide width
                }}
              >
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      image1?.formats?.small?.url ||
                      image1?.formats?.thumbnail?.url ||
                      fallbackImage
                    }
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#f8f9fa",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: "inline" }}>
                        <span>
                          <strong>Posted: </strong>
                          {publishDate}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h4
                    style={{
                      fontSize: "clamp(16px, 4vw, 24px)", // Responsive title
                      marginBottom: "10px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#000",
                    }}
                  >
                    <Link href="/blog-details-2">
                      <a style={{ textDecoration: "none", color: "inherit" }}>{titile}</a>
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontSize: "clamp(14px, 3vw, 16px)", // Responsive text
                      marginBottom: "20px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      color: "#333",
                      padding: "0 5px", // Prevent text from hitting edges
                    }}
                  >
                    {limitWordsMarkdown(intro, wordLimit)}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogSlider2;