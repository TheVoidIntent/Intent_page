import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Rocket, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <header className="mb-10 text-center">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to IntentSim 🌌
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A universe powered by intent, complexity, and emergent intelligence.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Brain className="mx-auto w-10 h-10 text-blue-500" />
            <h2 className="mt-4 text-xl font-semibold">Analysis</h2>
            <p className="text-gray-500">Visualize simulation data & particle metrics.</p>
            <Button className="mt-4" variant="outline" onClick={() => window.location.href='/analysis'}>
              View Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Rocket className="mx-auto w-10 h-10 text-pink-500" />
            <h2 className="mt-4 text-xl font-semibold">Framework</h2>
            <p className="text-gray-500">Explore the theoretical structure of the IntentSim model.</p>
            <Button className="mt-4" variant="outline" onClick={() => window.location.href='/framework'}>
              View Framework
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Headphones className="mx-auto w-10 h-10 text-green-500" />
            <h2 className="mt-4 text-xl font-semibold">Media</h2>
            <p className="text-gray-500">Watch the simulation in motion with synced voiceover.</p>
            <Button className="mt-4" variant="outline" onClick={() => window.location.href='/media'}>
              View Media
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Rocket className="mx-auto w-10 h-10 text-yellow-500 rotate-45" />
            <h2 className="mt-4 text-xl font-semibold">Run Locally</h2>
            <p className="text-gray-500">Launch the full simulation on your machine.</p>
            <Button className="mt-4" variant="outline" onClick={() => window.location.href='/run-locally'}>
              Launch Setup
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-400">
        Built with 💜 by TheVoidIntent — {new Date().getFullYear()}
      </footer>
    </main>
  );
}

