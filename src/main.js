async function loadSection(id, file) {
  const response = await fetch(`sections/${file}`);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadSection("landing", "landing/landing.html");
