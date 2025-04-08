/**
 * We will use
 * 
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png', 
    keywords: 'Printing,'
  })
 */

const LOGO_URL = '/img/logon_fina.png'

const DESCRIPTIONS = {
  common: `London's top custom printing service for t-shirts, hoodies & promotional wear. Same-day printing, no minimum orders & premium quality. Get a free quote today!`, 
}
const KEYWORDS = {
  common: `    "custom t-shirt printing London",
    "same day printing service",
    "promotional wear printing",
    "screen printing London",
    "DTG printing UK",
    "vinyl t-shirt printing",
    "no minimum order printing",
    "bulk t-shirt printing",
    "school uniform printing",
    "university merchandise",
    "team sports kits printing",
    "organic cotton t-shirts",
    "custom hoodies London",
    "personalized tote bags",
    "corporate branding apparel",
    "event merchandise printing",
    "24/7 printing service",
    "fast turnaround printing",
    "high quality custom apparel",
    "bespoke clothing London",
    "design your own t-shirt",
    "eco-friendly printing",
    "washable custom prints",
    "durable t-shirt designs"`, 
}


let META_BOX = {
  root: { 
    title: 'Teeprint', 
    description: DESCRIPTIONS.common, 
    ogImage: LOGO_URL,
    keywords: KEYWORDS.common,
  },
  pages: {
    "women-t-shirt": {
      "description": "Lorem ipsum description",
      "keywords": KEYWORDS.common
    },
    "commodi-nemo-quidem": {
      "description": "Lorem ipsum description for comoodi",
      "keywords": KEYWORDS.common, 
    },
  },
  category_pages: {
    "commodi-nemo-quidem": {
      "description": "Lorem ipsum description for comoodi",
      "keywords": KEYWORDS.common
    },
  },
  same_day_pages: {
    "active_ware": {
      "title": "Same-Day Custom Active Wear Printing London | Tee Print London",
      "description": "Need same-day active wear printing in London? Tee Print London offers fast, high-quality custom gym wear, sports team kits & fitness apparel with DTG, screen & vinyl printing. Get your order printed TODAY!",
      "keywords": [
        "same-day active wear printing",
        "custom gym wear London",
        "sports team printing UK",
        "fast activewear printing",
        "DTG printing activewear",
        "vinyl printing sportswear",
        "same-day fitness apparel",
        "urgent active wear print",
        "custom workout clothes London",
        "bulk activewear printing UK"
      ].concat(KEYWORDS.common)
    },
    "apron": {
  "title": "Same-Day Custom Apron Printing London | Fast Turnaround | Tee Print London",
  "description": "Need custom aprons printed same-day in London? Tee Print London offers high-quality apron printing for businesses, kitchens & events with DTG, screen & vinyl techniques. Order by noon, get it TODAY!",
  "keywords": [
    "same-day apron printing",
    "custom aprons London",
    "business apron printing UK",
    "fast apron printing service",
    "DTG printing aprons",
    "vinyl apron printing",
    "same-day kitchen aprons",
    "urgent apron printing",
    "promotional aprons London",
    "bulk apron printing UK",
    "corporate event aprons",
    "personalized apron printing"
  ].concat(KEYWORDS.common)
},

"cap": {
  "title": "Same-Day Custom Cap Printing London | Fast Turnaround | Tee Print London",
  "description": "Need custom caps printed same-day in London? Tee Print London offers high-quality cap printing for businesses, sports teams & events with DTG, embroidery & vinyl techniques. Order by noon, get it TODAY!",
  "keywords": [
    "same-day cap printing",
    "custom caps London",
    "business cap printing UK",
    "fast cap printing service",
    "embroidered caps London",
    "vinyl cap printing",
    "same-day sports caps",
    "urgent cap printing",
    "promotional caps London",
    "bulk cap printing UK",
    "corporate event caps",
    "personalized cap printing",
    "custom baseball caps",
    "team cap printing",
    "branded caps same-day"
  ].concat(KEYWORDS.common)
},

"cotton_t_shirt": {
  "title": "Same-Day Custom T-Shirt Printing London | Fast Turnaround | Tee Print London",
  "description": "Need custom cotton t-shirts printed same-day in London? Tee Print London offers high-quality DTG, screen & vinyl printing for businesses, teams & events. Order by noon, get it TODAY!",
  "keywords": [
    "same-day t-shirt printing",
    "custom cotton t-shirts London",
    "business t-shirt printing UK",
    "fast t-shirt printing service",
    "DTG printing t-shirts",
    "screen printing t-shirts",
    "same-day team uniforms",
    "urgent t-shirt printing",
    "promotional t-shirts London",
    "bulk t-shirt printing UK",
    "corporate event t-shirts",
    "personalized t-shirt printing",
    "custom cotton tees",
    "team t-shirt printing",
    "branded t-shirts same-day",
    "quick t-shirt printing London"
  ].concat(KEYWORDS.common)
},
"dress_shirt": {
  "title": "Same-Day Custom Dress Shirt Printing London | Corporate & Industrial Workwear | Tee Print",
  "description": "Need professional dress shirts printed same-day in London? Tee Print offers high-quality custom printing for corporate, industrial & hospitality uniforms. Fast turnaround & premium fabrics. Order today!",
  "keywords": [
    "same-day dress shirt printing",
    "custom corporate shirts London",
    "industrial workwear printing",
    "professional uniform printing UK",
    "fast dress shirt printing",
    "DTG printing dress shirts",
    "screen printed work shirts",
    "same-day business shirts",
    "urgent uniform printing",
    "branded dress shirts London",
    "bulk shirt printing UK",
    "hospitality uniform printing",
    "personalized dress shirts",
    "team uniform printing",
    "quick dress shirt service London",
    "custom work shirts same-day"
  ].concat(KEYWORDS.common)
},
"fleeces_and_knits": {
  "title": "Same-Day Fleece & Knitwear Printing London | Fast Custom Embroidery & Printing | Tee Print",
  "description": "Need custom fleeces or knits printed same-day in London? Tee Print offers high-quality embroidery, DTG & screen printing for teams, corporate & personal wear. Order by 12pm for same-day service!",
  "keywords": [
    "same-day fleece printing",
    "custom knitwear London",
    "team fleeces printing UK",
    "fast knitwear printing",
    "embroidered fleeces London",
    "DTG printing knits",
    "same-day hoodie printing",
    "urgent fleece printing",
    "corporate fleece printing",
    "sports team knitwear",
    "personalized fleeces UK",
    "bulk knitwear printing",
    "custom sweatshirt printing",
    "quick fleece service London",
    "branded knitwear same-day",
    "work fleece printing"
  ].concat(KEYWORDS.common)
},
"football_shirt": {
  "title": "Same-Day Football Kit Printing London | Custom Team Shirts | Tee Print",
  "description": "Need football shirts printed same-day in London? Tee Print offers professional team kit printing with player names, numbers & logos. Fast turnaround for clubs & schools. Order by 12pm!",
  "keywords": [
    "same-day football shirt printing",
    "custom team kits London",
    "football jersey printing UK",
    "fast football shirt service",
    "personalized football shirts",
    "club kit printing",
    "same-day team uniforms",
    "urgent football shirt printing",
    "youth football kits",
    "bulk football shirt printing",
    "player name printing",
    "custom football jerseys",
    "school sports kit printing",
    "quick football shirt London",
    "matchday kit printing",
    "teamwear printing same-day"
  ].concat(KEYWORDS.common)
},

"hoodie": {
  "title": "Same-Day Hoodie Printing London | Custom Sweatshirts & Pullovers | Tee Print",
  "description": "Need custom hoodies printed same-day in London? Tee Print offers premium DTG, screen & embroidery printing for hoodies & sweatshirts. Fast turnaround for teams, brands & events. Order by noon!",
  "keywords": [
    "same-day hoodie printing",
    "custom sweatshirts London",
    "personalized hoodies UK",
    "fast hoodie printing service",
    "DTG hoodie printing",
    "embroidered sweatshirts",
    "same-day pullover printing",
    "urgent hoodie printing",
    "branded hoodies London",
    "team hoodie printing",
    "bulk sweatshirt printing",
    "event hoodie printing",
    "quick hoodie service London",
    "custom zip-up hoodies",
    "screen printed sweatshirts",
    "same-day hoodie delivery"
  ].concat(KEYWORDS.common)
},
"polo_shirt_printing": {
  "title": "Same-Day Polo Shirt Printing London | Custom Polo Shirts | Tee Print",
  "description": "Need custom polo shirts printed same-day in London? Tee Print offers premium DTG, screen & embroidery printing for polo shirts. Fast turnaround for businesses, teams & events. Order today!",
  "keywords": [
    "same-day polo shirt printing",
    "custom polo shirts London",
    "personalized polo shirts UK",
    "fast polo shirt printing service",
    "DTG polo shirt printing",
    "embroidered polo shirts",
    "same-day polo printing",
    "urgent polo shirt printing",
    "branded polo shirts London",
    "team polo shirt printing",
    "bulk polo shirt printing",
    "event polo shirt printing",
    "quick polo service London",
    "custom printed polo shirts",
    "screen printed polo shirts",
    "same-day polo shirt delivery",
    "corporate polo shirt printing",
    "promotional polo shirts",
    "high quality polo printing",
    "custom logo polo shirts"
  ].concat(KEYWORDS.common)
},
"promotion_shirts": {
  "title": "Same-Day Promotional Shirt Printing London | Custom Branded Tees | Tee Print",
  "description": "Need custom promotional shirts printed same-day in London? Tee Print offers fast DTG, screen & embroidery printing for corporate, team & event shirts. Order by noon for same-day delivery!",
  "keywords": [
    "same-day promotional shirt printing",
    "custom branded shirts London",
    "corporate t-shirt printing UK",
    "fast promotional shirt service",
    "DTG printed shirts",
    "screen printed event shirts",
    "same-day company shirt printing",
    "urgent promotional t-shirts",
    "branded workwear London",
    "team uniform printing",
    "bulk promotional shirts",
    "event t-shirt printing",
    "quick shirt service London",
    "custom logo shirts",
    "vinyl printed shirts",
    "same-day shirt delivery",
    "business promotional shirts",
    "staff uniform printing",
    "high quality shirt printing",
    "last-minute t-shirt printing"
  ].concat(KEYWORDS.common)
},

"promotion_t_shirts": {
  "title": "Same-Day Promotional T-Shirt Printing London | Custom Branded Tees | Tee Print",
  "description": "Need custom promotional t-shirts printed same-day in London? Tee Print offers fast DTG, screen & embroidery printing for corporate, team & event t-shirts. Order by noon for same-day delivery!",
  "keywords": [
    "same-day t-shirt printing",
    "promotional t-shirts London",
    "custom branded t-shirts UK",
    "fast t-shirt printing service",
    "DTG printed t-shirts",
    "screen printed event tees",
    "same-day company t-shirt printing",
    "urgent promotional t-shirts",
    "branded workwear London",
    "team t-shirt printing",
    "bulk promotional t-shirts",
    "event t-shirt printing",
    "quick t-shirt service London",
    "custom logo t-shirts",
    "vinyl printed t-shirts",
    "same-day t-shirt delivery",
    "business promotional t-shirts",
    "staff uniform printing",
    "high quality t-shirt printing",
    "last-minute t-shirt printing",
    "corporate t-shirt printing",
    "branded giveaways London"
  ].concat(KEYWORDS.common)
},
"shirt": {
  "title": "Same-Day T-Shirt Printing London | Custom T-Shirts Printed Today | Tee Print",
  "description": "Need custom t-shirts printed same-day in London? Tee Print offers fast DTG, screen & vinyl printing for businesses, teams & events. Get premium quality t-shirts printed in 24 hours. Order by noon!",
  "keywords": [
    "same-day t-shirt printing",
    "custom t-shirts London",
    "printed t-shirts same day",
    "fast t-shirt printing service",
    "DTG t-shirt printing London",
    "screen printed t-shirts UK",
    "emergency t-shirt printing",
    "urgent t-shirt printing London",
    "branded t-shirts same day",
    "team t-shirt printing",
    "event t-shirts fast turnaround",
    "corporate t-shirt printing",
    "promotional t-shirts London",
    "vinyl printed t-shirts",
    "same-day t-shirt delivery",
    "24 hour t-shirt printing",
    "quick t-shirt printing service",
    "custom logo t-shirts fast",
    "bulk t-shirt printing London",
    "high quality t-shirt printing"
  ].concat(KEYWORDS.common)
},
"sports_shirt": {
  "title": "Same-Day Sports Shirt Printing London | Custom Team Kits | Tee Print",
  "description": "Need custom sports shirts printed same-day in London? Tee Print offers fast DTG, screen & sublimation printing for teams, clubs & events. Get professional-quality sports shirts in 24 hours. Order by noon!",
  "keywords": [
    "same-day sports shirt printing",
    "custom team kits London",
    "football shirt printing UK",
    "fast sports jersey printing",
    "DTG sports shirt printing",
    "screen printed team uniforms",
    "same-day club kit printing",
    "urgent sports shirt printing",
    "custom football shirts London",
    "rugby team shirt printing",
    "basketball jersey printing",
    "cricket team shirts",
    "quick sports shirt service London",
    "personalized sports tops",
    "sublimation printed shirts",
    "same-day sports kit delivery",
    "team uniform printing London",
    "performance sportswear printing",
    "high quality sports shirts",
    "last-minute team kit printing",
    "custom numbered shirts",
    "athletic wear printing"
  ].concat(KEYWORDS.common)
},
"sweatshirt": {
  "title": "Custom Sweatshirt Printing London | Same-Day Printing | Tee Print",
  "description": "Premium custom sweatshirt printing in London with same-day service. High-quality DTG & screen printing for businesses, teams & personal wear. Get your custom sweatshirts printed fast!",
  "keywords": [
    "custom sweatshirt printing",
    "personalized sweatshirts London",
    "same-day sweatshirt printing",
    "DTG sweatshirt printing UK",
    "screen printed sweatshirts",
    "company branded sweatshirts",
    "team sweatshirt printing",
    "promotional sweatshirts London",
    "hoodie printing service",
    "custom crewneck sweatshirts",
    "bulk sweatshirt printing",
    "high quality sweatshirt prints",
    "fast sweatshirt printing London",
    "custom fleece printing",
    "sweatshirt printing for businesses",
    "school sweatshirt printing",
    "event sweatshirt printing",
    "custom zip-up hoodies",
    "premium sweatshirt printing",
    "same-day hoodie printing"
  ].concat(KEYWORDS.common)
},
"tote_bag": {
  "title": "Same-Day Tote Bag Printing London | Custom Printed Totes | Tee Print",
  "description": "Need custom tote bags printed same-day in London? Tee Print offers fast screen & DTG printing for promotional, branded & personal tote bags. Get premium quality printed totes in 24 hours!",
  "keywords": [
    "same-day tote bag printing",
    "custom printed tote bags London",
    "promotional tote bags UK",
    "fast tote bag printing service",
    "screen printed tote bags",
    "personalized shopping bags",
    "same-day bag printing",
    "urgent tote bag printing",
    "branded tote bags London",
    "event tote bag printing",
    "eco-friendly bag printing",
    "canvas tote printing",
    "quick tote bag service London",
    "custom logo tote bags",
    "vinyl printed totes",
    "same-day tote bag delivery",
    "corporate gift bags",
    "reusable bag printing",
    "high quality tote printing",
    "last-minute tote bags"
  ].concat(KEYWORDS.common)
},

"university_shirt": {
  "title": "Same-Day University Shirt Printing London | Custom School T-Shirts | Tee Print",
  "description": "Need custom university or school shirts printed same-day in London? Tee Print offers fast DTG & screen printing for student groups, sports teams & school events. Get premium quality printed shirts in 24 hours!",
  "keywords": [
    "university shirt printing",
    "custom school t-shirts London",
    "same-day student shirt printing",
    "school sports team shirts",
    "DTG printing for universities",
    "screen printed school shirts",
    "custom university merchandise",
    "urgent school shirt printing",
    "freshers week t-shirts",
    "society t-shirt printing",
    "bulk student shirt printing",
    "event t-shirts for schools",
    "quick university shirt service London",
    "custom logo school shirts",
    "vinyl printed university tops",
    "same-day student shirt delivery",
    "school leavers hoodies",
    "sports team kit printing",
    "high quality school shirts",
    "last-minute university shirts",
    "personalized student t-shirts",
    "school trip t-shirt printing"
  ].concat(KEYWORDS.common)
},

"university_t_shirt": {
  "title": "Same-Day University T-Shirt Printing London | Custom School Tees | Tee Print",
  "description": "Need custom university or school t-shirts printed same-day in London? Tee Print offers fast DTG & screen printing for student societies, sports teams & school events. Get premium quality printed tees in 24 hours!",
  "keywords": [
    "university t-shirt printing",
    "custom school t-shirts London",
    "same-day student t-shirt printing",
    "school sports team shirts",
    "DTG printing for universities",
    "screen printed school tees",
    "custom university merchandise",
    "urgent school t-shirt printing",
    "freshers week t-shirts",
    "society t-shirt printing",
    "bulk student t-shirt printing",
    "event t-shirts for schools",
    "quick university t-shirt service London",
    "custom logo school shirts",
    "vinyl printed university tops",
    "same-day student t-shirt delivery",
    "school leavers t-shirts",
    "sports team kit printing",
    "high quality school t-shirts",
    "last-minute university tees",
    "personalized student t-shirts",
    "school trip t-shirt printing",
    "custom college apparel",
    "university society merchandise",
    "graduation t-shirt printing"
  ].concat(KEYWORDS.common)
}


    
  },
  advertise: {
"advertising_banner": {
  "title": "Premium Banner Printing London | Custom Advertising Banners | Tee Print",
  "description": "High-quality banner printing in London for businesses & events. PVC, vinyl & roller banners with vibrant prints & fast turnaround. Get a free quote for your custom advertising banners today!",
  "keywords": [
    "banner printing London",
    "custom advertising banners",
    "PVC banner printing UK",
    "vinyl banner printing",
    "roller banner printing",
    "outdoor banner printing",
    "event banner printing",
    "trade show banners",
    "retail banner printing",
    "high quality banner prints",
    "fast banner printing service",
    "custom pull-up banners",
    "large format banner printing",
    "promotional banner printing",
    "business banner printing",
    "storefront banner printing",
    "durable outdoor banners",
    "professional banner printing",
    "banner printing for events",
    "custom size banner printing",
    "quick turnaround banners"
  ].concat(KEYWORDS.common)
},
"business_card": {
  "title": "Premium Business Card Printing London | Custom Business Cards | Tee Print",
  "description": "High-quality business card printing in London with custom designs, premium finishes & fast turnaround. Perfect for professionals & businesses. Get a free quote for your custom cards today!",
  "keywords": [
    "business card printing London",
    "custom business cards UK",
    "premium business cards",
    "professional business card printing",
    "same day business cards",
    "luxury business card printing",
    "matte business cards",
    "gloss business cards",
    "foil stamped business cards",
    "raised ink business cards",
    "spot UV business cards",
    "die-cut business cards",
    "fast business card printing",
    "business card printing services",
    "cheap business card printing",
    "high quality business cards",
    "executive business cards",
    "creative business card designs",
    "small business cards",
    "corporate business cards",
    "eco-friendly business cards",
    "quick business card printing"
  ].concat(KEYWORDS.common)
},

"flyer_and_leaflet": {
  "title": "Professional Flyer & Leaflet Printing London | Same-Day Service | Tee Print",
  "description": "High-quality flyer & leaflet printing in London with fast turnaround. Perfect for businesses, events & promotions. Custom sizes, premium finishes & same-day printing available. Get a free quote!",
  "keywords": [
    "flyer printing London",
    "leaflet printing UK",
    "same-day flyer printing",
    "professional leaflet printing",
    "promotional flyers printing",
    "event flyer printing",
    "business flyer printing",
    "cheap flyer printing",
    "high quality leaflet printing",
    "fast flyer printing service",
    "custom flyer printing",
    "glossy flyer printing",
    "matte leaflet printing",
    "A5 flyer printing",
    "A6 leaflet printing",
    "DL flyer printing",
    "full color flyer printing",
    "double sided leaflet printing",
    "eco-friendly flyer printing",
    "bulk flyer printing",
    "quick leaflet printing",
    "same-day delivery flyers"
  ].concat(KEYWORDS.common)
},
"folded_flyer_and_menu": {
  "title": "Premium Folded Flyer & Menu Printing London | Same-Day Service | Tee Print",
  "description": "High-quality folded flyer & menu printing in London. Perfect for restaurants, cafes & events. Bi-fold, tri-fold & custom designs with fast turnaround. Get a free quote today!",
  "keywords": [
    "folded flyer printing London",
    "menu printing UK",
    "restaurant menu printing",
    "bi-fold flyer printing",
    "tri-fold leaflet printing",
    "same-day menu printing",
    "cafe menu printing",
    "professional flyer printing",
    "high quality menu printing",
    "custom folded flyers",
    "glossy menu printing",
    "matte finish flyers",
    "A4 folded flyers",
    "DL menu printing",
    "full color menu printing",
    "double sided flyer printing",
    "eco-friendly menu printing",
    "bulk flyer printing",
    "quick menu printing",
    "same-day delivery flyers",
    "restaurant marketing materials",
    "food menu printing services",
    "event program printing"
  ].concat(KEYWORDS.common)
},
"mug_print": {
  "title": "Custom Mug Printing London | Personalized Mugs & Promotional Cups | Tee Print",
  "description": "High-quality custom mug printing in London. Perfect for gifts, promotions & personal use. Ceramic, travel & photo mugs with vibrant prints. Fast turnaround & free quote available!",
  "keywords": [
    "custom mug printing London",
    "personalized mugs UK",
    "promotional mugs printing",
    "photo mug printing",
    "ceramic mug printing",
    "travel mug printing",
    "full color mug printing",
    "sublimation mug printing",
    "corporate gift mugs",
    "branded coffee mugs",
    "custom photo mugs",
    "printed coffee cups",
    "personalized travel mugs",
    "mug printing for businesses",
    "event giveaway mugs",
    "high quality mug printing",
    "custom text mugs",
    "logo mug printing",
    "quick mug printing service",
    "same-day mug printing",
    "bulk mug printing",
    "unique gift mugs",
    "custom designed mugs",
    "heat resistant mug printing"
  ].concat(KEYWORDS.common)
},
"sign_print": {
  "title": "Professional Sign Printing London | Custom Business Signs | Tee Print",
  "description": "High-quality sign printing in London. Corrugated plastic, acrylic, aluminium & wooden signs for businesses & events. Durable, weather-resistant & custom designs. Get a free quote!",
  "keywords": [
    "sign printing London",
    "custom business signs UK",
    "corrugated plastic signs",
    "acrylic sign printing",
    "aluminium signs printing",
    "Foamex board printing",
    "outdoor sign printing",
    "indoor business signs",
    "shop sign printing",
    "window signage printing",
    "promotional signs printing",
    "weatherproof signs",
    "custom shaped signs",
    "fast sign printing service",
    "high quality sign printing",
    "office signage printing",
    "restaurant sign printing",
    "retail store signs",
    "event signage printing",
    "directional signs printing",
    "illuminated sign printing",
    "vinyl lettering signs",
    "same-day sign printing",
    "professional sign makers"
  ].concat(KEYWORDS.common)
},
"sticker_print": {
  "title": "Custom Sticker Printing London | Premium Vinyl & Die-Cut Stickers | Tee Print",
  "description": "High-quality custom sticker printing in London. Waterproof vinyl, transparent, die-cut & photo stickers for businesses & personal use. Fast turnaround & free quote available!",
  "keywords": [
    "custom sticker printing London",
    "vinyl sticker printing UK",
    "waterproof stickers printing",
    "die-cut stickers printing",
    "transparent sticker printing",
    "photo stickers printing",
    "car sticker printing",
    "product label printing",
    "promotional stickers printing",
    "business card stickers",
    "wall sticker printing",
    "window sticker printing",
    "circle sticker printing",
    "square sticker printing",
    "roll label printing",
    "weatherproof sticker printing",
    "high quality sticker printing",
    "custom shaped stickers",
    "quick sticker printing service",
    "same-day sticker printing",
    "bulk sticker printing",
    "unique sticker designs",
    "custom logo stickers",
    "matte finish stickers",
    "glossy finish stickers"
  ].concat(KEYWORDS.common)
},
"ticket_and_voucher": {
  "title": "Custom Ticket & Voucher Printing London | Event Tickets & Gift Vouchers | Tee Print",
  "description": "Professional ticket & voucher printing in London. High-quality event tickets, gift vouchers & loyalty cards with custom designs. Fast turnaround & competitive pricing. Get a free quote!",
  "keywords": [
    "ticket printing London",
    "custom voucher printing UK",
    "event ticket printing",
    "concert ticket printing",
    "gift voucher printing",
    "loyalty card printing",
    "discount voucher printing",
    "admission ticket printing",
    "personalized vouchers",
    "high quality ticket printing",
    "fast voucher printing service",
    "custom designed tickets",
    "numbered ticket printing",
    "barcoded vouchers",
    "security feature tickets",
    "matte finish vouchers",
    "glossy ticket printing",
    "same-day ticket printing",
    "bulk voucher printing",
    "theatre ticket printing",
    "festival passes printing",
    "corporate gift vouchers",
    "retail voucher printing",
    "restaurant gift cards"
  ].concat(KEYWORDS.common)
}



    
  },
  cloth: {
    "active_wear": {
  "title": "Custom Active Wear Printing London | Gym & Sports Apparel | Tee Print",
  "description": "Premium custom active wear printing in London. High-performance gym wear, sports team uniforms & fitness apparel with durable prints. Fast turnaround & free quote available!",
  "keywords": [
    "custom active wear printing London",
    "gym wear printing UK",
    "sports team uniform printing",
    "performance apparel printing",
    "DTG active wear printing",
    "screen printed gym clothes",
    "custom fitness apparel",
    "personalized workout clothes",
    "breathable sportswear printing",
    "moisture-wicking active wear",
    "sublimation sportswear printing",
    "yoga wear custom printing",
    "running gear printing",
    "cycling jersey printing",
    "team sports uniform printing",
    "high quality active wear",
    "quick dry sportswear",
    "compression wear printing",
    "custom logo active wear",
    "bulk gym wear printing",
    "same-day active wear printing",
    "durable sports apparel",
    "custom designed workout clothes",
    "personalized training gear"
  ].concat(KEYWORDS.common)
},
"apron": {
  "title": "Custom Apron Printing London | Personalized & Branded Aprons | Tee Print",
  "description": "Premium custom apron printing in London. High-quality kitchen, barista & BBQ aprons with durable prints. Perfect for businesses, cafes & events. Fast turnaround & free quote!",
  "keywords": [
    "custom apron printing London",
    "personalized aprons UK",
    "chef apron printing",
    "kitchen apron printing",
    "barista apron printing",
    "BBQ apron printing",
    "restaurant apron printing",
    "cafe apron printing",
    "branded aprons printing",
    "logo apron printing",
    "waterproof apron printing",
    "heavy duty apron printing",
    "waist apron printing",
    "bib apron printing",
    "cobbler apron printing",
    "high quality apron printing",
    "custom text aprons",
    "bulk apron printing",
    "same-day apron printing",
    "event apron printing",
    "wedding apron printing",
    "personalized chef gifts",
    "customized kitchen wear",
    "durable apron printing"
  ].concat(KEYWORDS.common)
},
"basketball_shirt": {
  "title": "Custom Basketball Jerseys & Team Tanks London | Premium Printing | Tee Print",
  "description": "High-quality basketball jersey & team tank printing in London. Durable, breathable designs for teams & players with vibrant custom prints. Fast turnaround & bulk discounts. Get a free quote!",
  "keywords": [
    "custom basketball jerseys London",
    "basketball team tank printing",
    "personalized basketball uniforms",
    "screen printed basketball jerseys",
    "sublimation jersey printing",
    "basketball team wear UK",
    "custom basketball singlets",
    "performance basketball shirts",
    "breathable basketball uniforms",
    "moisture-wicking team tanks",
    "custom player numbers printing",
    "team logo basketball jerseys",
    "reversible basketball jerseys",
    "youth basketball uniforms",
    "adult basketball team wear",
    "high quality basketball jerseys",
    "quick dry basketball shirts",
    "custom designed team tanks",
    "bulk basketball jersey printing",
    "same-day basketball uniforms",
    "durable basketball apparel",
    "personalized team basketball gear",
    "custom basketball practice jerseys"
  ].concat(KEYWORDS.common)
},
"cap": {
  "title": "Premium Custom Cap Printing | Tee Print London",
  "description": "Elevate your caps with Tee Print London's premium custom printing services. High-quality, durable cap printing for businesses, events, sports teams, or personal use with vibrant, long-lasting designs.",
  "keywords": [
    "custom cap printing London",
    "premium cap printing services",
    "personalized caps UK",
    "business cap printing",
    "event cap printing",
    "sports team caps",
    "direct-to-garment cap printing",
    "screen printed caps",
    "vinyl printed caps",
    "durable cap designs",
    "vibrant cap printing",
    "bulk cap orders",
    "custom logo caps",
    "high-quality cap printing",
    "long-lasting cap designs",
    "custom embroidery caps",
    "fashion cap printing",
    "promotional cap printing",
    "branded caps London",
    "team cap printing",
    "custom baseball caps",
    "personalized snapbacks",
    "unique cap designs"
  ].concat(KEYWORDS.common)
},
"cotton_t_shirt": {
  "title": "Premium Custom Cotton T-Shirt Printing | Tee Print London",
  "description": "Elevate your wardrobe with Tee Print London's premium custom cotton T-shirt printing. High-quality, durable printing for businesses, events, teams, or personal use with vibrant, long-lasting designs.",
  "keywords": [
    "custom cotton t-shirts London",
    "premium t-shirt printing services",
    "personalized cotton tees UK",
    "business t-shirt printing",
    "event t-shirt printing",
    "team t-shirts printing",
    "direct-to-garment printing",
    "screen printed cotton tees",
    "vinyl printed t-shirts",
    "durable t-shirt designs",
    "vibrant t-shirt printing",
    "bulk t-shirt orders",
    "custom logo t-shirts",
    "high-quality cotton printing",
    "long-lasting t-shirt designs",
    "custom embroidery t-shirts",
    "fashion t-shirt printing",
    "promotional t-shirt printing",
    "branded t-shirts London",
    "team apparel printing",
    "custom cotton apparel",
    "personalized crewnecks",
    "unique t-shirt designs"
  ].concat(KEYWORDS.common)
},
"dress_shirt": {
  "title": "Premium Custom Dress Shirt Printing | Corporate & Workwear | Tee Print London",
  "description": "Elevate your professional wardrobe with Tee Print London's premium custom dress shirt printing. High-quality corporate branding, team uniforms, and personalized workwear with vibrant, long-lasting designs.",
  "keywords": [
    "custom dress shirts London",
    "corporate shirt printing",
    "professional workwear printing",
    "business dress shirts",
    "team uniform shirts",
    "personalized work shirts",
    "direct-to-garment dress shirts",
    "screen printed formal shirts",
    "vinyl printed dress shirts",
    "durable shirt designs",
    "vibrant dress shirt printing",
    "bulk dress shirt orders",
    "custom logo dress shirts",
    "high-quality shirt printing",
    "long-lasting formal wear",
    "custom embroidery dress shirts",
    "professional shirt printing",
    "promotional dress shirts",
    "branded work shirts London",
    "corporate apparel printing",
    "custom business shirts",
    "personalized office wear",
    "unique dress shirt designs"
  ].concat(KEYWORDS.common)
},
"football_shirt": {
  "title": "Premium Football Team T-Shirts | Custom Printing London | Tee Print",
  "description": "High-quality custom football team t-shirts with vibrant, durable prints. Perfect for teams, players & sports events. Fast turnaround, bulk discounts & same-day printing available. Get a free quote!",
  "keywords": [
    "custom football t-shirts London",
    "football team shirt printing",
    "personalized football uniforms",
    "screen printed football shirts",
    "sublimation football jersey printing",
    "football team wear UK",
    "custom football kits",
    "performance football shirts",
    "breathable team uniforms",
    "moisture-wicking football shirts",
    "custom player numbers printing",
    "team logo football shirts",
    "reversible football jerseys",
    "youth football uniforms",
    "adult football team wear",
    "high quality football shirts",
    "quick dry sports shirts",
    "custom designed team kits",
    "bulk football shirt printing",
    "same-day football uniforms",
    "durable football apparel",
    "personalized team football gear",
    "custom football training shirts"
  ].concat(KEYWORDS.common)
},

"hoodie": {
  "title": "Premium Custom Hoodie Printing | London | Tee Print",
  "description": "Elevate your style with Tee Print London's premium custom hoodie printing. High-quality, durable printing for businesses, events, teams, or personal use with vibrant, long-lasting designs.",
  "keywords": [
    "custom hoodie printing London",
    "personalized hoodies UK",
    "screen printed hoodies",
    "DTG hoodie printing",
    "vinyl printed hoodies",
    "bulk hoodie orders",
    "custom logo hoodies",
    "high-quality hoodie printing",
    "long-lasting hoodie designs",
    "custom embroidery hoodies",
    "fashion hoodie printing",
    "promotional hoodie printing",
    "branded hoodies London",
    "team hoodie printing",
    "custom pullover hoodies",
    "personalized zip-up hoodies",
    "unique hoodie designs",
    "sublimation hoodie printing",
    "warm hoodies printing",
    "winter hoodies custom",
    "streetwear hoodie printing",
    "trendy hoodie designs",
    "oversized hoodie printing"
  ].concat(KEYWORDS.common)
},

"polo_shirt": {
  "title": "Premium Custom Polo Shirt Printing | London | Tee Print",
  "description": "High-quality custom polo shirt printing in London. Perfect for businesses, events & personal use. Vibrant, durable prints with fast turnaround. Get a free quote today!",
  "keywords": [
    "custom polo shirts London",
    "personalized polo shirt printing",
    "corporate polo shirts UK",
    "screen printed polo shirts",
    "DTG polo shirt printing",
    "vinyl printed polos",
    "embroidery polo shirts",
    "business polo shirts",
    "event polo shirts",
    "team uniform polos",
    "promotional polo shirts",
    "branded polo shirts",
    "high-quality polo printing",
    "long-lasting polo designs",
    "quick turnaround polo shirts",
    "same-day polo printing",
    "moisture-wicking polos",
    "performance polo shirts",
    "custom logo polo shirts",
    "personalized work polos",
    "golf polo shirt printing",
    "fashion polo shirts",
    "trendy polo designs"
  ].concat(KEYWORDS.common)
},
"promotion_shirts": {
  "title": "Custom Promotional Shirts Printing | Branded Apparel London | Tee Print",
  "description": "High-quality custom promotional shirts for businesses, events & branding. Vibrant, durable prints with fast turnaround. Perfect for company programs, anniversaries & promotions. Get a free quote!",
  "keywords": [
    "custom promotional shirts London",
    "branded apparel printing",
    "company anniversary shirts",
    "business promotion shirts",
    "event giveaway shirts",
    "corporate branded apparel",
    "screen printed promotional wear",
    "DTG printed shirts",
    "vinyl printed promotional shirts",
    "bulk promotional shirts",
    "custom logo work shirts",
    "high-quality branded apparel",
    "long-lasting promotional wear",
    "quick turnaround promotional shirts",
    "same-day shirt printing",
    "moisture-wicking promotional shirts",
    "performance work shirts",
    "company program shirts",
    "personalized promotional wear",
    "team uniform shirts",
    "fashion promotional shirts",
    "trendy branded apparel",
    "eco-friendly promotional shirts"
  ].concat(KEYWORDS.common)
},
"promotion_t_shirts": {
  "title": "Custom Promotional T-Shirts Printing | Branded Tees London | Tee Print",
  "description": "High-quality promotional t-shirts for corporate branding, teams & events. Vibrant, durable prints with fast turnaround across London & UK. Get a free quote today!",
  "keywords": [
    "promotional t-shirts London",
    "custom branded t-shirts",
    "corporate giveaway shirts",
    "event t-shirt printing",
    "team uniform t-shirts",
    "screen printed promotional tees",
    "DTG printed t-shirts",
    "vinyl printed promotional shirts",
    "bulk promotional t-shirts",
    "custom logo work tees",
    "high-quality branded t-shirts",
    "long-lasting promotional wear",
    "quick turnaround t-shirt printing",
    "same-day t-shirt printing London",
    "moisture-wicking promotional tees",
    "performance work shirts",
    "company branded t-shirts",
    "personalized promotional tees",
    "sports team t-shirts",
    "fashion promotional shirts",
    "trendy branded t-shirts",
    "eco-friendly promotional tees",
    "corporate event t-shirts"
  ].concat(KEYWORDS.common)
},
"sports_shirt": {
  "title": "Custom Sports T-Shirts Printing | Team Uniforms London | Tee Print",
  "description": "Premium quality sports t-shirts for teams & athletes. Durable, breathable designs with vibrant custom prints. Fast turnaround & bulk discounts available. Get a free quote today!",
  "keywords": [
    "custom sports t-shirts London",
    "team sports shirts printing",
    "personalized sports uniforms",
    "screen printed sports shirts",
    "sublimation sports jersey printing",
    "sports team wear UK",
    "custom football shirts",
    "performance sports shirts",
    "breathable team uniforms",
    "moisture-wicking sports shirts",
    "custom player numbers printing",
    "team logo sports shirts",
    "reversible sports jerseys",
    "youth sports uniforms",
    "adult team sports wear",
    "high quality sports shirts",
    "quick dry sports tees",
    "custom designed team kits",
    "bulk sports shirt printing",
    "same-day sports uniforms",
    "durable sports apparel",
    "personalized team sports gear",
    "custom training shirts"
  ].concat(KEYWORDS.common)
},
"sweatshirt": {
  "title": "Premium Custom Sweatshirts London | High-Quality Printing | TeePrint",
  "description": "London's finest custom sweatshirts with premium 300gsm cotton & museum-quality prints. Same-day service available. 100% satisfaction guarantee. Design your luxury sweatshirt today.",
  "keywords": [
    "custom sweatshirts London",
    "premium sweatshirt printing",
    "luxury hoodies UK",
    "same-day sweatshirt printing",
    "DTG sweatshirt printing",
    "screen printed sweatshirts",
    "high-end custom sweatshirts",
    "300gsm cotton sweatshirts",
    "designer sweatshirts printing",
    "corporate sweatshirts London",
    "team sweatshirts printing",
    "fashion sweatshirts UK",
    "boutique sweatshirt printing",
    "eco-friendly sweatshirt printing",
    "OEKO-TEX certified sweatshirts",
    "double-stitched sweatshirts",
    "premium ribbed cuff sweatshirts",
    "colorfast sweatshirt printing",
    "luxury apparel printing",
    "high-quality hoodie printing",
    "bespoke sweatshirts London",
    "designer hoodies printing",
    "upscale custom sweatshirts"
  ].concat(KEYWORDS.common)
},

"tote_bag": {
  "title": "Custom Tote Bag Printing | Premium Quality | Tee Print London",
  "description": "High-quality custom tote bag printing in London. Vibrant, durable designs for businesses, events & personal use. Fast turnaround & bulk discounts. Get a free quote today!",
  "keywords": [
    "custom tote bags London",
    "personalized tote bag printing",
    "promotional tote bags UK",
    "screen printed tote bags",
    "DTG tote bag printing",
    "vinyl printed totes",
    "canvas tote bag printing",
    "eco-friendly tote bags",
    "reusable shopping bag printing",
    "branded tote bags",
    "event giveaway tote bags",
    "corporate tote bag printing",
    "high-quality tote printing",
    "long-lasting bag designs",
    "quick turnaround tote printing",
    "same-day tote bag printing",
    "custom logo tote bags",
    "fashion tote bag printing",
    "trendy tote designs",
    "bulk tote bag orders",
    "personalized shopping bags",
    "unique tote bag designs",
    "premium tote bag printing"
  ].concat(KEYWORDS.common)
},
"university_shirt": {
  "title": "Custom University & School Shirts Printing | London | Tee Print",
  "description": "Premium quality university & school shirts with vibrant custom prints. Perfect for teams, events & student groups. Fast turnaround & bulk discounts. Get a free quote today!",
  "keywords": [
    "custom university shirts London",
    "school uniform t-shirt printing",
    "personalized student shirts",
    "screen printed university tees",
    "DTG school shirt printing",
    "vinyl printed university shirts",
    "embroidery school shirts",
    "sports team shirts printing",
    "student society t-shirts",
    "promotional university shirts",
    "branded school shirts",
    "high-quality university printing",
    "long-lasting school designs",
    "quick turnaround student shirts",
    "same-day university printing",
    "moisture-wicking school shirts",
    "performance student uniforms",
    "custom logo university shirts",
    "personalized college shirts",
    "freshers week t-shirts",
    "graduation shirts printing",
    "alumni shirts printing",
    "sports day t-shirts"
  ].concat(KEYWORDS.common)
},
"university_t_shirt": {
  "title": "Custom University & School T-Shirts Printing | London | Tee Print",
  "description": "Premium quality university & school t-shirts with vibrant custom prints. Perfect for teams, events & student groups. Fast turnaround & bulk discounts. Get a free quote today!",
  "keywords": [
    "custom university t-shirts London",
    "school uniform t-shirt printing",
    "personalized student shirts",
    "screen printed university tees",
    "DTG school shirt printing",
    "vinyl printed university shirts",
    "embroidery school shirts",
    "sports team shirts printing",
    "student society t-shirts",
    "promotional university shirts",
    "branded school shirts",
    "high-quality university printing",
    "long-lasting school designs",
    "quick turnaround student shirts",
    "same-day university printing",
    "moisture-wicking school shirts",
    "performance student uniforms",
    "custom logo university shirts",
    "personalized college shirts",
    "freshers week t-shirts",
    "graduation shirts printing",
    "alumni shirts printing",
    "sports day t-shirts",
    "school event t-shirts",
    "university merchandise printing",
    "custom student group shirts"
  ].concat(KEYWORDS.common)
}


    
    
    
        
  
},
      qoute:{
"quote": {
  "title": "Get a Free Printing Quote | Fast Turnaround | Tee Print London",
  "description": "Get a custom quote for your printing needs in London. Same day, next day & standard delivery options available. Upload your design for a fast, accurate estimate.",
  "keywords": [
    "printing quote London",
    "custom t-shirt quote",
    "same day printing quote",
    "next day delivery printing",
    "bulk order quote",
    "screen printing estimate",
    "DTG printing quote",
    "vinyl printing cost",
    "embroidery pricing",
    "quick quote printing",
    "online printing quote",
    "design upload for quote",
    "promotional products quote",
    "corporate printing quote",
    "team uniform pricing",
    "event merchandise quote",
    "school printing quote",
    "university merchandise pricing",
    "small business printing quote",
    "large order discount printing",
    "artwork submission for quote",
    "fast turnaround printing London",
    "competitive printing quotes"
  ].concat(KEYWORDS.common)
}
      },
      Design_Service:{
        "custom_apparel": {
  "title": "Premium Custom Apparel Printing London | T-Shirts to Teamwear | Tee Print",
  "description": "Complete custom apparel solutions in London - from school uniforms to sports teamwear. Advanced printing for t-shirts, hoodies, aprons & more. Get a free design consultation today.",
  "keywords": [
    "custom t-shirt printing London",
    "school uniform printing",
    "university merchandise",
    "sports teamwear printing",
    "promotional apparel UK",
    "corporate clothing printing",
    "moisture-wicking activewear",
    "custom hoodies London",
    "apron printing service",
    "cap embroidery London",
    "tote bag printing",
    "fleece and knit printing",
    "AI apparel design",
    "bulk custom clothing",
    "no minimum order printing",
    "breathable sportswear",
    "durable school uniforms",
    "stain-resistant workwear",
    "multi-color garment printing",
    "branded merchandise UK",
    "team kit printing",
    "event apparel printing",
    "restaurant uniform printing",
    "custom workwear London"
  ].concat(KEYWORDS.common)
}
      }

  
}




function getMeta(key1, key2='', {titleFromKey2=true, image=''}={}){
  let meta = null

  if(META_BOX?.[key1]) meta = META_BOX?.[key1]
  if(meta){
    if(meta?.[key2]){
      meta = meta?.[key2]
    } else { 
      meta = {
        title: 'Teeprint', 
        description: '', 
        ogImage: LOGO_URL,
        keywords: 'no-keywords',
      }
    }
  }
 
  const constucfirstOfWords = (text) => { // upper case, first char of each words
    if(!text) return '';
    text = String(text);
    const ucFirst = (str) => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    text = text.replace(/_/g, '-')
    let final_text = text.split('-').map(ucFirst).join(' ');
    return final_text
  }

  let titleBySlug = null

  
  if(!meta || !(typeof meta == 'object')){ 
    meta = META_BOX['root']
  }

  if(titleFromKey2){
    meta['title'] = constucfirstOfWords(key2)
  }
  if(!meta?.ogImage){
    meta['ogImage'] = LOGO_URL
  }
  if(image){
    meta['ogImage'] = image 
  }


  if(meta){
    if(meta?.['title'] !== 'Teeprint'){
      meta['title'] = `Teeprint :: ${meta['title']}`
    } 
    meta['ogTitle'] = titleBySlug || meta?.['title']
    meta['ogDescription'] = meta?.['description']
  }
  
  return meta
}


export default getMeta