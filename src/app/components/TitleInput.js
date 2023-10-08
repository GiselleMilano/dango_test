"use client";
import React from "react";

export default function TitleInput(props) {
  function onChangeTitle(event) {
    props.onChangeTitle(event.target.value);
  }

  let inputValue = "";
  let disabled = true;

  if (props.productId) {
    disabled = false;

    let object = props.products.filter((obj) => {
      return obj.id === props.productId;
    });

    if (object.length > 0) {
      inputValue = object[0].title;
    }
  }

  return (
    <input
      type="text"
      className="w-52 border border-neutral-600 text-center text-neutral-600 rounded-sm"
      value={inputValue}
      disabled={disabled}
      placeholder="new title..."
      onChange={onChangeTitle}
    />
  );
}
