import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      // Set fill as per your theme
      fill: "#1f8d93",
    },
  };

  const secondVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        {/* First A - Left, slightly smaller */}
        <motion.path
          d="M180 400L95 180L140 80L250 400H200L180 400ZM130 280L105 340H155L130 280Z"
          strokeWidth="12"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
            fill: { duration: 2.5, ease: [1, 0, 0.8, 1] },
          }}
        />
        {/* Second A - Right, overlapping */}
        <motion.path
          d="M320 400L235 180L280 80L390 400H340L320 400ZM270 280L245 340H295L270 280Z"
          strokeWidth="12"
          variants={secondVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
            fill: { duration: 2.5, ease: [1, 0, 0.8, 1], delay: 0.3 },
          }}
        />
        {/* Connecting accent line between the two A's */}
        <motion.path
          d="M175 240H275"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
