import React from "react";
import { useParams } from "react-router-dom";
import earlybuild from "../assets/earlybuild.png"; // Make sure this is in src/assets

function MLProjectDetails() {
  const { projectId } = useParams();

  const mlProjects = {
    "ml-rent-prediction": {
      title: "Machine Learning Project: Rental Price Prediction with Random Forest",
      description:
        "This Machine Learning project focuses on predicting rental prices using the Random Forest algorithm. It includes preprocessing, balancing, feature selection, hyperparameter tuning, and model evaluation to accurately predict rental values.",
      image: earlybuild,
      reportUrl: "/project-reports/Earlybuild_GmbH_Rent_Price_Prediction_Model .pdf",
      github: "https://github.com/earlybuild/Mohawk-ML-Project-Q2",
    },
  };

  const project = mlProjects[projectId];

  if (!project) return <div className="p-10">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full rounded-lg" />
      <p>{project.description}</p>
      <a
        href={project.reportUrl}
        className="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
        download
      >
        View Full Report
      </a>
      <br />
      <a
        href={project.github}
        className="text-gray-700 underline"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

export default MLProjectDetails;
