// src/app/products/page.tsx
import { allProducts } from '@/data/products';
import ProductList from '@/components/products/ProductList';

// Page კომპონენტს შეუძლია მიიღოს searchParams ობიექტი
interface ProductsPageProps {
  searchParams: {
    category?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const selectedCategory = searchParams.category;

  // ვფილტრავთ პროდუქტებს სერვერზე, სანამ კლიენტს გავუგზავნით
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {selectedCategory || 'ყველა პროდუქტი'}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          შეარჩიეთ საუკეთესო პროდუქცია თქვენი ერთგული მეგობრებისთვის ჩვენი ფართო ასორტიმენტიდან.
        </p>
        
        {/* ProductList-ს გადავცემთ უკვე გაფილტრულ პროდუქტებს */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}