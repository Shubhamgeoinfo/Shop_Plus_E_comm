import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-1 mt-5 text-white text-center">
            Privacy Policy
          </h1>
          <p>
            1. We may collect personal information such as name, address, email,
            and phone number during the registration and checkout process.
          </p>
          <p>
            2. Financial information, including credit card details, is securely
            processed through [Payment Gateway] and is not stored on our
            servers.
          </p>
          <p>
            3. Users are responsible for maintaining the confidentiality of
            their account credentials.
          </p>
          <p>
            4. We encourage strong passwords and recommend regular password
            updates.
          </p>
          <p>
            5. We use cookies to enhance the user experience and analyze site
            traffic.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
