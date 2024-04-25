export interface User {
  firstname: string;
  lastname: string;
  avatarUrl: string;
}

export interface Article {
  tag: string;
  imageUrl: string;
  title: string;
  description: string;
  owner: User;
  datePublished: string;
  minutesToRead: number;
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
  rating: number,
  comment: string,
  user: User
}

export interface Faq {
  question: string;
  answer: string;
}
