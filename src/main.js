import landingHTML from "./sections/landing/landing.html?raw";
import aboutHTML from "./sections/about/about.html?raw";
import workHTML from "./sections/work/work.html?raw";
import contactHTML from "./sections/contact/contact.html?raw";

import "./sections/landing/landing.css";
import "./sections/about/about.css";
import "./sections/work/work.css";
import "./sections/contact/contact.css";

// CSS is auto-injected by Vite
document.getElementById("landing").innerHTML = landingHTML;
document.getElementById("about").innerHTML = aboutHTML;
document.getElementById("work").innerHTML = workHTML;
document.getElementById("contact").innerHTML = contactHTML;
