fetch("../pages/layout.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("layout").innerHTML = html;
  })
  .catch((err) => console.error("Error cargando layout:", err));
