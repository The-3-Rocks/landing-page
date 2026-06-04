import { MapPin, ShieldCheck } from "lucide-react";

export default function SectionAbout() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">About Us</div>
          <h2 className="section-title">About The 3 Rocks — Morocco&rsquo;s <span className="text-teal-700 dark:text-teal-400">Premier Mineral Exporter</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e1f5ee" }}>
                <MapPin size={18} color="#1d9e75" />
              </div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">Where we operate</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
              Headquartered in Rabat, with satellite operations in Errachidia, Khenifra, Midelt, Ouarzazate, and Casablanca.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              We export lead, zinc, copper, barite, iron, cobalt, and antimony to buyers across Europe, Asia, the Americas, and the Middle East.
            </p>
          </div>

          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e1f5ee" }}>
                <ShieldCheck size={18} color="#1d9e75" />
              </div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">Why we were built</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
              Our founders saw international buyers face three challenges:
            </p>
            <ul className="space-y-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Inconsistent grade between lots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Opaque and unreliable documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Unpredictable delivery timelines</span>
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mt-3">
              The 3 Rocks was built to solve all three.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="stat-block">
            <div className="stat-number">20+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Countries served</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">10+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Years founders&rsquo; experience</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">7</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Core minerals exported</div>
          </div>
        </div>
      </div>
    </section>
  );
}
