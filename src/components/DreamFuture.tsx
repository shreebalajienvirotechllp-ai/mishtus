import { motion } from "framer-motion";
import { Heart, MapPin, Home, Plane, Star, Coffee } from "lucide-react";

const dreams = [
  {
    icon: Coffee,
    title: "Ek din phir se cafe mein baithenge",
    text: "Teri favourite coffee, meri baatein — aur koi time limit nahi",
    emoji: "☕",
  },
  {
    icon: Plane,
    title: "Saath mein travel karenge",
    text: "Mountains ho ya beaches — bas tu saath ho",
    emoji: "✈️",
  },
  {
    icon: Home,
    title: "Apna ghar hoga",
    text: "Chhota sa — par tera aur mera. Fairy lights wala.",
    emoji: "🏡",
  },
  {
    icon: Star,
    title: "Stars dekhenge saath mein",
    text: "Terrace pe lait ke — teri ungliyon mein ungliyaan",
    emoji: "🌟",
  },
  {
    icon: MapPin,
    title: "Long drives pe jaayenge",
    text: "Windows down, music on, tera haath mera haath mein",
    emoji: "🛣️",
  },
  {
    icon: Heart,
    title: "Grow old together",
    text: "Buddhe hoke bhi tujhe Mishtu bulaunga — promise",
    emoji: "👴🏻👵🏻",
  },
];

const DreamFuture = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Soft floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.06), transparent)`,
              left: `${10 + i * 20}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Ek Din... 🌙
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Yeh sapne hain — par sachhe hain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {dreams.map((dream, i) => {
            const Icon = dream.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 cursor-default group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {dream.title}
                    </h3>
                    <p className="mt-1 font-display text-sm italic text-muted-foreground leading-relaxed">
                      {dream.text}
                    </p>
                  </div>
                  <span className="text-2xl shrink-0 ml-auto">{dream.emoji}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center font-display text-sm italic text-primary"
        >
          In sabmein ek cheez common hai — tu 🤍
        </motion.p>
      </div>
    </section>
  );
};

export default DreamFuture;
