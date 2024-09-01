import HomeNavbar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
import offer1 from "../../assets/Offers/offer1.jpeg";


function Offers(){

    return(

        <>
            <HomeNavbar/>

            <div className="offer-container">

                <div className="offer-description">
                    <h1 className="my-10 font-sans text-5xl font-bold tracking-wide text-center uppercase" >
                        Unlock Exclusive Savings: <br/>Your Ultimate Guide to Our Offers Page
                    </h1>
                    
                    <p className="mb-20 font-sans text-2xl text-center">Discover unbeatable deals and discounts on a wide range of car services at our service center! 
                        Our Offers Page is your one-stop destination for the latest promotions, 
                        designed to keep your vehicle in top condition without breaking the bank.
                         From seasonal maintenance packages to limited-time discounts on essential services like oil changes, 
                         brake repairs, and wheel alignments, we’ve got something for every car owner. 
                         
                    </p>
                </div>

                <div className="middle-section">
                    <div className="flex-row mx-10 ">
                        <div className="h-50 w-96">
                            <img 
                                src={offer1}
                                alt="offer1" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="offer-details">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p mb-20 font-sans text-xl text-center>
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Quick Fit Auto Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal &mdash; because when it comes to your car, 
                                only the best will do. Be Fit &mdash; Be Quick with Quick Fit Auto Center!
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

            <Footer/>
        
        </>

    );
}

export default Offers