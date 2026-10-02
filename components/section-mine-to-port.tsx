import { Anchor } from "lucide-react";

const steps = [
  { num: "01", title: "Source & inspect", desc: "Coordinate with local mine operators and arrange on-site quality inspections before extraction." },
  { num: "02", title: "Transport & process", desc: "Truck transport to processing facilities, with crushing, grading, and homogenization per spec." },
  { num: "03", title: "Documentation", desc: "Manage all customs, export documents, certificates of origin, bills of lading, and commercial invoices." },
  { num: "04", title: "Ship & track", desc: "Container or bulk vessel shipping with live tracking from loading to discharge." },
];

const ports = [
  { name: "Casablanca", desc: "Containerized & break-bulk. Regular liner services to Europe and West Africa." },
  { name: "Tangier Med", desc: "Connects to 180+ ports worldwide. Frequent sailings to Asia and North America." },
  { name: "Jorf Lasfar", desc: "Dedicated bulk loading for large-volume industrial shipments." },
];

export default function SectionMineToPort() {
  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">End-to-End Supply Chain</div>
          <h2 className="section-title">
            From <span className="text-teal-700 dark:text-teal-400">Mine to Port</span>
          </h2>
        </div>

        <div className="relative mb-12">
          <div className="hidden sm:block absolute left-[31px] top-0 bottom-0 w-0.5" style={{ backgroundColor: "#1d9e75", opacity: 0.15 }} />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-start gap-5 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative z-10 flex-shrink-0 w-[62px] h-[62px] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ backgroundColor: "#e1f5ee" }}
                >
                  <span className="text-lg font-bold" style={{ color: "#1d9e75" }}>{step.num}</span>
                </div>
                <div className="flex-1 pt-3 pb-3">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
          {ports.map((port, i) => (
            <div
              key={i}
              className="stat-block text-left flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: "#e1f5ee" }}>
                <Anchor size={16} color="#1d9e75" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{port.name}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">{port.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
