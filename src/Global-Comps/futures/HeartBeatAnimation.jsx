import React from "react";

export default function HeartBeatAnimation({ children,animation }) {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...animation,
        })
      )}
    </div>
  );
}

