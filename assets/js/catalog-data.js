(function () {
  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  const categories = [
    {
      slug: "pet-supplies",
      code: "PET",
      title: "Pet Supplies",
      icon: "pets",
      cover: "./assets/images/categories/pet-supplies.webp",
      description: "Pet care products, feeding accessories, carriers, toys and everyday essentials for retail and distribution sourcing.",
      intro: "Explore adaptable pet product resources with support for material selection, packaging, logo application and export coordination.",
      products: [
        ["Portable Pet Care Tub", "./assets/images/products/pet-supplies-01.webp", "Care"],
        ["Pet Training Seat", "./assets/images/products/pet-supplies-02.webp", "Training"],
        ["Pet Feeding Tableware Set", "./assets/images/products/pet-supplies-03.jpg", "Feeding"],
        ["Bottle and Bowl Cleaning Set", "./assets/images/products/pet-supplies-04.jpg", "Care"],
        ["Soft Silicone Pet Toy", "./assets/images/products/pet-supplies-05.png", "Toys"],
        ["Portable Pet Food Scissors", "./assets/images/products/pet-supplies-06.png", "Feeding"]
      ]
    },
    {
      slug: "footwear",
      code: "FTW",
      title: "Footwear",
      icon: "steps",
      cover: "./assets/images/categories/footwear.webp",
      description: "Casual footwear, functional shoes, seasonal collections and footwear-related retail products for overseas markets.",
      intro: "Source footwear products with support for style comparison, material options, size runs, packaging and supplier communication.",
      products: [
        ["Lightweight Casual Shoes", "./assets/images/products/footwear-01.webp", "Casual"],
        ["Everyday Slip-on Shoes", "./assets/images/products/footwear-02.jpg", "Casual"],
        ["Comfort Walking Shoes", "./assets/images/products/footwear-03.jpg", "Walking"],
        ["Breathable Leisure Shoes", "./assets/images/products/footwear-04.jpg", "Leisure"],
        ["Outdoor Utility Footwear", "./assets/images/products/footwear-05.jpg", "Outdoor"],
        ["Seasonal Retail Footwear", "./assets/images/products/footwear-06.jpg", "Seasonal"]
      ]
    },
    {
      slug: "bags-luggage",
      code: "BAG",
      title: "Bags & Luggage",
      icon: "luggage",
      cover: "./assets/images/categories/bags-luggage.webp",
      description: "Travel luggage, storage bags, backpacks and portable organization products for retail and promotional programs.",
      intro: "Compare bag and luggage resources by use, capacity, material, construction, logo method and target market positioning.",
      products: [
        ["Large Capacity Travel Bag", "./assets/images/products/bags-luggage-01.jpg", "Travel"],
        ["Children's Storage Bag", "./assets/images/products/bags-luggage-02.jpg", "Kids"],
        ["Collapsible Laundry Bag", "./assets/images/products/bags-luggage-03.jpg", "Storage"],
        ["Drawer-style Organizer Bag", "./assets/images/products/bags-luggage-04.png", "Storage"],
        ["Desktop Accessory Bag", "./assets/images/products/bags-luggage-05.jpg", "Organizer"],
        ["Outdoor Folding Storage Bag", "./assets/images/products/bags-luggage-06.jpg", "Outdoor"]
      ]
    },
    {
      slug: "crafts-gifts",
      code: "CRF",
      title: "Crafts & Gifts",
      icon: "redeem",
      cover: "./assets/images/categories/crafts-gifts.webp",
      description: "Creative gifts, decorative accessories, promotional items and customizable craft products for multiple channels.",
      intro: "Develop gift and craft selections with flexible color, shape, logo, packaging and promotional customization options.",
      products: [
        ["Cactus Decorative Hook", "./assets/images/products/crafts-gifts-01.jpg", "Decor"],
        ["Cartoon Animal Hook", "./assets/images/products/crafts-gifts-02.png", "Decor"],
        ["Colored Round Hook Set", "./assets/images/products/crafts-gifts-03.jpg", "Gift Set"],
        ["Marble Pattern Hook", "./assets/images/products/crafts-gifts-04.jpeg", "Decor"],
        ["Alien-shaped Water Cup", "./assets/images/products/crafts-gifts-05.png", "Drinkware"],
        ["Character Sleeve Water Cup", "./assets/images/products/crafts-gifts-06.jpeg", "Drinkware"]
      ]
    },
    {
      slug: "maternity-baby",
      code: "BAB",
      title: "Maternity & Baby",
      icon: "child_care",
      cover: "./assets/images/categories/maternity-baby.webp",
      description: "Feeding, care, tableware and daily-use products developed for maternity, newborn and infant product programs.",
      intro: "Source baby products with attention to materials, age suitability, packaging, product testing and market-specific requirements.",
      products: [
        ["Newborn Glass Baby Bottle", "./assets/images/products/maternity-baby-01.png", "Feeding"],
        ["Baby Tableware Set", "./assets/images/products/maternity-baby-02.jpg", "Tableware"],
        ["All-Silicone Pacifier", "./assets/images/products/maternity-baby-03.png", "Feeding"],
        ["Baby Bottle Brush Set", "./assets/images/products/maternity-baby-04.png", "Care"],
        ["Baby Grinding Bowl", "./assets/images/products/maternity-baby-05.png", "Tableware"],
        ["Baby Nail Care Kit", "./assets/images/products/maternity-baby-06.jpg", "Care"],
        ["Portable Folding Baby Bath Tub", "./assets/images/products/pet-supplies-01.webp", "Bath"],
        ["Baby Potty Training Seat", "./assets/images/products/pet-supplies-02.webp", "Training"],
        ["Silicone Feeding Tableware", "./assets/images/products/pet-supplies-03.jpg", "Tableware"],
        ["Bottle Cleaning Brush Kit", "./assets/images/products/pet-supplies-04.jpg", "Care"],
        ["Silicone Teething Toy", "./assets/images/products/pet-supplies-05.png", "Teething"],
        ["Baby Food Scissors", "./assets/images/products/pet-supplies-06.png", "Feeding"]
      ]
    },
    {
      slug: "kitchenware",
      code: "KIT",
      title: "Kitchenware",
      icon: "skillet",
      cover: "./assets/images/categories/kitchenware.webp",
      description: "Cooking tools, preparation appliances, cookware and practical kitchen products for household and retail sourcing.",
      intro: "Compare kitchen product resources by function, material, capacity, electrical standard, packaging and target price.",
      products: [
        ["Compact Rice Cooker", "./assets/images/products/kitchenware-01.jpg", "Cooking"],
        ["Slow Juicer", "./assets/images/products/kitchenware-02.jpg", "Preparation"],
        ["Electric Meat Grinder", "./assets/images/products/kitchenware-03.jpg", "Preparation"],
        ["Electric Kettle", "./assets/images/products/kitchenware-04.jpg", "Beverage"],
        ["Glass Tea Kettle", "./assets/images/products/kitchenware-05.jpg", "Beverage"],
        ["Household Air Fryer", "./assets/images/products/kitchenware-06.jpg", "Cooking"]
      ]
    },
    {
      slug: "dining-supplies",
      code: "DIN",
      title: "Dining Supplies",
      icon: "restaurant",
      cover: "./assets/images/categories/dining-supplies.webp",
      description: "Food storage, drinkware, tableware and dining accessories for household, hospitality and retail channels.",
      intro: "Build dining product assortments around materials, capacity, sealing performance, set combinations and packaging needs.",
      products: [
        ["Rectangular Glass Food Container", "./assets/images/products/dining-supplies-01.jpg", "Storage"],
        ["Round Food Container", "./assets/images/products/dining-supplies-02.jpg", "Storage"],
        ["Stackable Plastic Food Box", "./assets/images/products/dining-supplies-03.jpg", "Storage"],
        ["Sealed Storage Jar", "./assets/images/products/dining-supplies-04.png", "Storage"],
        ["Cold Water Kettle", "./assets/images/products/dining-supplies-05.jpeg", "Drinkware"],
        ["Portable Food Container Cup", "./assets/images/products/dining-supplies-06.png", "Tableware"]
      ]
    },
    {
      slug: "living-room-products",
      code: "LIV",
      title: "Living Room Products",
      icon: "chair",
      cover: "./assets/images/categories/living-room-products.webp",
      description: "Storage, organization and practical household products designed for everyday living spaces and retail programs.",
      intro: "Source living-room and home-organization products with options for color, size, material and retail packaging.",
      products: [
        ["PP Shoe Storage Rack", "./assets/images/products/living-room-products-01.webp", "Storage"],
        ["Desktop Storage Box", "./assets/images/products/living-room-products-02.jpg", "Organizer"],
        ["Drawer-style Storage Box", "./assets/images/products/living-room-products-03.jpg", "Storage"],
        ["Rotating Desktop Organizer", "./assets/images/products/living-room-products-04.jpg", "Organizer"],
        ["Tissue Storage Box", "./assets/images/products/living-room-products-05.jpg", "Accessories"],
        ["Bamboo Lid Storage Box", "./assets/images/products/living-room-products-06.png", "Storage"]
      ]
    },
    {
      slug: "bathroom-products",
      code: "BTH",
      title: "Bathroom Products",
      icon: "bathtub",
      cover: "./assets/images/categories/bathroom-products.webp",
      description: "Bathroom storage, cleaning, washing and personal-care accessories for household and retail sourcing.",
      intro: "Organize bathroom product selections around use, material, compact storage, color coordination and packaging.",
      products: [
        ["Portable Foldable Plastic Basin", "./assets/images/products/bathroom-products-01.webp", "Washing"],
        ["Compact Bathroom Organizer", "./assets/images/products/bathroom-products-02.webp", "Storage"],
        ["Wall-mounted Storage Accessory", "./assets/images/products/bathroom-products-03.webp", "Storage"],
        ["Multi-use Plastic Basin", "./assets/images/products/bathroom-products-04.webp", "Washing"],
        ["Bathroom Series Product", "./assets/images/products/bathroom-products-05.webp", "Accessories"],
        ["Daily Bathroom Accessory", "./assets/images/products/bathroom-products-06.webp", "Accessories"]
      ]
    },
    {
      slug: "mechanical-electrical",
      code: "MEC",
      title: "Mechanical & Electrical",
      icon: "precision_manufacturing",
      cover: "./assets/images/categories/mechanical-electrical.webp",
      description: "Compact machinery, electrical tools and household equipment for distributor and project-based sourcing.",
      intro: "Coordinate mechanical and electrical products with attention to technical parameters, voltage, testing and export requirements.",
      products: [
        ["2-in-1 Grinding Machine", "./assets/images/products/mechanical-electrical-01.jpg", "Machinery"],
        ["Portable Air Pump", "./assets/images/products/mechanical-electrical-02.jpg", "Tools"],
        ["Electric Meat Grinder", "./assets/images/products/mechanical-electrical-03.jpg", "Equipment"],
        ["Juicer Blender", "./assets/images/products/mechanical-electrical-04.jpg", "Equipment"],
        ["Handheld Cooking Stick", "./assets/images/products/mechanical-electrical-05.jpg", "Equipment"],
        ["Electric Glass Kettle", "./assets/images/products/mechanical-electrical-06.jpg", "Equipment"]
      ]
    },
    {
      slug: "small-home-appliances",
      code: "APP",
      title: "Small Home Appliances",
      icon: "blender",
      cover: "./assets/images/categories/small-home-appliances.webp",
      description: "Compact cooking, beverage and household appliances for retail, e-commerce and distributor product programs.",
      intro: "Compare small appliances by function, voltage, plug standard, capacity, certification needs and packaging format.",
      products: [
        ["Compact Air Fryer", "./assets/images/products/small-home-appliances-01.jpg", "Cooking"],
        ["Visible-window Air Fryer", "./assets/images/products/small-home-appliances-02.jpg", "Cooking"],
        ["Household Rice Cooker", "./assets/images/products/small-home-appliances-03.jpg", "Cooking"],
        ["Slow Juicer", "./assets/images/products/small-home-appliances-04.jpg", "Beverage"],
        ["Electric Kettle", "./assets/images/products/small-home-appliances-05.jpg", "Beverage"],
        ["2-in-1 Juicer & Blender", "./assets/images/products/small-home-appliances-06.jpg", "Beverage"]
      ]
    },
    {
      slug: "outdoor-camping",
      code: "OUT",
      title: "Outdoor & Camping",
      icon: "camping",
      cover: "./assets/images/categories/outdoor-camping.webp",
      description: "Portable storage, folding products and outdoor-use accessories for camping, travel and leisure markets.",
      intro: "Source outdoor products with attention to portability, folded size, load capacity, materials and retail packaging.",
      products: [
        ["Extra-large Camping Box", "./assets/images/products/outdoor-camping-01.jpg", "Storage"],
        ["Outdoor Folding Laundry Basket", "./assets/images/products/outdoor-camping-02.webp", "Folding"],
        ["Outdoor Foldable Basin", "./assets/images/products/outdoor-camping-03.webp", "Folding"],
        ["Wooden Lid Folding Box", "./assets/images/products/outdoor-camping-04.jpg", "Storage"],
        ["Collapsible Outdoor Basket", "./assets/images/products/outdoor-camping-05.jpg", "Storage"],
        ["Folding Storage Cabinet", "./assets/images/products/outdoor-camping-06.jpg", "Storage"]
      ]
    }
  ];

  categories.forEach(function (category) {
    category.products = category.products.map(function (item, index) {
      const title = item[0];
      return {
        id: `${category.slug}-${index + 1}`,
        slug: `${slugify(title)}-${index + 1}`,
        code: `HYS-${category.code}-${String(index + 1).padStart(3, "0")}`,
        title: title,
        image: item[1],
        focus: item[2],
        category: category.slug,
        featured: index < 2,
        summary: `${title} available for B2B sourcing with support for specification confirmation, supplier coordination, customized packaging and export follow-up.`,
        sourcing: {
          moq: "Negotiable",
          sample: "Available",
          customization: "Color, logo and packaging",
          leadTime: "Confirmed after requirement review"
        }
      };
    });
  });

  const featuredProductIds = [
    "maternity-baby-1",
    "kitchenware-6",
    "dining-supplies-1",
    "crafts-gifts-5",
    "small-home-appliances-2",
    "mechanical-electrical-1",
    "outdoor-camping-1",
    "living-room-products-6"
  ];

  function getCategory(slug) {
    return categories.find(function (category) { return category.slug === slug; }) || categories[4];
  }

  function getProduct(categorySlug, productId) {
    const category = getCategory(categorySlug);
    return category.products.find(function (product) {
      return product.id === productId || product.slug === productId;
    }) || category.products[0];
  }

  function getFeaturedProducts() {
    return featuredProductIds.map(function (id) {
      const category = categories.find(function (item) {
        return id.indexOf(`${item.slug}-`) === 0;
      });
      return category ? category.products.find(function (product) { return product.id === id; }) : null;
    }).filter(Boolean);
  }

  window.HuangyanCatalog = {
    categories: categories,
    getCategory: getCategory,
    getProduct: getProduct,
    getFeaturedProducts: getFeaturedProducts,
    categoryUrl: function (category) {
      return `./product-list.html?category=${encodeURIComponent(category.slug)}`;
    },
    productUrl: function (product) {
      return `./product-detail.html?category=${encodeURIComponent(product.category)}&product=${encodeURIComponent(product.id)}`;
    }
  };
})();
