import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Play, ArrowLeft, Users } from "lucide-react";

const TEAM_COLORS = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-red-400",
  "from-indigo-500 to-violet-400",
];

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const addTeam = () => {
    const name = newName.trim();
    if (!name || teams.length >= 6) return;
    setTeams([...teams, { name, score: 0, color: TEAM_COLORS[teams.length % TEAM_COLORS.length] }]);
    setNewName("");
  };

  const removeTeam = (index) => {
    setTeams(teams.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (teams.length < 2) return;
    navigate("/game", { state: { teams } });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">Teams</h1>
          </div>
          <p className="font-body text-muted-foreground mb-10">
            Add at least 2 teams to start the game. Maximum 6 teams.
          </p>
        </motion.div>

        {/* Add team form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-8"
        >
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTeam()}
            placeholder="Enter team name..."
            className="flex-1 bg-card border-border font-body text-foreground placeholder:text-muted-foreground h-12 text-base rounded-xl"
            maxLength={20}
          />
          <Button
            onClick={addTeam}
            disabled={!newName.trim() || teams.length >= 6}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-xl font-body font-semibold"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add
          </Button>
        </motion.div>

        {/* Team list */}
        <div className="space-y-3 mb-10">
          <AnimatePresence>
            {teams.map((team, index) => (
              <motion.div
                key={team.name + index}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.95 }}
                transition={{ type: "spring", damping: 20 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border group hover:border-primary/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${team.color} flex items-center justify-center font-display font-bold text-white text-lg shadow-lg`}>
                  {index + 1}
                </div>
                <span className="flex-1 font-body font-semibold text-lg text-foreground">
                  {team.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTeam(index)}
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>

          {teams.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 border-2 border-dashed border-border rounded-xl"
            >
              <Users className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
              <p className="font-body text-muted-foreground">No teams yet. Add your first team above!</p>
            </motion.div>
          )}
        </div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={startGame}
            disabled={teams.length < 2}
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-body font-semibold rounded-xl group disabled:opacity-30"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Jeopardy
            {teams.length < 2 && (
              <span className="ml-2 text-sm font-normal opacity-70">
                (need {2 - teams.length} more team{2 - teams.length > 1 ? "s" : ""})
              </span>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}