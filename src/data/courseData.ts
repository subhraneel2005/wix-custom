// src/data/coursesData.ts

export interface Course {
  slug: string;
  title: string;
  image: string;
  duration: string;
  students: string;
  modules: number;
  price: number;
  description: string;
  learnPoints: string[];
  enrollUrl: string;

  // Single page specific fields
  heroTitle: string;
  heroSubtitle: string;
  whyLearnTitle: string;
  whyLearnDescription: string;
  whyLearnImage: string;
  whatYouLearnTitle: string;
  whatYouLearnSubtitle: string;
  courseCards: {
    icon: string;
    title: string;
    items: string[];
  }[];
}

export const coursesData: Course[] = [
  {
    slug: "photoshop-mastery",
    title: "Photoshop Mastery",
    image:
      "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/photoshop-new.jpg",
    duration: "3 Months",
    students: "500+",
    modules: 6,
    price: 25000,
    description:
      "Master Photoshop - the ultimate tool for editing photos, designing albums, and creating stunning posters with ease.",
    learnPoints: [
      "Photography Fundamentals",
      "Advanced Camera Techniques",
      "Adobe Photoshop Mastery",
      "Premiere Pro Video Editing",
      "After Effects Animation",
      "Color Grading & Correction",
    ],
    enrollUrl: "https://wa.me/919916663357",

    // Single page fields
    heroTitle: "Master Professional Photo Editing with Photoshop",
    heroSubtitle:
      "Turn your passion into a career. Learn to transform ordinary photos into stunning masterpieces with hands-on Photoshop training",
    whyLearnTitle: "Why Learn Photo Editing?",
    whyLearnDescription:
      "Photo editing is the backbone of photography, fashion, e-commerce, and social media. With Akshay Entertainment Academy, you'll gain professional Photoshop skills, real-world editing experience, and the confidence to work on weddings, brands, and freelance projects.",
    whyLearnImage: "/editing.jpg",
    whatYouLearnTitle: "What You'll Learn",
    whatYouLearnSubtitle:
      "Core editing fundamentals: cropping, exposure and color correction, white balance, and sharpening for clean, consistent images.",
    courseCards: [
      {
        icon: "FaLeaf",
        title: "Basics",
        items: [
          "Photoshop Interface & Tools",
          "Layers, Masks & Brushes",
          "Selections & Shapes",
        ],
      },
      {
        icon: "FaPen",
        title: "Creative Editing",
        items: [
          "Background Removal & Replacement",
          "Filters, Effects & Typography",
          "Social Media Edits & Thumbnails",
        ],
      },
      {
        icon: "FaWandMagicSparkles",
        title: "Professional Retouching",
        items: [
          "Portrait & Beauty Retouching",
          "Product & Food Editing",
          "Wedding & Event Styles",
        ],
      },
    ],
  },
  {
    slug: "video-editing-premiere-pro",
    title: "Video Editing with Premiere Pro",
    image:
      "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/video-editing-new.jpg",
    duration: "3 Months",
    students: "500+",
    modules: 6,
    price: 25000,
    description:
      "Learn Adobe Premiere Pro and transform raw footage into cinematic videos. From cutting to color grading.",
    learnPoints: [
      "Professional Editing Tools",
      "Multi-Track Timeline",
      "Color Correction & Grading",
      "Transitions & Effects",
      "Slow Motion & Speed Control",
      "Export for Any Platform",
    ],
    enrollUrl: "https://wa.me/919916663357",

    // Single page fields
    heroTitle: "Master Video Editing with Adobe Premiere Pro",
    heroSubtitle:
      "Transform raw footage into cinematic masterpieces. Learn professional video editing techniques used by industry experts.",
    whyLearnTitle: "Why Learn Video Editing?",
    whyLearnDescription:
      "Video editing is in high demand across YouTube, film production, advertising, and social media. With Premiere Pro skills, you'll create stunning videos for brands, events, and your own creative projects with confidence.",
    whyLearnImage: "/editing.jpg",
    whatYouLearnTitle: "What You'll Learn",
    whatYouLearnSubtitle:
      "Master timeline editing, color grading, transitions, effects, and export settings for professional-quality videos.",
    courseCards: [
      {
        icon: "FaLeaf",
        title: "Editing Fundamentals",
        items: [
          "Premiere Pro Interface",
          "Timeline & Multi-Track Editing",
          "Cutting & Trimming Techniques",
        ],
      },
      {
        icon: "FaPen",
        title: "Advanced Techniques",
        items: [
          "Color Correction & Grading",
          "Transitions & Effects",
          "Motion Graphics Integration",
        ],
      },
      {
        icon: "FaWandMagicSparkles",
        title: "Professional Output",
        items: [
          "Audio Mixing & Sync",
          "Export for Different Platforms",
          "Cinematic Storytelling",
        ],
      },
    ],
  },
  {
    slug: "motion-graphics-after-effects",
    title: "Motion Graphics Course",
    image:
      "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/afterEffects-new.jpg",
    duration: "45 Days",
    students: "500+",
    modules: 6,
    price: 25000,
    description:
      "Master Adobe After Effects and bring your ideas to life with stunning animations, visual effects, and motion graphics that captivate audiences.",
    learnPoints: [
      "Dynamic Animations",
      "Text & Title Animation",
      "Visual Effects (VFX)",
      "Green Screen & Compositing",
      "3D Motion & Camera Tracking",
      "Export for Any Platform",
    ],
    enrollUrl: "https://wa.me/919916663357",

    // Single page fields
    heroTitle: "Create Stunning Motion Graphics with After Effects",
    heroSubtitle:
      "Bring your creative vision to life with professional animation, VFX, and motion graphics that captivate and engage audiences.",
    whyLearnTitle: "Why Learn Motion Graphics?",
    whyLearnDescription:
      "Motion graphics are essential for advertising, social media, film, and branding. Master After Effects and create eye-catching animations, logo reveals, explainer videos, and visual effects that make content stand out.",
    whyLearnImage: "/editing.jpg",
    whatYouLearnTitle: "What You'll Learn",
    whatYouLearnSubtitle:
      "Animation principles, keyframing, compositing, VFX techniques, and how to create professional motion graphics from scratch.",
    courseCards: [
      {
        icon: "FaLeaf",
        title: "Animation Basics",
        items: [
          "After Effects Interface",
          "Keyframes & Animation",
          "Shape Layers & Text Animation",
        ],
      },
      {
        icon: "FaPen",
        title: "Visual Effects",
        items: [
          "Green Screen & Compositing",
          "Particle Effects & Simulations",
          "Motion Tracking",
        ],
      },
      {
        icon: "FaWandMagicSparkles",
        title: "Advanced Motion",
        items: [
          "3D Camera & Lighting",
          "Expressions & Automation",
          "Professional Project Workflow",
        ],
      },
    ],
  },
  {
    slug: "photography-cinematography",
    title: "Photography & Cinematography",
    image:
      "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/cinema.jpg",
    duration: "1 Month",
    students: "500+",
    modules: 6,
    price: 25000,
    description:
      "Learn the art of photography and cinematography from capturing stunning moments to creating cinematic videos that tell powerful stories.",
    learnPoints: [
      "Camera Mastery",
      "Lighting Techniques",
      "Portrait & Event Photography",
      "Cinematography Skills",
      "Creative Shooting Styles",
      "Practical Projects & Portfolio",
    ],
    enrollUrl: "https://wa.me/919916663357",

    // Single page fields
    heroTitle: "Master Photography & Cinematography",
    heroSubtitle:
      "Learn the art of visual storytelling through camera, light, and composition. Capture stunning moments and create cinematic masterpieces.",
    whyLearnTitle: "Why Learn Photography & Cinematography?",
    whyLearnDescription:
      "Photography and cinematography are the foundation of visual storytelling. Whether shooting weddings, events, films, or commercial projects, mastering camera work and lighting opens doors to creative and professional opportunities.",
    whyLearnImage: "/editing.jpg",
    whatYouLearnTitle: "What You'll Learn",
    whatYouLearnSubtitle:
      "Camera settings, composition, lighting techniques, and cinematic storytelling to create professional photos and videos.",
    courseCards: [
      {
        icon: "FaLeaf",
        title: "Camera Fundamentals",
        items: [
          "Camera Settings & Controls",
          "Exposure Triangle (ISO, Aperture, Shutter)",
          "Focus & Depth of Field",
        ],
      },
      {
        icon: "FaPen",
        title: "Creative Techniques",
        items: [
          "Composition & Framing",
          "Lighting & Natural Light",
          "Portrait & Event Photography",
        ],
      },
      {
        icon: "FaWandMagicSparkles",
        title: "Cinematography",
        items: [
          "Camera Movement & Angles",
          "Cinematic Lighting Setup",
          "Storytelling Through Visuals",
        ],
      },
    ],
  },
];

// Helper function to get course by slug
export const getCourseBySlug = (slug: string): Course | undefined => {
  return coursesData.find((course) => course.slug === slug);
};

// Helper function to get all slugs for static generation
export const getAllCourseSlugs = (): string[] => {
  return coursesData.map((course) => course.slug);
};
