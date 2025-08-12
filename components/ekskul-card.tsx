interface EkskulCardProps {
  ekskul: {
    id: string
    name: string
    description: string
    color: string
    icon: string
    progress: number
    level: number
    xp: number
  }
}

export default function EkskulCard({ ekskul }: EkskulCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ekskul.color} flex items-center justify-center text-2xl`}
          >
            {ekskul.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg">{ekskul.name}</h3>
            <p className="text-slate-400 text-sm">{ekskul.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400">Level {ekskul.level}</div>
          <div className="text-sm font-bold text-yellow-400">{ekskul.xp} XP</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${ekskul.color}`}
          style={{ width: `${ekskul.progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-slate-400 text-right">{ekskul.progress}% selesai</div>
    </div>
  )
}
