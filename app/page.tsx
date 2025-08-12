"use client"

import { useState } from "react"
import { Home, Trophy, Target, User } from "lucide-react"
import HomePage from "@/components/home-page"
import LeaderboardPage from "@/components/leaderboard-page"
import QuestsPage from "@/components/quests-page"
import ProfilePage from "@/components/profile-page"

export default function EkskulApp() {
  const [activeTab, setActiveTab] = useState("home")

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />
      case "leaderboard":
        return <LeaderboardPage />
      case "quests":
        return <QuestsPage />
      case "profile":
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Main Content */}
      <main className="pb-20">{renderPage()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700">
        <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              activeTab === "home" ? "text-yellow-400" : "text-slate-400 hover:text-white"
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>

          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              activeTab === "leaderboard" ? "text-yellow-400" : "text-slate-400 hover:text-white"
            }`}
          >
            <Trophy size={24} />
            <span className="text-xs mt-1">Liga</span>
          </button>

          <button
            onClick={() => setActiveTab("quests")}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              activeTab === "quests" ? "text-yellow-400" : "text-slate-400 hover:text-white"
            }`}
          >
            <Target size={24} />
            <span className="text-xs mt-1">Misi</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              activeTab === "profile" ? "text-yellow-400" : "text-slate-400 hover:text-white"
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
