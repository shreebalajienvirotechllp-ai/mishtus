import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const IfYoureReadingThis = () => {
  return (
    <section className="py-24 bg-gradient-romantic">
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Heart className="mx-auto mb-6 h-12 w-12 text-primary" fill="currentColor" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="font-display text-3xl font-bold text-foreground md:text-4xl"
          >
            If You're Reading This...
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 paper-texture rounded-2xl p-8 shadow-lg border border-border/30"
          >
            <p className="font-display text-lg italic leading-relaxed text-foreground">
              Toh iska matlab tu yahan tak aayi.
            </p>
            <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground">
              Shukriya. Dil se.
            </p>
            <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground">
              Main nahi jaanta tu kya soch rahi hai abhi. Par itna jaanta hu ki jo tune abhi padha — woh sab sachh hai. Har ek lafz.
            </p>
            <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground">
              Koi expectation nahi hai. Bas itna chahta tha ki tu jaane — ki koi hai jo tujhe aaj bhi utna hi chahta hai. Bina kisi shart ke.
            </p>
            <p className="mt-6 font-display text-lg italic leading-relaxed text-primary">
              Khush reh, Mishtu. Hamesha. 🤍
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="mt-8"
          >
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                className="inline-block text-primary mx-1"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart size={12 + i * 2} fill="currentColor" />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IfYoureReadingThis;
