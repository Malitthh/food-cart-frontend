import React from "react";
import HeaderBar from "/src/components/HeaderBar";
import Footer from "/src/components/Footer";

const contactUs = () => {
    return (
        <>
            <HeaderBar />

            {/* <!--Hero Section--> */}
            <div className="hero-section hero-background">
                <h1 className="page-title">Contact Us</h1>
            </div>

            <div className="container">
                <nav className="biolife-nav nav-86px">
                    <ul>
                        <li className="nav-item"><a href="index-2.html" className="permal-link">Home</a></li>
                        <li className="nav-item"><span className="current-page">Contact</span></li>
                    </ul>
                </nav>
            </div>

            <div className="page-contain contact-us">
            {/* <!-- Main content --> */}
                <div id="main-content" className="main-content">
                <div className="wrap-map biolife-wrap-map" id="map-block">
                <iframe
                        width="1920"
                        height="591"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.430034710735!2d80.5907618226369!3d7.294543952145923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1663435366924!5m2!1sen!2slk"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0">
                </iframe>
            </div>

            <div className="container">
                <div className="row">
                {/* <!--Contact info--> */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-info-container sm-margin-top-27px xs-margin-bottom-60px xs-margin-top-60px">
                            <h4 className="box-title">Our Contact</h4>
                            <ul className="addr-info">
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Addess:</b>
                                        <p className="dsc"> No 68/13A 3rd Cross Street, 11<br/>Kandy<br/> Sri Lanka</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Phone:</b>
                                        <p className="dsc"> (+94) (81) 2447441</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Email:</b>
                                        <p className="dsc">foodcart@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="if-item">
                                        <b className="tie">Store Open:</b>
                                        <p className="dsc">8am - 08pm, Mon - Sat</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="biolife-social inline">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!--Contact form--> */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-form-container sm-margin-top-112px">
                            <form action="#" name="frm-contact" >
                                <p className="form-row">
                                    <input type="text" name="name" value="" placeholder="Your Name" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <input type="email" name="email" value="" placeholder="Email Address" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <input type="tel" name="phone" value="" placeholder="Phone Number" className="txt-input"/>
                                </p>
                                <p className="form-row">
                                    <textarea name="mes" id="mes-1" cols="30" rows="9" placeholder="Leave Message"></textarea>
                                </p>
                                <p className="form-row">
                                    <button className="btn btn-submit" type="submit">send message</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default contactUs;