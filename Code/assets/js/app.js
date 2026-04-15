/* ================================================================
   RecipeAI — Main Application Logic
   Technologies: Vanilla JS + jQuery + Rule-Based AI
================================================================ */

$(document).ready(function () {

  // ── Toast Notification System ────────────────────────────────
  function showToast(msg, type = "info") {
    const icon = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";
    const $toast = $(`<div class="toast-msg ${type}">${icon} ${msg}</div>`);
    if (!$(".toast-container").length) {
      $("body").append('<div class="toast-container"></div>');
    }
    $(".toast-container").append($toast);
    setTimeout(() => $toast.fadeOut(400, function () { $(this).remove(); }), 3200);
  }

  window.showToast = showToast; // expose globally

  // ── Active Nav Link ──────────────────────────────────────────
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  $(".navbar-custom .nav-link").each(function () {
    const href = $(this).attr("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      $(this).addClass("active");
    }
  });

  // ── Navbar scroll effect ─────────────────────────────────────
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled");
    } else {
      $(".navbar-custom").removeClass("scrolled");
    }
  });

  // ── Smooth scroll for anchor links ──────────────────────────
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top - 80 }, 500);
    }
  });

  // ── Animate elements on scroll (Intersection Observer) ──────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("fade-in");
      }
    });
  }, { threshold: 0.1 });

  $(".feature-card, .recipe-card, .tech-card, .contact-info-card").each(function () {
    observer.observe(this);
  });

  // ── LocalStorage Favorites ───────────────────────────────────
  function getFavorites() {
    return JSON.parse(localStorage.getItem("recipeai_favorites") || "[]");
  }

  function saveFavorite(recipeId) {
    const favs = getFavorites();
    if (!favs.includes(recipeId)) {
      favs.push(recipeId);
      localStorage.setItem("recipeai_favorites", JSON.stringify(favs));
      showToast("Recipe saved to favorites! ❤️", "success");
      return true;
    }
    return false;
  }

  function removeFavorite(recipeId) {
    const favs = getFavorites().filter(id => id !== recipeId);
    localStorage.setItem("recipeai_favorites", JSON.stringify(favs));
    showToast("Recipe removed from favorites.", "info");
  }

  function isFavorite(recipeId) {
    return getFavorites().includes(recipeId);
  }

  window.RecipeAI = { getFavorites, saveFavorite, removeFavorite, isFavorite, showToast };

  // ── Fav button state initialization ─────────────────────────
  $(".fav-btn").each(function () {
    const id = $(this).data("id");
    if (isFavorite(id)) {
      $(this).addClass("active").text("❤️");
    }
  });

  // ── Fav button click handler ─────────────────────────────────
  $(document).on("click", ".fav-btn", function () {
    const id = $(this).data("id");
    if (isFavorite(id)) {
      removeFavorite(id);
      $(this).removeClass("active").html("♡");
    } else {
      saveFavorite(id);
      $(this).addClass("active").html("❤️");
    }
  });

  // ── Search filter (results/favorites page) ───────────────────
  $("#recipeSearch").on("input", function () {
    const q = $(this).val().toLowerCase();
    $(".recipe-card, .fav-card").each(function () {
      const name = $(this).find(".card-title, .fav-title").text().toLowerCase();
      $(this).closest("[data-recipe-item]").toggle(name.includes(q));
    });
  });

  // ── Sort handler ─────────────────────────────────────────────
  $(".sort-btn").on("click", function () {
    $(".sort-btn").removeClass("active");
    $(this).addClass("active");
    const sortBy = $(this).data("sort");
    const $container = $("#resultsContainer");
    const $items = $container.find("[data-recipe-item]").toArray();

    $items.sort((a, b) => {
      const ra = $(a).data("recipe");
      const rb = $(b).data("recipe");
      if (sortBy === "match")   return (rb.matchPercent || 0) - (ra.matchPercent || 0);
      if (sortBy === "time")    return ra.recipe.time - rb.recipe.time;
      if (sortBy === "rating")  return rb.recipe.rating - ra.recipe.rating;
      return 0;
    });

    $items.forEach(item => $container.append(item));
  });

  // ── Contact form submission ──────────────────────────────────
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const name    = $("#contactName").val().trim();
    const email   = $("#contactEmail").val().trim();
    const message = $("#contactMessage").val().trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Simulate form submission (no backend)
    const $btn = $(this).find("[type=submit]");
    $btn.prop("disabled", true).text("Sending…");

    setTimeout(() => {
      showToast(`Thanks ${name}! Your message has been sent. ✉️`, "success");
      this.reset();
      $btn.prop("disabled", false).text("Send Message ✈");
    }, 1200);
  });

  // ── Query chip selection (contact page) ─────────────────────
  $(".query-chip").on("click", function () {
    $(".query-chip").removeClass("selected");
    $(this).addClass("selected");
  });

  // ── Counter animation for stats ─────────────────────────────
  function animateCounter($el) {
    const target = parseInt($el.data("target") || $el.text());
    if (isNaN(target)) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      $el.text(current + ($el.data("suffix") || ""));
      if (current >= target) clearInterval(timer);
    }, 30);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).find(".counter").each(function () { animateCounter($(this)); });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  $(".hero-stats, .stats-bar").each(function () { statsObserver.observe(this); });

});

/* ================================================================
   PAGE-SPECIFIC: Ingredient Selection
================================================================ */
function initIngredientPage() {
  const $tags = $(".ingredient-tag");
  const $counter = $("#selectedCount");
  const $nextBtn = $("#nextBtn");

  // Load previously selected if navigating back
  const saved = JSON.parse(sessionStorage.getItem("selectedIngredients") || "[]");
  saved.forEach(id => $tags.filter(`[data-id="${id}"]`).addClass("selected"));
  updateCounter();

  function updateCounter() {
    const count = $(".ingredient-tag.selected").length;
    $counter.text(count);
    $nextBtn.prop("disabled", count === 0);
  }

  $tags.on("click", function () {
    $(this).toggleClass("selected");
    updateCounter();
  });

  // Category filter
  $(".cat-btn").on("click", function () {
    $(".cat-btn").removeClass("active btn-primary-custom").addClass("btn-outline-custom");
    $(this).removeClass("btn-outline-custom").addClass("active btn-primary-custom");
    const cat = $(this).data("cat");
    if (cat === "all") {
      $tags.show();
    } else {
      $tags.hide().filter(`[data-cat="${cat}"]`).show();
    }
  });

  // Search
  $("#ingSearch").on("input", function () {
    const q = $(this).val().toLowerCase();
    $tags.each(function () {
      $(this).toggle($(this).data("name").toLowerCase().includes(q));
    });
  });

  $nextBtn.on("click", function () {
    const selected = $(".ingredient-tag.selected").map(function () {
      return $(this).data("id");
    }).get();
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selected));
    window.location.href = "cuisine.html";
  });

  $("#backBtn").on("click", () => history.back());
}

/* ================================================================
   PAGE-SPECIFIC: Cuisine Selection
================================================================ */
function initCuisinePage() {
  const saved = sessionStorage.getItem("selectedCuisine") || "";
  if (saved) $(`.cuisine-card[data-id="${saved}"]`).addClass("selected");

  $(document).on("click", ".cuisine-card", function () {
    $(".cuisine-card").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#nextBtn").on("click", function () {
    const selected = $(".cuisine-card.selected").data("id");
    if (!selected) { window.showToast("Please select a cuisine!", "error"); return; }
    sessionStorage.setItem("selectedCuisine", selected);
    window.location.href = "preferences.html";
  });

  $("#backBtn").on("click", () => window.location.href = "ingredients.html");
}

/* ================================================================
   PAGE-SPECIFIC: Preferences
================================================================ */
function initPreferencesPage() {
  // Restore saved values
  const savedDiet   = sessionStorage.getItem("selectedDiet")    || "vegetarian";
  const savedSpice  = sessionStorage.getItem("selectedSpice")   || "medium";
  const savedTime   = sessionStorage.getItem("selectedTime")    || "15-30";
  const savedServing= sessionStorage.getItem("selectedServing") || "2";

  $(`.option-row[data-id="${savedDiet}"]`).addClass("selected");
  $(`.choice-chip[data-id="${savedSpice}"]`).addClass("selected");
  $(`.choice-chip[data-id="${savedTime}"]`).addClass("selected");
  $(`.choice-chip[data-id="${savedServing}"]`).addClass("selected");

  $(".option-row").on("click", function () {
    $(this).closest(".option-group").find(".option-row").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".chip-group .choice-chip").on("click", function () {
    $(this).closest(".chip-group").find(".choice-chip").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#generateBtn").on("click", function () {
    sessionStorage.setItem("selectedDiet",    $(".option-row.selected[data-group='diet']").data("id") || "vegetarian");
    sessionStorage.setItem("selectedSpice",   $(".chip-group[data-group='spice'] .choice-chip.selected").data("id") || "medium");
    sessionStorage.setItem("selectedTime",    $(".chip-group[data-group='time'] .choice-chip.selected").data("id") || "15-30");
    sessionStorage.setItem("selectedServing", $(".chip-group[data-group='serving'] .choice-chip.selected").data("id") || "2");

    // Show loading animation then redirect
    $(this).html('<span class="spinner-border spinner-border-sm me-2"></span>Generating…').prop("disabled", true);
    setTimeout(() => { window.location.href = "results.html"; }, 1200);
  });

  $("#backBtn").on("click", () => window.location.href = "cuisine.html");
}

/* ================================================================
   PAGE-SPECIFIC: Recipe Results
================================================================ */
function initResultsPage() {
  const ingredients = JSON.parse(sessionStorage.getItem("selectedIngredients") || "[]");
  const cuisine     = sessionStorage.getItem("selectedCuisine")  || "";
  const diet        = sessionStorage.getItem("selectedDiet")     || "";
  const spice       = sessionStorage.getItem("selectedSpice")    || "";

  // Update filter summary
  const ingNames = ingredients.map(id => id.charAt(0).toUpperCase() + id.slice(1)).join(", ") || "Any";
  const cuisineLabel = cuisine ? cuisine.charAt(0).toUpperCase() + cuisine.slice(1) : "Any";
  const dietLabel    = diet    ? diet.charAt(0).toUpperCase() + diet.slice(1)       : "Any";
  $("#filterSummary").text(`Ingredients: ${ingNames}  •  Cuisine: ${cuisineLabel}  •  Diet: ${dietLabel}  •  Spice: ${spice || "Any"}`);

  // Show loading
  $("#loadingSpinner").show();
  $("#resultsContainer").hide();

  setTimeout(() => {
    const results = matchRecipes(ingredients, cuisine, diet, spice);
    renderResults(results);
    $("#loadingSpinner").hide();
    $("#resultsContainer").fadeIn(400);
    $("#resultCount").text(results.length);
  }, 900);

  function renderResults(results) {
    const $container = $("#resultsContainer");
    $container.empty();

    if (results.length === 0) {
      $container.html(`
        <div class="col-12 text-center empty-state">
          <div class="empty-icon">🍽️</div>
          <h4>No Recipes Found</h4>
          <p>Try different ingredients or cuisine. <a href="ingredients.html" class="text-primary">Start over</a></p>
        </div>`);
      return;
    }

    results.forEach(({ recipe, matchPercent }) => {
      const isFav = window.RecipeAI.isFavorite(recipe.id);
      const $col = $(`<div class="col-md-6 col-lg-4 mb-4" data-recipe-item></div>`);
      $col.data("recipe", { recipe, matchPercent });
      $col.html(`
        <div class="recipe-card h-100">
          <div class="card-img-wrap">
            <span>${recipe.emoji}</span>
            <span class="match-badge">${matchPercent}% match</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <div class="card-meta">
              <span>⏱ ${recipe.time} min</span>
              <span>⭐ ${recipe.rating}</span>
              <span>👥 ${recipe.servings} servings</span>
            </div>
            <div class="card-tags">
              ${recipe.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
            </div>
            <p class="text-muted small mb-3">${recipe.description}</p>
            <div class="card-actions mt-auto">
              <button class="btn btn-sm btn-secondary-custom flex-grow-1"
                onclick="window.location.href='recipe-detail.html?id=${recipe.id}'">
                View Recipe
              </button>
              <button class="fav-btn ${isFav ? "active" : ""}" data-id="${recipe.id}">
                ${isFav ? "❤️" : "♡"}
              </button>
            </div>
          </div>
        </div>`);
      $container.append($col);
    });
  }

  // Sort buttons
  $(".sort-btn").on("click", function () {
    $(".sort-btn").removeClass("active");
    $(this).addClass("active");
    const sortBy = $(this).data("sort");
    const $items = $("#resultsContainer .col-md-6").toArray();

    $items.sort((a, b) => {
      const da = $(a).data("recipe");
      const db = $(b).data("recipe");
      if (!da || !db) return 0;
      if (sortBy === "match")  return (db.matchPercent || 0) - (da.matchPercent || 0);
      if (sortBy === "time")   return da.recipe.time - db.recipe.time;
      if (sortBy === "rating") return db.recipe.rating - da.recipe.rating;
      return 0;
    });

    $items.forEach(item => $("#resultsContainer").append(item));
  });
}

/* ================================================================
   PAGE-SPECIFIC: Recipe Detail
================================================================ */
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const recipe = RECIPES_DB.find(r => r.id === id);

  if (!recipe) {
    $(".recipe-detail-wrap").html(`
      <div class="text-center py-5 empty-state">
        <div class="empty-icon">😕</div>
        <h4>Recipe Not Found</h4>
        <p><a href="results.html" class="btn btn-primary-custom mt-2">Back to Results</a></p>
      </div>`);
    return;
  }

  // Populate hero
  $("#recipeEmoji").text(recipe.emoji);
  $("#recipeName").text(recipe.name);
  $("#recipeDesc").text(recipe.description);
  $("#recipeTime").text(recipe.time + " min");
  $("#recipeServings").text(recipe.servings);
  $("#recipeSpice").text(recipe.spice.charAt(0).toUpperCase() + recipe.spice.slice(1));
  $("#recipeRating").text(recipe.rating + "/5");
  $("#recipeDiet").text(recipe.diet === "vegetarian" ? "Vegetarian" : "Non-Veg");

  // Ingredients
  recipe.ingredientList.forEach(ing => {
    $("#ingredientsList").append(`
      <div class="ingredient-list-item">
        <span class="dot"></span>
        <span>${ing}</span>
      </div>`);
  });

  // Steps
  recipe.steps.forEach((step, i) => {
    $("#stepsList").append(`
      <div class="step-card">
        <div class="step-num">${i + 1}</div>
        <p class="mb-0">${step}</p>
      </div>`);
  });

  // Tags
  recipe.tags.forEach(tag => {
    $("#recipeTags").append(`<span class="card-tag">${tag}</span>`);
  });

  // Fav button
  const isFav = window.RecipeAI.isFavorite(recipe.id);
  const $favBtn = $("#favBtn");
  $favBtn.html(isFav ? "❤️ Saved to Favorites" : "♡ Save to Favorites");
  if (isFav) $favBtn.addClass("active");

  $favBtn.on("click", function () {
    if (window.RecipeAI.isFavorite(recipe.id)) {
      window.RecipeAI.removeFavorite(recipe.id);
      $favBtn.html("♡ Save to Favorites").removeClass("active");
    } else {
      window.RecipeAI.saveFavorite(recipe.id);
      $favBtn.html("❤️ Saved to Favorites").addClass("active");
    }
  });

  // Print
  $("#printBtn").on("click", () => window.print());
}

/* ================================================================
   PAGE-SPECIFIC: Favorites
================================================================ */
function initFavoritesPage() {
  const favIds = window.RecipeAI.getFavorites();
  const $container = $("#favoritesContainer");

  if (favIds.length === 0) {
    $container.html(`
      <div class="col-12 empty-state">
        <div class="empty-icon">⭐</div>
        <h4>No Favorites Yet</h4>
        <p>Browse recipes and click ♡ to save them here.</p>
        <a href="index.html" class="btn btn-primary-custom mt-2">Explore Recipes</a>
      </div>`);
    return;
  }

  const favRecipes = RECIPES_DB.filter(r => favIds.includes(r.id));
  $("#favCount").text(favRecipes.length);

  favRecipes.forEach(recipe => {
    const $col = $(`<div class="col-md-6 col-lg-4 mb-4" data-recipe-item></div>`);
    $col.html(`
      <div class="fav-card">
        <div class="fav-img">
          <span>${recipe.emoji}</span>
          <div class="fav-heart remove-fav" data-id="${recipe.id}" title="Remove from favorites">❤️</div>
        </div>
        <div class="fav-body">
          <h5 class="fav-title">${recipe.name}</h5>
          <p class="fav-meta">
            ${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)} Cuisine  •
            ⏱ ${recipe.time} min  •  ⭐ ${recipe.rating}
          </p>
          <div class="fav-actions">
            <button class="btn btn-sm btn-secondary-custom flex-grow-1"
              onclick="window.location.href='recipe-detail.html?id=${recipe.id}'">View Recipe</button>
            <button class="btn btn-sm btn-outline-secondary remove-fav" data-id="${recipe.id}">Remove</button>
          </div>
        </div>
      </div>`);
    $container.append($col);
  });

  // Remove handler
  $(document).on("click", ".remove-fav", function () {
    const id = $(this).data("id");
    window.RecipeAI.removeFavorite(id);
    $(this).closest("[data-recipe-item]").fadeOut(300, function () {
      $(this).remove();
      const remaining = $("#favoritesContainer [data-recipe-item]").length;
      $("#favCount").text(remaining);
      if (remaining === 0) initFavoritesPage();
    });
  });

  // Search
  $("#favSearch").on("input", function () {
    const q = $(this).val().toLowerCase();
    $("[data-recipe-item]").each(function () {
      const title = $(this).find(".fav-title").text().toLowerCase();
      $(this).toggle(title.includes(q));
    });
  });
}
