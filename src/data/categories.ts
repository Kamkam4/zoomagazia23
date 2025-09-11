// src/data/categories.ts
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  href: string;
}

export const productCategories: Category[] = [
  {
    id: 1,
    name: 'საკვები',
    imageUrl: '/categories/1.jpeg',
    href: '/products?category=საკვები',
  },
  {
    id: 2,
    name: 'სათამაშოები',
    imageUrl: '/categories/2.jpg',
    href: '/products?category=სათამაშოები',
  },
  {
    id: 3,
    name: 'აქსესუარები',
    imageUrl: '/categories/3.jpg',
    href: '/products?category=აქსესუარები',
  },
];