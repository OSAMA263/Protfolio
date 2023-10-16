import React from "react";

function HeartBeatAnimation({ children,animation }) {
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

