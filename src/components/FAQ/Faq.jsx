import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./Content";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="All the frequently asked question are answered here in Juriedent "/>
        <link rel="canonical" href="/contact" />

        <meta
          name="description"
          content="The app's brochure includes detailed information about its features and services. Additionally, there is a convenient redirect button that takes you directly to the quotation page on the app. This allows users to quickly access pricing information and explore the available options for legal services. "/>


          <meta
          name="description"
          content="We understand the importance of data security. Your information is protected under stringent protocols implemented by the app. To learn more about our security measures, we encourage you to review the terms and conditions as well as our privacy policy. You can access these documents by clicking on the redirect button that will take you to the dedicated page outlining our policies and practices. "/>


          <meta
          name="description"
          content="The app provides a range of legal services to cater to both clients and lawyers. As a client, you can connect with lawyers who specialize in various areas of law. Whether you need assistance with contracts, intellectual property, or any other legal matter, the app allows you to find the right lawyer to meet your specific needs.
          As a lawyer, the app offers you the opportunity to showcase your expertise and connect with potential clients. You can create a profile highlighting your experience and areas of practice, allowing clients to find and connect with you easily. "/>


          <meta
          name="description"
          content="Log in to the app as a client. Search for the specific type of lawyer
          you require.
          Browse through the list of available
          lawyers in that category.
          Select a lawyer's profile to view their
          qualifications and experience.
          Click on the  Connect button to
          establish contact with the selected lawyer.
          These steps will help you seamlessly connect with the right lawyer for your legal needs through the app.  "/>

          

      </Helmet>
      <h1 className="faq1">FAQ</h1>
      <h1 className="faq2">Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
