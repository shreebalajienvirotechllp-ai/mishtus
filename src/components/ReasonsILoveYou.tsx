import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Teri hansi sunke sab theek lagta hai",
  "Aap bina try kiye bhi sabse khoobsurat lagti ho I remimber bahot bhar without facewash bhi milne aye but itne cute itne cute lagte thi kooi hadd he nahi",
  "Aapka gussa bhi cute hai",
  "Aapse baat karke din achha ho jaata hai",
// ... keep existing code
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Why You're Special for me💕
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Honestly? Mere paas koi ek reason nahi hai tujhe pasand karne ka I just pyaar youuu 💕
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", damping: 15 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-full px-4 py-2.5 md:px-5 md:py-3 flex items-center gap-2 cursor-default"
            >
              <Heart className="h-3 w-3 text-primary shrink-0" fill="currentColor" />
              <span className="font-display text-sm italic text-foreground">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
