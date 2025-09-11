// src/app/contact/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "კონტაქტი | PetShop Portfolio",
  description: "დაგვიკავშირდით ნებისმიერი შეკითხვის შემთხვევაში.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            დაგვიკავშირდით
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            გაქვთ შეკითხვა ან გჭირდებათ კონსულტაცია? ჩვენ მზად ვართ, დაგეხმაროთ.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="text-base text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">საკონტაქტო ინფორმაცია</h2>
            <p className="mt-4">ჩვენი ოფისი ღიაა ორშაბათიდან პარასკევის ჩათვლით, 10:00-დან 18:00-მდე.</p>
            <div className="mt-8 space-y-4">
              <p><strong>მისამართი:</strong> თბილისი, ჭავჭავაძის გამზ. 15</p>
              <p><strong>ტელეფონი:</strong> +995 123 456 789</p>
              <p><strong>იმეილი:</strong> info@petshop.ge</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <form action="#" method="POST">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">სახელი</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">იმეილი</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">შეტყობინება</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700">
                  გაგზავნა
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}