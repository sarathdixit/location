import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] p-10`}
    >
      <div class="grid grid-cols-1 gap-6">
        <a
          href="https://example.com/reception1"
          class="block rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
        >
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO_yO8qmjE6KvgBCjHJRq-niELWeGezdh8rFRwx=s1360-w1360-h1020-rw"
            alt="Reception 1"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Reception 1</h2>
            <p class="text-gray-600">Date: 26/08/2025 Tuesday</p>
            <p class="text-gray-600">Location: Blue Bay Beach Resort</p>
          </div>
        </a>

        <a
          href="https://example.com/reception2"
          class="block rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
        >
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrtRYobDryCQHPqQEA0lk50GSwUIwaoBsX11-eJhPCAwT6rUCG8GTW0tIkhehkk1NBZpD6WRaZuaqOlZgTut39jKV0e73CsL-6r2Nh0rj6DZLFgZkLElkpF4F9GXq4a3K9ODXQ=s1360-w1360-h1020-rw"
            alt="Reception 2"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Marriage</h2>
            <p class="text-gray-600">Date: 27/08/2025 Wednesday</p>
            <p class="text-gray-600">Location: Blue Bay Beach Resort</p>
          </div>
        </a>

        <a
          href="https://example.com/reception3"
          class="block rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
        >
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO5zXlG3WmVqORYb_U8ZZMiopnGBUXkecJpmQFl=s1360-w1360-h1020-rw"
            alt="Reception 3"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Reception 2</h2>
            <p class="text-gray-600">Date: 3/09/2025 Wednesday</p>
            <p class="text-gray-600">Location: R.R Mahal, Vaniyambadi</p>
          </div>
        </a>
      </div>
    </div>
  );
}
