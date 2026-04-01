import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ThingsIMiss from "@/components/ThingsIMiss";
import StarWall from "@/components/StarWall";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import MemoryGallery from "@/components/MemoryGallery";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import DailyMessage from "@/components/DailyMessage";
import LoveLetter from "@/components/LoveLetter";
import IfYoureReadingThis from "@/components/IfYoureReadingThis";
import FooterSection from "@/components/FooterSection";
import EmojiRain from "@/components/EmojiRain";
import DoubleTapHeart from "@/components/DoubleTapHeart";

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mishtu-unlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return (
      <AnimatePresence>
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      </AnimatePresence>
    );
  }

  return (
    <DoubleTapHeart>
      <div className="min-h-screen relative">
        <EmojiRain />
        <HeroSection />
        <CountdownTimer />
        <ThingsIMiss />
        <StarWall />
        <AnimatedTimeline />
        <MemoryGallery />
        <ReasonsILoveYou />
        <SpotifyEmbed />
        <DailyMessage />
        <LoveLetter />
        <IfYoureReadingThis />
        <FooterSection />
      </div>
    </DoubleTapHeart>
  );
};

export default Index;
