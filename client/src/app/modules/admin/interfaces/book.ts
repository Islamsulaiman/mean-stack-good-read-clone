export interface Book {
  _id?: number;
  name: string;
  description: string;
  imageUrl?: string;
  category: string; // reference to Category
  author: string; // reference to Author
  avgRating?: number;
  reviews?: number[] | []; // reference to Review
}
