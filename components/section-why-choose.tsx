import Image from "next/image";
import Link from "next/link";
import { Pickaxe, FlaskConical, Ship, ArrowRight } from "lucide-react";
import { reasons, WhyChooseItem } from "@/lib/why-choose";

const iconMap: Record<string, React.ElementType> = {
  Pickaxe,
  FlaskConical,
  Ship,
};

function Card({ item, index }: { item: WhyChooseItem; index: number }) {
  const Icon = iconMap[item.icon];
  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ border: "0.5px solid #e5e5e5" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div
          className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: "#1d9e75" }}
        >
          {Icon && <Icon size={20} className="text-white" />}
        </div>
      </div>
      <div className="flex flex-col grow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed grow">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function SectionWhyChoose() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">Why Choose Us</div>
          <h2 className="section-title">
            Why The 3 Rocks for{" "}
            <span className="text-teal-700 dark:text-teal-400">
              Moroccan Minerals
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reasons.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn text-white bg-teal-600 hover:bg-teal-700"
          >
            <span>Talk to Our Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
