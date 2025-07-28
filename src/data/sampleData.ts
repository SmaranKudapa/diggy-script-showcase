export interface Project {
  id: string;
  title: string;
  youtube_video_id: string;
  game_link: string;
  technologies: string[];
  project_type: 'development' | 'design' | 'system' | 'ui' | 'other';
  sort_order: number;
}

export interface Testimonial {
  id: string;
  client_name: string;
  image_url: string;
}

export interface SocialMedia {
  id: string;
  icon: string;
  title: string;
  description: string;
  url: string;
  isPrimary: boolean;
}

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Build System',
    youtube_video_id: 'https://www.youtube.com/watch?v=e_KITqc6gUA',
    game_link: 'https://www.roblox.com/games/117115671511965/Build-System-Demo',
    technologies: ['Knit Framework', 'Modular', 'DataStoreService', 'OOP', 'UI Scripting'],
    project_type: 'system',
    sort_order: 1
  },
  {
    id: '2',
    title: 'Color Tiles Game System',
    youtube_video_id: '',
    game_link: 'https://www.roblox.com/games/138983222744840/Color-Tiles',
    technologies: ['Knit Framework', 'Modular', 'DataStoreService', 'OOP', 'UI Scripting'],
    project_type: 'system',
    sort_order: 2
  },
  {
    id: '3',
    title: 'Racing Go-Kart System',
    youtube_video_id: '',
    game_link: 'https://www.roblox.com/games/88580580594728/Racing-Game',
    technologies: ['Physics', 'Vehicle System','Knit Framework', 'Modular', 'DataStoreService', 'OOP', 'UI Scripting'],
    project_type: 'system',
    sort_order: 3
  },
  {
    id: '4',
    title: 'Quick Draw Duel System',
    youtube_video_id: '',
    game_link: 'http://roblox.com/games/84745420872512/Quick-Draw-Duel-System',
    technologies: ['Knit Framework', 'Modular', 'Combat','DataStoreService', 'OOP', 'UI Scripting'],
    project_type: 'system',
    sort_order: 4
  },
  {
    id: '5',
    title: 'Lava Escape Obby System',
    youtube_video_id: '',
    game_link: 'https://www.roblox.com/games/118217954881754/Lava-Escape-Obby',
    technologies: ['Knit Framework', 'Modular', 'UI Scripting'],
    project_type: 'system',
    sort_order: 5
  },
  {
    id: '6', 
    title: 'Dialogue System',
    youtube_video_id: 'https://www.youtube.com/watch?v=nNM5GfOjl4s',
    game_link: 'https://www.roblox.com/games/114450135905695/Dialogue-System-Demo',
    technologies: ['Modular', 'UI Scripting', 'Mobile Support'],
    project_type: 'system',
    sort_order: 6
  },
  {
    id: '7',
    title: 'Shopping Cart/Supermarket System',
    youtube_video_id: 'https://www.youtube.com/watch?v=OOmPhNO5ELE', 
    game_link: 'https://www.roblox.com/games/103844083914407/Super-Market-Test',
    technologies: ['Knit Framework', 'Modular', 'UI Scripting', 'CollectionService', 'Performance Optimization'],
    project_type: 'system',
    sort_order: 7
  },
  {
    id: '8',
    title: 'Custom Bubble Chat Gamepass Color',
    youtube_video_id: 'https://www.youtube.com/watch?v=UU9QHBCBRE0', 
    game_link: 'https://www.roblox.com/games/113019496497140/Custom-Bubble-Chat-Color-Gamepass-Demo',
    technologies: ['Bubble/Text Chat', 'UI Scripting'],
    project_type: 'system',
    sort_order: 8
  },
  {
    id: '9',
    title: 'Soccer Penality Kick',
    youtube_video_id: 'https://www.youtube.com/watch?v=6kBGEGuQcJo', 
    game_link: 'https://www.roblox.com/games/71963064538231/Modular-Penalty-Kick-with-Goalie-Demo',
    technologies: ['Knit Framework', 'Modular', 'OOP'],
    project_type: 'system',
    sort_order: 9
  },
  {
    id: '10',
    title: 'Soccer Penality Kick',
    youtube_video_id: 'https://www.youtube.com/watch?v=6kBGEGuQcJo', 
    game_link: 'https://www.roblox.com/games/71963064538231/Modular-Penalty-Kick-with-Goalie-Demo',
    technologies: ['Knit Framework', 'Modular', 'OOP'],
    project_type: 'system',
    sort_order: 10
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'GameDev Studios',
    image_url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    client_name: 'RobloxMaster99',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    client_name: 'InnovativeGaming',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'
  }
];

export const sampleSocialMedia: SocialMedia[] = [
  {
    id: "1",
    icon: "MessageCircle",
    title: "Discord",
    description: "Main contact method - Let's discuss your project!",
    url: "https://discord.com/users/731669935461498890",
    isPrimary: true
  },
  {
    id: "2",
    icon: "Youtube",
    title: "YouTube", 
    description: "Development content and tutorials",
    url: "https://www.youtube.com/@OneMillionRoblox/shorts",
    isPrimary: true
  },
  {
    id: "3",
    icon: "Music",
    title: "TikTok",
    description: "Short clips and development showcases", 
    url: "https://www.tiktok.com/@onemillionroblox",
    isPrimary: true
  }
];