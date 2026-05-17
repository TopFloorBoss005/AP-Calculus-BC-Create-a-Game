import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Star, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

export default function WinnerScreen({ teams }) {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const winner = sorted[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/95 backdrop-blur-lg"
    >
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-2 border-primary mb-4">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-black text-5xl md:text-6xl text-foreground mb-2"
        >
          {winner.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-xl text-primary mb-8"
        >
          Wins with ${winner.score}!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-2 mb-10"
        >
          {sorted.map((team, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3">
                {i === 0 && <Star className="w-4 h-4 text-primary fill-primary" />}
                <span className="font-body font-semibold text-foreground">
                  {i + 1}. {team.name}
                </span>
              </div>
              <span className="font-display font-bold text-primary">${team.score}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-3 justify-center"
        >
          <Link to="/teams">
            <Button variant="outline" size="lg" className="rounded-xl font-body border-border hover:border-primary/40">
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
          </Link>
          <Link to="/">
            <Button size="lg" className="rounded-xl font-body bg-primary text-primary-foreground hover:bg-primary/90">
              Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}