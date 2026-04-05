import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const events = [
  { date: "06 Apr 2009", title: "MISHTU JAAN Birthday 🎂", text: "Duniya mein sabse khoobsurat insaan aaya", emoji: "🎂" },
  { date: "25 Mar 2024", title: "First Meet — Holi 🎨", text: "Pehli baar ache se mile the rang lagaye the aur dil bhi rang gaya uss time", emoji: "🎨" },
  { date: "26 May 2024", title: "First Time Chat 💬", text: "Pehla message bheja aur duniya badal gyi", emoji: "💬" },
  { date: "08 Jun 2024", title: "First Meet at UV Home", text: "Pehli baar specially mile and thats nervousness omg aur khushi ka toh pucho he maat dono thi", emoji: "🏠" },
  { date: "23 Jun 2024", title: "My Birthday 🎂", text: "Mera din tha par aap saath thi toh aur special hogya", emoji: "🎉" },
  { date: "28 Jun 2024", title: "1st Meet Outside — Sneaker cafe", text: "Pehli baar cafe mile voh feeling bhi alag thi", emoji: "👟" },
  { date: "08 Jul 2024", title: "Meet at Papa Rich cafe ❤️", text: "Apne pehli baar mujhpe trust ki voh moment kabhi nahi bhulunga", emoji: "🤝" },
  { date: "11 Jul 2024", title: "First Call 📞", text: "Pehli call ghanton toh baat nahi hui but meri khushi ese thi jaise saare duniya jeet le ho vaise toh saare duniya ke khushi he mile thi", emoji: "📞" },
  { date: "13 Jul 2024", title: "Active rides 🚗", text: "Saath saath activa chala rhe the", emoji: "🚗" },
  { date: "16 Jul 2024", title: "Meet at Cake & Bake cafe 🍰", text: "jis din saamne wale shop pe papa bhi thi but fir bhi merse milne aye", emoji: "🍰" },
  { date: "19 Jul 2024", title: "Meet at Cafe Molis ☕", text: "still misss thoseee cutee cutte moments", emoji: "☕" },
  { date: "30 Jul 2024", title: "First Time Periods Talk 🤍", text: "meine socha nahi thaa uss time peee ", emoji: "🤍" },
  { date: "02 Aug 2024", title: "First Ladai 🧛‍♀️", text: "ladyiii toh hui thii but ussme bhi pyaar he dikhta thaa mere saath toh thi merse he pyyaaar karegi aur merse he ladyi ", emoji: "😤" },
  { date: "12 Aug 2024", title: "Meet at Cafe", text: "ladyi solve karne ke liyaa gaye the but ending cutee hogi sorry meine bolne thi merse phle apne niche beth ke sorru boldi meri aakho mein khushi aur anshu dono he the", emoji: "☕" },
  { date: "21 Sep 2024", title: "Meet at papa rich cafe", text: "Woh outing yaad hai — masti, dosti aur tu", emoji: "🎉" },
  { date: "11 Oct 2024", title: "Cafe Molis — First Hickey 💋", text: "you know first time chotti se hickey he hui thi apne bola kutte yeh kya kiya meine ice scop tooth paste sab laaga de but nahi jaa rhe thii", emoji: "💋" },
  { date: "27 Oct 2024", title: "Ice Cream with Kittu 🍦", text: "Hamour ke piche wali gali... uncle ne pakad liya tha kiss karte hue dono activa pe bhage apne uncle ko nazar lagege😂", emoji: "😂" },
  { date: "30 Oct 2024", title: "Platter cafe — Jiya & Gagan Party", text: "Party mein bhi bas aapa dono sabse alag he bethe the uss din toh bach he gaye almost anshu ne dekh he liya tha", emoji: "🎊" },
  { date: "31 Oct 2024", title: "Diwali at Kittu's Home 🪔", text: "you know apne bola kiyan dhruv is cheating on me ganda bachaa haii butt mishtuu mommy aapka he bacvha hu ganda nahi ", emoji: "🪔" },
  { date: "14 Nov 2024", title: "Sabse Special Day ⭐", text: "1:30 hr intense romance almost 2 hr saath mein meri life ka sabse special din ", emoji: "⭐" },
  { date: "19 Nov 2024", title: "First Mandir Together 😇", text: "Saath mein bhagwan ke saamne gaye kuch maanga hoga apne?", emoji: "🙏" },
  { date: "24 Nov 2024", title: "Longest Call — 132 min! 🥳", text: "2 hour+ baat ki aur fir bhi mann nahi bhara", emoji: "🥳" },
  { date: "28 Nov 2024", title: "Video bange thi na gopal Ke saamne 📱", text: "Mumma ko pta lag gya tha  par vo moment iconic tha", emoji: "📱" },
  { date: "27 Mar 2025", title: "Dominos pe mile🍕", text: "Sirf 10 mins mile par SO CUTE MOMENTS the na", emoji: "🍕" },
  { date: "09 May 2025", title: "Cafe with Kittu ☕", text: "Phir se mile vrindavan se aane ke bhad", emoji: "☕" },
  { date: "13 May 2025", title: "Result Ka Din 💔", text: "Ache se wish tak nahi kar paya... aur usse pehle hi sab kharab ho gaya", emoji: "💔" },
];

const AnimatedTimeline = () => {
  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Hamari apne kahani mishtu💫
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Saariya memorys yaad hai sab kuch
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/20" />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", damping: 20 }}
                className={`relative mb-8 flex items-start md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Center dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30">
                    <Heart className="h-3 w-3 text-primary" fill="currentColor" />
                  </div>
                </motion.div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"}`}>
                  <div className="glass-card rounded-xl p-4 md:p-5">
                    <span className="text-2xl">{event.emoji}</span>
                    <div className="mt-1 text-xs text-muted-foreground font-body">
                      {event.date}
                    </div>
                    <h3 className="mt-1 font-display text-sm font-semibold text-primary">
                      {event.title}
                    </h3>
                    <p className="mt-1 font-display text-xs italic text-foreground leading-relaxed">
                      {event.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
