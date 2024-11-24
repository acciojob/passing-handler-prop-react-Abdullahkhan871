import React from "react";

const ColourSelector = ({ ...props}) => {
  const { config, selectNextBackground } = props;

  return (
    <button
      key={config.key}
      className={config.classname}
      onClick={() => selectNextBackground({ background: config.background })}
    >
      {config.label}
    </button>
  );
};
export default ColourSelector;

// key={config.key}
// config={config}
//
// className={config.classname}
