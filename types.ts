
export interface BlogPost {
  id: number;
  title: string;
  text: string;
  tags: string[];
  imageUrl: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
