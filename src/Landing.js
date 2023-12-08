import React from "react";

const MyComponent = () => {
  const openNewTab = () => {
    // Open a new tab
    window.open("https://example.com", "_blank");
  };

  const redirectToURL = () => {
    // Redirect in the same tab
    window.location.href = "https://example.com";
  };

  return (
    <div>
      <button onClick={openNewTab}>Open in New Tab</button>
      <button onClick={redirectToURL}>Redirect to URL</button>
    </div>
  );
};

export default MyComponent;
