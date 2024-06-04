export interface User {
  firstname: string;
  lastname: string;
  avatarUrl: string;
}

export interface Article {
  title: string;
  content: string;
  topic: number;
  cover_image_url: string;
  slug: string;
  author: User;
  likes: number;
  comments: number;
  tags: string[];
  isPublic: boolean;
  published: boolean;
  date_published: string;
  minutes_to_read: number;
  updatedAt: string;
}

export interface Event {
  link: string;
  tag: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface Testimonial {
  rating: number;
  comment: string;
  user: User;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Project {
  title: string;
  description: string;
  repoLink: string;
  user: User;
  topics: string[];
}
