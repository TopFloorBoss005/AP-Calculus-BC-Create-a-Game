import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Check, X, DollarSign } from "lucide-react";

export default function QuestionModal({ question, category, teams, onAward, onClose }) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!question) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25 }}
          className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b border-border bg-secondary/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-body text-lg text-muted-foreground uppercase tracking-wider font-semibold">
                {category}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 font-display font-bold text-primary text-2xl">
                <DollarSign className="w-6 h-6" />
                {question.points}
              </span>
            </div>
          </div>

          {/* Question or Answer */}
          <AnimatePresence mode="wait">
            {!showAnswer ? (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 min-h-[300px] flex items-center justify-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-foreground leading-relaxed text-center" style={{ fontFamily: 'Monaco, "Courier New", monospace' }}>
                  {question.question}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-12 py-8"
              >
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="font-body text-3xl font-semibold text-primary text-center" style={{ fontFamily: 'Monaco, "Courier New", monospace' }}>
                    {question.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="p-6 border-t border-border bg-muted/30">
            {!showAnswer ? (
              <Button
                onClick={() => setShowAnswer(true)}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-xl font-body font-semibold text-base"
              >
                <Eye className="w-5 h-5 mr-2" />
                Reveal Answer
              </Button>
            ) : (
              <div className="space-y-3">
                <p className="text-center font-body text-sm text-muted-foreground mb-3">
                  Award points to the correct team:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {teams.map((team, i) => (
                    <Button
                      key={i}
                      onClick={() => onAward(i)}
                      variant="outline"
                      className="h-11 border-border hover:bg-primary/10 hover:border-primary/40 hover:text-primary font-body font-medium rounded-xl transition-all"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      {team.name}
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="w-full h-10 font-body text-muted-foreground hover:text-foreground rounded-xl"
                >
                  <X className="w-4 h-4 mr-1" />
                  No one got it
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}