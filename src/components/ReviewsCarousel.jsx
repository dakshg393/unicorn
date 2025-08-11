import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profileImg from "../assets/images/profile1.png";



const ReviewsCarousel = () => {
  const cardData = [
    {
      image: profileImg,
      name: "Leyla Gimanov",
      post: "Head of Educonnect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: profileImg,
      name: "Alex Johnson",
      post: "Software Engineer",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: profileImg,
      name: "Samantha Lee",
      post: "Project Manager",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: profileImg,
      name: "Daniel Smith",
      post: "CEO",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: profileImg,
      name: "Emily Davis",
      post: "Marketing Lead",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <Carousel
    
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass="px-4 my-auto"
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={true}
  sliderClass="px-4"
  slidesToSlide={1}
  swipeable
>
      {cardData.map((item, index) => (
        <div
          key={index}
          className="bg-[#001A23] h-auto text-white mx-auto rounded-lg p-6 w-[353px] shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div>
              <h1 className="text-lg font-bold">{item.name}</h1>
              <p className="text-sm text-gray-300">{item.post}</p>
            </div>
          </div>

          <p className="mt-6 text-sm">{item.desc}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
