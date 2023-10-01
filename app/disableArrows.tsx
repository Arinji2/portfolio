"use client";
import * as React from "react";
import { useState, useEffect } from "react";

export default function DisableArrows() {
  useEffect(() => {
    window.addEventListener(
      "keydown",
      function (e) {
        if (["Space", "ArrowUp"].indexOf(e.code) > -1) {
          e.preventDefault();
        }
      },
      false
    );
  }, []);

  return null;
}
