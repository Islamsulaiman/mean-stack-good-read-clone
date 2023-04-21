export interface Book {
  _id?: number;
  title: string;
  description: string;
  image?: string;
  category: {
      name: string
  }[]; // reference to Category
  author: {
      fullName: string
  }[]; // reference to Author
  avgRating?: number;
  reviews?: number[] | []; // reference to Review
}
