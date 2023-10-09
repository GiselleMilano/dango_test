import React from "react";

export default function TitleFontSize(props) {
  function onChangeFontSize(event) {
    props.onChangeFontSize(event.target.value);
  }

  let inputValue = "";
  let disabled = true;

  if (props.productId) {
    disabled = false;

    let object = props.products.filter((obj) => {
      return obj.id === props.productId;
    });

    if (object.length > 0) {
      inputValue = object[0].fontSize;
    }
  }

  return (
    <div className="flex flex-row items-center gap-3">
      <input
        id="default-range"
        type="range"
        value={inputValue}
        disabled={disabled}
        onChange={onChangeFontSize}
        className="w-52 h-2 rounded-lg appearance-none cursor-pointer bg-neutral-600"
      />
      <p>{inputValue}</p>
    </div>
  );
}
