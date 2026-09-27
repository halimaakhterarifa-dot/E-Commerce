const cartToggle = document.querySelector("#cart-toggle");
const catalogPanel = document.querySelector(".catalog-panel");
const cartItems = document.querySelector(".cart-items");
const bagCount = document.querySelector(".bag-count");
const cartFooter = document.querySelector(".cart-footer");

const categories = [
  {
    id: "home",
    title: "At home",
    intro: "Small comforts for slow mornings, open windows and the end of a long day.",
    images: ["photo-1507473885765-e6ed057f782c", "photo-1490312278390-ab64016e0aa9", "photo-1449247709967-d4461a6a6103", "photo-1616486338812-3dadae4b4ace", "photo-1494438639946-1ebd1d20bf85"],
    closing: "Chosen to settle into daily life. Follow the care notes on each piece to keep it in rotation for years.",
    products: [
      ["Sunday lamp", 68, "Soft ceramic light for bedside tables and slow evenings."],
      ["Pocket vase", 24, "A hand-finished home for one very good stem."],
      ["Easy morning throw", 84, "Light linen-cotton warmth for the sofa or end of the bed."],
      ["Sunday bowl", 34, "A generous stoneware bowl for breakfast, noodles or a late snack."],
      ["Window ledge planter", 28, "A glazed little planter with room for a favourite cutting."],
      ["Quiet hour candle", 32, "A clean-burning candle with a soft cedar and fig scent."],
      ["Good light mirror", 56, "A compact oak-framed mirror for a brighter corner."],
      ["Soft landing cushion", 48, "A feather-soft cushion cover in durable washed cotton."],
      ["Everyday door mat", 39, "A sturdy coir mat that welcomes muddy shoes and guests."],
      ["Little room clock", 62, "A quiet sweep movement keeps the room peaceful."],
      ["Fresh air diffuser", 36, "A low-key botanical scent for an entryway or bedside."],
      ["Warm hands hot-water bottle", 42, "A knitted cotton cover makes cold evenings cozier."],
      ["Folded cotton blanket", 76, "A breathable, generously sized layer for every season."],
      ["Shelf life bookend", 31, "Powder-coated steel keeps favourite reads within reach."],
      ["Little bud vase set", 44, "Three small ceramic shapes for one stem each."],
      ["Room to breathe incense", 22, "A sandalwood incense set with a small stone rest."],
      ["Sunday storage basket", 54, "Handwoven cotton rope gathers blankets and everyday bits."],
      ["Easy reach bedside tray", 27, "A solid beech catch-all for rings, keys and pocket change."],
      ["Slow morning wall print", 38, "A two-colour art print on responsibly sourced paper."],
      ["Open window curtain tie", 19, "A pair of woven cotton ties that let the daylight in."],
      ["Stay a while stool", 118, "A compact solid-wood perch for the hallway or reading corner."]
    ]
  },
  {
    id: "wear",
    title: "To wear",
    intro: "Easy layers and everyday essentials made to be reached for on repeat.",
    images: ["photo-1529139574466-a303027c1d8b", "photo-1503342217505-b0a15ec3261c", "photo-1586350977771-b3b0abd50c82", "photo-1483985988355-763728e1935b", "photo-1434389677669-e08b4cac3105"],
    closing: "Straightforward fits and useful fabrics. Check the individual sizing and wash notes before choosing your usual size.",
    products: [
      ["Sunday shirt", 74, "Relaxed organic cotton with an easy, softly dropped shoulder."],
      ["Better tee", 42, "A substantial, soft cotton tee made for the regular wash."],
      ["Everyday rib socks", 18, "Breathable organic cotton blend with a cuff that stays comfortable."],
      ["Long lunch linen shirt", 88, "An airy linen layer that looks right untucked or tucked in."],
      ["Day off drawstring short", 54, "Soft cotton twill with a useful side pocket and easy waist."],
      ["Good company cardigan", 112, "A midweight cotton knit for breezy starts and late walks."],
      ["Out the door overshirt", 96, "A sturdy, roomy layer with two practical front pockets."],
      ["Soft start tank", 34, "A smooth, breathable base layer with a tidy neckline."],
      ["All day cotton trouser", 92, "A straight-leg shape in comfortable, durable cotton twill."],
      ["Second coffee sweatshirt", 78, "Brushed organic cotton for the cooler part of the morning."],
      ["Open road bandana", 22, "A lightweight cotton square for hair, neck or bag strap."],
      ["Saturday stripe tee", 48, "A classic stripe in soft jersey with a relaxed fit."],
      ["Everywhere chore jacket", 128, "A hardworking cotton canvas layer with generous pockets."],
      ["Walk it off beanie", 38, "A comfortable rib knit to tuck into your coat pocket."],
      ["Easy pace lounge pant", 68, "A relaxed jersey pant with a soft, adjustable waistband."],
      ["Fresh start popover", 82, "Lightweight cotton with an easy collar and half-button front."],
      ["Good fit everyday belt", 36, "A durable woven belt with an easy-adjust metal buckle."],
      ["Warm day cotton dress", 104, "A breathable, loose-fitting dress with useful side pockets."],
      ["Take five house socks", 24, "A softly cushioned pair for slow starts and home evenings."],
      ["Long weekend cap", 32, "Washed cotton twill with a simple adjustable back strap."],
      ["Keep close pocket scarf", 58, "A light, soft cotton layer to keep by the front door."]
    ]
  },
  {
    id: "table",
    title: "Kitchen & table",
    intro: "Useful pieces for pouring, serving, sharing and staying for one more cup.",
    images: ["photo-1494438639946-1ebd1d20bf85", "photo-1578749556568-bc2c40e68b61", "photo-1490312278390-ab64016e0aa9", "photo-1495474472287-4d71bcdd2085", "photo-1511920170033-f8396924c348"],
    closing: "Made for regular meals, not special occasions only. Food-contact pieces are easy to care for; details are listed with each one.",
    products: [
      ["Good morning cups", 38, "A hand-thrown pair with a smooth glaze and a just-right handle."],
      ["Everyday pour-over dripper", 36, "A ceramic cone for a slow, balanced cup of filter coffee."],
      ["Table for two plate set", 64, "Two hand-finished plates sized for weekday lunches and shared suppers."],
      ["Little salt cellar", 18, "A lidded stoneware pot to keep finishing salt close at hand."],
      ["Pour another carafe", 42, "A clear glass carafe for water, juice or the table flowers."],
      ["Sunday serving platter", 52, "A wide, gently rimmed platter for the middle of the table."],
      ["Daily bread board", 34, "A compact beech board with a shallow crumb groove."],
      ["Soft touch tea towel pair", 26, "Absorbent woven cotton towels that soften with each wash."],
      ["Little olive oil bottle", 29, "A glazed pourer with a tidy spout and an easy-grip shape."],
      ["Set the table napkins", 32, "Four washed-linen napkins for everyday dinners and long lunches."],
      ["Good measure mixing jug", 31, "A sturdy glass jug with clear markings and a comfortable handle."],
      ["Kitchen window herb pot", 24, "A small drainage-ready pot for the herbs you use most."],
      ["Share another bowl set", 58, "Two nesting stoneware bowls for snacks, sides and leftovers."],
      ["Slow brew coffee press", 48, "A simple stainless filter press with a heat-safe glass body."],
      ["Handy wooden spoon set", 27, "Three smooth beech utensils for stirring, serving and tasting."],
      ["Sunday breakfast plate", 28, "A hand-glazed stoneware plate with a comfortable raised rim."],
      ["Keep it fresh bread bag", 22, "A washable cotton-linen bag for the bakery run and countertop."],
      ["Tiny tasting bowl set", 35, "Four little ceramic dishes for olives, sauces and small treats."],
      ["Everyday water glass set", 30, "Four stackable glasses with a sturdy base and easy-clean shape."],
      ["Kitchen catch-all crock", 33, "A glazed utensil holder that keeps the most-used tools nearby."],
      ["Make room tea tin", 25, "An airtight steel tin to keep loose-leaf tea fresh between cups."]
    ]
  },
  {
    id: "carry",
    title: "On the go",
    intro: "Good company for the commute, the market, the day trip and the way back.",
    images: ["photo-1547949003-9792a18a2601", "photo-1523275335684-37898b6baf30", "photo-1602143407151-7111542de6e8", "photo-1455390582262-044cdead277a", "photo-1553062407-98eeb64c6a62"],
    closing: "Thoughtful carry pieces with room for the things you actually take along. Materials and dimensions are listed per item.",
    products: [
      ["Market tote", 32, "Recycled canvas with a generous gusset and an inside pocket."],
      ["Day watch", 96, "A clean, easy-to-read dial on a comfortable woven strap."],
      ["Good day bottle", 29, "A leakproof 500 ml steel bottle with a powder-coated finish."],
      ["Field notes notebook", 16, "A pocket-sized lay-flat book for plans, lists and things to remember."],
      ["Long way home backpack", 88, "A padded, weather-ready day pack with a laptop sleeve."],
      ["Take it easy crossbody", 62, "A compact adjustable bag with a zipped everyday essentials pocket."],
      ["Keys please key clip", 18, "A solid brass clip that keeps keys easy to find in any bag."],
      ["Lunch outside lunch bag", 38, "An insulated washable bag sized for a good lunch and a piece of fruit."],
      ["Pocket change card case", 28, "A slim leather card holder with four slots and a centre pocket."],
      ["Good miles travel pouch", 34, "A wipe-clean zip pouch for cables, tickets and small essentials."],
      ["Anywhere canvas cap", 32, "A soft cotton cap with an adjustable strap and packable brim."],
      ["Window seat eye mask", 24, "A softly padded cotton mask with a gentle, adjustable band."],
      ["One more stop umbrella", 52, "A compact wind-resistant umbrella with a recycled-fabric canopy."],
      ["Stay hydrated cup", 33, "A reusable lidded travel cup that fits most cup holders."],
      ["Good distance duffel", 108, "A weekender-sized recycled canvas bag with a separate shoe sleeve."],
      ["Pocket-sized coin purse", 21, "A small zip pouch for loose change, earbuds or a spare key."],
      ["Walk awhile sunglass case", 19, "A lined protective case with a soft cloth for everyday lenses."],
      ["Keep close passport wallet", 44, "A slim travel wallet with room for a passport and boarding pass."],
      ["On the move phone sling", 48, "An adjustable phone strap with a card pocket for hands-free days."],
      ["Rain check tote cover", 26, "A lightweight water-resistant cover that folds into its own pocket."],
      ["Day trip packing cubes", 42, "Three lightweight zip pouches to keep a small bag in order."]
    ]
  },
  {
    id: "paper",
    title: "Paper & play",
    intro: "Good pages, useful little tools and small invitations to slow down and make something.",
    images: ["photo-1455390582262-044cdead277a", "photo-1517842645767-c639042777db", "photo-1455390582262-044cdead277a", "photo-1513475382585-d06e58bcb0e0", "photo-1455390582262-044cdead277a"],
    closing: "A small collection for curious minds, marginal notes and unhurried afternoons. Paper stocks and formats are described on every piece.",
    products: [
      ["Fieldwork notebook", 16, "160 lined recycled-paper pages in a lay-flat, thread-bound cover."],
      ["One good idea sketchbook", 22, "A hard-wearing blank-page book for drawings, diagrams and daydreams."],
      ["Sunday list pad", 12, "A tear-off weekly list pad with plenty of room for the real priorities."],
      ["Write it down pencil set", 14, "Six smooth-writing graphite pencils made from FSC-certified wood."],
      ["Postcard from nowhere set", 18, "Eight illustrated postcards for the notes worth sending by hand."],
      ["Desk day calendar", 28, "A reusable undated desk calendar to set a gentler weekly pace."],
      ["Small things journal", 26, "A guided journal with open prompts for everyday observations."],
      ["Little colour pencil tin", 24, "Twelve richly coloured pencils in a sturdy reusable metal tin."],
      ["Make a mark stamp kit", 32, "A set of four wooden letter stamps and a washable ink pad."],
      ["Good thought bookmark pair", 10, "Two brass page markers that tuck neatly into a favourite book."],
      ["Take five puzzle", 34, "A 500-piece illustrated puzzle for a quiet afternoon at home."],
      ["Paper scraps collage pack", 17, "A colourful assortment of recycled papers for cutting and making."],
      ["Long story short reading log", 18, "A pocket reading journal with space to keep the lines you love."],
      ["Easy letters writing set", 25, "Ten correspondence cards and envelopes made from recycled stock."],
      ["Daily marks fineliner set", 19, "Four water-based pens with fine points for notes and sketches."],
      ["Make time embroidery cards", 21, "Three pre-punched cards and cotton threads for a small first stitch."],
      ["Desk companion ruler", 13, "A clear 20 cm recycled-acrylic ruler with a handy bookmark edge."],
      ["Colour outside the lines pad", 15, "A 30-sheet drawing pad with heavyweight, acid-free paper."],
      ["Good mail address book", 20, "An alphabetized address book with a cloth spine and lay-flat binding."],
      ["Tiny triumphs habit tracker", 14, "A reusable undated tracker for the small routines that stick."],
      ["Sunday afternoon card game", 29, "A quick-to-learn conversation game for friends around the table."]
    ]
  }
];

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const inventory = categories.flatMap((category) => category.products.map(([name, price, description], index) => ({
  id: `${category.id}-${slugify(name)}`,
  category: category.id,
  categoryTitle: category.title,
  name,
  price,
  description,
  image: `https://images.unsplash.com/${category.images[index % category.images.length]}?auto=format&fit=crop&w=900&q=80`,
  imageThumb: `https://images.unsplash.com/${category.images[index % category.images.length]}?auto=format&fit=crop&w=160&q=70`,
  color: ["visual-lilac", "visual-blue", "visual-orange", "visual-pink", "visual-green", "visual-yellow", "visual-peach"][index % 7],
  tag: ["Made for everyday", "A good one", "Small-batch pick", "Easy does it", "Worth keeping"][index % 5]
})));

const renderProduct = (product, index) => `
  <article class="product" data-category="${product.category}">
    <div class="product-visual ${product.color}">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <span class="product-tag">${product.tag}</span>
      <input class="visually-hidden bag-check" type="checkbox" id="bag-${product.id}">
      <label class="add-button" for="bag-${product.id}"><span class="add-text">Add to bag</span><span class="remove-text">In your bag</span><span class="add-icon" aria-hidden="true">+</span></label>
      <input class="visually-hidden wish-check" type="checkbox" id="wish-${product.id}">
      <label class="wish-button" for="wish-${product.id}" aria-label="Save ${product.name} to favourites"><span aria-hidden="true">♡</span></label>
    </div>
    <div class="product-meta"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="price">$${product.price}</span></div>
    <div class="product-foot"><span>${product.categoryTitle} collection</span><details class="product-details"><summary>Details</summary><p>${product.description} Selected for regular use, with considered materials and straightforward care. Made to be used often and kept close.</p></details></div>
  </article>`;

const sectionNavigation = document.createElement("nav");
sectionNavigation.className = "collection-jump";
sectionNavigation.setAttribute("aria-label", "Browse product collections");
sectionNavigation.innerHTML = categories.map((category) => {
  const count = category.products.length.toString().padStart(2, "0");
  return `<a href="#collection-${category.id}">${category.title}<span>${count}</span></a>`;
}).join("");

const collectionSections = document.createElement("div");
collectionSections.className = "collection-sections";
collectionSections.innerHTML = categories.map((category, categoryIndex) => `
  <section class="collection-section" id="collection-${category.id}" aria-labelledby="collection-title-${category.id}">
    <div class="collection-heading"><div><p class="eyebrow">COLLECTION ${String(categoryIndex + 1).padStart(2, "0")} / ${String(categories.length).padStart(2, "0")}</p><h2 id="collection-title-${category.id}">${category.title}</h2></div><p>${category.intro}</p><a href="#top" aria-label="Back to collection links">↑</a></div>
    <div class="product-grid">${category.products.map((product, productIndex) => renderProduct(inventory.find((item) => item.category === category.id && item.name === product[0]), productIndex)).join("")}</div>
    <p class="collection-note"><span aria-hidden="true">✳</span> ${category.closing}</p>
  </section>`).join("");

catalogPanel.replaceChildren(sectionNavigation, collectionSections);
cartItems.replaceChildren();

const cartSubtotal = document.createElement("div");
cartSubtotal.className = "cart-subtotal";
cartSubtotal.innerHTML = "<span>Subtotal</span><strong>$0</strong>";
cartFooter.querySelector(".shipping-note").after(cartSubtotal);

const cartRows = new Map(inventory.map((product) => {
  const row = document.createElement("div");
  row.className = "cart-line";
  row.style.display = "none";
  row.innerHTML = `<img src="${product.imageThumb}" alt=""><div><h3>${product.name}</h3><span>${product.categoryTitle}</span><label for="bag-${product.id}">Remove</label></div><strong>$${product.price}</strong>`;
  cartItems.append(row);
  return [product.id, row];
}));

const updateCartSummary = () => {
  const selected = inventory.filter((product) => document.querySelector(`#bag-${product.id}`)?.checked);
  bagCount.textContent = selected.length ? String(selected.length) : "";
  cartSubtotal.querySelector("strong").textContent = `$${selected.reduce((sum, product) => sum + product.price, 0)}`;
};

catalogPanel.addEventListener("change", (event) => {
  const control = event.target;
  if (control.matches(".bag-check")) {
    const product = inventory.find((item) => `bag-${item.id}` === control.id);
    const row = cartRows.get(product.id);
    row.style.display = control.checked ? "grid" : "none";
    if (control.checked) {
      cartToggle.checked = true;
    }
    updateCartSummary();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartToggle.checked) {
    cartToggle.checked = false;
  }
});
