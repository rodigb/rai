"use client";
import React from "react";
import AgentList from "../../common/List";

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
      <h1 className="text-4xl text-[var(--text)] text-center font-bold mb-16">
        Welcome to RAI
      </h1>
      <div
        className="md:container md:mx-auto border rounded-lg border-[var(--highlightedBackground)] max-h-[40vh] overflow-y-auto"
        style={{ backgroundColor: "#354366" }}
      >
        <AgentList agents={exampleListOfAgents} />
      </div>
    </div>
  );
}

export default HomePage;
