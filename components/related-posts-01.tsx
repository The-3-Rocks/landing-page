import Image from 'next/image';
import RelatedImage03 from '@/public/images/related-post-03.jpg';
import RelatedImage04 from '@/public/images/related-post-04.jpg';
import RelatedImage05 from '@/public/images/related-post-05.jpg';
import RelatedImage06 from '@/public/images/related-post-06.jpg';

export default function RelatedPosts01() {
  return (
    <section>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center"
            data-aos-id-stats
          >
            {/* 1st item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
              Amber
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Raw material
              </div>
            </div>
            {/* 2nd item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                Pure
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                The Amber content
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                +60
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Our stock (Kg)
              </div>
            </div>
            {/* 4th item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                2
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Satisfied clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
