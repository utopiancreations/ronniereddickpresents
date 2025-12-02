// Mock data to replace API calls
import ft1 from '../assets/images/fixedtalent1.png';
import ft2 from '../assets/images/fixedtalent2.png';
import ft3 from '../assets/images/fixedtalent3.jpg';
import ft4 from '../assets/images/fixedtalent4.png';
import ft5 from '../assets/images/fixedtalent5.jpg';
import ft6 from '../assets/images/fixedtalent6.png';
import ft7 from '../assets/images/fiixedtalent7.jpg';
import ft8 from '../assets/images/fixedtalent8.jpg';
import ft9 from '../assets/images/fixedtalent9.jpg';
import girls from '../assets/images/ronnieandthegirls.jpg';

export const mockData = {
  about: {
    company: "Ronnie Reddick Presents is a premier talent management and entertainment company dedicated to discovering, developing, and promoting exceptional artists. We believe in the power of authentic artistry and work tirelessly to create opportunities for our talent to shine on stages across the nation.",
    ronnie: {
      roleTitle: "Choreographer | Creative Director | Educator",
      intro: "Ronnie Reddick is one of the San Francisco Bay Area’s most dynamic multi-talented performer/choreographers, maintaining a sharp edge on what is happening in the world of dance today. A multi-faceted, San Francisco-based creative, Reddick has made his mark by combining Hip Hop, Jazz, and other performance genres to create one of the most explosive and dynamic styles to hit the contemporary dance scene, solidifying his reputation as one of the most sought-after choreographers in the industry.",
      sections: [
        {
          title: "Creative Direction & Television",
          content: "For over 26 years, Mr. Reddick served as the Choreographer and Creative Show Director at the iconic <a href='https://www.instagram.com/officialasiasf/?hl=en' target='_blank' rel='noopener noreferrer' class='text-warning text-decoration-none'>Asia SF</a>. This unique restaurant and dining experience took the world by storm, featuring performances by some of the most beautiful Transgender women in the world. Expanding on this legacy, Mr. Reddick served as the Show Director and Choreographer for Season 1 and Season 2 of the groundbreaking docu-series “Transcendent” on the Fuse Network. Featuring the Ladies of Asia SF, the show received a nomination for a GLAAD Award."
        },
        {
          title: "Education & Instruction",
          content: "A dedicated educator, Mr. Reddick serves on the faculty at Stanford University. He has also taught Hip Hop classes at Santa Clara University, Princeton University, Pepperdine University, UCLA, and the University of Kentucky in association with The US Performing Arts Co. He has danced and taught Master Classes in cities and countries globally, spanning the United States, Japan, China, Canada, Korea, and Mexico."
        },
        {
          title: "Industry Credits & Client Roster",
          content: "In the entertainment world, Ronnie has worked with a vast array of major artists, including Michael & Janet Jackson, Deborah Cox, Paula Abdul, Jon Secada, Kristine W., Jody Watley, Liza Minelli, Mariah Carey, Corinne Bailey Rae, Santana, Ultra Nate, Tone/Tony/Toni, Kelly Price, Vicky Shepard, RuPaul, Overtone (Clint Eastwood’s Acappella boy band), Abigail, Honey Luv, and M.C. Hammer.<br><br>His corporate portfolio includes work for Sony Playstation, Gap, Macy’s, MAC Viva Glam Cosmetics, SF Junior League, Nordstrom, ADP, Starbucks, API, Oracle, Facebook, Cisco Systems, Apple Computer, Google, BEBE, Univision Television, E*Trade, Coca Cola, Microsoft, Bill Graham Presents, National Semiconductor, and a video for Hillary Clinton’s 2008 Presidential Campaign.<br><br>Additionally, Ronnie currently choreographs and tours with prominent corporate bands, including “Bill Hopkins & the Rockin Orchestra”, “Pride & Joy”, “Savior Faire”, “Big City”, Masterpierce, the Kent Strand Orchestra, and “The Fundamentals”."
        },
        {
          title: "Fashion & Sports Choreography",
          content: "Mr. Reddick has established a strong presence in the fashion industry, working with clients such as Macy’s, Burberry, Wilkes Bashford, BeBe, and Dunlap Productions. He has trained and continues to work with many of SF/LA’s top runway models.<br><br>His influence extends to professional sports entertainment, where he has trained choreographers and dancers for major cheer squads, including the Sacramento Kings, Goldrush Girls (S.F. 49ers), Raiderettes & Warrior Girls (Oakland), USF Dance Team (SF), the San Jose SaberCats, and recently the Valkyries Violets."
        },
        {
          title: "Mentorship & Legacy",
          content: "Ronnie founded three of the hottest dance groups to hit the Bay Area: “City Slam”, “La Femme Panache & Le Men”. “City Slam” was a group of professional dancers (ages 9 & up) who have gone on to work professionally worldwide. Alumni include Jeri & Monique Slaughter, Tanee McCall, Duvon Evans, Kristen Oei, Peter Chursin, Sam Cahn, and Lucy Legaspi.<br><br>His dancers have worked in major entertainment arenas, including the Academy Awards, movies, and stage productions such as “Rent”, Celine Dion’s “A New Day”, “Jubilee”, “We Will Rock You”, ”Aida”, “Dream Girls”, “Wicked”, and the “Lion King”. They have performed alongside artists including Janet Jackson, Madonna, Beyonce’, Britney Spears, Will Smith, Jeanie Tracy, Missy Elliott, Snoop Dogg, Brian McKnight, Jennifer Lopez, Christina Aguilera, the Dixie Chicks, Chayanne, TLC, Jocelyn Enriquez, and Usher.<br><br>Ronnie trains his talent to dance from the inside out, emphasizing that understanding the business is vital for every aspiring artist."
        }
      ],
      quote: "Technique is only the beginning of what makes a memorable dancer, and we don’t start dancing to end up doing chorus, you have got to have that extra something."
    },
    ronnieImage: girls,
    companyImage: ft7
  },
  resume: {
    info: {
      height: "5'10",
      eyes: "Dark Brown",
      weight: "160lbs",
      hair: "Dk Brown",
      affiliation: "SAG/AFTRA"
    },
    credits: [
      {
        category: "Film/Television",
        items: [
          { project: "Red Tails", role: "Pilot", company: "Lucas Films" },
          { project: "In the Loop", role: "Host", company: "Gap" },
          { project: "Nash Bridges", role: "Contestant", company: "Off Duty Prod. Int." }
        ]
      },
      {
        category: "Corporate/Live Shows",
        items: [
          { project: "Bio-Rad", role: "Choreographer/Director", company: "Innovative Entertainment" },
          { project: "Netflix", role: "Choreographer/Dancer", company: "Hopkins Productions" },
          { project: "Nike", role: "Choreographer/Dancer", company: "Nike/Hopkins Prod." },
          { project: "Naspers Event", role: "Choreographer", company: "MIH Holding ltd." },
          { project: "SF Intl. Pow Wow", role: "Choreographer/Dancer", company: "SF Travel Assoc." },
          { project: "Pixar (Opening for Toy Story 3)", role: "Choreographer/Dancer", company: "Innovative Entertainment" },
          { project: "Junior League Show 2010/11", role: "Choreographer", company: "Macy’s Spec.Events" },
          { project: "Stanford Cancer Benefit", role: "Choreographer/Dancer", company: "Robert Fountain Prod." },
          { project: "American Fidelity Group", role: "Choreographer/Dancer", company: "Hopkins Prod. (Oklahoma/Costa Rica/Dominican Rep./Nevis/Huntington Beach/Cancun/Calgary)" },
          { project: "Calloway Golf Tournament", role: "Choreographer/Dancer", company: "Hopkins Productions" },
          { project: "National Life Ins.", role: "Choreographer/Dancer", company: "Hopkins Productions" },
          { project: "Intuit Holiday Event", role: "Choreographer/Dancer", company: "AEC" },
          { project: "Cisco Intl. FlashMob", role: "Choreographer/Dancer", company: "AEC" }
        ]
      },
      {
        category: "Video",
        items: [
          { project: "Nothing at all", role: "Dancer", company: "Santana/Musiq" },
          { project: "Gone too Soon", role: "Double", company: "Michael Jackson/Propaganda Films" },
          { project: "How Do u like it", role: "Dancer", company: "Keith Sweat/Feat. Left Eye (TLC)" },
          { project: "MCHammer Here Comes the Hammer", role: "Dancer/Double", company: "Busted Productions" }
        ]
      },
      {
        category: "Theater/Stage",
        items: [
          { project: "Overtone the Band", role: "Choreographer", company: "Clint/Dina Eastwood" },
          { project: "Deborah Cox", role: "Choreographer/Dancer", company: "J Records" },
          { project: "Christine W.", role: "Choreographer/Dancer", company: "Sony Music" },
          { project: "Angelina/Spanish Fly", role: "Choreographer", company: "Upstairs Records" },
          { project: "Honey Luv", role: "Choreographer", company: "Universal Records" },
          { project: "Black Nativity", role: "Choreographer/Joseph", company: "Lorainne Hansberry Theater" },
          { project: "Chorus Line", role: "Richie", company: "CCSF" },
          { project: "Gypsy", role: "Farmboy", company: "CCSF" }
        ]
      }
    ],
    specialSkills: "Hip Hop/Jazz/Pop Choreography, Print modeling, Lip Syncing, Currently Show Director/Choreographer at ASIASF & currently touring w/the Bill Hopkins Band"
  },
  talent: [
    {
      id: 1,
      name: "Maya Rodriguez",
      bio: "Maya is a powerhouse vocalist and songwriter with a unique blend of soul, pop, and R&B influences. Her dynamic stage presence and emotional depth captivate audiences wherever she performs. With three independently released albums and countless live performances, Maya continues to push creative boundaries.",
      images: { main: ft1 },
      socials: {
        instagram: "https://instagram.com/mayarodriguez",
        twitter: "https://twitter.com/mayarodriguez",
        tiktok: "https://tiktok.com/@mayarodriguez"
      },
      isExpanded: true,
      events: [
        { id: 1, name: "Summer Music Festival", date: "2025-07-15T19:00:00", location: "Central Park, NYC" },
        { id: 2, name: "Acoustic Sessions", date: "2025-08-22T20:30:00", location: "Blue Note, LA" }
      ]
    },
    {
      id: 2,
      name: "Alex Thompson",
      bio: "Alex is a multi-instrumentalist and producer whose innovative sound bridges electronic and organic elements. Known for creating immersive musical experiences, Alex's performances are a journey through soundscapes that transport audiences to another realm.",
      images: { main: ft2 },
      socials: {
        instagram: "https://instagram.com/alexthompsonmusic",
        twitter: "https://twitter.com/alexthompsonmusic"
      },
      isExpanded: true,
      events: [
        { id: 3, name: "Electronic Nights", date: "2025-09-10T22:00:00", location: "Output, Brooklyn" }
      ]
    },
    {
      id: 3,
      name: "The Harmony Collective",
      bio: "A genre-defying group that combines jazz, neo-soul, and contemporary R&B. The Harmony Collective's tight harmonies and intricate arrangements have earned them critical acclaim and a devoted following.",
      images: { main: ft3 },
      socials: {
        instagram: "https://instagram.com/harmonycollective",
        tiktok: "https://tiktok.com/@harmonycollective"
      },
      isExpanded: true,
      events: []
    },
    {
      id: 4,
      name: "Jordan Blake",
      bio: "Singer-songwriter with a folk-pop sensibility and storytelling prowess. Jordan's intimate performances and heartfelt lyrics create deep connections with audiences, making every show a memorable experience.",
      images: { main: ft4 },
      socials: {
        instagram: "https://instagram.com/jordanblakemusic",
        twitter: "https://twitter.com/jordanblakemusic"
      },
      isExpanded: true,
      events: [
        { id: 4, name: "Songwriter Circle", date: "2025-10-05T19:30:00", location: "Troubadour, West Hollywood" }
      ]
    },
    {
      id: 5,
      name: "Luna Santos",
      bio: "Latin-fusion artist who brings vibrant energy and cultural richness to every performance. Luna's bilingual songwriting and dynamic stage presence celebrate heritage while pushing musical boundaries.",
      images: { main: ft5 },
      socials: {
        instagram: "https://instagram.com/lunasantosmusic",
        snapchat: "https://snapchat.com/lunasantosmusic"
      },
      isExpanded: true,
      events: []
    },
    {
      id: 6,
      name: "The Midnight Riders",
      bio: "Rock band with blues influences and high-energy performances. Known for their electrifying live shows and tight musicianship, The Midnight Riders bring raw emotion and powerful storytelling to the stage.",
      images: { main: ft6 },
      socials: {
        instagram: "https://instagram.com/midnightriders",
        twitter: "https://twitter.com/midnightriders"
      },
      isExpanded: true,
      events: [
        { id: 5, name: "Rock Revival Tour", date: "2025-11-20T21:00:00", location: "House of Blues, Chicago" }
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Working with Ronnie Reddick Presents has been transformative for our venue. Their artists consistently deliver exceptional performances that keep our audiences coming back.",
      name: "Sarah Mitchell",
      company: "The Apollo Theater"
    },
    {
      id: 2,
      quote: "Ronnie's vision and dedication to his artists is unmatched. He doesn't just manage talent - he nurtures and develops true artistry.",
      name: "Marcus Johnson",
      company: "Universal Music Group"
    },
    {
      id: 3,
      quote: "The professionalism and quality of talent from Ronnie Reddick Presents exceeded all our expectations. They made our event truly memorable.",
      name: "Lisa Chen",
      company: "Corporate Events Plus"
    }
  ]
};

export const mockServices = [
  {
    title: "Artist Management",
    slug: "artist-management",
    description: "Comprehensive career development and strategic planning for emerging and established artists.",
    features: [
      "Career strategy and planning",
      "Brand development and positioning",
      "Industry networking and connections",
      "Performance opportunities",
      "Recording and production guidance"
    ]
  },
  {
    title: "Event Production",
    slug: "event-production",
    description: "Full-service event planning and production for concerts, festivals, and private events.",
    features: [
      "Venue selection and booking",
      "Technical production management",
      "Artist coordination and scheduling",
      "Marketing and promotion",
      "On-site event management"
    ]
  },
  {
    title: "Talent Booking",
    slug: "talent-booking",
    description: "Professional talent booking services connecting venues with the perfect artists for their events.",
    features: [
      "Curated artist roster",
      "Event-specific recommendations",
      "Contract negotiation",
      "Performance logistics",
      "Quality assurance"
    ]
  },
  {
    title: "Recording Services",
    slug: "recording-services",
    description: "State-of-the-art recording facilities and production services for artists at all levels.",
    features: [
      "Professional recording studios",
      "Experienced producers and engineers",
      "Mixing and mastering services",
      "Music video production",
      "Distribution assistance"
    ]
  },
  {
    title: "Artist Development",
    slug: "artist-development",
    description: "Comprehensive programs designed to nurture talent and accelerate artistic growth.",
    features: [
      "Vocal and performance coaching",
      "Songwriting workshops",
      "Stage presence training",
      "Industry education",
      "Mentorship programs"
    ]
  },
  {
    title: "Marketing & Promotion",
    slug: "marketing-promotion",
    description: "Strategic marketing campaigns and promotional services to amplify artist reach and engagement.",
    features: [
      "Social media management",
      "Press relations and media outreach",
      "Digital marketing campaigns",
      "Brand partnerships",
      "Fan engagement strategies"
    ]
  }
];

export const mockHeroSlides = [
  {
    id: 1,
    title: "Ronnie Reddick Presents",
    description: "Where artistry meets opportunity. Experience the future of entertainment with our premier talent management.",
    mediaType: "video",
    mediaUrl: "/ronnieloop_web.mp4",
    poster: girls,
    link: "/about"
  },
  {
    id: 2,
    title: "Discover Extraordinary Talent",
    description: "Meet our diverse roster of exceptional artists ready to elevate your next event or project.",
    mediaType: "image",
    mediaUrl: ft8,
    link: "/talent"
  },
  {
    id: 3,
    title: "Elevate Your Event",
    description: "Premium talent booking and event production services for unforgettable experiences.",
    mediaType: "image",
    mediaUrl: ft9,
    link: "/services"
  }
];
