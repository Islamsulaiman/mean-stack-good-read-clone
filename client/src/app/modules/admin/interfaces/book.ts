export interface Book {
  _id?: number;
  title: string;
  description: string;
  image?: string;
  category: string; // reference to Category
  author: string; // reference to Author
  avgRating?: number;
  reviews?: number[] | []; // reference to Review
}
