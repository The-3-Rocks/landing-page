import { GitBranch } from "lucide-react";

const regions = [
  {
    title: "High Atlas Mountains",
    desc: "Lead, zinc, copper, and barite. Operations around Errachidia, Midelt, Ouarzazate, and Tafilalet.",
  },
  {
    title: "Eastern Anti-Atlas",
    desc: "Substantial copper resources and the historic Bou Azzer cobalt deposits.",
  },
  {
    title: "Rif Mountains & Eastern Meseta",
    desc: "Significant iron ore near Nador and Oujda, supplying Mediterranean steel mills.",
  },
  {
    title: "Middle Atlas — Khenifra",
    desc: "Emerging antimony district gaining strategic importance globally.",
  },
];

export default function SectionRegions() {
  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">Morocco&rsquo;s Mineral Regions</div>
          <h2 className="section-title">Key Mining Regions Across <span className="text-teal-700 dark:text-teal-400">Morocco</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {regions.map((region, i) => (
            <div key={i} className="accent-border-card">
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">{region.title}</h3>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{region.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-50 dark:bg-teal-900">
              <GitBranch size={18} className="text-teal-700 dark:text-teal-300" />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">Multi-source flexibility</h3>
              <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                We maintain direct relationships with mines in every region — so we can match grade profiles and impurity signatures to your specific process requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
