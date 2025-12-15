import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                alt="Environmental Protection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/30 rounded-full -z-10 blur-3xl" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full -z-10 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              About The Project
            </Badge>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Advocating for a <span className="text-primary">Greener Tomorrow</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This website is developed as a <strong className="text-foreground">BBA 2nd Year academic project</strong> to spread awareness about environmental protection.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rapid industrialization, urbanization, and overuse of natural resources have caused serious environmental problems such as pollution, climate change, and deforestation. The aim of this project is to educate people about these issues and encourage sustainable practices in daily life.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary/30 border border-secondary">
                <h4 className="font-bold text-xl text-primary mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">Raising awareness through digital platforms.</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 border border-secondary">
                <h4 className="font-bold text-xl text-primary mb-1">Action</h4>
                <p className="text-sm text-muted-foreground">Encouraging sustainable daily habits.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
