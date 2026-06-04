import { Users, FlaskConical } from "lucide-react";

export default function SectionWhyChoose() {
  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">Why Choose Us</div>
          <h2 className="section-title">
            Why The 3 Rocks for <span className="text-teal-700 dark:text-teal-400">Moroccan Minerals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e1f5ee" }}>
                <Users size={18} color="#1d9e75" />
              </div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">Our team</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
              Founded to connect global industrial buyers with Morocco&rsquo;s exceptional mineral resources.
            </p>
            <ul className="space-y-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Geologists who mapped Anti-Atlas and High Atlas deposits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Mining engineers experienced in beneficiation plants near Errachidia and Khenifra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Logistics professionals managing Casablanca, Tangier Med, and Jorf Lasfar ports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Network spanning artisanal, small-scale, and industrial mines</span>
              </li>
            </ul>
          </div>

          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e1f5ee" }}>
                <FlaskConical size={18} color="#1d9e75" />
              </div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">Our minerals</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
              Six core minerals, each available as raw ore, processed concentrate, or milled powder:
            </p>
            <ul className="space-y-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Lead concentrate from Bni Taddjit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Zinc calamine from the Errachidia mineral belt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Copper ore (8–40%) from Tinghir region</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Barite (SG 4.2+) from Midelt and Ouarzazate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Iron ore (56%+) from Nador and Oujda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                <span>Cobalt from Bou Azzer + Antimony from Khenifra</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
