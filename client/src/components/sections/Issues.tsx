import { motion } from "framer-motion";
import { CloudFog, Droplets, TreePine, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const issues = [
  {
    icon: CloudFog,
    title: "Air Pollution",
    description: "Harmful gases from vehicles and industries cause health problems and global warming.",
    color: "text-gray-500",
    bg: "bg-gray-100"
  },
  {
    icon: Droplets,
    title: "Water Pollution",
    description: "Industrial waste and plastic contaminate rivers, oceans, and drinking water sources.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: TreePine,
    title: "Deforestation",
    description: "Cutting trees leads to loss of biodiversity and severe imbalance in the ecosystem.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: ThermometerSun,
    title: "Climate Change",
    description: "Rising temperatures and extreme weather conditions threaten life on Earth.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
];

export default function Issues() {
  return (
    <section id="issues" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Major Environmental Issues</h2>
          <p className="text-lg text-muted-foreground">
            Our planet faces multiple challenges that require immediate attention and collective action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${issue.bg} flex items-center justify-center`}>
                    <issue.icon className={`w-7 h-7 ${issue.color}`} />
                  </div>
                  <CardTitle className="text-xl">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {issue.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
