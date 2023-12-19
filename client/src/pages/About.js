import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about1.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At E-commerce Shop Plus, we believe in delivering more than just
            products; we strive to provide an exceptional and personalized
            online shopping experience. Our journey began with a passion for
            connecting people with the latest trends, high-quality products, and
            a seamless shopping process.
          </p>
          <p className="text-justify mt-2">
            Our mission is to redefine online shopping by combining cutting-edge
            technology with a customer-centric approach. We aim to create a
            platform where users can discover a diverse range of products, enjoy
            secure transactions, and be a part of a community that values
            innovation and reliability.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
