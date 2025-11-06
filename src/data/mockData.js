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
    ronnie: "Ronnie Reddick is a visionary entrepreneur and talent manager with over 15 years of experience in the entertainment industry. Known for his keen eye for talent and innovative approach to artist development, Ronnie has helped launch the careers of numerous successful performers. His passion for music and commitment to excellence have made him a respected figure in the industry.",
    ronnieImage: girls,
    companyImage: ft7
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
    title: "Privé Cabaret",
    slug: "prive-cabaret",
    description: "Intimate and exclusive cabaret performances tailored for private events.",
    features: [
      "Bespoke show creation",
      "World-class performers",
      "Full production & styling",
      "Unforgettable atmosphere"
    ]
  },
  {
    title: "Dancers",
    slug: "dancers",
    description: "Professional dancers skilled in multiple disciplines for stage shows, music videos, and events.",
    features: [
      "Choreography services",
      "Backup dancers",
      "Specialty acts (e.g., aerial, fire)",
      "Ensemble performances"
    ]
  },
  {
    title: "Singers & Bands",
    slug: "singers-bands",
    description: "From powerhouse vocalists to full-piece bands for any occasion.",
    features: [
      "Solo artists",
      "Jazz trios",
      "Top 40 cover bands",
      "R&B and Soul ensembles"
    ]
  },
  {
    title: "Corporate Gigs",
    slug: "corporate-gigs",
    description: "High-quality, professional entertainment to elevate your corporate event.",
    features: [
      "Keynote performances",
      "Award show entertainment",
      "Holiday party shows",
      "Brand activations"
    ]
  },
  {
    title: "Pride Events",
    slug: "pride-events",
    description: "Vibrant, high-energy entertainment for Pride festivals, parades, and parties.",
    features: [
      "Drag performances",
      "Live vocalists",
      "High-energy dance numbers",
      "Hosting & MC services"
    ]
  },
  {
    title: "Artist Management",
    slug: "artist-management",
    description: "Comprehensive career development and strategic planning for emerging and established artists.",
    features: [
      "Career strategy",
      "Brand development",
      "Industry networking",
      "Booking services"
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
