import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Bernardo Semiao ⓒ {year}</p>
    </footer>
  );
}

