"use client"

import { useState } from "react"
import { Zap, Heart, Gem, Settings } from "lucide-react"
import EkskulCard from "./ekskul-card"

export default function HomePage() {
  const [streak, setStreak] = useState(7)
  const [gems, setGems] = useState(248)
  const [hearts, setHearts] = useState(3)

  const ekstrakurikuler = [
    {
      id: "robotik",
      name: "Robotik",
      description: "Belajar programming dan elektronik",
      color: "from-blue-500 to-cyan-400",
      icon: "🤖",
      progress: 75,
      level: 12,
      xp: 1250,
    },
    {
      id: "silat",
      name: "Pencak Silat",
      description: "Seni bela diri tradisional Indonesia",
      color: "from-red-500 to-orange-400",
      icon: "🥋",
      progress: 60,
      level: 8,
      xp: 890,
    },
    {
      id: "futsal",
      name: "Futsal",
      description: "Olahraga sepak bola dalam ruangan",
      color: "from-green-500 to-emerald-400",
      icon: "⚽",
      progress: 45,
      level: 6,
      xp: 650,
    },
    {
      id: "musik",
      name: "Musik",
      description: "Bermain alat musik dan bernyanyi",
      color: "from-purple-500 to-pink-400",
      icon: "🎵",
      progress: 80,
      level: 15,
      xp: 1580,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full">
            <Zap className="text-orange-400" size={16} />
            <span className="text-sm font-bold">{streak}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full">
            <Gem className="text-blue-400" size={16} />
            <span className="text-sm font-bold">{gems}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full">
            <Heart className="text-red-400" size={16} />
            <span className="text-sm font-bold">{hearts}</span>
          </div>
        </div>
        <Settings className="text-slate-400" size={24} />
      </header>

      {/* Today's Review Section */}
      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Review Hari Ini</h2>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
              SUPER
            </div>
            <h3 className="text-xl font-bold mb-2">Latihan Target</h3>
            <p className="text-blue-100 mb-4">Perkuat area yang lemah dengan sesi yang disesuaikan</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
              BUKA KUNCI
            </button>
          </div>
          <div className="absolute right-4 top-4 text-6xl opacity-20">🎯</div>
        </div>
      </section>

      {/* Ekstrakurikuler Cards */}
      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Ekstrakurikuler</h2>
        <div className="space-y-4">
          {ekstrakurikuler.map((ekskul) => (
            <EkskulCard key={ekskul.id} ekskul={ekskul} />
          ))}
        </div>
      </section>

      {/* Additional Activities */}
      <section className="p-4 space-y-4">
        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎧</div>
              <div>
                <h3 className="font-bold">Dengarkan</h3>
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold inline-block">SUPER</div>
                <p className="text-slate-400 text-sm mt-1">Tingkatkan kemampuan mendengar dengan sesi audio-only</p>
              </div>
            </div>
            <div className="text-3xl">🎧</div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📚</div>
              <div>
                <h3 className="font-bold">Koleksi Anda</h3>
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold inline-block">SUPER</div>
                <p className="text-slate-400 text-sm mt-1">
                  Mulai pelajaran yang dipersonalisasi untuk berlatih kesalahan Anda
                </p>
              </div>
            </div>
            <div className="text-3xl">🔄</div>
          </div>
        </div>
      </section>
    </div>
  )
}
