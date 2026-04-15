/* ================================================================
   RecipeAI — Recipe Dataset (Rule-Based AI Data)
   All recipes are predefined objects used for matching logic.
================================================================ */

const RECIPES_DB = [
  // ── Indian Recipes ──────────────────────────────────────────
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    emoji: "🧀",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["paneer", "tomato", "onion", "cream", "butter", "garlic", "ginger"],
    spice: "medium",
    time: 30,
    servings: 4,
    rating: 4.8,
    tags: ["Vegetarian", "Medium Spice", "Indian"],
    description: "Rich, creamy North Indian curry with soft paneer in buttery tomato-based gravy.",
    steps: [
      "Heat butter in a pan and sauté finely chopped onions until golden brown.",
      "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
      "Add tomato puree and cook on medium heat for 8–10 minutes.",
      "Add spices: red chili powder, garam masala, and salt. Mix well.",
      "Add paneer cubes and fresh cream. Stir gently.",
      "Simmer for 5–7 minutes on low heat until gravy thickens.",
      "Garnish with kasuri methi and fresh coriander. Serve hot with naan or rice!"
    ],
    ingredientList: ["250g Paneer (cubed)", "2 tbsp Butter", "2 medium Onions", "3 Tomatoes (pureed)", "1 cup Fresh Cream", "2 tsp Ginger-Garlic paste", "1 tsp Red Chili powder", "1 tsp Garam Masala", "Salt to taste", "Fresh Coriander"]
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    emoji: "🍢",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["paneer", "onion", "capsicum", "yogurt", "lemon"],
    spice: "hot",
    time: 25,
    servings: 3,
    rating: 4.7,
    tags: ["Vegetarian", "Hot", "Starter"],
    description: "Smoky grilled paneer marinated in spiced yogurt — a classic Indian starter.",
    steps: [
      "Mix yogurt, red chili, turmeric, garam masala, lemon juice, and salt in a bowl.",
      "Add paneer cubes, onion, and capsicum. Marinate for 30 minutes.",
      "Thread the marinated pieces on skewers alternating paneer and veggies.",
      "Grill in oven at 200°C for 15 minutes or cook on a tawa with oil.",
      "Turn occasionally until charred spots appear on all sides.",
      "Squeeze lemon juice on top and serve with mint chutney."
    ],
    ingredientList: ["250g Paneer", "1 cup Yogurt", "1 Onion (diced)", "1 Capsicum (diced)", "1 Lemon (juice)", "1 tsp Red Chili", "1 tsp Garam Masala", "1/2 tsp Turmeric", "Salt to taste"]
  },
  {
    id: "shahi-paneer",
    name: "Shahi Paneer",
    emoji: "👑",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["paneer", "onion", "tomato", "cream", "cashew"],
    spice: "mild",
    time: 40,
    servings: 4,
    rating: 4.9,
    tags: ["Vegetarian", "Mild", "Mughlai"],
    description: "Royal-style paneer in a luxuriously rich cashew and cream gravy.",
    steps: [
      "Soak cashews in warm water for 20 minutes, then blend to a smooth paste.",
      "Fry onions until golden, add ginger-garlic paste, then tomatoes. Cook well.",
      "Add cashew paste, cream, and spices. Simmer for 10 minutes.",
      "Add paneer cubes, mix gently, and cook on low heat for 5 minutes.",
      "Garnish with cream swirl and saffron strands."
    ],
    ingredientList: ["250g Paneer", "10 Cashews (soaked)", "2 Onions", "2 Tomatoes", "1/2 cup Cream", "1 tsp Cardamom powder", "Saffron strands", "Salt to taste"]
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    emoji: "🥬",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["paneer", "spinach", "onion", "tomato", "garlic"],
    spice: "mild",
    time: 35,
    servings: 4,
    rating: 4.6,
    tags: ["Vegetarian", "Healthy", "Indian"],
    description: "Nutritious spinach curry with golden fried paneer cubes.",
    steps: [
      "Blanch spinach in boiling water for 2 minutes, then blend to smooth puree.",
      "Fry onions, garlic, and tomatoes. Add all spices and cook well.",
      "Add spinach puree, mix, and simmer for 8 minutes.",
      "Add fried paneer cubes. Stir gently and simmer 5 more minutes.",
      "Finish with a dollop of cream. Serve hot."
    ],
    ingredientList: ["250g Paneer", "400g Spinach", "2 Onions", "2 Tomatoes", "4 Garlic cloves", "1 tsp Cumin", "1 tsp Garam Masala", "Salt to taste"]
  },
  {
    id: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    emoji: "🍗",
    cuisine: "indian",
    diet: "non-vegetarian",
    ingredients: ["chicken", "onion", "tomato", "cream", "garlic", "ginger"],
    spice: "medium",
    time: 45,
    servings: 4,
    rating: 4.8,
    tags: ["Non-Veg", "Medium Spice", "Indian"],
    description: "Tender chicken tikka in a rich, creamy tomato-based masala sauce.",
    steps: [
      "Marinate chicken in yogurt, spices, and lemon juice for 30 minutes.",
      "Grill or pan-fry chicken until slightly charred.",
      "In a separate pan, sauté onions, then add ginger-garlic paste and tomatoes.",
      "Add spices and cook until oil separates from masala.",
      "Add grilled chicken and cream. Simmer for 10 minutes.",
      "Garnish with cream and coriander. Serve with naan."
    ],
    ingredientList: ["500g Chicken (boneless)", "1 cup Yogurt", "2 Onions", "3 Tomatoes (pureed)", "1 cup Cream", "2 tsp Tikka Masala", "Ginger-Garlic paste", "Salt to taste"]
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    emoji: "🫘",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["lentils", "onion", "tomato", "garlic", "chili"],
    spice: "medium",
    time: 30,
    servings: 4,
    rating: 4.5,
    tags: ["Vegetarian", "Healthy", "Comfort Food"],
    description: "Classic yellow lentil dal tempered with aromatic spices.",
    steps: [
      "Pressure cook yellow lentils with turmeric and salt for 3 whistles.",
      "Heat ghee in a pan, add mustard seeds and let them splutter.",
      "Add chopped onions, green chilies, and garlic. Fry until golden.",
      "Add chopped tomatoes and cook until soft.",
      "Add cumin, red chili, and garam masala. Cook 2 minutes.",
      "Pour tadka over cooked dal. Mix and serve with rice or roti."
    ],
    ingredientList: ["1 cup Yellow Lentils", "2 Onions", "2 Tomatoes", "4 Garlic cloves", "2 Green Chilies", "1 tsp Mustard seeds", "2 tbsp Ghee", "1 tsp Turmeric", "Salt to taste"]
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    emoji: "🥦",
    cuisine: "indian",
    diet: "vegetarian",
    ingredients: ["potato", "onion", "tomato", "chili"],
    spice: "medium",
    time: 25,
    servings: 3,
    rating: 4.4,
    tags: ["Vegetarian", "Simple", "Indian"],
    description: "Classic dry Indian curry with potatoes and cauliflower.",
    steps: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and cook until translucent.",
      "Add chopped tomatoes and all spices. Cook until masala is ready.",
      "Add potato and cauliflower florets. Mix well.",
      "Cover and cook on medium heat for 15 minutes until vegetables are tender.",
      "Garnish with coriander and serve with roti."
    ],
    ingredientList: ["2 Potatoes (cubed)", "1/2 Cauliflower", "1 Onion", "2 Tomatoes", "1 tsp Cumin", "1 tsp Coriander powder", "1/2 tsp Turmeric", "Salt to taste"]
  },

  // ── Italian Recipes ─────────────────────────────────────────
  {
    id: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    emoji: "🍝",
    cuisine: "italian",
    diet: "non-vegetarian",
    ingredients: ["egg", "onion"],
    spice: "mild",
    time: 25,
    servings: 2,
    rating: 4.7,
    tags: ["Non-Veg", "Italian", "Pasta"],
    description: "Creamy Roman pasta with eggs, pancetta, and Pecorino Romano cheese.",
    steps: [
      "Cook spaghetti in salted boiling water until al dente.",
      "Fry pancetta or bacon in a pan until crispy.",
      "Whisk eggs with grated Pecorino Romano and black pepper.",
      "Reserve 1 cup of pasta cooking water before draining.",
      "Add hot pasta to the pan off heat. Pour egg mixture and toss quickly.",
      "Add pasta water gradually to achieve creamy consistency.",
      "Serve immediately with extra cheese and black pepper."
    ],
    ingredientList: ["200g Spaghetti", "100g Pancetta", "3 Eggs", "50g Pecorino Romano", "Black pepper", "Salt to taste"]
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    emoji: "🍕",
    cuisine: "italian",
    diet: "vegetarian",
    ingredients: ["tomato", "onion"],
    spice: "mild",
    time: 35,
    servings: 2,
    rating: 4.9,
    tags: ["Vegetarian", "Italian", "Classic"],
    description: "Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil.",
    steps: [
      "Prepare pizza dough by mixing flour, yeast, water, salt, and olive oil.",
      "Let dough rise for 1 hour. Stretch into a round shape.",
      "Spread tomato sauce evenly, leaving 1 inch border.",
      "Top with torn mozzarella pieces.",
      "Bake at 250°C (482°F) for 10-12 minutes until crust is golden.",
      "Remove from oven, top with fresh basil leaves and a drizzle of olive oil."
    ],
    ingredientList: ["Pizza dough (250g flour)", "100ml Tomato sauce", "150g Mozzarella", "Fresh Basil", "Olive oil", "Salt"]
  },
  {
    id: "risotto-mushroom",
    name: "Mushroom Risotto",
    emoji: "🍄",
    cuisine: "italian",
    diet: "vegetarian",
    ingredients: ["mushroom", "onion"],
    spice: "mild",
    time: 40,
    servings: 3,
    rating: 4.6,
    tags: ["Vegetarian", "Italian", "Risotto"],
    description: "Creamy Arborio rice cooked with earthy mushrooms and Parmesan.",
    steps: [
      "Heat vegetable stock in a separate pan and keep warm.",
      "Sauté mushrooms in butter until golden. Set aside.",
      "In the same pan, fry onions and garlic. Add Arborio rice.",
      "Add white wine (optional) and stir until absorbed.",
      "Add warm stock ladle by ladle, stirring constantly.",
      "When rice is al dente, add mushrooms, butter, and Parmesan.",
      "Season and serve immediately with extra Parmesan."
    ],
    ingredientList: ["300g Arborio rice", "250g Mushrooms", "1 Onion", "3 Garlic cloves", "1L Vegetable stock", "50g Parmesan", "2 tbsp Butter"]
  },

  // ── Chinese Recipes ─────────────────────────────────────────
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    emoji: "🍚",
    cuisine: "chinese",
    diet: "non-vegetarian",
    ingredients: ["chicken", "egg", "onion", "garlic"],
    spice: "mild",
    time: 20,
    servings: 3,
    rating: 4.6,
    tags: ["Non-Veg", "Chinese", "Quick"],
    description: "Classic Chinese-style fried rice with chicken, vegetables, and eggs.",
    steps: [
      "Cook rice ahead of time and let it cool (preferably overnight in fridge).",
      "Stir-fry diced chicken in hot wok until cooked. Set aside.",
      "Scramble eggs in the wok. Add garlic and onion. Fry 1 minute.",
      "Add cold rice, breaking up any clumps. Stir-fry on high heat.",
      "Add cooked chicken, soy sauce, and sesame oil.",
      "Toss everything together. Season and serve hot."
    ],
    ingredientList: ["2 cups Cooked Rice", "200g Chicken", "2 Eggs", "1 Onion", "3 Garlic cloves", "2 tbsp Soy sauce", "1 tsp Sesame oil", "Spring onions"]
  },
  {
    id: "veg-stir-fry",
    name: "Vegetable Stir Fry",
    emoji: "🥢",
    cuisine: "chinese",
    diet: "vegetarian",
    ingredients: ["capsicum", "onion", "garlic", "corn", "mushroom"],
    spice: "mild",
    time: 15,
    servings: 2,
    rating: 4.4,
    tags: ["Vegetarian", "Chinese", "Quick"],
    description: "Crunchy, colorful vegetables tossed in savory soy-ginger sauce.",
    steps: [
      "Heat oil in a wok over high heat until smoking.",
      "Add garlic and ginger, stir fry for 30 seconds.",
      "Add hard vegetables first (carrot, broccoli) and stir fry 2 minutes.",
      "Add remaining vegetables and toss on high heat.",
      "Mix soy sauce, oyster sauce, and cornflour. Add to wok.",
      "Toss to coat evenly. Serve hot with steamed rice."
    ],
    ingredientList: ["1 Capsicum", "1 Onion", "100g Mushrooms", "Corn kernels", "3 Garlic cloves", "Soy sauce", "Oyster sauce", "Cornflour"]
  },

  // ── Mexican Recipes ─────────────────────────────────────────
  {
    id: "veg-tacos",
    name: "Veggie Tacos",
    emoji: "🌮",
    cuisine: "mexican",
    diet: "vegetarian",
    ingredients: ["onion", "tomato", "capsicum", "corn", "chili", "lemon"],
    spice: "hot",
    time: 20,
    servings: 2,
    rating: 4.6,
    tags: ["Vegetarian", "Mexican", "Quick"],
    description: "Vibrant corn tacos filled with spiced veggies, salsa, and guacamole.",
    steps: [
      "Season and sauté diced peppers, onions, and corn with cumin and chili powder.",
      "Warm corn tortillas directly on a gas flame for 30 seconds each side.",
      "Mash avocados with lemon juice, salt, and garlic for guacamole.",
      "Dice tomatoes and onion with coriander and lemon for pico de gallo.",
      "Assemble: tortilla, veggie mix, guacamole, pico de gallo.",
      "Add sour cream or hot sauce. Serve immediately."
    ],
    ingredientList: ["4 Corn tortillas", "1 Capsicum", "1/2 cup Corn", "1 Onion", "2 Tomatoes", "2 Avocados", "Lemon", "Cumin", "Chili powder"]
  },

  // ── Japanese Recipes ────────────────────────────────────────
  {
    id: "miso-ramen",
    name: "Miso Ramen",
    emoji: "🍜",
    cuisine: "japanese",
    diet: "non-vegetarian",
    ingredients: ["egg", "onion", "mushroom", "garlic"],
    spice: "mild",
    time: 45,
    servings: 2,
    rating: 4.8,
    tags: ["Non-Veg", "Japanese", "Comfort Food"],
    description: "Warming Japanese ramen with rich miso broth and soft-boiled egg.",
    steps: [
      "Simmer chicken or pork bones for 1 hour to make broth.",
      "Strain broth. Whisk in miso paste until dissolved.",
      "Cook ramen noodles according to package instructions.",
      "Soft boil eggs for exactly 6 minutes, then peel and halve.",
      "Sauté mushrooms and green onions.",
      "Assemble bowls: noodles, hot miso broth, mushrooms, egg halves.",
      "Top with nori, sesame seeds, and chili oil."
    ],
    ingredientList: ["2 portions Ramen noodles", "2 tbsp Miso paste", "2 Eggs", "100g Mushrooms", "Green onions", "Nori sheets", "Sesame seeds", "Chili oil"]
  },

  // ── Greek Recipes ───────────────────────────────────────────
  {
    id: "greek-salad",
    name: "Greek Salad",
    emoji: "🥗",
    cuisine: "greek",
    diet: "vegetarian",
    ingredients: ["tomato", "onion", "capsicum", "lemon"],
    spice: "mild",
    time: 10,
    servings: 2,
    rating: 4.5,
    tags: ["Vegetarian", "Greek", "Salad", "Quick"],
    description: "Fresh Mediterranean salad with tomatoes, olives, and feta cheese.",
    steps: [
      "Dice tomatoes, cucumber, and capsicum into large chunks.",
      "Slice red onion into thin rings.",
      "Combine all vegetables in a large bowl.",
      "Add Kalamata olives and crumble feta cheese on top.",
      "Drizzle generously with extra virgin olive oil.",
      "Season with dried oregano, salt, and black pepper.",
      "Serve immediately or chill for 10 minutes."
    ],
    ingredientList: ["3 Tomatoes", "1 Cucumber", "1 Capsicum", "1/2 Red onion", "100g Feta cheese", "Kalamata olives", "Olive oil", "Dried oregano"]
  },

  // ── Thai Recipes ────────────────────────────────────────────
  {
    id: "thai-green-curry",
    name: "Thai Green Curry",
    emoji: "🌿",
    cuisine: "thai",
    diet: "vegetarian",
    ingredients: ["paneer", "spinach", "onion", "garlic", "chili"],
    spice: "hot",
    time: 30,
    servings: 3,
    rating: 4.7,
    tags: ["Vegetarian", "Thai", "Spicy"],
    description: "Aromatic coconut milk curry with green curry paste and fresh herbs.",
    steps: [
      "Fry green curry paste in coconut oil for 2 minutes until fragrant.",
      "Add coconut milk and bring to a simmer.",
      "Add vegetables and simmer for 10 minutes until tender.",
      "Add fish sauce (or soy sauce for veg), lime juice, and palm sugar.",
      "Adjust seasoning. Garnish with Thai basil and red chili slices.",
      "Serve with jasmine rice."
    ],
    ingredientList: ["2 tbsp Green curry paste", "400ml Coconut milk", "Mixed vegetables", "1 tbsp Fish/Soy sauce", "1 Lime", "Thai basil", "1 tsp Palm sugar"]
  }
];

// ── Matching Engine ─────────────────────────────────────────────────────
/**
 * matchRecipes: Rule-based AI matching function
 * Scores each recipe based on:
 *   - ingredient overlap (40 pts per match)
 *   - cuisine match (30 pts)
 *   - diet match (20 pts)
 *   - spice match (10 pts)
 * Returns sorted array of {recipe, score, matchPercent}
 */
function matchRecipes(selectedIngredients, selectedCuisine, selectedDiet, selectedSpice) {
  const results = [];

  RECIPES_DB.forEach(recipe => {
    let score = 0;

    // Ingredient overlap
    const ingMatch = selectedIngredients.filter(ing =>
      recipe.ingredients.includes(ing)
    ).length;
    score += ingMatch * 40;

    // Cuisine
    if (!selectedCuisine || selectedCuisine === "all" || recipe.cuisine === selectedCuisine) {
      score += 30;
    }

    // Diet
    if (!selectedDiet || selectedDiet === "all") {
      score += 20;
    } else if (selectedDiet === "vegetarian" && recipe.diet === "vegetarian") {
      score += 20;
    } else if (selectedDiet === "non-vegetarian") {
      score += 20; // shows all
    } else if (selectedDiet === "vegan" && recipe.diet === "vegetarian") {
      score += 15;
    } else if (selectedDiet === "eggetarian" && (recipe.diet === "vegetarian" || recipe.ingredients.includes("egg"))) {
      score += 20;
    }

    // Spice
    if (!selectedSpice || recipe.spice === selectedSpice) score += 10;

    if (score > 0) {
      const maxScore = selectedIngredients.length * 40 + 60;
      const matchPercent = Math.min(99, Math.round((score / Math.max(maxScore, 60)) * 100));
      results.push({ recipe, score, matchPercent });
    }
  });

  return results.sort((a, b) => b.score - a.score);
}
