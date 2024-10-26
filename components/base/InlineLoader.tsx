import React from "react";
import "@/styles/inline-loader.scss";

export default function InlineLoader() {
  return (
    <div className="inline-loader__wrapper">
      <div className="inline-loader__c-letter"></div>
      <div className="inline-loader__circle"></div>
    </div>
  );
}
