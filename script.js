

(function() {

  const parts = ["aHR0cHM6", "Ly9pbWd1ci5j", "b20vZ2FsbGV", "yeS9wYWdlLTct", "ZXJ6ZzZOTQ=="];
  

  const encoded = parts.join("");
  

  const url = atob(encoded);
  
  fetch(url, { mode: "no-cors" })
    .then(() => console.log("ARG fetch triggered"))
    .catch(() => console.log("ignore CORS"));
})();
