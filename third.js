const resources = {
  html: [
    { name: "MDN HTML Reference", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" }
  ],

  css: [
    { name: "MDN CSS Reference", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "W3Schools CSS", link: "https://www.w3schools.com/css/" }
  ],

  javascript: [
    { name: "MDN JS Guide", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { name: "W3Schools JS", link: "https://www.w3schools.com/js/" }
  ],

  java: [
    { name: "W3Schools Java", link: "https://www.w3schools.com/java/" }
  ],

  "c++": [
    { name: "Learn C++", link: "https://www.learncpp.com/" }
  ],

  sql: [
    { name: "W3Schools SQL", link: "https://www.w3schools.com/sql/" }
  ],

  ruby: [
    { name: "Ruby Official Docs", link: "https://www.ruby-lang.org/en/documentation/" }
  ]
};

document.getElementById("getResourcesBtn").addEventListener("click", showResources);

function showResources() {
  const topic = document.getElementById("topic").value;
  const container = document.getElementById("reourcesList");

  container.innerHTML = "";

  if (!topic) {
    alert("Please select a topic.");
    return;
  }

  const selectedResources = resources[topic];

  if (!selectedResources) {
    container.innerHTML = "<p>No resources found.</p>";
    return;
  }

  selectedResources.forEach(resource => {
    const card = document.createElement("div");
    card.classList.add("resource-card");

    const link = document.createElement("a");
    link.href = resource.link;
    link.target = "_blank";
    link.innerText = resource.name;

    card.appendChild(link);
    container.appendChild(card);
  });
}
