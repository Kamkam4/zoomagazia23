// src/app/about/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ჩვენს შესახებ | PetShop Portfolio",
  description: "გაიგეთ მეტი ჩვენი კომპანიის ისტორიისა და მისიის შესახებ.",
};

export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ჩვენი მისიაა თქვენი მეგობრების ბედნიერება
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            PetShop-ი დაარსდა ერთი მარტივი მიზნით: შეგვექმნა სივრცე, სადაც ყველა შინაური ცხოველის პატრონი იპოვის უმაღლესი ხარისხის პროდუქციასა და სანდო რჩევებს.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">ჩვენი ისტორია</h2>
              <p className="mt-4 text-gray-600">
                ყველაფერი 2020 წელს დაიწყო, როდესაც ცხოველების მოყვარულთა მცირე ჯგუფმა გადაწყვიტა, შეეცვალა ბაზარზე არსებული სტანდარტები. ჩვენ გვჯეროდა, რომ ჩვენს ოთხფეხა მეგობრებს საუკეთესო ეკუთვნით, ამიტომ დავიწყეთ მხოლოდ საუკეთესო ბრენდებთან თანამშრომლობა.
              </p>
              <p className="mt-4 text-gray-600">
                დღეს, PetShop-ი ერთ-ერთი წამყვანი ონლაინ მაღაზიაა, რომელიც ათასობით მომხმარებელს ემსახურება და მუდმივად ცდილობს, გააუმჯობესოს სერვისი და ასორტიმენტი.
              </p>
            </div>
          </div>
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
            <Image
              src="/website/logo.png" // ამ სურათს დავამატებთ public ფოლდერში
              alt="Web-Site.ge"
              width={800}
              height={600}
              className="h-full w-75 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}