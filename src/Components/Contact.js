import React, { useState } from "react";
import Fade from "react-reveal/Fade";
// import { db } from "../firebase";
// import firebase from "firebase";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = (e) => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
     e.preventDefault();
  //   db.collection("feedbacks")
  //     .add({
  //       name: name,
  //       email: email,
  //       subject: subject,
  //       message: message,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //     .then(() => {
  //       setName("");
  //       setEmail("");
  //       setSubject("");
  //       setMessage("");
  //       console.log("Your message was sent, thank you!");
  //       setSuccess(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(true);
  //     });
  };

  return (
    <section id="contact">
      <Fade bottom>
        <div>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{contactMessage}</p>
            </div>
          </div>

          <div className="row">
            <div className="eight columns">
              <form onSubmit={submitForm}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      value={name}
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      value={email}
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      value={subject}
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="20"
                      rows="10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      onClick={submitForm}
                      type="submit"
                      className="submit"
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
            {error ? <div className="error">Error boy</div> : ""}
            {success ? (
              <div className="success">
                <i className="fa fa-check green"></i>Your message was sent, pls wait for our reply. thank you!
              </div>
            ) : (
              ""
            )}
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {contactName}
                  <br />
                  {contactEmail}
                  <br />
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
