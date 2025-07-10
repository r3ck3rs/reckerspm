export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="currentColor" className="text-zinc-700" />
      
      {/* Letter R */}
      <path 
        d="M12 12v16h3v-6h4l3 6h3.5l-3.5-6.5c1.5-1 2.5-2.5 2.5-4.5 0-3-2-5-5-5h-7zm3 3h4c1 0 2 1 2 2s-1 2-2 2h-4v-4z" 
        fill="white"
      />
      
      {/* Digital accent dots */}
      <circle cx="30" cy="10" r="2" fill="currentColor" className="text-zinc-500" />
      <circle cx="35" cy="15" r="1.5" fill="currentColor" className="text-zinc-400" />
      <circle cx="32" cy="30" r="1" fill="currentColor" className="text-zinc-500" />
    </svg>
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">
          Reckers<span className="text-yellow-400">PM</span>
        </span>
        <span className="text-xs text-zinc-400 font-medium tracking-wide">
          PROJECTMANAGEMENT
        </span>
      </div>
    </div>
  )
}