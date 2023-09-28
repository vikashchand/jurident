import React from "react";
import lawyer from "../../assets/Lawyerpic.jpeg";
import "./Aboutus.css";
import { Helmet } from "react-helmet-async";
const Aboutus = () => {
  return (
    <>
    <Helmet>
        <title>JURIDENT</title>
        <meta
          name="description"
          content="All your legal solutions at one place.
          Jurident provides a range of legal services to cater to both clients and lawyers by helping the clients to connect and find the best lawyers for their case while providing the lawyers with a platform to connect with their potential clients at the same time.
          We are a team of dedicated individuals working to bring a change and make an impact on the legal system by making it more efficient and convenient for not only clients bu
          but also lawyers.Contact us today and start your legal journey with us."
        />

        
        <link rel="canonical" href="/contact" />

        <meta  
        name ="keywords"
        content="Find lawyers for my case"
        
        /><meta  
        name ="keywords"
        content="Family lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Personal injury lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Employment law lawyer"
        
        /><meta  
        name ="keywords"
        content="File my case"
        
        /><meta  
        name ="keywords"
        content="How to file a case"
        
        /><meta  
        name ="keywords"
        content="Law consultation"
        
        /><meta  
        name ="keywords"
        content="Legal services online"
        
        /><meta  
        name ="keywords"
        content=""
        
        />
        
        <meta  
        name ="keywords"
        content="Intellectual property lawyer consultation"
        
        />
        
        <meta  
        name ="keywords"
        content="Legal services online"
        
        />
<meta  
        name ="keywords"
        content="Experienced lawyers online"
        
        />
<meta  
        name ="keywords"
        content="Civil case consultation "
        
        />
<meta  
        name ="keywords"
        content="Legal procedure consultation"
        
        />
<meta  
        name ="keywords"
        content="Business lawyer consultation"
        
        />
<meta  
        name ="keywords"
        content="Lawyer near me"
        
        />

<meta  
        name ="keywords"
        content="Family lawyers near me"
        
        />
        <meta  
        name ="keywords"
        content="Law consultations near me"
        
        />
        <meta  
        name ="keywords"
        content="Affordable Law consultation"
        
        />
        <meta  
        name ="keywords"
        content="Legal professionals community online"
        
        />
        <meta  
        name ="keywords"
        content="Websites for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="Online Community for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="EXECELLENCE"
        
        />
        
         <meta  
        name ="keywords"
        content="EXPERIENCE"
        
        /> 
        
        
        <meta  
        name ="keywords"
        content="INTEGRITY"
        
        />

        



      </Helmet>
      
      <div className="container1">
        <div className="col1">
          <img src={lawyer} alt="lawyer" className="img-lawyer" />
        </div>
        <div className="col2">
          <h1 className="heading">About Us</h1>
          <p className="para">
            Welcome to our website! We are a team of dedicated individuals
            passionate about [describe your mission or purpose]. Our goal is to
            [describe what you aim to achieve]. At [your company/organization
            name], we strive to provide [describe your products/services]. Our
            team is committed to [describe your core values or principles]. If you
            have any questions or would like to learn more about us, feel free to
            contact us at our email id. If you have any more questions, head on to 
            the faq section!
          </p>
        </div>
      </div>

    </>
  );
};

export default Aboutus;
