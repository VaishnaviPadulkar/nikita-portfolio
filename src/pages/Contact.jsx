import React, { useState } from "react";
import { useAddUserMutation } from "../redux/userApi";

export default function Contact() {
  const { addUser } = useAddUserMutation();

  const [userData, setUserData] = useState([
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "message", type: "text" },
  ]);
  console.log(userData);

  return (
    <div className="">
      {/* <div
        id="contact"
        className="container-fluid d-flex align-align-items-center py-5"
      ></div> */}
      <hr />
      <div className="d-flex align-items-center py-5">
        <div div className="container">
          <div className="row d-flex justify-content-evenly">
            <div>
              <p>
                तुम्ही पक्षीशास्त्र, जीवविज्ञान, किंवा कविता सादरीकरणासाठी
                कार्यक्रम आयोजित करत असाल तर कृपया संपर्क साधा. माझ्या
                कार्यशाळा, व्याख्याने, आणि कवितांच्या सादरीकरणासाठी तुमचं
                आमंत्रण स्वागतार्ह आहे. प्रत्येक सादरीकरण विशेष आणि ज्ञानवर्धक
                असं होईल याची खात्री आहे. पक्षीशास्त्राच्या कार्यशाळांमध्ये
                पक्ष्यांच्या जीवन, पर्यावरणीय प्रभाव, आणि संवर्धनाच्या बाबीवर
                चर्चा केली जाईल. जीवविज्ञान विभागासाठी, अद्ययावत संशोधन आणि
                ज्ञानवर्धनावर आधारित व्याख्याने आयोजित केली जातील. कविता
                सादरीकरणांच्या माध्यमातून, जीवनातील गूढ आणि सौंदर्याचा आनंद
                एकत्र घेता येईल.
              </p>
            </div>
            {/* <div className="col-sm-3 ">
              <strong>Phone</strong>
              <br />
              <span>12345 12345</span>
            </div> */}
            <div className="col-sm-2 ">
              <strong htmlFor="email">संपर्क ई-मेल :</strong>
              <br />
              <a href="mailto: nikita10jane@gmail.com">
                nikita10jane@gmail.com
              </a>
            </div>
            <div className="col-sm-2  ">
              <strong>Follow Me</strong>
              <br />
              <a
                className="py-2 d-flex gap-2 "
                href="https://www.instagram.com/nikitajkpoet?igsh=MWR0Zml2a2pwcndiaw=="
                target="_blank"
              >
                <i class="bi bi-instagram"></i>
                <p>nikitajkpoet</p>
              </a>
            </div>
            <div className="col-sm-2 ">
              <p>
                ©2024 Created By <br />
                Vaishnavi Padulkar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
