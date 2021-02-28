/* global WEBSITE_ID, JS_URL */

export default () => {
  // Umami analytics (privacy focused) integration
  if (
    process.env.NODE_ENV === "production" &&
    WEBSITE_ID &&
    typeof window !== "undefined"
  ) {
    (function(s, o, g, a, m) {
      a = s.createElement(o);
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.defer = 1;
      a.src = g;
      a.setAttribute("data-website-id", WEBSITE_ID);
      m.parentNode.insertBefore(a, m);
    })(document, "script", JS_URL);
  }
};
