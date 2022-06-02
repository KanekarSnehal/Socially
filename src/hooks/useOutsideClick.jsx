import React, { useEffect, useRef } from "react";

export const useOutsideClick = (handler) => {
  const domNode = useRef();
  const handleOutsideClick = (e) => {
    if (domNode && !domNode.current.contains(e.tagret)) handler();
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return window.addEventListener("mousedown", handleOutsideClick);
  });
  return domNode;
};
