import React, { useState } from "react";

const Selection = (prop) => {
  const { uniqkey, applyColor } = prop;

  const [selectionStyle, updateSelectionStyle] = useState("");

  return (
    <div
      className="fix-box"
      style={{ background: selectionStyle.background }}
      key={uniqkey}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      {uniqkey}
    </div>
  );
};

export default Selection;
