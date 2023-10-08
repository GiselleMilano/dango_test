"use client";
import React from "react";

export default function TitleInput() {
  return (
    <input
      type="text"
      className="w-52 border border-neutral-600 text-center text-neutral-600 rounded-sm"
      defaultValue=""
      placeholder="new title..."
      disabled={true}
    />
  );
}
