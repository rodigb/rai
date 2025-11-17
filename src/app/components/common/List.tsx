"use client";

import { Agent } from "./interface";
import { Colours } from "../../statics/colours";

export default function AgentList({ agents }: { agents?: Array<Agent> }) {
  const handleClick = (agent: Agent) => {
    console.log("Clicked agent:", agent);
  };

  return (
    <>
      {!agents || agents.length === 0 ? (
        <p className="text-[var(--text)] flex items-center justify-center p-10">
          No agents available. Please creeate an agent.
        </p>
      ) : (
        <ul
          role="list"
          className="divide-y cursor-pointer "
          style={{ borderColor: Colours.HighlightedBackground }}
        >
          {agents?.map((agent) => (
            <li
              key={agent.name}
              className="text-[var(--text)] flex justify-between gap-x-6 py-5 p-5 hover:bg-[var(--highlightedBackground)] hover:text-[var(--highlightedText)] hover:bg-opacity-10 cursor-pointer transition-colors duration-200"
              onClick={() => handleClick(agent)}
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold  hover:text-[var(--highlightedText)] transition-colors duration-200">
                    {agent.name}
                  </p>
                  <p className="mt-1 truncate text-xs/5 hover:text-[var(--foreground)] transition-colors duration-200">
                    {agent.description}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 hover:text-[var(--highlightedText)] transition-colors duration-200">
                  Version: {agent.version}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
