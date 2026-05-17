import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const TEAM_COLORS = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-red-400",
  "from-indigo-500 to-violet-400",
];

export default function ScoreBoard({ teams, activeTeam, onSelectTeam }) {
  const maxScore = Math.max(...teams.map((t) => t.score), 1);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 px-1">
      {teams.map((team, i) => {
        const isActive = activeTeam === i;
        return (
          <motion.button
            key={i}
            onClick={() => onSelectTeam(i)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative flex-shrink-0 min-w-[140px] p-4 rounded-xl border-2 transition-all ${
              isActive
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                : "border-border bg-card hover:border-primary/30"
            }`}
          >
            {team.score === maxScore && team.score > 0 && (
              <Trophy className="absolute top-2 right-2 w-4 h-4 text-primary" />
            )}
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${TEAM_COLORS[i % TEAM_COLORS.length]} flex items-center justify-center font-display font-bold text-white text-sm mb-2 shadow-md`}>
              {i + 1}
            </div>
            <p className="font-body font-semibold text-sm text-foreground truncate text-left">
              {team.name}
            </p>
            <p className="font-display font-bold text-2xl text-primary text-left mt-1">
              ${team.score}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}