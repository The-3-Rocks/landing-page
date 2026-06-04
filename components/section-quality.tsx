import { Pickaxe, FlaskConical, FileCheck, FileText } from "lucide-react";

const cards = [
  {
    icon: Pickaxe,
    title: "At the mine face",
    desc: "Field geologists collect channel samples from active mining faces and blast-hole cuttings to confirm grade distribution before extraction.",
  },
  {
    icon: FlaskConical,
    title: "At the beneficiation plant",
    desc: "Composite samples tested for target element and impurities including arsenic, cadmium, mercury, and silver using XRF and ICP analysis.",
  },
  {
    icon: FileCheck,
    title: "ISO 17025-accredited labs",
    desc: "All analyses performed by accredited facilities in Casablanca and Rabat.",
  },
  {
    icon: FileText,
    title: "Shipment documentation",
    desc: "Every shipment includes certificate of analysis, chain-of-custody summary, and raw data archive. Samples retained 12 months.",
  },
];

export default function SectionQuality() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">Quality Assurance</div>
          <h2 className="section-title">Quality Control & <span className="text-teal-700 dark:text-teal-400">Laboratory Standards</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="section-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e1f5ee" }}>
                    <Icon size={18} color="#1d9e75" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">{card.title}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{card.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="stat-block">
            <div className="stat-number">XRF + ICP</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Analytical methods</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">ISO 17025</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Lab accreditation</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">12 months</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Sample retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
