import { GitBranch, FolderIcon, MoreHorizontal, Plus, Link as LinkIcon, Star, Bell, Home, Palette, PanelLeft } from 'lucide-react';

export function DashboardMockup() {
  return (
    <div className="w-full aspect-[16/9] flex relative rounded-xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden font-sans text-neutral-200">
      {/* Sidebar */}
      <div className="w-1/4 max-w-[240px] border-r border-white/5 bg-[#09090b] flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">W</div>
            <span className="font-semibold text-sm tracking-wide">WeKraft</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-neutral-500 font-semibold mb-2 uppercase tracking-wider">Account Synced</p>
              <div className="flex items-center gap-2 p-1.5 rounded-md bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                <img src="https://github.com/shadcn.png" alt="Profile" className="w-5 h-5 rounded-full object-cover" />
                <span className="text-[11px] font-medium text-neutral-300 flex-1">bhanu_partap</span>
                <GitBranch className="w-3.5 h-3.5 text-neutral-500" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2 p-1 bg-white/5 rounded-md w-max">
                <span className="text-[10px] font-medium bg-white/10 text-white px-2 py-1 rounded cursor-pointer">My Creations</span>
                <span className="text-[10px] font-medium text-neutral-400 px-2 py-1 rounded cursor-pointer hover:text-white transition-colors">Team Projects</span>
              </div>
              <ul className="space-y-1">
                <li className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-2">
                    <FolderIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">rox</span>
                  </div>
                  <MoreHorizontal className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400" />
                </li>
                <li className="mt-2">
                  <button className="w-full flex items-center justify-center gap-1.5 py-1.5 mt-2 rounded-md border border-dashed border-white/20 text-neutral-400 hover:text-white hover:border-white/40 transition-colors cursor-pointer text-[11px]">
                    <Plus className="w-3 h-3" /> Create Project
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-[10px] text-neutral-500 font-semibold mb-2 uppercase tracking-wider">Quick Access</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors group text-neutral-400 hover:text-white">
                  <Star className="w-3.5 h-3.5" />
                  <span className="text-xs">Favorites</span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors group text-neutral-400 hover:text-white">
                  <Bell className="w-3.5 h-3.5" />
                  <span className="text-xs">Notifications</span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors group text-neutral-400 hover:text-white">
                  <Home className="w-3.5 h-3.5" />
                  <span className="text-xs">Profile</span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-colors group text-neutral-400 hover:text-white">
                  <Palette className="w-3.5 h-3.5" />
                  <span className="text-xs">Theme</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-auto p-4 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 group cursor-pointer hover:border-blue-500/40 transition-colors">
          <p className="text-xs font-semibold text-white mb-1 transition-colors">Boost productivity with AI</p>
          <p className="text-[10px] text-neutral-400 mb-3">Upgrade for smarter workflows.</p>
          <button className="w-full bg-white text-black text-xs font-bold py-1.5 rounded-md hover:bg-neutral-200 transition-colors">Upgrade now</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#0c0c0e]">
        {/* Top Navbar */}
        <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#09090b]">
          <div className="flex items-center gap-6">
            <PanelLeft className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-white transition-colors" />
            <span className="text-sm font-medium text-white cursor-default">Dashboard</span>
            <span className="text-sm font-medium text-neutral-500 hover:text-white cursor-pointer transition-colors">Discover Projects</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="AI healthcare projects | " 
                className="bg-white/5 border border-white/10 rounded-md text-xs px-3 py-1.5 w-64 text-neutral-300 focus:outline-none focus:border-white/20 transition-colors placeholder:text-neutral-600"
              />
            </div>
            <img src="https://github.com/shadcn.png" alt="Profile" className="w-7 h-7 rounded-full object-cover ring-2 ring-white/10 cursor-pointer hover:ring-white/30 transition-all" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">Welcome ROX</h1>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {[
              { label: 'Commits', value: '820', trend: '+14% from last month', color: 'text-green-400', icon: <div className="text-[10px] text-green-400 ml-auto flex items-center gap-0.5"><div className="w-1 h-1 rounded-full bg-green-400"></div><div className="w-2 h-[1px] bg-green-400"></div><div className="w-1 h-1 rounded-full bg-green-400"></div><div className="w-2 h-[1px] bg-green-400"></div><div className="w-1 h-1 rounded-full bg-green-400"></div></div> },
              { label: 'Pull Requests', value: '44', trend: '+2% from last month', color: 'text-blue-400' },
              { label: 'Merged PRs', value: '36', trend: 'Consistent', color: 'text-purple-400' },
              { label: 'Demo Fake Data', value: '27', trend: 'High activity', color: 'text-orange-400', bgClass: 'bg-gradient-to-br from-[#111113] to-purple-900/40 relative overflow-hidden' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bgClass || 'bg-[#111113]'} border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-all cursor-pointer group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20`}>
                <div className="flex items-center w-full">
                  <span className="text-xs text-neutral-500 font-medium group-hover:text-neutral-400 transition-colors">{stat.label}</span>
                  {stat.icon && stat.icon}
                </div>
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-50 transition-colors">{stat.value}</span>
                <span className={`text-[10px] ${stat.color}`}>{stat.trend}</span>
              </div>
            ))}
          </div>

          {/* Stats | Discover Toggle */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
            <button className="text-sm font-semibold text-white border-b-2 border-white pb-2 pr-4 rounded-sm">Stats</button>
            <button className="text-sm font-semibold text-neutral-500 hover:text-white pb-2 px-4 transition-colors">Discover</button>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6 h-64">
            {/* Contribution Graph */}
            <div className="col-span-2 bg-[#111113] border border-white/5 rounded-xl p-5 flex flex-col hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">820 contributions in the last year</h3>
                <span className="text-xs text-neutral-500">Mar - Dec</span>
              </div>
              <div className="flex-1 flex items-end">
                <div className="w-full grid justify-between items-end gap-1" style={{ gridTemplateColumns: 'repeat(40, 1fr)' }}>
                  {Array.from({ length: 40 }).map((_, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, rowIdx) => {
                        const pseudoRandom = Math.abs(Math.sin(colIdx * 100 + rowIdx) * 10000);
                        const dec = pseudoRandom - Math.floor(pseudoRandom);
                        const intensity = dec > 0.7 ? Math.floor(dec * 4) + 1 : 0;
                        const colors = ['bg-white/5', 'bg-green-900/60', 'bg-green-700/80', 'bg-green-500', 'bg-green-400'];
                        return (
                          <div 
                            key={rowIdx} 
                            className={`w-full aspect-square rounded-[2px] ${colors[intensity]} hover:ring-1 hover:ring-white/50 cursor-pointer transition-all hover:scale-125 z-10 duration-75`}
                            title={`${intensity * 3} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Score */}
            <div className="bg-[#111113] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center relative group overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
              <p className="text-xs text-neutral-500 text-center w-full absolute top-5">Account Age: 3 years</p>

              <div className="relative w-40 h-40 mt-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                {/* Donut ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="64" className="stroke-white/5 fill-transparent" strokeWidth="16" />

                  {/* Yellow/orange arc */}
                  <circle
                    cx="80" cy="80" r="64"
                    className="stroke-[#ffc107] fill-transparent transition-all duration-300" 
                    strokeWidth="16"
                    strokeDasharray="402.12"
                    strokeDashoffset="134.04"
                    strokeLinecap="butt"
                    style={{ transformOrigin: "center", transform: "rotate(240deg)" }}
                  />

                  {/* Small blue segmented arc near 5 o'clock */}
                  <circle
                    cx="80" cy="80" r="64"
                    className="stroke-[#3b82f6] fill-transparent transition-all duration-300"
                    strokeWidth="16"
                    strokeDasharray="402.12"
                    strokeDashoffset="368.62"
                    strokeLinecap="butt"
                    style={{ transformOrigin: "center", transform: "rotate(135deg)" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold leading-none text-white">34</span>
                  <span className="text-[10px] font-semibold text-neutral-500 mt-1 uppercase tracking-widest">Impact Score</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors mt-auto pt-4">
                <div className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center text-[9px] font-bold">i</div>
                <span>View Details</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Activity Overview & Notifications */}
          <div className="grid grid-cols-4 gap-6 mt-6 pb-6">
            {/* Activity Overview */}
            <div className="col-span-3 bg-[#111113] border border-white/5 rounded-xl p-5 flex flex-col hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-white">Activity Overview</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">Monthly Breakdown of Commits, PR and AI Data (Last 6 Months)</p>
                </div>
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                  <button className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-md shadow-sm">Normal</button>
                  <button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Stacked</button>
                  <button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Expand</button>
                </div>
              </div>
              <div className="flex-1 flex items-end gap-4 h-32 px-4 border-b border-white/5 pb-2">
                {[
                  { month: "Jan", commits: 60, prs: 30, ai: 40 },
                  { month: "Feb", commits: 80, prs: 40, ai: 50 },
                  { month: "Mar", commits: 40, prs: 20, ai: 30 },
                  { month: "Apr", commits: 90, prs: 50, ai: 60 },
                  { month: "May", commits: 70, prs: 30, ai: 50 },
                  { month: "Jun", commits: 100, prs: 60, ai: 80 }
                ].map((data, i) => (
                  <div key={i} className="flex-1 flex justify-center items-end gap-1.5 group cursor-pointer h-full">
                    <div className="w-1/3 bg-blue-500/80 rounded-t-sm group-hover:bg-blue-400 transition-colors" style={{ height: `${data.commits}%` }} />
                    <div className="w-1/3 bg-purple-500/80 rounded-t-sm group-hover:bg-purple-400 transition-colors" style={{ height: `${data.prs}%` }} />
                    <div className="w-1/3 bg-amber-500/80 rounded-t-sm group-hover:bg-amber-400 transition-colors" style={{ height: `${data.ai}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-4 mt-3">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                  <span key={i} className="text-xs text-neutral-500">{m}</span>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="col-span-1 bg-[#111113] border border-white/5 rounded-xl p-5 flex flex-col hover:border-white/10 transition-colors">
              <h3 className="text-sm font-semibold text-white mb-4">Notifications</h3>
              <div className="space-y-4 flex-1">
                {[
                  { title: "PR Merged", desc: "API v2 endpoints", time: "2h ago", color: "text-purple-400" },
                  { title: "Build Failed", desc: "Dashboard UI", time: "4h ago", color: "text-red-400" },
                  { title: "New Comment", desc: "Auth service", time: "5h ago", color: "text-blue-400" },
                  { title: "Issue Closed", desc: "Memory leak", time: "1d ago", color: "text-green-400" }
                ].map((notif, i) => (
                  <div key={i} className="flex gap-3 cursor-pointer group">
                    <div className={`mt-0.5 w-2 h-2 rounded-full ${notif.color} bg-current opacity-70`} />
                    <div>
                      <h4 className="text-xs font-medium text-white group-hover:text-blue-200 transition-colors">{notif.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-neutral-400">{notif.desc}</span>
                        <span className="text-[10px] text-neutral-600">&bull; {notif.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-xs font-medium text-blue-400 hover:text-blue-300 w-full text-center">View All Notifications</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
