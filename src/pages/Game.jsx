import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/lib/gameData";
import GameBoard from "@/components/game/GameBoard";
import ScoreBoard from "@/components/game/ScoreBoard";
import QuestionModal from "@/components/game/QuestionModal";
import WinnerScreen from "@/components/game/WinnerScreen";

export default function Game() {
  const location = useLocation();
  const initialTeams = location.state?.teams;

  const [teams, setTeams] = useState(initialTeams || []);
  const [activeTeam, setActiveTeam] = useState(0);
  const [answered, setAnswered] = useState(new Set());
  const [selected, setSelected] = useState(null); // { catIndex, qIndex }
  const [gameOver, setGameOver] = useState(false);

  if (!initialTeams || initialTeams.length < 2) {
    return <Navigate to="/teams" replace />;
  }

  const totalQuestions = categories.length * 5;

  const handleSelect = (catIndex, qIndex) => {
    setSelected({ catIndex, qIndex });
  };

  const handleAward = (teamIndex) => {
    const pts = categories[selected.catIndex].questions[selected.qIndex].points;
    const updated = teams.map((t, i) =>
      i === teamIndex ? { ...t, score: t.score + pts } : t
    );
    setTeams(updated);
    closeQuestion();
  };

  const closeQuestion = () => {
    const key = `${selected.catIndex}-${selected.qIndex}`;
    const newAnswered = new Set(answered);
    newAnswered.add(key);
    setAnswered(newAnswered);
    setSelected(null);

    if (newAnswered.size >= totalQuestions) {
      setGameOver(true);
    }
  };

  const currentQuestion = selected
    ? categories[selected.catIndex].questions[selected.qIndex]
    : null;
  const currentCategory = selected ? categories[selected.catIndex].name : "";

  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-4 md:mb-6"
        >
          <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Calculus <span className="text-primary">Jeopardy</span>
          </h1>
          <span className="font-body text-sm text-muted-foreground">
            {answered.size}/{totalQuestions} answered
          </span>
        </motion.div>

        {/* Scoreboard */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 md:mb-6"
        >
          <ScoreBoard teams={teams} activeTeam={activeTeam} onSelectTeam={setActiveTeam} />
        </motion.div>

        {/* Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GameBoard answered={answered} onSelect={handleSelect} />
        </motion.div>
      </div>

      {/* Question modal */}
      {selected && (
        <QuestionModal
          question={currentQuestion}
          category={currentCategory}
          teams={teams}
          onAward={handleAward}
          onClose={closeQuestion}
        />
      )}

      {/* Winner screen */}
      {gameOver && <WinnerScreen teams={teams} />}
    </div>
  );
}