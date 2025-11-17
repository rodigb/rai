"use client";
import React from "react";
import AgentList from "../../common/List";
import Robot from "../../../statics/images/robot.gif";
import Button from "../../common/Button";

function HomePage() {
  const exampleListOfAgents = [
    {
      name: "TaskMaster3000",
      description: "An advanced task management AI.",
      version: "1.0.0",
    },
    {
      name: "ChatBot9000",
      description: "A conversational AI for customer support.",
      version: "2.1.0",
    },
  ];

  return (
    <div className="md:container md:mx-auto ">
      <h1 className="text-4xl text-[var(--text)] text-center font-bold pt-4 pb-8">
        Welcome to RAI
      </h1>
      <div className="flex items-center justify-center  ">
        <img src={Robot.src} alt="Robot" style={{ width: "150px" }} />
      </div>
      <div
        className="m-10 border border-[var(--highlightedBackground)] overflow-y-auto"
        style={{ backgroundColor: "#354366" }}
      >
        <AgentList agents={exampleListOfAgents} />
      </div>
      <div className="flex items-center justify-center mt-8 mb-8">
        <Button
          Label="Create New RAI"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
}

export default HomePage;
