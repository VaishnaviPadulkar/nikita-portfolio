import React, { useState } from "react";
import img1 from "../assets/port.jpeg";
// import bg from "../assets/bg1.jpeg";

import Navbar from "./Navbar";
import ResumeDetails from "./ResumeDetails";
import Projects from "./Projects";
import Contact from "./Contact";

const Port = () => {
  return (
    <>
      <Navbar />

      <div
        className="container d-flex align-items-center mt-1"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464286141216-66af0ebf8a36?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="container"> */}
        <div className="row align-items-center pt-5">
          <div className="col-sm-7 text-center">
            {/* animation: myAnim 1s ease 0s 1 normal forwards */}
            <img
              src={img1}
              className="img-fluid "
              style={{
                borderRadius: "50%",
                // border: "10px solid #ccffe6",
                animation: "myAnim 1s ease 0s 1 normal forwards ",
              }}
              height="65%"
              width="65%"
              alt=""
            />
            {/* <img src="" alt="" /> */}
          </div>

          <div
            className="col-sm-4 "
            style={{ animation: "myAnimi 1s ease 0s 1 normal forwards " }}
          >
            <b>
              <span
                style={{
                  fontSize: "50px",
                }}
              >
                माझा परिचय
              </span>
            </b>
            <p className="">नमस्कार!</p>
            <p>
              <b> मी सौ. निकिता जाने-कुलकर्णी,</b> एक मराठी कवयित्री, लेखिका,
              पक्षीशास्त्रज्ञ आणि जीवविज्ञान प्राध्यापिका आहे. माझं साहित्यिक
              कार्य आणि अध्यापन ह्या दोन्ही क्षेत्रात माझं मन अगदी पूर्णपणे
              गुंतलेलं आहे.
            </p>
            <p>
              माझं <b>“नभी माझ्या चांदण्या”</b> हे पुस्तक वाचकांच्या पसंतीस
              उतरतं आहे. या पुस्तकात मी निसर्ग, मानवी संबंध, आणि आत्मविचार या
              विषयांवर कविता लिहिल्या आहेत. माझ्या कविता वाचकांना नव्या
              विचारांच्या क्षितिजावर घेऊन जातात आणि त्यांना आत्मपरिक्षण करायला
              लावतात.
            </p>
            <p>
              <b>प्राध्यापिका</b> म्हणून माझी भूमिका खूपच महत्वाची आहे.
              जीवविज्ञानातील माझं सखोल ज्ञान आणि उत्कृष्ट अध्यापन कौशल्यामुळे मी
              या क्षेत्रात आपलं स्थान निर्माण केलं आहे.
            </p>
            <p>
              <b>पक्षीशास्त्रज्ञ</b> म्हणूनही मी निसर्गाच्या विविध पैलूंचा
              अभ्यास करते आणि पक्ष्यांच्या जीवनावर संशोधन करते. पक्ष्यांच्या
              व्यवहार, स्थलांतर, आणि त्यांच्या पर्यावरणाशी असलेल्या संबंधांचा
              सखोल अभ्यास करून मी निसर्गाच्या विविध गोष्टींवर प्रकाश टाकते.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>

      <ResumeDetails />
      <Projects />
      <Contact />
    </>
  );
};

export default Port;
