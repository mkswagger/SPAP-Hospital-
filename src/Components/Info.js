import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We are here to solve your medical queries and provide post-medical care support. Our platform allows you to connect with experienced online doctors who can offer expert medical advice, answer your questions, and provide guidance for post-treatment care. Whether you need help understanding your diagnosis, managing your symptoms, or finding resources for recovery, our team of dedicated healthcare professionals is available to support you.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="LLM Powered Preliminary Diagnosis"
          description="We use state-of-the-art technology to assess your symptoms and provide preliminary diagnosis. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy lifestyle and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Post Medical Care Support"
          description="Our Post Medical Care Support service is designed to help you navigate the recovery process after treatment. From managing your medications to monitoring your progress, our team of healthcare professionals is here to provide personalized care and support."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
