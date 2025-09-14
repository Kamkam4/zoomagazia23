// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string; // <-- დავამატეთ აღწერა
}

// პროდუქტების სრული სია
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'პრემიუმ კლასის საკვები ლეკვებისთვის',
    category: 'საკვები',
    price: 75.00,
    imageUrl: '/products/1food.jpg',
    description: 'სპეციალურად ფორმულირებული საკვები ლეკვებისთვის, რომელიც უზრუნველყოფს ჯანსაღ ზრდას და განვითარებას. მდიდარია პროტეინებითა და ვიტამინებით.',
  },
  {
    id: 2,
    name: 'ინტელექტუალური სათამაშო კატისთვის',
    category: 'სათამაშოები',
    price: 45.50,
    imageUrl: '/products/2food.jpg',
    description: 'გაართეთ თქვენი კატა საათობით. ეს ინტერაქტიული სათამაშო ასტიმულირებს გონებრივ აქტივობას და ფიზიკურ ვარჯიშს.',
  },
  {
    id: 3,
    name: 'რბილი საწოლი',
    category: 'აქსესუარები',
    price: 120.00,
    imageUrl: '/products/cxelidzagli.jpg',
    description: 'უმაღლესი ხარისხის, რბილი მასალისგან დამზადებული საწოლი, რომელიც თქვენს ოთხფეხა მეგობარს მშვიდ და კომფორტულ ძილს აჩუქებს.',
  },
  {
    id: 4,
    name: 'ვიტამინები ზრდასრული ძაღლებისთვის',
    category: 'ჯანმრთელობა',
    price: 60.00,
    imageUrl: '/products/vitamin.jpg',
    description: 'ვიტამინების კომპლექსი, რომელიც აძლიერებს იმუნურ სისტემას, აუმჯობესებს ბეწვის ხარისხს და ზრუნავს სახსრების სიჯანსაღეზე.',
  },
  {
    id: 5,
    name: 'მშრალი საკვები ზრდასრული კატებისთვის',
    category: 'საკვები',
    price: 85.00,
    imageUrl: '/products/mshrali.png',
    description: 'დაბალანსებული მშრალი საკვები ზრდასრული კატებისთვის. შეიცავს ყველა საჭირო ნივთიერებას თქვენი კატის ჯანმრთელობისთვის.',
  },
  {
    id: 6,
    name: 'გემრიელი ძვლები ძაღლებისთვის',
    category: 'საკვები',
    price: 25.00,
    imageUrl: '/products/gmrdzvali.png',
    description: 'ნატურალური, გემრიელი ძვლები, რომლებიც წმენდს კბილებს და აკმაყოფილებს ღრღნის ინსტინქტს.',
  },
  {
    id: 7,
    name: 'სასეირნო ყელსაბამი და თოკი',
    category: 'აქსესუარები',
    price: 55.00,
    imageUrl: '/products/seirnoba.png',
    description: 'მყარი და საიმედო კომპლექტი თქვენი ძაღლის უსაფრთხო და კომფორტული სეირნობისთვის.',
  },
  {
    id: 8,
    name: 'საფხაჭნი ბოძი კატებისთვის',
    category: 'აქსესუარები',
    price: 95.00,
    imageUrl: '/products/fxanva.jpg',
    description: 'დაიცავით თქვენი ავეჯი დაზიანებისგან. ეს საფხაჭნი ბოძი დააკმაყოფილებს თქვენი კატის ბუნებრივ ინსტინქტებს.',
  },
];

// რჩეული პროდუქტები (პირველი 4 პროდუქტი სრული სიიდან)
export const featuredProducts: Product[] = allProducts.slice(0, 4);