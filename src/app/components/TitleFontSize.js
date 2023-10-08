import React from "react";

export default function TitleFontSize() {
  return (
    <div className="flex flex-row items-center gap-3">
      <input
        id="default-range"
        type="range"
        defaultValue={0}
        disabled={true}
        className="w-52 h-2 rounded-lg appearance-none cursor-pointer bg-neutral-600"
      />
      <p>{0}</p>
    </div>
  );
}
