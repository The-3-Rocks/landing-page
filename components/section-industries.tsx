import { Battery, Droplet, Factory, Flame, Sun, Activity } from "lucide-react";

const industries = [
  {
    icon: Battery,
    title: "Lead-acid & EV batteries",
    desc: "Lead accounts for 80%+ of global battery demand. Cobalt from Bou Azzer feeds lithium-ion battery precursor manufacturers.",
  },
  {
    icon: Droplet,
    title: "Oil & gas drilling",
    desc: "Barite (SG 4.2+, API 13A) specified by drilling operators across West Africa, the Mediterranean, and the Middle East.",
  },
  {
    icon: Factory,
    title: "Steel & infrastructure",
    desc: "Iron ore from Nador and Oujda serves Mediterranean blast furnaces alongside Brazil and Australia.",
  },
  {
    icon: Flame,
    title: "Flame retardants & electronics",
    desc: "Khenifra antimony (30–50%+) used in brominated flame retardants and military applications.",
  },
  {
    icon: Sun,
    title: "Renewable energy & cables",
    desc: "Copper from Tinghir essential for wire, cable, and renewable energy infrastructure.",
  },
  {
    icon: Activity,
    title: "Pharma, coatings & galvanizing",
    desc: "Zinc calamine serves galvanizing, die-casting, cosmetics, and fertilizer industries.",
  },
];

export default function SectionIndustries() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">Global Industries</div>
          <h2 className="section-title">Industries That Rely on <span className="text-teal-700 dark:text-teal-400">Moroccan Minerals</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="section-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e1f5ee" }}>
                    <Icon size={18} color="#1d9e75" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
