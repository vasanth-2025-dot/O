const ADMIN = { user: "001", pass: "001" };
const USER  = { user: "002", pass: "002" };

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (
    (u === ADMIN.user && p === ADMIN.pass) ||
    (u === USER.user && p === USER.pass)
  ) {
    window.location.href = "dashboard.html";
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

/* LOAD FILES FOR DASHBOARD */
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
          <a href="${file.url}" target="_blank">Open</a>
        `;
        container.appendChild(box);
      });
    })
    .catch(err => console.error("JSON load error", err));
}
