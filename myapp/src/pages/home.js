import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import icon_1 from "../assets/images/icon_1.svg"
import icon_2 from "../assets/images/icon_2.svg"
import icon_3 from "../assets/images/icon_3.svg"
import Navbar from '../components/header';
import Backend from '../components/form';
import Footer from '../components/footer';
import PdfDownloadButton from '../components/pdf';

function Home() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <Navbar />
            <section class="banner">
                <div class="container">
                    <div class="bg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" >
                        <div class="row">
                            <div class="col-lg-8 mx-auto" >

                            {/* <PdfDownloadButton /> */}

                                <div class="area" >
                                    <ul class="circles">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div >
                                <div>
                                    <div class="one" >
                                        <h1>MMT Resorts</h1>
                                        <h5 class="mb-4 bantxt">Book your dream getaway and enjoy the best moments with spacious rooms, relaxing amenities, and unforgettable experiences.</h5>
                                    </div>
                                    {/* <div class="two" >
                                <h1>MMT Resorts</h1>
                                <h5 class="mb-4">Book your dream getaway and enjoy the best moments with spacious rooms, relaxing amenities, and unforgettable experiences.</h5>
                                </div>
                                <div class="three" >
                                    <h1>MMT Resorts</h1>
                                    <h5 class="mb-4">Book your dream getaway and enjoy the best moments with spacious rooms, relaxing amenities, and unforgettable experiences.</h5>
                                    </div>  */}
                                </div>
                                <a href='#contact' className='butn'>rooms</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="banner_blw">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <h6>LUXURY VILLAS</h6>
                            <h2 class="h2tag" >Enjoy a luxury experience</h2>
                            <p>When visiting Chennai in big groups, renting villas is a cost-effective choice that doesn't sacrifice resort-style amenities. Chennai, a major metropolis in the coastal state of Tamil Nadu, is home to churches, museums, cultural and artistic hubs, and hallowed temples.</p>
                            <p>Chennai's white sand beaches along East Coast Road add to the city's appeal as a vacation resort, a romantic weekend getaway, and a major party hub. Experience the ultimate in luxury while renting a villa with ECR Holidays.</p>
                        </div>
                        <div class="col-lg-6 m-auto text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div class="vdo">
                                <video width={500} height={300}
                                    autoPlay
                                    nocontrols
                                    muted
                                    loop
                                    playsInline
                                    id="myVideo">
                                    <source src={require("../assets/images/vdo1.mp4")} type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="threebox">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div class="box">
                                <img src={icon_1} alt="img" />
                                <h5>Premium Rooms</h5>
                                <p>Let us create a personalized itinerary tailored to your desires, ensuring an unparalleled resort experience</p>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div class="box">
                                <img src={icon_2} alt="img" />
                                <h5>Swimming Pool</h5>
                                <p>Let the tranquil waters of our premium pool wash away your worries and transport you to a state of pure bliss. </p>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            <div class="box">
                                <img src={icon_3} alt="img" />
                                <h5>Luxury Resort
                                </h5>
                                <p>At our luxury resort, we invite you to embrace a world of tranquility, indulge in unparalleled luxury, and create memories that will last a lifetime.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="gallery pt-4" id="gallery">
                <div class="container">
                    <h2 class="h2tag text-center" >Our Gallery</h2>
                    <div class="row">
                        <div class="col-lg-9 mx-auto text-center">
                            <div class="row">
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g1.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="300">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g2.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g3.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="800">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g4.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g5.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1200">
                                    <div className='img_box'>
                                        <img src={require("../assets/images/g6.jpg")} alt="img" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact" id="contact">
                <div class="container">
                    <div class="row">

                        <div class="col-xl-6 m-auto">
                            <div class="contact_map_container">

                                <div class="contact_map">
                                    <div class="map">
                                        <div id="google_map" class="google_map">
                                            <div class="map_container">
                                                <div id="map">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.508909856339!2d78.11464695!3d9.9127531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57f62727b7b%3A0x5bddfd54ea244ae7!2sPeriyar%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717389712321!5m2!1sen!2sin"
                                                        width="60%" height="450" style={{ border: "0" }}
                                                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="contact_info_box d-flex flex-column align-items-center justify-content-center">
                                    <ul class="contact_info_list">
                                        <li class="d-flex flex-row align-items-start justify-content-start">
                                            <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={require("../assets/images/placeholder.png")} alt="" /></div></div>
                                            <div class="contact_info_text">1481 Creekside Lane Avila Beach, CA 931</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-center justify-content-start">
                                            <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={require("../assets/images/smartphone.png")} alt="" /></div></div>
                                            <div class="contact_info_text">+53 345 7953 32453</div>
                                        </li>
                                        <li class="d-flex flex-row align-items-center justify-content-start">
                                            <div><div class="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src={require("../assets/images/mail.png")} alt="" /></div></div>
                                            <div class="contact_info_text">yourmail@gmail.com</div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div class="col-xl-6 contact_col m-auto">
                            <Backend />
                            {/* <div class="contact_form_container">
						<div class="section_title_container_2">
							<div class="section_title"><h2 class="h2tag" >Contact Info</h2></div>
							<div class="section_text">Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum.</div>
						</div>
						<form action="#" class="contact_form" id="contact_form">
							<div class="row contact_row">
								<div class="col-md-6"><input type="text" class="contact_input" placeholder="Name" required="required" /></div>
								<div class="col-md-6"><input type="email" class="contact_input" placeholder="E-mail" required="required" /></div>
							</div>
							<div><textarea class="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
							<button class="contact_button">send message</button>
						</form>
					</div> */}
                        </div>
                    </div>
                </div>

            </section>

            <Footer />

            <script>
                AOS.init();
            </script>
        </>
    );
}

export default Home;


