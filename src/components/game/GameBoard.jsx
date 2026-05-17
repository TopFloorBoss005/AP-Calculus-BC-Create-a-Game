import React from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/gameData";
import { DollarSign } from "lucide-react";

export default function GameBoard({ answered, onSelect }) {
  const points = [100, 200, 300, 400, 500];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px] grid grid-cols-5 gap-2 md:gap-3">
        {/* Category headers */}
        {categories.map((cat, ci) => (
          <div
            key={ci}
            className="p-3 md:p-4 rounded-xl bg-secondary/60 border border-border text-center"
          >
            <h3 className="font-display font-bold text-xs md:text-sm text-primary leading-tight">
              {cat.name}
            </h3>
          </div>
        ))}

        {/* Question cells */}
        {points.map((pts, ri) =>
          categories.map((cat, ci) => {
            const key = `${ci}-${ri}`;
            const isAnswered = answered.has(key);
            return (
              <motion.button
                key={key}
                whileHover={!isAnswered ? { scale: 1.05 } : {}}
                whileTap={!isAnswered ? { scale: 0.95 } : {}}
                onClick={() => !isAnswered && onSelect(ci, ri)}
                disabled={isAnswered}
                className={`relative aspect-[4/3] rounded-xl flex items-center justify-center border-2 transition-all ${
                  isAnswered
                    ? "bg-muted/20 border-border/50 opacity-30 cursor-default"
                    : "bg-card border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                }`}
              >
                <span
                  className={`flex items-center font-display font-black text-xl md:text-3xl ${
                    isAnswered ? "text-muted-foreground/40" : "text-primary"
                  }`}
                >
                  <DollarSign className="w-4 h-4 md:w-6 md:h-6" />
                  {pts}
                </span>
              </motion.button>
            );
          })
        )}
      </div>
    </div>
  );
}