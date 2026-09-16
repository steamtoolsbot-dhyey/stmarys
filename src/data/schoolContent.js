export const schoolContent = {
  meta: {
    title: "St. Mary's School - Gondal",
    badge: "Excellence in Education Since 1979",
    tagline: "This is where we teach students skills they need to transform themselves, others, and our global communities.",
    since: "Since 1979",
    location: "Gondal, Gujarat",
    affiliation: "Gujarat State Board",
    hours: "7:30 a.m. – 5.30 p.m."
  },

  navigation: [
    { label: "Home", href: "#hero" },
    {
      label: "About Us",
      href: "#about",
      dropdown: [
        { label: "About", href: "#about" },
        { label: "History", href: "#history" },
        { label: "Management", href: "#management" },
        { label: "Staff", href: "#staff" },
        { label: "Campus", href: "#campus" }
      ]
    },
    {
      label: "Activities",
      href: "#activities",
      dropdown: [
        { label: "Why S.M.S", href: "#why-sms" },
        { label: "Academics", href: "#academics" },
        { label: "Co-Curricular", href: "#activities" },
        { label: "Extra Curricular", href: "#activities" }
      ]
    },
    { label: "Academics", href: "#academics" },
    { label: "News & Updates", href: "#news" },
    { label: "Photo Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ],

  social: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/stmaryschoolgondal/",
      username: "@stmaryschoolgondal"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/st.marysschoolgondal1979/",
      username: "@st.marysschoolgondal1979"
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@st.marysschoolgondaloffici8240",
      username: "St. Mary's School Official"
    }
  ],

  hero: {
    badge: "WELCOME TO ST. MARY'S SCHOOL",
    title: "St. Mary's School Gondal",
    subtitle: "This is where we teach students skills they need to transform themselves, others, and our global communities.",
    primaryCta: { label: "Our Academics", href: "#academics" },
    secondaryCta: { label: "Admissions Open", href: "#news" },
    bgImage: "/assets/home-page-main.jpg",
    logoImage: "/assets/SCHOOLLOGOCOLOUR-full.png",
    quickStats: [
      { number: "1979", label: "Founding Year", subtext: "45+ Years Legacy" },
      { number: "100%", label: "Gujarat Board", subtext: "Academic Excellence" },
      { number: "K-12", label: "Comprehensive", subtext: "KG to Higher Secondary" },
      { number: "3+", label: "Specialized Sports", subtext: "Skating, Karate, Athletics" }
    ]
  },

  about: {
    headingPrefix: "Learning Begins",
    headingHighlight: "With Us",
    paragraphs: [
      "We, at St. Mary's School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future.",
      "We are an early learning academy focused on social-emotional development and early literacy and numeracy. Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that take them way ahead in the industry they may serve."
    ],
    cta: { label: "Know More About Us", href: "#history" },
    images: [
      { src: "/assets/gallery-1.jpg", caption: "Inspiring Campus Culture" },
      { src: "/assets/school-photo.jpg", caption: "Main Academic Building" },
      { src: "/assets/414147378_1281744095854611_4937657999664666572_n-e1705119049190-1024x686.jpg", caption: "Celebration & Felicitations" }
    ],
    highlights: [
      { title: "Inspirational Environment", desc: "Supportive spaces for inquisitive young minds to flourish." },
      { title: "Character & Confidence", desc: "Instilling moral integrity, leadership, and emotional fortitude." },
      { title: "Future-Ready Skills", desc: "Real-world acumen that places our graduates ahead in life." }
    ]
  },

  principalQuote: {
    badge: "St. Mary's School at a Glance",
    quote: "We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life.",
    author: "Fr. Rojant",
    role: "Principal",
    school: "St. Mary's School - Gondal"
  },

  curriculum: {
    title: "Curriculum Overview",
    description: "St. Mary's School aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.",
    cta: { label: "Know More ..", href: "#academics" },
    levels: [
      {
        id: "kindergarten",
        badge: "Early Childhood",
        title: "Kindergarten",
        grades: "Nursery, LKG, HKG",
        description: "Early learning academy centered on social-emotional growth, interactive literacy, and exploratory numeracy in a joyful, secure atmosphere.",
        image: "/assets/kg-building.jpg",
        tags: ["Play-Way Learning", "Social-Emotional Focus", "Creative Curiosity"]
      },
      {
        id: "primary",
        badge: "Foundational & Middle",
        title: "Primary",
        grades: "Class 1 to 8 (Gujarat State Board)",
        description: "Rigorous yet nurturing curriculum under the Gujarat State Board fostering critical thinking, linguistic agility, and STEM foundations.",
        image: "/assets/prim-building.jpg",
        tags: ["Gujarat State Board", "Analytical Skills", "Holistic Value Education"]
      },
      {
        id: "secondary",
        badge: "High School & Senior",
        title: "High School & Higher Secondary",
        grades: "H.S. : Std 9-10 (Gujarat State Board) | H.S.C Std 11-12 (Commerce)",
        description: "Comprehensive secondary education and higher secondary specialized Commerce stream preparing students for board exams and university careers.",
        image: "/assets/school-photo.jpg",
        tags: ["Std 9-10 Gujarat Board", "H.S.C Std 11-12 (Commerce)", "Career & Board Prep"]
      }
    ]
  },

  newsAndUpdates: [
    {
      id: "admissions-2025-26",
      title: "Admissions open for academic Year 2025-2026",
      date: "December 20, 2025",
      category: "Admissions",
      isFeatured: true,
      badge: "Upcoming Session",
      excerpt: "We are commencing Admission procedures for all grades for the academic year 2025-2026.",
      fullText: "We are commencing Admission procedures for all grades for the upcoming academic year 2025-2026. Parents seeking admission for Kindergarten, Primary, and Secondary sections can collect the registration kits directly from the school administration office or contact the school reception during working hours.",
      link: "https://stmarysgondal.com/admissions-open-for-academic-year-2025-2026/"
    },
    {
      id: "staff-recruitment-2024",
      title: "Staff Required (Read More..)",
      date: "April 22, 2024",
      category: "Careers",
      isFeatured: false,
      badge: "Career Opportunity",
      excerpt: "Qualified Teachers Required for Primary and Kindergarten",
      fullText: "Qualified Teachers Required for Primary and Kindergarten sections. Passionate educators with relevant academic qualifications and proficiency in English language teaching are encouraged to apply. Submit your resume to the administrative office.",
      link: "https://stmarysgondal.com/requirement/"
    },
    {
      id: "award-ceremony-kg",
      title: "Award Ceremony KG (Read more..)",
      date: "February 13, 2024",
      category: "Ceremony & Awards",
      isFeatured: false,
      badge: "Achievement",
      excerpt: "Award Ceremony of KG Section 2023-2024",
      fullText: "The annual Award Ceremony of the Kindergarten Section for 2023-2024 celebrated the cheerful participation, academic milestones, and creative endeavors of our little learners in the presence of esteemed faculty and proud parents.",
      link: "https://stmarysgondal.com/award-ceremony-kg-section/"
    },
    {
      id: "award-ceremony-afternoon",
      title: "Award Ceremony Afternoon (Read more..)",
      date: "February 13, 2024",
      category: "Ceremony & Awards",
      isFeatured: false,
      badge: "Annual Milestone",
      excerpt: "Award Ceremony of Afternoon Section 2023-2024",
      fullText: "The Afternoon Section Award Ceremony 2023-2024 felicitated outstanding scholastic achievements, sports dedication, and leadership contributions exhibited by students throughout the year.",
      link: "https://stmarysgondal.com/award-ceremony-afternoon-read-more/"
    },
    {
      id: "rising-stars",
      title: "Rising Stars (Read More..)",
      date: "February 13, 2024",
      category: "Student Spotlight",
      isFeatured: false,
      badge: "Special Recognition",
      excerpt: "Heartiest congratulations on your amazing win! Your hard work, determination, dedication and perseverance have paid off.",
      fullText: "Heartiest congratulations on your amazing win! Your hard work, determination, dedication, and perseverance have yielded fantastic results. St. Mary's School celebrates your extraordinary zeal!",
      link: "https://stmarysgondal.com/rising-stars/"
    },
    {
      id: "admissions-2024-25",
      title: "Admissions open for 2024-25",
      date: "December 9, 2023",
      category: "Admissions",
      isFeatured: false,
      badge: "Admission Notice",
      excerpt: "We are starting admissions for new year 2024-2025. Criteria and procedural guidelines.",
      fullText: "We are starting admissions for new year 2024-2025. Criteria and prospectus are obtainable from the administrative desk. All age guidelines and documentation requirements apply as per state norms.",
      link: "https://stmarysgondal.com/admissions-for-23-24/"
    }
  ],

  coCurricular: {
    title: "Our Co-Curricular Activities",
    subtitle: "Empowering every child with holistic growth through physical vigor, sportsmanship, and artistic poise.",
    cta: { label: "Know More ..", href: "#activities" },
    bannerImage: "/assets/basketball2.jpg",
    activities: [
      {
        id: "sports",
        title: "Sports and Athletics",
        description: "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up.",
        icon: "Trophy",
        features: ["Inter-School Competitions", "Physical Conditioning", "Team Spirit & Discipline"]
      },
      {
        id: "skating-karate",
        title: "Skating and Karate",
        description: "Under guidance of expert trainers and well furnished skating and karate ring students master art of Skating and Karate",
        icon: "Shield",
        features: ["Dedicated Skating & Karate Ring", "Certified Martial Arts Senseis", "Agility, Reflexes & Self-Defense"]
      },
      {
        id: "dance-yoga",
        title: "Dance and Yoga",
        description: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more.",
        icon: "Sparkles",
        features: ["Professional Arts Mentorship", "Mindfulness Yoga & Balance", "Drama, Painting & Expressive Arts"]
      }
    ]
  },

  gallery: [
    { src: "/assets/school-photo.jpg", title: "Main Academic Building", category: "Campus" },
    { src: "/assets/kg-building.jpg", title: "Kindergarten Wing", category: "Infrastructure" },
    { src: "/assets/prim-building.jpg", title: "Primary School Complex", category: "Academics" },
    { src: "/assets/basketball2.jpg", title: "Sports Complex & Courts", category: "Athletics" },
    { src: "/assets/gallery-1.jpg", title: "Student Events & Assembly", category: "Student Life" },
    { src: "/assets/414147378_1281744095854611_4937657999664666572_n-e1705119049190-1024x686.jpg", title: "Annual Award Felicitation", category: "Ceremonies" }
  ],

  footer: {
    schoolName: "St. Mary's School",
    since: "Since 1979",
    tagline: "Inspiring minds, shaping characters, and building global citizens.",
    address: {
      line1: "Gundala Road, Near NH 27,",
      cityPincode: "Gondal – 360311",
      stateCountry: "Gujarat, India",
      mapUrl: "https://maps.google.com/?q=St.+Mary's+School+Gundala+Road+Gondal+360311"
    },
    phones: [
      { display: "91 - 2825-297026", tel: "02825297026", type: "Landline" },
      { display: "+91 9484798898", tel: "+919484798898", type: "Mobile / Office" },
      { display: "+91 9173279332", tel: "+919173279332", type: "Inquiry Desk" }
    ],
    timings: "7:30 a.m. – 5.30 p.m.",
    exploreLinks: [
      { label: "Home", href: "#hero" },
      { label: "History", href: "#history" },
      { label: "About", href: "#about" },
      { label: "Management", href: "#management" },
      { label: "Staff", href: "#staff" }
    ],
    usefulLinks: [
      { label: "News and Updates", href: "#news" },
      { label: "Academics", href: "#academics" },
      { label: "Activities", href: "#activities" },
      { label: "Contact", href: "#contact" },
      { label: "Alumni", href: "#alumni" }
    ],
    copyright: "Copyright © 2026 Anonymous Developer | All Rights Reserved"
  }
};
