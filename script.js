const ADMIN = { user: "001", pass: "001" };
const USER  = { user: "002",  pass: "002" };

const DATA_URL = "https://vasanth-2025-dot.github.io/siva/data.json";

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (
    (u === ADMIN.user && p === ADMIN.pass) ||
    (u === USER.user && p === USER.pass)
  ) {
    window.location = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

/* DEVICE DETECTION */
function detectDevice() {
  const w = window.innerWidth;
  document.body.classList.remove("mobile", "tablet", "desktop");

  if (w <= 600) document.body.classList.add("mobile");
  else if (w <= 1024) document.body.classList.add("tablet");
  else document.body.classList.add("desktop");
}

window.addEventListener("load", detectDevice);
window.addEventListener("resize", detectDevice);

/* LOAD FILES */
if (window.location.pathname.includes("dashboard.html")) {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("filesContainer");
      container.innerHTML = "";

      data.files.forEach(file => {
        const box = document.createElement("div");
        box.className = "file-box";
        box.innerHTML = `
          <h3>${file.name}</h3>
          <a href="${file.url}" target="_blank">Go</a>
        `;
        container.appendChild(box);
      });
    });
}


