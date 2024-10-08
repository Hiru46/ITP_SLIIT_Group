import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero1 from "../../assets/Home/Car2.jpg"
import Hero2 from "../../assets/Home/Car1.jpg"
import Hero3 from "../../assets/Home/Hero3.jpg"
import About7 from "../../assets/Home/About7.jpg"



export default function HeroSection() {
    const slides = [
        {
            title: "NON STOP CAR SERVICES CENTER",
            subtitle: "Get Your  Car Solution",
            description:
                "Take Payments online with a scalable platform that grows your perfect business",
            buttonText: "GET AN APPOINTMENT",
            backgroundImage: Hero1,
        },

        {
            title: "EXPERT CAR REPAIRS",
            subtitle: "Quality Service You Can Trust",
            description:
                "Our experienced technicians ensure your vehicle is in top condition.",
            buttonText: "BOOK NOW ",
            backgroundImage: Hero3,
        },
    ];

    return (
        <div className="relative w-full h-full min-h-[75vh] overflow-hidden " id="HeroSection">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={5000}
                showArrows={false}
                showStatus={false}
            >
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="relative w-full h-full"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                minHeight: "76vh",
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 max-w-[750px] text-white flex flex-col text-start p-8">
                                <h4 className="mt-[15%] font-bold text-xl">{slide.title}</h4>
                                <h1 className="text-6xl font-bold mt-4">
                                    {slide.subtitle}{" "}
                                    <span className="text-[#0BEEFD]">Amazing</span>
                                </h1>
                                <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                                <button className="bg-transparent hover:bg-[#006AFF] px-4 py-3 text-xl text-[#006AFF] hover:text-white border-2 font-bold   border-[#006AFF] rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mt-4 w-[30%]">
                                    {slide.buttonText}
                                </button>


                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}