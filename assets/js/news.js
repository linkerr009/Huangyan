(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const articleRoot = document.querySelector("[data-news-article]");
    if (!articleRoot) return;

    const articles = {
      "horgos-showroom": {
        title: "Horgos Showroom Opens as a Central Asia Sourcing Hub",
        date: "05 July 2025",
        category: "Showroom Network",
        location: "Horgos, Xinjiang",
        image: "./assets/images/news/horgos-showroom.webp",
        imageAlt: "Horgos showroom and product display area",
        caption: "HUANGYAN SOURCING product display and buyer connection space in Horgos.",
        lead: "The Horgos showroom creates a practical sourcing connection point for buyers serving Kazakhstan and wider Central Asian markets.",
        note: "A physical showroom gives buyers a clearer way to review product categories while keeping supplier and trade coordination connected.",
        body: [
          ["p", "Located in the China-Kazakhstan Horgos International Border Cooperation Center, the showroom brings together product displays, sourcing communication and regional market connection within one overseas-facing space."],
          ["h2", "A practical product display point"],
          ["p", "The showroom covers more than 3,000 square meters and presents thousands of product references across household goods, outdoor products, maternal and infant supplies, gifts and other sourcing categories. Buyers can use the display space to compare product directions before moving into detailed supplier communication."],
          ["h2", "Connecting sourcing with regional delivery"],
          ["p", "Beyond product presentation, the Horgos location supports buyer reception, requirement collection and communication with China-based supply resources. The goal is to make sourcing discussions more direct while creating a stronger bridge between products, suppliers and Central Asian market demand."],
          ["p", "HUANGYAN SOURCING will continue to organize product information and showroom displays based on buyer feedback, helping the overseas network become a practical extension of the sourcing and supply chain service system."]
        ]
      },
      "indonesia-showroom": {
        title: "Indonesia Showroom Supports ASEAN Buyer Connections",
        date: "08 August 2025",
        category: "Market Connection",
        location: "Jakarta, Indonesia",
        image: "./assets/images/news/indonesia-ecommerce-hub.webp",
        imageAlt: "Indonesia cross-border e-commerce hub building",
        caption: "The Indonesia showroom connects local market demand with China sourcing resources.",
        lead: "A new showroom connection in Indonesia expands local product presentation and sourcing support for buyers across ASEAN markets.",
        note: "Local market access helps product information, buyer feedback and sourcing requirements move through one clearer communication route.",
        body: [
          ["p", "The Indonesia showroom is located within a cross-border e-commerce hub and provides an offline display point for China-made product categories, buyer meetings and trade service communication."],
          ["h2", "Closer to local purchasing demand"],
          ["p", "By presenting selected products closer to the destination market, the showroom helps buyers review category directions and communicate target price, packaging, quantity and market requirements with greater clarity."],
          ["h2", "Online and offline resources working together"],
          ["p", "The showroom also supports digital product presentation and cross-border channel connections. Product feedback collected locally can be returned to the sourcing team and relevant suppliers in China for follow-up."],
          ["p", "This combination of physical display, digital information and sourcing coordination provides more practical entry points for long-term cooperation in Indonesia and nearby markets."]
        ]
      },
      "malaysia-pavilion": {
        title: "Malaysia Pavilion Builds a Local Product Display Center",
        date: "11 July 2025",
        category: "Showroom Network",
        location: "Selangor, Malaysia",
        image: "./assets/images/news/malaysia-pavilion.webp",
        imageAlt: "Malaysia pavilion and showroom building exterior",
        caption: "Malaysia pavilion and showroom serving local buyers and channel partners.",
        lead: "The Malaysia pavilion creates a local display and trade connection point for products sourced from Huangyan, Taizhou and wider China resources.",
        note: "Showroom presentation is most valuable when it is linked to real sourcing follow-up, supplier communication and market feedback.",
        body: [
          ["p", "The showroom in Selangor supports product presentation, buyer reception and cooperation discussions for Malaysian importers, distributors and e-commerce channels."],
          ["h2", "A clearer view of product opportunities"],
          ["p", "Selected household, lifestyle, outdoor and maternal product categories are organized for local review. This allows market partners to identify suitable product directions before requesting detailed quotations or samples."],
          ["h2", "Supporting local promotion"],
          ["p", "The pavilion can also connect product display with livestream, online promotion and channel resources, giving suppliers and buyers more ways to test market response."],
          ["p", "HUANGYAN SOURCING uses this feedback to improve product organization and support more focused sourcing communication between Malaysian buyers and China-based suppliers."]
        ]
      },
      "product-displays": {
        title: "Showroom Displays Expand All-Category Product Selection",
        date: "18 September 2025",
        category: "Product Resources",
        location: "Huangyan, China",
        image: "./assets/images/showroom/exhibition-01.webp",
        imageAlt: "Huangyan sourcing showroom product shelves",
        caption: "All-category product displays at a HUANGYAN SOURCING showroom.",
        lead: "New product displays make it easier for buyers to compare sourcing directions across multiple categories in one visit.",
        note: "The online directory is a starting point; showroom organization helps buyers discover adjacent categories and consolidation opportunities.",
        body: [
          ["p", "HUANGYAN SOURCING continues to organize products from regional suppliers and wider China sourcing resources into clearer showroom categories."],
          ["h2", "More categories in one sourcing view"],
          ["p", "Current displays include household goods, baby products, kitchenware, gifts, outdoor equipment, footwear, bags and selected mechanical and electrical products."],
          ["h2", "Designed around buyer comparison"],
          ["p", "The display structure helps visiting buyers compare materials, price positioning, packaging directions and adjacent product opportunities while discussing sourcing requirements with one coordination team."],
          ["p", "Product selections will continue to change according to overseas market feedback, buyer requests and new supplier resources."]
        ]
      },
      "guangxi-showroom": {
        title: "Regional Showroom Network Adds a New Buyer Connection Point",
        date: "26 September 2025",
        category: "Showroom Network",
        location: "Guangxi, China",
        image: "./assets/images/showroom/guangxi-showroom.webp",
        imageAlt: "Guangxi sourcing showroom and reception space",
        caption: "Regional showroom and buyer reception point in Guangxi.",
        lead: "A regional showroom connection strengthens product presentation and trade communication for buyers working with southern China channels.",
        note: "Each showroom adds value by connecting local market conversations with the same sourcing and supplier coordination system.",
        body: [
          ["p", "The Guangxi showroom expands the platform's regional connection network and provides another location for product presentation, buyer meetings and sourcing requirement collection."],
          ["h2", "Linking regional channels"],
          ["p", "The location can support partners serving ASEAN-facing trade routes while connecting product requirements with suppliers and sourcing teams in Zhejiang and other manufacturing regions."],
          ["h2", "A shared service route"],
          ["p", "Requirements collected through the showroom follow the same process for product matching, supplier communication, quotation, samples and delivery coordination."],
          ["p", "This shared structure helps the showroom network remain practical and consistent as additional market connection points are developed."]
        ]
      },
      "digital-sourcing": {
        title: "Digital Product Resources Improve Overseas Sourcing Communication",
        date: "03 October 2025",
        category: "Platform Update",
        location: "Taizhou, China",
        image: "./assets/images/showroom/home-showroom.webp",
        imageAlt: "HUANGYAN SOURCING digital and physical showroom resources",
        caption: "Product data and showroom resources support clearer overseas sourcing communication.",
        lead: "HUANGYAN SOURCING is organizing product information for faster comparison across websites, showroom displays and buyer communication channels.",
        note: "Clear product data reduces repeated communication and gives buyers a stronger starting point for supplier matching and quotation.",
        body: [
          ["p", "Product sourcing becomes more efficient when images, specifications, packaging information and category positioning are organized before detailed supplier discussions begin."],
          ["h2", "A more consistent product information base"],
          ["p", "The platform is improving how product references are grouped and presented across the website, digital catalogues and physical showroom displays."],
          ["h2", "Supporting faster buyer feedback"],
          ["p", "Overseas buyers can identify relevant products, return clearer comments and provide target requirements earlier in the sourcing process."],
          ["p", "The digital resource base will continue to grow alongside supplier matching, sample coordination and market connection services."]
        ]
      },
      "buyer-requirements": {
        title: "Buyer Requirements Guide Product and Supplier Matching",
        date: "15 October 2025",
        category: "Sourcing Insight",
        location: "Huangyan, China",
        image: "./assets/images/about/network-wall.webp",
        imageAlt: "HUANGYAN SOURCING supplier and market connection network",
        caption: "Buyer requirements connect product discovery with focused supplier matching.",
        lead: "Clear information about the target market, quantity, standards and packaging gives sourcing teams a stronger basis for product and supplier comparison.",
        note: "A useful sourcing brief does not need to be long, but it should make the buyer's priorities and commercial conditions visible.",
        body: [
          ["p", "Product sourcing moves faster when the initial request explains where the product will be sold, the expected quantity, target positioning and any required standards or customization."],
          ["h2", "Start with the conditions that matter"],
          ["p", "Target market, materials, dimensions, certification needs, packaging, logo application, target price and delivery timing all help narrow the product search and identify more suitable suppliers."],
          ["h2", "Use one brief throughout the project"],
          ["p", "The same requirement brief can guide product discovery, quotation comparison, sample feedback and order coordination, reducing repeated explanations between the buyer and different supply partners."],
          ["p", "HUANGYAN SOURCING uses this information as the starting point for matching products and suppliers while keeping communication connected through later sourcing stages."]
        ]
      }
    };

    const params = new URLSearchParams(window.location.search);
    const articleKey = params.get("article") || "horgos-showroom";
    const article = articles[articleKey] || articles["horgos-showroom"];

    function setText(selector, value) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.textContent = value;
      });
    }

    setText("[data-news-title]", article.title);
    setText("[data-news-date]", article.date);
    setText("[data-news-category]", article.category);
    setText("[data-news-location]", article.location);
    setText("[data-news-lead]", article.lead);
    setText("[data-news-caption]", article.caption);
    setText("[data-news-note]", article.note);

    const cover = document.querySelector("[data-news-image]");
    if (cover) {
      cover.src = article.image;
      cover.alt = article.imageAlt;
    }

    const body = document.querySelector("[data-news-body]");
    if (body) {
      body.innerHTML = article.body.map(function (block) {
        const tag = block[0] === "h2" ? "h2" : "p";
        return `<${tag}>${block[1]}</${tag}>`;
      }).join("");
    }

    document.title = `${article.title} | HUANGYAN SOURCING`;
  });
})();
