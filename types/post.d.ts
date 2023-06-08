import { Comment } from "./comment";
export interface Post {
  title: string;
  description: string;
  commentCount: number;
  addedAt: string;
  isPublished: boolean;
  comments: Comment[];
  _id: string;
}
