export type Post = {
  id: string;
  image?: string;
  content: string;
  likes: number;
  author: User;
};

export type User = {
  id: string;
  image?: string;
  position: string;
  name: string;
  backImage?: string;
  about?: string;
  experience?: Experience[];
};

export type Experience = {
  id: string;
  title: string;
  companyName: string;
  companyImage?: string;
};
