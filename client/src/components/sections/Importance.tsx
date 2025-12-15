import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Importance() {
  return (
    <section id="importance" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Why Saving Environment is <span className="text-primary">Crucial</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A healthy environment is essential for human survival and economic growth. 
              It provides clean air, water, food, and resources. Protecting the environment helps in 
              maintaining ecological balance, reducing health risks, and ensuring sustainable development.
            </p>
            
            <div className="space-y-4">
              {[
                "Maintains ecological balance and biodiversity",
                "Ensures availability of clean resources for future",
                "Reduces health risks from pollution",
                "Mitigates impact of global warming",
                "Supports sustainable economic growth"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:ml-auto"
          >
             <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" 
                alt="Nature 1" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&q=80" 
                alt="Nature 2" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" 
                alt="Nature 3" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80" 
                alt="Nature 4" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
             </div>
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
