// Full comprehensive data for St. Mary's School - Gondal (100% data intact)

export const fullSchoolData = {
  meta: {
    name: "St. Mary's School",
    town: "Gondal",
    title: "St. Mary's School - Gondal",
    badge: "Since 1979",
    tagline: "This is where we teach students skills they need to transform themselves, others, and our global communities.",
    address: {
      line: "Gundala Road, Near NH 27,",
      townPincode: "Gondal – 360311",
      state: "Gujarat, India",
      mapQuery: "https://maps.google.com/?q=St.+Mary's+School+Gundala+Road+Gondal+360311"
    },
    phones: [
      { label: "Office Landline", display: "91 - 2825-297026", tel: "02825297026" },
      { label: "Mobile / Admin", display: "+91 9484798898", tel: "+919484798898" },
      { label: "Inquiry Desk", display: "+91 9173279332", tel: "+919173279332" }
    ],
    email: "stmarygondal@gmail.com",
    hours: "7:30 a.m. – 5:30 p.m.",
    officeTimings: "8:00 a.m. – 4:00 p.m.",
    copyright: "Copyright © 2026 Anonymous Developer | All Rights Reserved"
  },

  navigation: [
    { label: "Home", id: "home" },
    {
      label: "About Us",
      id: "about-group",
      children: [
        { label: "About", id: "about" },
        { label: "History", id: "history" },
        { label: "Management", id: "management" },
        { label: "Staff", id: "staff" },
        { label: "Campus", id: "campus" }
      ]
    },
    {
      label: "Activities",
      id: "activities-group",
      children: [
        { label: "Why S.M.S", id: "why-sms" },
        { label: "Academics", id: "academics" },
        { label: "Co-Curricular", id: "activities" },
        { label: "Extra Curricular", id: "activities" }
      ]
    },
    { label: "Photo Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
    { label: "News & Updates", id: "news" }
  ],

  // 1. HOME PAGE
  home: {
    hero: {
      title: "St. Mary's School Gondal",
      subtitle: "This is where we teach students skills they need to transform themselves, others, and our global communities.",
      ctaText: "Our Academics",
      bgImage: "/assets/home-page-main.jpg"
    },
    aboutSection: {
      heading: "Learning Begins With Us",
      paragraphs: [
        "We, at St. Mary's School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future.",
        "We are an early learning academy focused on social-emotional development and early literacy and numeracy. Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that take them way ahead in the industry they may serve."
      ],
      ctaText: "Know More About Us"
    },
    principalSection: {
      badge: "St. Mary's School at a Glance",
      quote: "We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life.",
      author: "Fr. Rojant",
      role: "Principal",
      images: [
        "/assets/gallery-1.jpg",
        "/assets/school-photo.jpg",
        "/assets/414147378_1281744095854611_4937657999664666572_n-e1705119049190-1024x686.jpg"
      ]
    },
    curriculumSection: {
      title: "Curriculum Overview",
      description: "St. Mary's School aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.",
      ctaText: "Know More ..",
      levels: [
        {
          title: "Kindergarten",
          grades: "Nursery, LKG, HKG",
          image: "/assets/kg-building.jpg"
        },
        {
          title: "Primary",
          grades: "Class 1 to 8 (Gujarat State Board)",
          image: "/assets/prim-building.jpg"
        },
        {
          title: "High School & Higher Secondary",
          grades: "H.S. : Std 9-10 (Gujarat State Board)\nH.S.C Std 11-12(Commerce)",
          image: "/assets/school-photo.jpg"
        }
      ]
    },
    newsSection: {
      title: "News & Updates",
      items: [
        {
          title: "Award Ceremony KG (Read more..)",
          date: "February 13, 2024",
          excerpt: "Award Ceremony of KG Section 2023-2024",
          category: "Ceremony & Awards",
          link: "https://stmarysgondal.com/award-ceremony-kg-section/"
        },
        {
          title: "Rising Stars (Read More..)",
          date: "February 13, 2024",
          excerpt: "Heartiest congratulations on your amazing win! Your hard work, determination, dedication and perseverance have paid off.",
          category: "Student Spotlight",
          link: "https://stmarysgondal.com/rising-stars/"
        },
        {
          title: "Admissions open for 2024-25",
          date: "December 9, 2023",
          excerpt: "We are starting admissions for new year 2024-2025. Criteria and application guidelines.",
          category: "Admissions",
          link: "https://stmarysgondal.com/admissions-for-23-24/"
        },
        {
          title: "Admissions open for academic Year 2025-2026",
          date: "December 20, 2025",
          excerpt: "We are commencing Admission procedures for all grades for the academic year 2025-2026.",
          category: "Admissions",
          link: "https://stmarysgondal.com/admissions-open-for-academic-year-2025-2026/"
        },
        {
          title: "Staff Required (Read More..)",
          date: "April 22, 2024",
          excerpt: "Qualified Teachers Required for Primary and Kindergarten",
          category: "Careers",
          link: "https://stmarysgondal.com/requirement/"
        },
        {
          title: "Award Ceremony Afternoon (Read more..)",
          date: "February 13, 2024",
          excerpt: "Award Ceremony of Afternoon Section 2023-2024",
          category: "Ceremony & Awards",
          link: "https://stmarysgondal.com/award-ceremony-afternoon-read-more/"
        }
      ]
    },
    activitiesSection: {
      title: "Our Co-Curricular Activities",
      bannerImage: "/assets/basketball2.jpg",
      ctaText: "Know More ..",
      items: [
        {
          title: "Sports and Athletics",
          desc: "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up."
        },
        {
          title: "Skating and Karate",
          desc: "Under guidance of expert trainers and well furnished skating and karate ring students master art of Skating and Karate"
        },
        {
          title: "Dance and Yoga",
          desc: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more."
        }
      ]
    }
  },

  // 2. ABOUT PAGE
  aboutPage: {
    title: "About Us",
    subtitle: "St. Mary's School - Gondal",
    principalImage: "/assets/site_images/frrojantk-254x300.jpg",
    paragraphs: [
      "St. Mary's school is primarily meant to provide Catholic children with sound education based on religious and moral values, but is open to all irrespective of religion, caste or community, paying respect to their religious feelings and freedom of conscience.",
      "The school aims at giving a value-based education for the total development of the child, physical, intellectual, moral and emotional, so as to prepare him/her to be a useful and responsible citizen of the country.",
      "St. Mary's School, Gondal is run by the Catholic Minority community and managed by 'Rajkot Kelavani Samaj'. It is recognized by the Education Department of Gujarat State.",
      "The medium of instruction is English. The school prepares the pupils for the Secondary School Certificate Examination (S.S.C.) and Higher Secondary Certificate Examination (H.S.C. General Stream) conducted by the Gujarat Secondary and Higher Secondary Education Board, Gandhinagar."
    ],
    aims: [
      "Fostering moral, social and cultural values in children.",
      "Developing leadership qualities, self-reliance, and mutual cooperation.",
      "Inculcating a spirit of patriotism and universal brotherhood.",
      "Providing opportunities for physical, intellectual and artistic development."
    ]
  },

  // 3. HISTORY PAGE
  historyPage: {
    title: "History of St. Mary's School",
    subtitle: "From a modest beginning in 1979 to a premier academic institution.",
    paragraphs: [
      "Gondal is very famous for its then King Maharaja Bhagvatsinhji who was a true educationist. His town planning and education system was very famous among all the kings of Saurashtra region in his times.",
      "In 1970, when Bishop Jonas Thaliath CMI came to Rajkot, he saw the educational and spiritual needs of the people of Saurashtra. The Carmelites of Mary Immaculate (CMI) fathers along with dedicated religious sisters took up the mission.",
      "In 1979, with the blessings and support of the local community, St. Mary's School was officially established in Gondal to provide high quality English medium education.",
      "The pioneer fathers and sisters worked tirelessly with dedication and sacrifice to nurture the school from a handful of students in a small building into what is today a premier institution with modern infrastructure, lush green campus, and thousands of successful alumni serving across the world."
    ],
    images: [
      { src: "/assets/site_images/bpjonas-e1694501695193.jpg", caption: "Bishop Jonas Thaliath CMI" },
      { src: "/assets/site_images/balashram1-300x252.jpg", caption: "Balashram - Early Days (1970s)" },
      { src: "/assets/site_images/pioneers1-300x200.jpg", caption: "Pioneer Fathers & Sisters" },
      { src: "/assets/site_images/pioneers2-300x223.jpg", caption: "Early Faculty & Community" },
      { src: "/assets/site_images/pioneers3-300x200.jpg", caption: "First Classroom Sessions" },
      { src: "/assets/site_images/balashram2-300x204.jpg", caption: "Early Campus Growth" },
      { src: "/assets/site_images/1stgrpphoto-300x226.jpg", caption: "First Batch of Students" },
      { src: "/assets/site_images/pioneers4-1024x784.jpg", caption: "Pioneers Assembly Photo" }
    ]
  },

  // 4. MANAGEMENT PAGE
  managementPage: {
    title: "Management",
    subtitle: "Rajkot Kelavani Samaj & Catholic Minority Administration",
    paragraphs: [
      "St. Mary's School, Gondal is an educational institution recognized by the Govt. of Gujarat. It is run by the Catholic Minority community and managed by 'Rajkot Kelavani Samaj'. It is an English medium Co-educational Institution.",
      "The management is committed to imparting holistic education with an emphasis on academic excellence, spiritual foundation, character formation, and civic responsibility."
    ],
    formerPrincipals: [
      { name: "Fr. Recy", tenure: "11-09-1979 to 08-06-1980", image: "/assets/site_images/recy-150x150.jpg" },
      { name: "Fr. Alphonse", tenure: "09-06-1980 to 11-11-1981", image: "/assets/site_images/alphonse-150x150.jpg" },
      { name: "Fr. Anslin", tenure: "12-11-1981 to 14-06-1983", image: "/assets/site_images/anslin-150x150.jpg" },
      { name: "Fr. Theopine", tenure: "15-06-1983 to 03-06-1984", image: "/assets/site_images/theopine-150x150.jpg" },
      { name: "Fr. Kuriakose", tenure: "04-06-1984 to 02-08-1993", image: "/assets/site_images/kuriakose-150x150.jpg" },
      { name: "Fr. Davis", tenure: "03-08-1993 to 09-03-1999", image: "/assets/site_images/davis-150x150.jpg" },
      { name: "Fr. Jose", tenure: "10-07-1999 to 08-08-2005", image: "/assets/site_images/jose-150x150.jpg" },
      { name: "Fr. Thomas", tenure: "09-08-2005 to 31-10-2021", image: "/assets/site_images/frthomas-150x150.jpg" },
      { name: "Fr. Josy", tenure: "01-11-2022 to 23-08-2023", image: "/assets/site_images/josy-143x150.jpg" },
      { name: "Fr. Sijo", tenure: "23-08-2023 to 31-05-2025", image: "/assets/site_images/frsijo-150x150.jpg" }
    ]
  },

  // 5. STAFF DIRECTORY PAGE
  staffPage: {
    title: "Members of Staff",
    subtitle: "St. Mary's School Gondal is so lucky to have dynamic, skilled, energetic, kind, helpful and caring teaching staff who always work for the upliftment of the school.",
    sections: [
      {
        title: "Administrative Leadership",
        members: [
          { name: "Fr. Rojant", role: "Principal", image: "/assets/site_images/fr_rojantk-1024x730.jpg" },
          { name: "Sr. Tincy", role: "Vice Principal", image: "/assets/site_images/sr-tincy-300x270.jpg" }
        ]
      },
      {
        title: "Admin Office",
        members: [
          { name: "Mr. Pratipalsinh Jadeja", role: "Admin Office", image: "/assets/site_images/pn-jadeja.jpg" },
          { name: "Mrs. Madhvi Bhut", role: "Admin Office", image: "/assets/site_images/madhavi-bhut.jpg" }
        ]
      },
      {
        title: "Kindergarten Section",
        members: [
          { name: "Ms. Monica Goda", role: "KG Educator", image: "/assets/site_images/Monica-goda.jpg" },
          { name: "Mrs. Kajal Raiyani", role: "KG Educator", image: "/assets/site_images/Kajal-raiyani.jpg" },
          { name: "Mrs. Radhika Sheth", role: "KG Educator", image: "/assets/site_images/Radhika-sheth.jpg" },
          { name: "Mrs. Pooja Gosai", role: "KG Educator", image: "/assets/site_images/pooja-gosai.jpg" },
          { name: "Mrs. Divya Kanabar", role: "KG Educator", image: "/assets/site_images/Divya-Kanabar.jpg" }
        ]
      },
      {
        title: "Primary (Morning Section)",
        members: [
          { name: "Mr. Vimal Changela", role: "Educator", image: "/assets/site_images/vimal-changela.jpg" },
          { name: "Mr. Sabu John", role: "Educator", image: "/assets/site_images/sabu-john.jpg" },
          { name: "Mr. Dharmendrasinh Jadeja", role: "Educator", image: "/assets/site_images/dn-jadeja.jpg" },
          { name: "Mr. Jignesh Bhayani", role: "Educator", image: "/assets/site_images/jignesh-bhayani.jpg" },
          { name: "Mr. Amit Malaviya", role: "Educator", image: "/assets/site_images/amit-malaviya.jpg" },
          { name: "Mrs. Alpa Rupapara", role: "Educator", image: "/assets/site_images/alpa-rupapara.jpg" },
          { name: "Mrs. Devyaniba Chudasama", role: "Educator", image: "/assets/site_images/devyaniba.jpg" },
          { name: "Mrs. Sunita Kotadia", role: "Educator", image: "/assets/site_images/sunita-kotadia.jpg" },
          { name: "Mrs. Anjali Unadkat", role: "Educator", image: "/assets/site_images/anjali-unadkat.jpg" },
          { name: "Ms. Arva Badani", role: "Educator", image: "/assets/site_images/arva-badani.jpg" },
          { name: "Mr. Leo Kurian", role: "Educator", image: "/assets/site_images/leo-kurian.jpg" },
          { name: "Mrs. Rashmi Rathod", role: "Educator", image: "/assets/site_images/rashmi-rathod.jpg" },
          { name: "Mrs. Nehal Dhinoja", role: "Educator", image: "/assets/site_images/nehal-dhinoja.jpg" },
          { name: "Ms. Riya Poonjani", role: "Educator", image: "/assets/site_images/riya-poonjani.jpg" }
        ]
      },
      {
        title: "Primary (Afternoon Section)",
        members: [
          { name: "Mrs. Ambily Sabu", role: "Educator", image: "/assets/site_images/ambily-sabu.jpg" },
          { name: "Ms. Pooja Shah", role: "Educator", image: "/assets/site_images/pooja-shah.jpg" },
          { name: "Mrs. Ekta Mrug", role: "Educator", image: "/assets/site_images/ekta-mrug.jpg" },
          { name: "Mrs. Dharmistha Chavda", role: "Educator", image: "/assets/site_images/dharmistha-chavda.jpg" },
          { name: "Mrs. Krupa Upadhyay", role: "Educator", image: "/assets/site_images/krupa-upadhyay-1024x1016.jpg" },
          { name: "Mrs. Laxmi Kotadiya", role: "Educator", image: "/assets/site_images/laxmi-kotadiya-1024x1014.jpg" },
          { name: "Mrs. Manisha Dipu", role: "Educator", image: "/assets/site_images/manisha-dipu.jpg" },
          { name: "Mr. Imtiyaz Hothi", role: "Educator", image: "/assets/site_images/imtiyaz-hothi.jpg" },
          { name: "Ms. Riddhi Popat", role: "Educator", image: "/assets/site_images/riddhi-popat.jpg" },
          { name: "Mrs. Zeenal Kavathiya", role: "Educator", image: "/assets/site_images/zeenal-k.jpg" },
          { name: "Ms. Sonal Zala", role: "Educator", image: "/assets/site_images/sonal-zala.jpg" }
        ]
      },
      {
        title: "High School & Higher Secondary",
        members: [
          { name: "Mr. Jayesh Pandya", role: "Secondary Educator", image: "/assets/site_images/jayesh-pandya.jpg" },
          { name: "Mrs. Deepti Padaliya", role: "Secondary Educator", image: "/assets/site_images/dipti-padaliya.jpg" },
          { name: "Mr. Biju Abraham", role: "Secondary Educator", image: "/assets/site_images/biju-abraham.jpg" },
          { name: "Mrs. Tini Biju", role: "Secondary Educator", image: "/assets/site_images/tini-biju.jpg" },
          { name: "Mr. Milan Madhavani", role: "Secondary Educator", image: "/assets/site_images/milan-madhavani.jpg" },
          { name: "Mr. Mihir Pandya", role: "Higher Secondary (Commerce)", image: "/assets/site_images/mihir-pandya.jpg" }
        ]
      }
    ]
  },

  // 6. CAMPUS PAGE
  campusPage: {
    title: "Our Campus",
    subtitle: "A serene, eco-friendly environment conducive to learning and character formation.",
    overview: "A green, beautiful and serene built in sprawling campus, free from the pressures of urban life, is conducive to learning which inspires all to appreciate and adopt what is natural, simple and true environment.",
    facilities: [
      { title: "Spacious & Well-Lit Classrooms", desc: "Ventilated, ergonomic, modern classroom environments designed for attentive learning." },
      { title: "Hi-Tech Computer Lab", desc: "Modern computer workstations with high-speed internet and structured digital curricula." },
      { title: "Smart Classes with AV Content", desc: "Interactive white boards and best-in-class audio-visual content enabling rapid concept retention." },
      { title: "Equipped Science Lab", desc: "Comprehensive science laboratories with standard equipment for physics, chemistry, and biology." },
      { title: "Innovative Toy Library & Play Area", desc: "Specialized play area and creative toy collection for Kindergarten and pre-primary development." },
      { title: "Eco-Friendly Green Campus", desc: "Lush botanical spaces, tree canopies, and gardens inspiring environmental appreciation." },
      { title: "Sports Complex & Courts", desc: "Full-size basketball court, karate ring, skating rink, and open athletics grounds." },
      { title: "Comprehensive Health & Safety", desc: "Round-the-clock safety, secure surveillance, clean drinking water, and student health monitoring." }
    ]
  },

  // 7. WHY S.M.S PAGE
  whySmsPage: {
    title: "Why St. Mary's School?",
    subtitle: "Nurturing character, competence, and compassion in every Marian.",
    intro: "We at St. Mary's School, Gondal focus on all-round development of students. Our students are encouraged to put equal emphasis on knowledge, life skills and values. St. Mary's School Gondal goes beyond academics to ensure that our students are provided sufficient opportunities for achieving their goals.",
    pillars: [
      {
        title: "Well Trained Teachers",
        desc: "Highly qualified teachers with continuous training programs and workshops on academic methodology. Our rigorous hiring and comprehensive training of teachers keep them abreast with the best-in-class learning methodologies. Teachers get assessed to ensure that students get the best learning environment."
      },
      {
        title: "Learning with Technology",
        desc: "One of the most interactive as well as visually attractive method of teaching is Smart Class. The audio-visual senses of students are targeted which helps them to store the information fast and effectively. Digital Classroom provides the best way to understand and see different objects & projects live working. Interactive white boards with Audio Video content, equipped with WiFi internet enabled digital smart class rooms are used to provide students best of knowledge regarding technical subjects as they view them in a smarter way."
      },
      {
        title: "Assessments, Evaluations & Parents",
        desc: "The prime focus of assessments is to look at what students are good at rather than finding that they are good or not. At St. Mary's School, Gondal assessments and parent teachers meetings are organised periodically after every exam which gives every parent a chance to interact and get feedback about their children from teachers. The parents are also oriented through different workshops and programmes to inculcate awareness about most common parenting issues."
      },
      {
        title: "Community Connect & Social Awareness",
        desc: "We encourage the students of St. Mary's School also known as Marians with help of a group of teachers carry out social activities for helping the needy and poor ones by distributing grocery and other items by donating them to the needy and poor ones nearby villages as well as in the town. We also encourage our students and parent community to support organizations that help the old, the underprivileged. Our students and parent community will participate and organize projects that aim to achieve a purpose in preserving and conserving the environment and its inhabitants."
      }
    ]
  },

  // 8. ACADEMICS PAGE
  academicsPage: {
    title: "Academics",
    subtitle: "A Commitment to Excellence from Kindergarten to Higher Secondary",
    overview: "St. Mary's School Gondal aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life. Whether it is our books or hands-on training, we make sure each student gets personal attention to cope up and flourish in every subject for better scores and a brighter future.",
    sections: [
      {
        title: "Kindergarten",
        grades: "Nursery, LKG, HKG",
        image: "/assets/site_images/kgclass2-300x300.jpg",
        desc: "Kindergarten is a pre-school educational approach which is based on playing, singing, dancing and practical activities such as drawing and social interaction as part of the transition from home to school."
      },
      {
        title: "Primary",
        grades: "Class 1 to Class 8",
        image: "/assets/site_images/prim-building-300x200.jpg",
        desc: "Following the Gujarat State Govt. Primary School curriculum which emphasizes general education as well as covering basic subjects such as Arithmetics, supplemented by history, geography, general science, and civics with language enhancement by writing and reading in English, Gujarati, Hindi and Sanskrit languages. Additionally students are provided other activities like Drawing, Craft, Computer Education, Physical Training, Value Education which inspire primary students."
      },
      {
        title: "Secondary (Govt. Grant in Aid)",
        grades: "Class 9 and 10",
        image: "/assets/site_images/school-template-curriculum-img-3-300x300.jpg",
        desc: "The Secondary School curriculum is designed for the educational success and stipulate an academic as well as practical knowledge. It helps developing children's knowledge and skills in compulsory subjects Mathematics, Science, Social Science, First Language English along with second languages like Hindi and Gujarati. Along with this they also get a chance to select practical based subjects like Drawing and Craft, Computer Education, Physical Education. We take pride in offering these courses from a team of dedicated experienced and trained staff."
      },
      {
        title: "Higher Secondary (Commerce)",
        grades: "Class 11 - 12",
        image: "/assets/site_images/school-template-curriculum-img-4-300x300.jpg",
        desc: "Understanding the game of numbers and logic to solve real world problems. Learn Business Studies from scholars and university toppers who not only make it interesting, but also fun to learn."
      }
    ]
  },

  // 9. ACTIVITIES PAGE
  activitiesPage: {
    title: "Co-Curricular & Extra-Curricular Activities",
    subtitle: "Empowering every Marian with fitness, artistic poise, and teamwork.",
    items: [
      {
        title: "Karate",
        image: "/assets/site_images/karate.jpg",
        desc: "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. We also participate in inter-school, district, state and national level competitions."
      },
      {
        title: "Skating",
        image: "/assets/site_images/gallery-14.jpg",
        desc: "Regular Skating classes refresh the mind and body of the students. To manage the stress and to improve memory and concentration skating helps the students."
      },
      {
        title: "Dance",
        image: "/assets/site_images/gallery-35.jpg",
        desc: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields."
      },
      {
        title: "Cricket",
        image: "/assets/site_images/cricket.jpg",
        desc: "Participation in the cricket game speeds up the overall development of student to have fitness and stamina."
      },
      {
        title: "Basket Ball",
        image: "/assets/site_images/gallery-4.jpg",
        desc: "The Basket ball game trains the students to gain strength, co-ordinate and provide muscular endurance to them. With professionals on board, we take pride in basket ball training to our students."
      },
      {
        title: "Foot Ball",
        image: "/assets/site_images/football-300x214.jpg",
        desc: "The Training in the field of Football helps to keep our students in good shape, improves their cardio and boosts stamina."
      },
      {
        title: "Art & Craft",
        image: "/assets/site_images/gallery-20.jpg",
        desc: "With professionals on board, we take pride in training our students in art forms like painting, clay modeling, sketching and craft, encouraging creative self-expression."
      }
    ]
  },

  // 10. PHOTO GALLERY (41 IMAGES)
  galleryPage: {
    title: "Photo Gallery",
    subtitle: "Official Photographic Archives of St. Mary's School Gondal (41 High-Res Photos)",
    photos: Array.from({ length: 41 }, (_, i) => {
      const num = i + 1;
      const fname = num === 9 ? "gallery-09.jpg" : `gallery-${num}.jpg`;
      let cat = "Campus Life";
      if ([1, 2, 3, 14, 15, 35, 36, 37].includes(num)) cat = "Ceremonies & Events";
      else if ([4, 18, 20, 22, 23, 24, 25].includes(num)) cat = "Athletics & Sports";
      else if ([6, 7, 8, 10, 11, 12, 13].includes(num)) cat = "Academic Life";
      return {
        id: num,
        src: `/assets/site_images/${fname}`,
        title: `Campus Photo ${num}`,
        category: cat
      };
    })
  },

  // 11. CONTACT PAGE
  contactPage: {
    title: "Contact Us",
    intro: "Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.",
    addressTitle: "Address",
    addressText: "St. Mary's School\nGundala Road, Near NH-27,\nGondal- 360311 (Gujarat), (India).",
    phoneTitle: "Phone",
    phoneText: "+91 – 2825 – 297026\n+91 9484798898",
    timingsText: "Timings: 8:00 a.m. – 4:00 p.m.",
    emailTitle: "Email",
    emailText: "stmarygondal@gmail.com"
  },

  // 12. NEWS PAGE
  newsPage: {
    title: "News & Updates",
    subtitle: "Official circulars, award ceremony reports, and admission notices.",
    items: [
      {
        id: "admissions-2025-26",
        title: "Admissions open for academic Year 2025-2026",
        date: "December 20, 2025",
        category: "Admissions",
        excerpt: "We are commencing Admission procedures for all grades for the academic year 2025-2026.",
        fullText: "We are commencing Admission procedures for all grades for the academic year 2025-2026. Parents seeking admission for Kindergarten, Primary, Secondary and Higher Secondary sections can obtain registration kits directly from the school administration office during working hours.",
        link: "https://stmarysgondal.com/admissions-open-for-academic-year-2025-2026/"
      },
      {
        id: "staff-recruitment-2024",
        title: "Staff Required (Read More..)",
        date: "April 22, 2024",
        category: "Careers",
        excerpt: "Qualified Teachers Required for Primary and Kindergarten",
        fullText: "Qualified Teachers Required for Primary and Kindergarten sections. Passionate educators with relevant academic qualifications and proficiency in English language teaching are encouraged to apply. Submit your resume to the administrative office.",
        link: "https://stmarysgondal.com/requirement/"
      },
      {
        id: "award-ceremony-kg",
        title: "Award Ceremony KG (Read more..)",
        date: "February 13, 2024",
        category: "Ceremony & Awards",
        excerpt: "Award Ceremony of KG Section 2023-2024",
        fullText: "The annual Award Ceremony of the Kindergarten Section for 2023-2024 celebrated the cheerful participation, academic milestones, and creative endeavors of our little learners in the presence of esteemed faculty and proud parents.",
        link: "https://stmarysgondal.com/award-ceremony-kg-section/"
      },
      {
        id: "award-ceremony-afternoon",
        title: "Award Ceremony Afternoon (Read more..)",
        date: "February 13, 2024",
        category: "Ceremony & Awards",
        excerpt: "Award Ceremony of Afternoon Section 2023-2024",
        fullText: "The Afternoon Section Award Ceremony 2023-2024 felicitated outstanding scholastic achievements, sports dedication, and leadership contributions exhibited by students throughout the year.",
        link: "https://stmarysgondal.com/award-ceremony-afternoon-read-more/"
      },
      {
        id: "rising-stars",
        title: "Rising Stars (Read More..)",
        date: "February 13, 2024",
        category: "Student Spotlight",
        excerpt: "Heartiest congratulations on your amazing win! Your hard work, determination, dedication and perseverance have paid off.",
        fullText: "Heartiest congratulations on your amazing win! Your hard work, determination, dedication, and perseverance have brought immense pride to St. Mary's School. Keep shining bright!",
        link: "https://stmarysgondal.com/rising-stars/"
      },
      {
        id: "admissions-2024-25",
        title: "Admissions open for 2024-25",
        date: "December 9, 2023",
        category: "Admissions",
        excerpt: "We are starting admissions for new year 2024-2025. Criteria and procedural guidelines.",
        fullText: "We are starting admissions for new year 2024-2025. Application forms and admission criteria are obtainable from the administrative desk.",
        link: "https://stmarysgondal.com/admissions-for-23-24/"
      }
    ]
  }
};
