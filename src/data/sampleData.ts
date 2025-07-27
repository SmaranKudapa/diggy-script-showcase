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

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Advanced Inventory System',
    youtube_video_id: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
    game_link: 'https://www.roblox.com/games/1',
    technologies: ['Knit Framework', 'DataStoreService', 'OOP', 'UI Design'],
    project_type: 'system',
    sort_order: 1
  },
  {
    id: '2', 
    title: 'Racing Game Physics',
    youtube_video_id: 'dQw4w9WgXcQ',
    game_link: 'https://www.roblox.com/games/2',
    technologies: ['Physics Systems', 'TweenService', 'UserInputService', 'Mobile Support'],
    project_type: 'development',
    sort_order: 2
  },
  {
    id: '3',
    title: 'Smart NPC Pathfinding',
    youtube_video_id: 'dQw4w9WgXcQ', 
    game_link: 'https://www.roblox.com/games/3',
    technologies: ['Pathfinding Service', 'AI Logic', 'CollectionService', 'Performance Optimization'],
    project_type: 'system',
    sort_order: 3
  }
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