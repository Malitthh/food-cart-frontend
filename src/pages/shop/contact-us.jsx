import React, { useState, useRef } from "react";
import HeaderBar from "/src/components/HeaderBar";
import Footer from "/src/components/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { ContactSchema } from "../../schema/contactSchema";

const contactUs = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(contactInfo, "test", form.current);

    emailjs
      .sendForm(
        "service_igjkp0f",
        "template_9njn2mh",
        form.current,
        "8YXBJOHzg-v2auB3Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setContactInfo({});
          toast.success("message sent!");
        },
        (error) => {
          console.log(error.text);

          toast.error(error.text);
        }
      );
  };

  const onChangeInput = (e) => {
    console.log(e.target.id, e.target.value);
    validateField(e.target.id, e.target.value);
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const validateBeforeSave = (e) => {
    e.preventDefault();
    const err = validateForm(contactInfo, ContactSchema);
    console.log(err, "update");
    if (err) {
      setErrors(err);
    } else {
      sendEmail(e);
      router.push("/");
    }
  };

  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, ContactSchema);
console.log(errMsg, "ms")
    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
  };

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
            <li className="nav-item">
              <a href="index-2.html" className="permal-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">Contact</span>
            </li>
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
              marginwidth="0"
            ></iframe>
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
                        <p className="dsc">
                          {" "}
                          No 68/13A 3rd Cross Street, 11
                          <br />
                          Kandy
                          <br /> Sri Lanka
                        </p>
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
                      <li>
                        <a href="#" title="twitter" className="socail-btn">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="facebook" className="socail-btn">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="pinterest" className="socail-btn">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="youtube" className="socail-btn">
                          <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="instagram" className="socail-btn">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--Contact form--> */}
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="contact-form-container sm-margin-top-112px">
                  <form name="frm-contact" ref={form}>
                    <p className="form-row">
                      
                      <input
                        type="text"
                        name="from_name"
                        id="from_name"
                        onChange={onChangeInput}
                        value={contactInfo.from_name}
                        placeholder="Your Name"
                        className="txt-input"
                      />
                    </p>
                    <p className="text-red-500 text-xs italic">
                        {errors && errors["from_name"]}
                      </p>
                    <p className="form-row">
                      <input
                        type="email"
                        name="reply_to"
                        id="reply_to"
                        onChange={onChangeInput}
                        value={contactInfo.reply_to}
                        placeholder="Email Address"
                        className="txt-input"
                      />
                     
                    </p>
                    <p className="text-red-500 text-xs italic">
                        {errors && errors["reply_to"]}
                      </p>
                    <p className="form-row">
                      <input
                        type="tel"
                        name="contact_no"
                        id="contact_no"
                        onChange={onChangeInput}
                        value={contactInfo.contact_no}
                        placeholder="Phone Number"
                        className="txt-input"
                      />
                    
                    </p>
                    <p className="text-red-500 text-xs italic">
                        {errors && errors["contact_no"]}
                      </p>
                    <p className="form-row">
                      <textarea
                        name="message"
                        id="message"
                        onChange={onChangeInput}
                        value={contactInfo.message}
                        cols="30"
                        rows="9"
                        placeholder="Leave Message"
                      ></textarea>
                      
                    </p>
                    <p className="text-red-500 text-xs italic">
                        {errors && errors["message"]}
                      </p>
                    <p className="form-row">
                      <button
                        className="btn btn-submit"
                        type="button"
                        onClick={(e) => validateBeforeSave(e)}
                      >
                        send message
                      </button>
                    </p>

                    {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Phone Number</label>
      <input type="text" name="contact_no" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default contactUs;
