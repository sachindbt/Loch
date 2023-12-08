import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jack F",
      Sname: "Ex Blackrock PM",
      content:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      id: 2,
      name: "Yash P",
      Sname: "Ex Blackrock PM",
      content:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      id: 3,
      name: "Shiv S",
      Sname: "Ex Blackrock PM",
      content:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
    {
      id: 4,
      name: "Jack F",
      Sname: "Ex Blackrock PM",
      content:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms or 3 seconds)
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1, // Display 1.5 slides at a time for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Testimonial_dv">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <div className="head_content">
                <Typography variant="h3">{testimonial.name}</Typography>
                <Typography variant="h6">{testimonial.Sname}</Typography>
              </div>
              <Typography variant="body1">{testimonial.content}</Typography>
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
