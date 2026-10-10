export type ButtonData = {
  label: string;
  href: string;
  variant: "primary" | "light";
  icon?: string;
};

export type ReviewData = {
  text: string;
  reviewer?: { icon: string; name: string; date: string };
};

export type ContactInfoRow = {
  icon: string;
  title: string;
  lines: string[];
  tone?: string;
  redPhone?: string;
};

export const site = {
  meta: {
    title: "Abaco Freight LLC & Island Supply",
    description:
      "Family-owned freight and shipping services connecting Florida and the Bahamas.",
  },

  brand: {
    main: "Abaco Freight LLC",
    sub: "& Island Supply",
  },

  phone: {
    href: "tel:+15615022632",
    label: "(561) 502-2632",
    icon: "☎",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
  ],

  headerCta: {
    label: "Let's Connect",
    href: "#contact",
  },

  hero: {
    eyebrow: "✨ Family Owned & Operated • 14+ Years of Trusted Service",
    titleLines: ["Welcome to Your Trusted", "Shipping Partner"],
    text:
      "At Abaco Freight LLC & Island Supply, we’re more than just a shipping " +
      "company – we’re your reliable partners connecting Florida to the " +
      "beautiful Bahamas and beyond. Experience fast, friendly, and " +
      "professional service that treats every package like it’s our own.",
    buttons: [
      { label: "Start Your Journey", href: "#contact", variant: "primary" },
      {
        label: "Call Us Today",
        href: "tel:+15615022632",
        variant: "light",
        icon: "☎",
      },
    ] as ButtonData[],
    
    // NEW — hero background video
    video: {
      src:    '/images/hero.mp4',
      webm:   '/images/hero.webm',   // optional; remove if you only have MP4
      poster: '/images/hero-poster.jpg',
    },
  },

  special: {
    title: "What Makes Us Special",
    text:
      "We’re not just another shipping company. We’re neighbors, friends, " +
      "and partners who understand that behind every package is a story " +
      "that matters.",
    cards: [
      {
        icon: "👥",
        title: "Family Values, Personal Touch",
        text:
          "As a family-owned business, we treat every customer like family " +
          "and every package like it's our own. You'll always get personal, " +
          "caring service that big companies simply can't match.",
      },
      {
        icon: "◷",
        title: "Speed Meets Friendliness",
        text:
          "Quick doesn't mean impersonal. Our team delivers fast, efficient " +
          "service while maintaining the warm, friendly approach that makes " +
          "every interaction a pleasure.",
      },
      {
        icon: "🏅",
        title: "14 Years of Trust",
        text:
          "Over fourteen years of building relationships, not just delivering " +
          "packages. Our experience shows in every successful delivery and " +
          "satisfied customer who becomes part of our extended family.",
      },
    ],
  },

  family: {
    title: "Meet the Family Behind Your Shipments",
    text:
      "Every package that passes through our hands is handled by real people " +
      "who care. Get to know the faces behind Abaco Freight LLC & Island Supply.",
    copyTitle: "Your Personal Shipping Partners",
    paragraphs: [
      "When you choose Abaco Freight, you’re not just getting a shipping " +
        "service – you’re partnering with a dedicated family who understands " +
        "that every package carries someone’s hopes, dreams, and important " +
        "connections.",
      "With over fourteen years of experience connecting Florida to the " +
        "beautiful Bahamas, we’ve built our reputation one satisfied customer " +
        "at a time. Our commitment goes beyond just moving packages – we’re " +
        "here to make your shipping experience as smooth and worry-free as " +
        "possible.",
    ],
    buttons: [
      { label: "Start Your Partnership", href: "#contact", variant: "primary" },
      {
        label: "Call Us Personally",
        href: "tel:+15615022632",
        variant: "light",
        icon: "☎",
      },
    ] as ButtonData[],
    card: {
      title: "The Abaco Freight Family",
      text: "Proudly serving the community with personal attention and care",
    },
    stats: [
      { value: "14+", label: "Years of Service" },
      { value: "1,000+", label: "Happy Customers" },
      { value: "100%", label: "Family Owned" },
    ],
  },

  services: {
    title: "How We Serve You",
    text:
      "Every shipment tells a story, and we’re honored to be part of yours. " +
      "From connecting families across borders to supporting local businesses, " +
      "we handle each package with genuine care.",
    items: [
      {
        imageClass: "air",
        icon: "✈",
        title: "Air Freight to Paradise",
        text:
          "We make shipping to the beautiful Bahamas feel effortless. Your " +
          "packages journey safely across the crystal-clear waters to Marsh " +
          "Harbour Abaco, handled with the care and attention they deserve.",
        points: [
          "Direct flights to Bahamas",
          "Secure handling guaranteed",
          "Regular scheduled service",
          "Personal touch every time",
        ],
      },
      {
        imageClass: "delivery",
        icon: "🚚",
        title: "Air Freight to Paradise",
        text:
          "From your doorstep to Abaco and Paradise, we deliver with a smile. " +
          "Our friendly team treats every delivery like it’s going to family, " +
          "ensuring your packages arrive safely and on time.",
        points: [
          "Same-day delivery available",
          "Friendly, professional drivers",
          "Real-time tracking",
          "Careful package handling",
        ],
      },
    ],
    button: { label: "View All Services", href: "#contact" },
  },

  reviews: {
    title: "Stories from Our Family",
    text:
      "Every review tells a story of trust, reliability, and the personal " +
      "connections we build. Here’s what our customers – who’ve become " +
      "like family – have to say.",
    verified: "verified",
    stars: "★★★★★",
    items: [
      {
        text:
          "“We have been using Kimber and Abaco Freight for a year now to " +
          "receive and ship all manner of equipment to and from Abaco for " +
          "our company. Kimber is extremely professional, reliable, and a " +
          "pleasure to work with. I HIGHLY RECOMMEND Abaco Freight!”",
        reviewer: {
          icon: "👥",
          name: "CH - OCEANGATE INC",
          date: "2019-03-19",
        },
      },
      {
        text: "“Very professional…”",
      },
      {
        text:
          "“HIGHLY RECOMMEND! We needed someone to transport some of my " +
          "Aunt's belongings to a new facility in Florida. Not living in " +
          "the area, we had to find someone to do it for us. Kimber, from " +
          "Abaco, was extremely helpful and reliable. She kept us apprised " +
          "at each step and couldn't have gone smoother. Thank you again, " +
          "Kimber! You made it very easy!”",
      },
      {
        text:
          "“Great service with a Smile! Prompt and courteous. Professional " +
          "on the phone as well as in person. Kimber was your use for all " +
          "of our shopping, courier, and shipping needs.”",
      },
      {
        text:
          "“Awesome company. Great customer service from start to finish. " +
          "Definitely recommend”",
      },
    ] as ReviewData[],
    button: { label: "Share Your Experience", href: "#contact" },
  },

  gallery: {
    title: "See Us in Action",
    text:
      "From the sunny runways of Florida to the crystal-clear waters " +
      "of the Bahamas, here’s a glimpse into our daily mission of " +
      "connecting people and places with care.",
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
    ],
    alt: "Abaco Freight in action",
  },

  contact: {
    title: "Let's Start Your Journey Together",
    text:
      "Whether you’re sending love to family in the Bahamas or need " +
      "reliable local delivery, we’re here to help. Every conversation " +
      "starts with understanding your unique needs.",
    boxTitle: "Let's Connect",
    boxText:
      "Tell us about your shipping needs, and we’ll craft a solution " +
      "that’s perfect for you. We typically respond within a few hours " +
      "because your time matters to us.",
    info: [
      {
        icon: "📍",
        title: "Send packages To",
        lines: [
          "(Your name)",
          "1140 Watertower Rd., Unit 11",
          "Lake Park, FL 33403",
        ],
      },
      {
        icon: "☎",
        title: "Call Us",
        lines: ["(561) 502-2632"],
        tone: "blue",
      },
      {
        icon: "◷",
        title: "Business Hours",
        lines: [
          "1140 Watertower Rd #11",
          "Lake Park, FL 33403",
          "",
          "Monday – Friday: 10AM – 3:00PM",
          "",
          "Marsh Harbor",
          "Monday – Friday: 9AM – 5:00PM",
        ],
        redPhone: "(242) 805-6932",
      },
    ] as ContactInfoRow[],
    form: {
      fields: {
        firstName: { label: "First Name" },
        lastName: { label: "Last Name" },
        email: { label: "Email" },
        phone: { label: "Phone" },
        service: {
          label: "Service Interested In",
          placeholder: "Select a Service",
          options: [
            "Air Freight",
            "Local Delivery",
            "Bahamas Shipping",
            "Courier Service",
            "Other",
          ],
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your shipping needs.....",
        },
      },
      submitLabel: "Send Message",
      successMessage:
        "Thank you! Your message has been received. We will get back to you shortly.",
    },
  },

  footer: {
    company: {
      titleLines: ["Abaco Freight LLC & Island", "Supply"],
      contact: [
        "📍  1140 Watertower Rd #11",
        "      Lake Park, FL 33403",
        "☎  (561) 502-2632",
        "✉  Kimber@abacofreightllc.com",
      ],
      description:
        "🌟 A family business connecting hearts and homes across Florida " +
        "and the Bahamas. Fourteen years of smiles, one delivery at a time.",
      socials: [
        { label: "f", className: "facebook", href: "#" },
        { label: "G", className: "google", href: "#" },
        { label: "p", className: "pinterest", href: "#" },
        { label: "★", className: "yelp", href: "#" },
      ],
    },
    hours: {
      icon: "◷",
      title: "Business Hours",
      blocks: [
        ["1140 Watertower Rd #11", "Lake Park, FL 33403"],
        ["Monday – Friday: 10AM – 3:00PM"],
        ["Marsh Harbor", "Monday – Friday: 9AM – 5:00PM"],
      ],
      phone: "(242) 805-6932",
    },
    locations: {
      title: "Locations Served",
      items: [
        "West Palm Beach, FL",
        "Broward, FL",
        "Palm Beach, FL",
        "Saint Lucy, FL",
        "Marsh Harbour Abaco, Bahamas",
        "Manowar",
        "Guana",
        "Hopetown",
        "Green Turtle",
      ],
    },
    payment: {
      icon: "▣",
      title: "Payment Methods",
      items: [
        "American Express",
        "Cash",
        "Discover",
        "Mastercard",
        "PayPal",
        "Visa",
      ],
    },
    bottom:
      "© 2025 Abaco Freight LLC & Island Supply. All Rights Reserved. " +
      "Powered By The Keith Hopkins",
  },
};

export type Site = typeof site;
