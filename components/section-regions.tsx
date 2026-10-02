import Image from "next/image";
import { GitBranch } from "lucide-react";
import { regions, RegionItem } from "@/lib/regions";

function RegionCard({
  region,
  index,
}: {
  region: RegionItem;
  index: number;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
      style={{ aspectRatio: "4 / 3" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Image
        src={region.image}
        alt={region.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white mb-3 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: "#1d9e75" }}
        >
          {region.num}
        </div>
        <h3 className="text-lg font-bold text-white mb-1">
          {region.title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed max-w-xs">
          {region.description}
        </p>
      </div>
    </div>
  );
}

export default function SectionRegions() {
  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">Morocco&rsquo;s Mineral Regions</div>
          <h2 className="section-title">
            Key Mining Regions Across{" "}
            <span className="text-teal-700 dark:text-teal-400">Morocco</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {regions.map((r, i) => (
            <RegionCard key={r.id} region={r} index={i} />
          ))}
        </div>

        <div
          className="group relative flex items-start gap-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-teal-50 dark:bg-teal-900"
          >
            <GitBranch size={18} className="text-teal-700 dark:text-teal-300" />
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
              Multi-source flexibility
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              We maintain direct relationships with mines in every region — so we can match grade profiles and impurity signatures to your specific process requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
