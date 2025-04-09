import Slider from "react-slick";
import Link from "next/link";

// Static array of activities
const activitiesData = [
  {
    id: 1,
    title: "HIV Intervention",
    description: "Aastha Parivaar focuses on preventing the spread of HIV through targeted interventions, accessible testing, and education.",
  },
  {
    id: 2,
    title: "Healthcare",
    description: "Aastha Parivaar provides general health check-ups, cervical cancer detection, and other health services.",
  },
  {
    id: 3,
    title: "Crisis Intervention",
    description: "Aastha Parivaar supports sex workers facing crises, including police raids and violence.",
  },
  {
    id: 4,
    title: "Children",
    description: "Aastha Parivaar works to improve the lives of orphans and vulnerable children of sex workers.",
  },
  {
    id: 5,
    title: "Legal Literacy",
    description: "Aastha Parivaar provides legal aid and support to sex workers to strengthen their knowledge of and claim their rights.",
  },
  {
    id: 6,
    title: "Income Generation",
    description: "Aastha Parivaar works to provide alternative livelihood options for sex workers.",
  },
];

function ServiceSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Optional: Word limit function to truncate descriptions
  function limitWords(text, wordLimit) {
    if (!text) return "";
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  const wordLimit = 100;

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12">
          <div
            className="section-head style-3 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <h6 className="sub-title text-primary bgl-primary mb-3">
            ACTIVITIES AND PROJECTS
            </h6>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="row">
        <div className="col-12">
          <Slider
            {...settings}
            className="service-slider"
            style={{
              maxWidth: "100%", // Ensure slider doesn’t exceed container
              overflow: "hidden", // Prevent slider overflow
            }}
          >
            {activitiesData.map(({ id, title, description }) => (
              <div
                key={id}
                className="item"
                style={{
                  padding: "0 10px", // Controlled spacing between slides
                }}
              >
                <div
                  className="dlab-blog style-2 m-b10 bg-light"
                  style={{
                    borderRadius: "20px",
                    maxWidth: "100%", // Ensure item fits slide
                    overflow: "hidden", // Prevent content overflow
                  }}
                >
                  <div
                    className="dlab-info p-2 text-center"
                    style={{
                      borderRadius: "20px",
                    }}
                  >
                    <h4
                      className="dlab-title"
                      style={{
                        fontSize: "clamp(1rem, 4vw, 1.5rem)", // Responsive title
                        marginBottom: "10px",
                      }}
                    >
                      {title}
                    </h4>
                    <p
                      className="m-b20 text-left"
                      style={{
                        fontSize: "clamp(0.875rem, 3vw, 1rem)", // Responsive text
                        margin: 0,
                        padding: "0 10px", // Prevent text overflow
                      }}
                    >
                      {limitWords(description, wordLimit)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ServiceSlider;