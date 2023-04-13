import React from "react";
import { useNavigate } from "react-router-dom";
import './AboutPage.css'

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="about-title">About page</h1>
      <p className="about-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam, quis officia assumenda asperiores doloribus fugiat provident
        a eum tenetur.
      </p>
      <button className="btn" onClick={() => navigate(-1)}>
        Back to to-do list
      </button>
    </>
  );
};

export default AboutPage;
