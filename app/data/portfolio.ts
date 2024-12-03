import { ProjectType } from "@/types/portfolio";

export const portfolioCategories = {
  creative_design: {
    name: "Creative Design",
    filters: [
      { id: "2d-graphics", name: "2D Graphics" },
      { id: "3d-graphics", name: "3D Graphics" },
      { id: "logo-design", name: "Logo Design" },
      { id: "branding", name: "Branding" },
    ],
  },
  web_solutions: {
    name: "Web Solutions",
    filters: [
      { id: "web-design", name: "Web Design" },
      { id: "web-development", name: "Web Development" },
    ],
  },
  animation_motion: {
    name: "Animation & Motion",
    filters: [
      { id: "2d-animation", name: "2D Animation" },
      { id: "3d-animation", name: "3D Animation" },
    ],
  },
  video_production: {
    name: "Video Production",
    filters: [
      { id: "video-editing", name: "Video Editing" },
      { id: "short-form-videos", name: "Short-Form Videos" },
      { id: "long-form-videos", name: "Long-Form Videos" },
      { id: "thumbnail-creation", name: "Thumbnail Creation" },
    ],
  },
};

export const portfolioProjects: ProjectType[] = [
  {
    id: "VID-001",
    type: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=r3uWBPFcREs",
    youtubeId: "r3uWBPFcREs",
    tags: ["Video Editing", "Long-Form Videos"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
  },
  {
    id: "VID-002",
    type: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=60ZH6QeNo2Y",
    youtubeId: "60ZH6QeNo2Y",
    tags: ["Video Editing", "Long-Form Videos"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
  },
  {
    id: "VID-003",
    type: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=tKVNOcGfrnI",
    youtubeId: "tKVNOcGfrnI",
    tags: ["Video Editing", "Short-Form Videos"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
  },
  {
    id: "SHORT-001",
    type: "short",
    videoUrl: "/meshy.mp4",
    tags: ["Short-Form Videos", "Video Editing"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Short Video 1",
  },
  {
    id: "SHORT-002",
    type: "short",
    videoUrl: "/gandalf.mp4",
    tags: ["Short-Form Videos", "Video Editing"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Short Video 2",
  },
  {
    id: "SHORT-003",
    type: "short",
    videoUrl: "/path.mp4",
    tags: ["Short-Form Videos", "Video Editing"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Short Video 3",
  },
  {
    id: "SHORT-004",
    type: "short",
    videoUrl: "/asia_dream.mp4",
    tags: ["Short-Form Videos", "Video Editing"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Short Video 3",
  },
  {
    id: "SHORT-005",
    type: "short",
    videoUrl: "/flower_man.mp4",
    tags: ["Short-Form Videos", "Video Editing"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Short Video 3",
  },
  // {
  //   id: "SHORT-006",
  //   type: "short",
  //   videoUrl: "/chase.mp4",
  //   tags: ["Short-Form Videos", "Video Editing"],
  //   year: "2024",
  //   client: "Personal Project",
  //   status: "COMPLETED",
  //   duration: "00:30",
  //   title: "Short Video 3",
  // },
  {
    id: "ANIM-001",
    type: "animation",
    videoUrl: "/pixelated.mp4",
    tags: ["2D Animation", "Animation & Motion"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Pixelated Animation",
  },
  {
    id: "ANIM-002",
    type: "animation",
    videoUrl: "/train.mp4",
    tags: ["2D Animation", "Animation & Motion"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Train Animation",
  },
  {
    id: "ANIM-003",
    type: "animation",
    videoUrl: "/black_and_white.mp4",
    tags: ["2D Animation", "Animation & Motion"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Black and White Animation",
  },
  {
    id: "ANIM-004",
    type: "animation",
    videoUrl: "/shibuya_pixelated.mp4",
    tags: ["2D Animation", "Animation & Motion"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Shibuya Pixelated",
  },
  {
    id: "ANIM-005",
    type: "animation",
    videoUrl: "/tokyo.mp4",
    tags: ["2D Animation", "Animation & Motion"],
    year: "2024",
    client: "Personal Project",
    status: "COMPLETED",
    duration: "00:30",
    title: "Tokyo Animation",
  },
  // Note: train.mp4 was listed twice in your request, skipping duplicate
];
