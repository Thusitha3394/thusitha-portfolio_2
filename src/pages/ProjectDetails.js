import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();

  // Example: Dynamic project details by ID
  const projects = {
    "data-pipeline": {
      title: "End-to-End Data Engineering Project with AWS S3 + Databricks + Pyspark",
      description:
        "This project demonstrates a complete end-to-end data engineering and analytics pipeline for analyzing Indian Premier League (IPL) cricket data. It utilizes cloud- native services and big data technologies to process, clean, and prepare rich cricket datasets for future analytical and machine learning use cases.",
      image: "/pipeline-diagram.jpg", // put this image in public folder
      reportUrl: "/project-reports/data-pipeline.pdf",
      github: "https://github.com/Thusitha3394/IPLData_DataEngineering_Project_Pyspark_Databricks",
    },
  };

  const project = projects[projectId];

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

export default ProjectDetails;
