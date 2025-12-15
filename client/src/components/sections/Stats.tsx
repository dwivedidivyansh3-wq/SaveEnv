import { motion } from "framer-motion";

const stats = [
  { value: "70%", label: "Fresh water used by agriculture" },
  { value: "8M+", label: "Tons of plastic enter oceans yearly" },
  { value: "1.5°C", label: "Critical global temperature limit" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8"
            >
              <h3 className="text-6xl font-heading font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-primary-foreground/80 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
