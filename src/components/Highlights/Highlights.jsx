import Masonry from '../animations/Masonry';
import './Highlights.css';

const Highlights = () => {
  const items = [
    {
      id: "1",
      img: "/highlights/award.jpg",
      url: "",
      height: 500,
    },
    {
      id: "2",
      img: "/highlights/award1.jpeg",
      url: "",
      height: 450,
    },
    {
      id: "3",
      img: "/highlights/team.jpg",
      url: "",
      height: 350,
    },
    {
      id: "4",
      img: "/highlights/presentation.jpg",
      url: "",
      height: 400,
    },
    {
      id: "5",
      img: "/highlights/presentation1.jpeg",
      url: "",
      height: 380,
    },
    {
      id: "6",
      img: "/highlights/presentation2.jpeg",
      url: "",
      height: 420,
    },
    {
      id: "7",
      img: "/highlights/lab1.jpg",
      url: "",
      height: 300,
    },
    {
      id: "8",
      img: "/highlights/lab2.jpg",
      url: "",
      height: 350,
    },
    {
      id: "9",
      img: "/highlights/lab3.jpeg",
      url: "",
      height: 400,
    },
    {
      id: "10",
      img: "/highlights/lab4.jpeg",
      url: "",
      height: 450,
    },
    {
      id: "11",
      img: "/highlights/lab5.jpeg",
      url: "",
      height: 400,
    },
    {
      id: "12",
      img: "/highlights/classroom1.jpg",
      url: "",
      height: 400,
    },
    {
      id: "13",
      img: "/highlights/classroom2.jpg",
      url: "",
      height: 400,
    },
    {
      id: "14",
      img: "/highlights/classroom3.jpg",
      url: "",
      height: 350,
    }
  ];

  return (
    <section className="highlights-section">
      <div className="container">
        <h2 className="highlights-title">
          <span className="title-gradient">Professional Highlights</span>
        </h2>
        <p className="highlights-subtitle">
          Moments that define my journey in data analytics, AI training, and technical leadership
        </p>

        <div className="masonry-container">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
