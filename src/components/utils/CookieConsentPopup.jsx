import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieConsentPopup() {
  return (
    <CookieConsent location="bottom" buttonText="I understand" cookieName="bestCookieInTheWorld" style={{ background: "#3f5f58", color: "#fff" }} buttonStyle={{ fontWeight: "bold", background: "#fff", color: "#3f5f58", fontSize: "16px" }} expires={150}>
      <p className="cookie-text m-0 text-light">This website uses cookies to enhance the user experience.</p>
    </CookieConsent>
  );
}

export default CookieConsentPopup;
