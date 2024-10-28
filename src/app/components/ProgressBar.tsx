import React from "react";
import "./progressBar.css";

export default function ProgressBar({
  item,
  status,
}: {
  item: {
    name: string;
    percentage: string;
  };
  status: boolean;
}) {
  return (
    <div className="progress">
      <span className="skill">
        {item.name} <i className="val">{item.percentage}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="pogressbar"
          style={status ? { width: item.percentage + "%" } : { width: "1px" }}
        ></div>
      </div>
    </div>
  );
}
