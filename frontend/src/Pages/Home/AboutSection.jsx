import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { IoCheckmarkSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import About6 from "../../assets/Home/About6.jpg";

function AboutSection() {
    return (
        <div className="h-screen w-full relative flex justify-center items-center bg-gray-100" id="AboutSection">
            <div className="h-[80vh] w-[91%] flex mb-[120px] shadow-2xl rounded-xl overflow-hidden">
                {/* Left Section with Image */}
                <div className="h-full w-1/2 flex justify-center items-center">
                    <div
                        style={{ backgroundImage: `url(${About6})` }}
                        className="bg-cover bg-center w-full h-full transform scale-105 transition-transform duration-700 hover:scale-110"
                    />
                </div>

                {/* Right Section with Text */}
                <div className="h-full w-1/2 flex flex-col justify-center bg-white p-10">
                    <div className="ml-[10%]">
                        {/* Heading */}
                        <div className="w-[40%] text-2xl font-bold flex items-center text-gray-700 tracking-wider mb-3">
                            <GiAutoRepair className="text-[#eb3301] mx-2" />
                            <h1>ABOUT US</h1>
                            <GiAutoRepair className="text-[#eb3301] mx-2" />
                        </div>

                        {/* Title */}
                        <div className="text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                            Dispelling Myths, Delivering Excellence.
                        </div>

                        {/* Meaningful Description */}
                        <div className="w-[85%] font-medium text-gray-600 leading-relaxed mb-6">
                            At our automobile service center, we understand how misconceptions about car repair can hold you back. Our mission is to debunk these myths by providing expert services that keep your vehicle in optimal condition. With a blend of innovation and expertise, we deliver repairs that are both reliable and hassle-free, ensuring your peace of mind.
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-6 font-semibold text-gray-700">
                            {[
                                "Exceptional Quality.",
                                "Unmatched Expertise.",
                                "Innovative Solutions.",
                                "Customer-Centric Approach.",
                                "Industry Leadership.",
                                "Sourcing the Best.",
                                "Immediate Quality.",
                                "Transforming the Ordinary."
                            ].map((item, index) => (
                                <div key={index} className="flex items-center text-lg">
                                    <IoCheckmarkSharp className="text-[#006AFF] mr-3" />
                                    <div>{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="h-[15vh] absolute bottom-0 right-0 left-0 w-full bg-[#111827] flex items-center justify-center gap-[5%] text-white py-4 shadow-inner">
                {[
                    { end: 725, suffix: "+", label: "PIONEER THROUGHS" },
                    { end: 129, suffix: "+", label: "CLIENT EXPECTATIONS" },
                    { end: 66000, separator: ",", label: "DELIVERED PROMISES" },
                    { end: 63000, separator: ",", label: "COMPANY AWARDS" },
                ].map((item, index) => (
                    <div key={index} className="w-[210px] text-center">
                        <div className="text-6xl font-extrabold text-[#54E2EB]">
                            <CountUp end={item.end} duration={2} separator={item.separator} suffix={item.suffix} />
                        </div>
                        <div className="text-lg font-semibold mt-2">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutSection;
