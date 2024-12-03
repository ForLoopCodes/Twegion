// src/Sidebar.tsx
import React from "react";

const RightBar: React.FC = () => {
  return (
    <div className="h-full hidden w-96 xl:flex flex-col items-start p-4">
      <div className="sidebar-item text-sm items-center py-4 px-3 gap-2 rounded-xl text-white font-semibold border border-neutral-600 opacity-60 font-light cursor-pointer rounded-lg transition">
        <p className="mb-4">
          Twegion is an innovative Mistral AI-powered bot that specializes in
          generating engaging and attractive Twitter threads focused on business
          topics. Whether you're seeking inspiration for your next tweet series
          or want to share insightful business thoughts, Twegion makes it
          effortless.
        </p>
        <p className="mb-4">
          What sets Twegion apart is its simplicity and versatility—it can
          create business-oriented content even when the input is completely
          random. Its straightforward design ensures that you receive
          contextually relevant responses, no matter what topic you bring up.
        </p>
        <p className="mb-4">
          Keep in mind that generating responses takes substantial computational
          effort. We ask users to use Twegion responsibly and avoid spamming to
          ensure everyone benefits from its capabilities.
        </p>
        <p className="mb-4">
          Made with ♥ by{" "}
          <a
            href="https://forloopcodes.github.io"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ForLoopCodes
          </a>
          .
        </p>
        <p className="mb-4">
          Follow me on{" "}
          <a
            href="https://x.com/forloopcodes"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RightBar;
