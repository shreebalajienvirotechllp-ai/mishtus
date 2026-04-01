interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

const WaveDivider = ({ from = "background", to = "background", flip = false }: WaveDividerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: -1, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          className="fill-background"
          style={{ fill: `hsl(var(--${from === "romantic" ? "warm-cream" : from}))` }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
