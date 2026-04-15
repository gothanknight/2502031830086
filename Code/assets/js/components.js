/* ================================================================
   RecipeAI — Reusable HTML Components (injected via jQuery)
   Navbar, Footer, Page Header, Step Progress
================================================================ */

$(document).ready(function () {

  // ── Inject Navbar ────────────────────────────────────────────
  const navHTML = `
  <nav class="navbar navbar-custom navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <span class="brand-icon">🍳</span>
        RecipeAI
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#mainNav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-center gap-1">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="ingredients.html">Ingredients</a></li>
          <li class="nav-item"><a class="nav-link" href="cuisine.html">Cuisines</a></li>
          <li class="nav-item"><a class="nav-link" href="favorites.html">Favorites</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item ms-2">
            <a class="nav-link nav-cta" href="ingredients.html">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

  $("[data-component='navbar']").html(navHTML);

  // ── Inject Footer ────────────────────────────────────────────
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="footer-brand">🍳 RecipeAI</div>
          <p class="footer-desc">
            A smart rule-based recipe generator built for the Web Technology with UI/UX
            course (Semester 4, 2025-26). Discover recipes tailored to your ingredients
            and preferences — 100% frontend.
          </p>
          <div class="social-links mt-3">
            <a href="#" class="social-link" title="GitHub">GH</a>
            <a href="#" class="social-link" title="LinkedIn">IN</a>
            <a href="#" class="social-link" title="Instagram">IG</a>
            <a href="#" class="social-link" title="Twitter">TW</a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Navigation</h5>
          <a href="index.html">Home</a>
          <a href="ingredients.html">Ingredients</a>
          <a href="cuisine.html">Cuisines</a>
          <a href="preferences.html">Preferences</a>
          <a href="results.html">Results</a>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Pages</h5>
          <a href="favorites.html">Favorites</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="login.html">Login</a>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5>About Project</h5>
          <p class="footer-desc">
            <strong style="color:rgba(255,255,255,0.8)">Course:</strong> Web Technology with UI/UX<br>
            <strong style="color:rgba(255,255,255,0.8)">Code:</strong> 2010043228<br>
            <strong style="color:rgba(255,255,255,0.8)">Semester:</strong> 4th | Academic Year: 2025-26<br>
            <strong style="color:rgba(255,255,255,0.8)">Institute:</strong> Silver Oak University
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 RecipeAI — AI Recipe Generator. Built with HTML5, CSS3, Bootstrap 5, JavaScript &amp; jQuery.</p>
      </div>
    </div>
  </footer>`;

  $("[data-component='footer']").html(footerHTML);

  // ── Step Progress Bar Component ──────────────────────────────
  // Usage: <div data-component="step-progress" data-active="1"></div>
  const stepDefs = [
    { id: 1, label: "Ingredients", href: "ingredients.html" },
    { id: 2, label: "Cuisine",     href: "cuisine.html"     },
    { id: 3, label: "Preferences", href: "preferences.html" },
  ];

  $("[data-component='step-progress']").each(function () {
    const active = parseInt($(this).data("active") || 1);
    let html = `<div class="step-progress"><div class="container"><div class="steps">`;

    stepDefs.forEach((step, idx) => {
      const state = step.id < active ? "done" : step.id === active ? "active" : "";
      const icon  = step.id < active ? "✓" : step.id;
      html += `
        <div class="step-item ${state}">
          <div class="step-circle">${icon}</div>
          <span class="step-label">${step.label}</span>
          ${idx < stepDefs.length - 1 ? '<div class="step-line"></div>' : ''}
        </div>`;
    });

    html += `</div></div></div>`;
    $(this).html(html);
  });

  // ── Page Header Component ────────────────────────────────────
  // Usage: <div data-component="page-header" data-title="..." data-subtitle="..."></div>
  $("[data-component='page-header']").each(function () {
    const title    = $(this).data("title")    || "Page Title";
    const subtitle = $(this).data("subtitle") || "";
    $(this).html(`
      <div class="page-header">
        <div class="container position-relative" style="z-index:1">
          <h1>${title}</h1>
          ${subtitle ? `<p>${subtitle}</p>` : ""}
        </div>
      </div>`);
  });

});
