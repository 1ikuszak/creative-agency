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
      { id: "short-form-video", name: "Short-Form Video" },
      { id: "long-form-video", name: "Long-Form Video" },
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
    tags: ["Video Editing", "Long-Form Video"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "VID-002",
    type: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=60ZH6QeNo2Y",
    youtubeId: "60ZH6QeNo2Y",
    tags: ["Video Editing", "Long-Form Video"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "VID-003",
    type: "video",
    youtubeUrl: "https://www.youtube.com/watch?v=tKVNOcGfrnI",
    youtubeId: "tKVNOcGfrnI",
    tags: ["Video Editing", "Long-Form Video"],
    year: "2024",
    client: "Personal Project",
  },

  {
    id: "SHORT-001",
    type: "short",
    videoUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/meshy_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 1",
  },
  {
    id: "SHORT-002",
    type: "short",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/gandalf_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 2",
  },
  {
    id: "SHORT-003",
    type: "short",
    videoUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/path_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 3",
  },
  {
    id: "SHORT-004",
    type: "short",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/asia_dream_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 3",
  },
  {
    id: "SHORT-005",
    type: "short",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/flower_man_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 3",
  },
  {
    id: "SHORT-006",
    type: "short",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/special_1k_optimized.mp4",
    tags: ["Video Editing", "Short-Form Video"],
    year: "2024",
    client: "Personal Project",
    title: "Short Video 3",
  },
  {
    id: "ANIM-001",
    type: "animation",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/pixelated_optimized.mp4",
    tags: ["2D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-002",
    type: "animation",
    videoUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/train_optimized.mp4",
    tags: ["2D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-003",
    type: "animation",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/black_and_white_optimized.mp4",
    tags: ["2D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-004",
    type: "animation",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/shibuya_pixelated_optimized.mp4",
    tags: ["2D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-005",
    type: "animation",
    videoUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/tokyo_optimized.mp4",
    tags: ["3D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-006",
    type: "animation",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/meshy_sq_optimized.mp4",
    tags: ["2D Animation"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "ANIM-007",
    type: "animation",
    videoUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/moon_and_sun_optimized.mp4",
    tags: ["3D Animation"],
    year: "2024",
    client: "Personal Project",
  },

  {
    id: "GRAPH-001",
    type: "image",
    imageUrl:
      "https://drewmp.s3.eu-north-1.amazonaws.com/Icarus_final_0000_Ellipse+11.jpg",
    tags: ["2D Graphics", "Logo Design"],
    year: "2024",
    client: "Personal Project",
  },

  {
    id: "GRAPH-002",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/dynamo_mask.jpg",
    tags: ["2D Graphics", "Logo Design", "Branding"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "GRAPH-003",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/glimpseee.jpg",
    tags: ["3D Graphics", "Logo Design", "Branding"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "GRAPH-004",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/sniezhynka.jpg",
    tags: ["2D Graphics", "Logo Design", "Branding"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "GRAPH-005",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/DYNAMO_FINAL.png",
    tags: ["2D Graphics", "Logo Design", "Branding"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "GRAPH-006",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/serduszko1.png",
    tags: ["3D Graphics"],
    year: "2024",
    client: "Personal Project",
  },
  {
    id: "GRAPH-007",
    type: "image",
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/yurei_render.png",
    tags: ["3D Graphics", "Logo Design", "Branding"],
    year: "2024",
    client: "Personal Project",
  },
];
