// EPL Player Database Application Logic

const eplTeams = [
    { id: 'mci', name: '曼彻斯特城', short: 'MCI', color: '#6CABDD', stadium: '阿提哈德球场', founded: 1880, manager: '佩普·瓜迪奥拉' },
    { id: 'ars', name: '阿森纳', short: 'ARS', color: '#EF0107', stadium: '酋长球场', founded: 1886, manager: '米克尔·阿尔特塔' },
    { id: 'liv', name: '利物浦', short: 'LIV', color: '#C8102E', stadium: '安菲尔德球场', founded: 1892, manager: '阿ne·斯洛特' },
    { id: 'mun', name: '曼彻斯特联', short: 'MUN', color: '#DA291C', stadium: '老特拉福德球场', founded: 1878, manager: '鲁本·阿莫林' },
    { id: 'che', name: '切尔西', short: 'CHE', color: '#034694', stadium: '斯坦福桥球场', founded: 1905, manager: '恩佐·马雷斯卡' },
    { id: 'tot', name: '托特纳姆热刺', short: 'TOT', color: '#132257', stadium: '热刺球场', founded: 1882, manager: '安格·波斯特科格鲁' },
    { id: 'new', name: '纽卡斯尔联', short: 'NEW', color: '#241F20', stadium: '圣詹姆斯公园球场', founded: 1892, manager: '埃迪·豪' },
    { id: 'avl', name: '阿斯顿维拉', short: 'AVL', color: '#95BFE5', stadium: '维拉公园球场', founded: 1874, manager: '乌奈·埃梅里' }
];

const eplPlayers = [
    { id: 1, name: '埃尔林·哈兰德', team: 'mci', pos: '前锋', number: 9, nat: '挪威', age: 26, goals: 28, assists: 6, yellow: 2, red: 0, rating: 8.45, value: '€180M', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400', bio: '当今足坛最具统治力的中锋之一，拥有恐怖的身体素质与门前终结能力。' },
    { id: 2, name: '凯文·德布劳内', team: 'mci', pos: '中场', number: 17, nat: '比利时', age: 35, goals: 6, assists: 18, yellow: 1, red: 0, rating: 8.12, value: '€45M', image: 'https://images.unsplash.com/photo-1511886929384-0c5c94d2b5ad?auto=format&fit=crop&q=80&w=400', bio: '曼城中场核心，传球视野与精确度堪称历史级。' },
    { id: 3, name: '布卡约·萨卡', team: 'ars', pos: '前锋', number: 7, nat: '英格兰', age: 24, goals: 16, assists: 13, yellow: 3, red: 0, rating: 7.95, value: '€140M', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', bio: '阿森纳右翼大腿，兼具爆发力与极高的战术球商。' },
    { id: 4, name: '马丁·厄德高', team: 'ars', pos: '中场', number: 8, nat: '挪威', age: 27, goals: 11, assists: 10, yellow: 2, red: 0, rating: 7.88, value: '€110M', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', bio: '枪手队长，场上的节拍器与高压逼抢的发起者。' },
    { id: 5, name: '穆罕默德·萨拉赫', team: 'liv', pos: '前锋', number: 11, nat: '埃及', age: 34, goals: 22, assists: 14, yellow: 1, red: 0, rating: 8.25, value: '€65M', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', bio: '安菲尔德传奇法老，多年保持顶级进球与助攻产量。' },
    { id: 6, name: '维吉尔·范戴克', team: 'liv', pos: '后卫', number: 4, nat: '荷兰', age: 35, goals: 4, assists: 1, yellow: 2, red: 0, rating: 7.80, value: '€30M', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', bio: '世界顶尖中卫，防守稳健且具有出色的领袖气质。' },
    { id: 7, name: '布鲁诺·费尔南德斯', team: 'mun', pos: '中场', number: 8, nat: '葡萄牙', age: 31, goals: 12, assists: 11, yellow: 7, red: 0, rating: 7.70, value: '€70M', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', bio: '曼联中场核心，跑动积极且充满创造力。' },
    { id: 8, name: '科比·梅努', team: 'mun', pos: '中场', number: 37, nat: '英格兰', age: 21, goals: 4, assists: 3, yellow: 4, red: 0, rating: 7.45, value: '€60M', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', bio: '红魔青训瑰宝，球风从容老练。' },
    { id: 9, name: '科尔·帕尔默', team: 'che', pos: '中场', number: 20, nat: '英格兰', age: 24, goals: 20, assists: 11, yellow: 4, red: 0, rating: 8.30, value: '€120M', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400', bio: '蓝军绝对核心，大心脏冷面杀手。' },
    { id: 10, name: '孙兴慜', team: 'tot', pos: '前锋', number: 7, nat: '韩国', age: 34, goals: 15, assists: 8, yellow: 1, red: 0, rating: 7.85, value: '€45M', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', bio: '亚洲足坛骄傲，顶级射术与反击利器。' }
];

class App {
    constructor() {
        this.currentTab = 'home';
        this.searchQuery = '';
        this.selectedTeam = 'all';
        this.selectedPosition = 'all';
        this.init();
    }

    init() {
        this.switchTab('home');
    }

    switchTab(tab) {
        this.currentTab = tab;
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.className = 'nav-btn px-4 py-2 rounded-lg text-sm font-medium transition text-gray-300 hover:bg-white/5 hover:text-white';
        });
        const activeBtn = document.getElementById(`nav-${tab}`);
        if (activeBtn) {
            activeBtn.className = 'nav-btn px-4 py-2 rounded-lg text-sm font-medium transition bg-white/10 text-epl-cyan';
        }
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    render() {
        const container = document.getElementById('app-view');
        switch(this.currentTab) {
            case 'home':
                container.innerHTML = this.renderHome();
                break;
            case 'players':
                container.innerHTML = this.renderPlayers();
                break;
            case 'teams':
                container.innerHTML = this.renderTeams();
                break;
            case 'stats':
                container.innerHTML = this.renderStats();
                break;
        }
    }

    renderHome() {
        const topScorers = [...eplPlayers].sort((a, b) => b.goals - a.goals).slice(0, 3);
        return `
            <div class="space-y-12">
                <!-- Hero Banner -->
                <div class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-epl-purple via-[#1f0d3d] to-epl-card p-8 sm:p-12 border border-gray-800 shadow-2xl">
                    <div class="absolute -right-10 -bottom-10 opacity-15 text-9xl font-black text-epl-cyan pointer-events-none">EPL</div>
                    <div class="relative z-10 max-w-2xl space-y-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-epl-cyan/20 text-epl-cyan border border-epl-cyan/30">
                            <i class="fa-solid fa-bolt mr-1.5"></i> 2026/27 赛季实时更新
                        </span>
                        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">英超顶级球星与数据中心</h1>
                        <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                            汇聚英格兰超级联赛 20 家俱乐部、数百位世界级球星的深度技术统计、身价评估及实时比赛数据。
                        </p>
                        <div class="flex flex-wrap gap-4 pt-2">
                            <button onclick="app.switchTab('players')" class="px-6 py-3 rounded-xl bg-epl-cyan text-epl-purple font-bold hover:bg-emerald-400 transition shadow-lg shadow-epl-cyan/20">
                                探索球员资料库 <i class="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                            <button onclick="app.switchTab('stats')" class="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-gray-700">
                                查看射手榜
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-epl-card p-6 rounded-2xl border border-gray-800 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400 text-sm font-medium">注册俱乐部</span>
                            <div class="w-10 h-10 rounded-xl bg-epl-cyan/10 text-epl-cyan flex items-center justify-center font-bold">20</div>
                        </div>
                        <div class="mt-4 flex items-baseline">
                            <span class="text-2xl font-bold text-white">顶级豪门与劲旅</span>
                        </div>
                    </div>
                    <div class="bg-epl-card p-6 rounded-2xl border border-gray-800 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400 text-sm font-medium">收录球员</span>
                            <div class="w-10 h-10 rounded-xl bg-epl-pink/10 text-epl-pink flex items-center justify-center font-bold">500+</div>
                        </div>
                        <div class="mt-4 flex items-baseline">
                            <span class="text-2xl font-bold text-white">全方位数据覆盖</span>
                        </div>
                    </div>
                    <div class="bg-epl-card p-6 rounded-2xl border border-gray-800 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400 text-sm font-medium">赛季总进球</span>
                            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">1,024</div>
                        </div>
                        <div class="mt-4 flex items-baseline">
                            <span class="text-2xl font-bold text-white">场均进球 3.12</span>
                        </div>
                    </div>
                    <div class="bg-epl-card p-6 rounded-2xl border border-gray-800 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400 text-sm font-medium">总身价估算</span>
                            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">€10B+</div>
                        </div>
                        <div class="mt-4 flex items-baseline">
                            <span class="text-2xl font-bold text-white">世界第一联赛</span>
                        </div>
                    </div>
                </div>

                <!-- Top Scorers Spotlight -->
                <div class="space-y-6">
                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-bold text-white flex items-center">
                            <i class="fa-solid fa-fire text-epl-pink mr-2"></i>射手榜焦点球星
                        </h2>
                        <button onclick="app.switchTab('stats')" class="text-sm text-epl-cyan hover:underline font-medium">查看完整榜单 &rarr;</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${topScorers.map((p, idx) => `
                            <div onclick="app.showPlayerModal(${p.id})" class="bg-epl-card rounded-2xl border border-gray-800 p-6 hover:border-epl-cyan/50 transition cursor-pointer group shadow-lg">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="text-xs font-bold px-2.5 py-1 rounded-full ${idx === 0 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-gray-800 text-gray-300'}">No. ${idx + 1}</span>
                                    <span class="text-xs font-semibold text-gray-400">${this.getTeamName(p.team)}</span>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover border border-gray-700 group-hover:scale-105 transition">
                                    <div>
                                        <h3 class="font-bold text-white text-lg group-hover:text-epl-cyan transition">${p.name}</h3>
                                        <p class="text-xs text-gray-400">${p.pos} | #${p.number}</p>
                                    </div>
                                </div>
                                <div class="mt-6 pt-4 border-t border-gray-800/80 grid grid-cols-2 text-center">
                                    <div>
                                        <div class="text-2xl font-black text-epl-cyan">${p.goals}</div>
                                        <div class="text-xs text-gray-400">进球</div>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-black text-white">${p.assists}</div>
                                        <div class="text-xs text-gray-400">助攻</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderPlayers() {
        const filtered = eplPlayers.filter(p => {
            const matchQuery = p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.nat.toLowerCase().includes(this.searchQuery.toLowerCase());
            const matchTeam = this.selectedTeam === 'all' || p.team === this.selectedTeam;
            const matchPos = this.selectedPosition === 'all' || p.pos === this.selectedPosition;
            return matchQuery && matchTeam && matchPos;
        });

        return `
            <div class="space-y-8">
                <!-- Filters Toolbar -->
                <div class="bg-epl-card p-6 rounded-2xl border border-gray-800 space-y-4 shadow-lg">
                    <div class="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <!-- Search Input -->
                        <div class="relative w-full md:w-96">
                            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input type="text" id="player-search" value="${this.searchQuery}" oninput="app.handleSearch(event)" placeholder="搜索球员姓名或国籍..." class="w-full pl-10 pr-4 py-2.5 bg-epl-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-epl-cyan transition">
                        </div>
                        <!-- Dropdown Filters -->
                        <div class="flex flex-wrap w-full md:w-auto gap-3">
                            <select onchange="app.handleTeamFilter(event)" class="bg-epl-dark border border-gray-700 text-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-epl-cyan text-sm">
                                <option value="all" ${this.selectedTeam === 'all' ? 'selected' : ''}>所有俱乐部</option>
                                ${eplTeams.map(t => `<option value="${t.id}" ${this.selectedTeam === t.id ? 'selected' : ''}>${t.name}</option>`).join('')}
                            </select>
                            <select onchange="app.handlePosFilter(event)" class="bg-epl-dark border border-gray-700 text-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-epl-cyan text-sm">
                                <option value="all" ${this.selectedPosition === 'all' ? 'selected' : ''}>所有场上位置</option>
                                <option value="前锋" ${this.selectedPosition === '前锋' ? 'selected' : ''}>前锋</option>
                                <option value="中场" ${this.selectedPosition === '中场' ? 'selected' : ''}>中场</option>
                                <option value="后卫" ${this.selectedPosition === '后卫' ? 'selected' : ''}>后卫</option>
                                <option value="门将" ${this.selectedPosition === '门将' ? 'selected' : ''}>门将</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Players Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${filtered.length === 0 ? `
                        <div class="col-span-full py-16 text-center text-gray-400">
                            <i class="fa-solid fa-circle-exclamation text-4xl mb-3 text-gray-500"></i>
                            <p class="text-lg">未找到符合条件的球员数据</p>
                        </div>
                    ` : filtered.map(p => `
                        <div onclick="app.showPlayerModal(${p.id})" class="bg-epl-card rounded-2xl border border-gray-800 p-6 hover:border-epl-cyan/50 transition cursor-pointer group shadow-lg flex flex-col justify-between">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-epl-cyan/10 text-epl-cyan border border-epl-cyan/20">#${p.number} ${p.pos}</span>
                                    <span class="text-xs text-gray-400">${this.getTeamName(p.team)}</span>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover border border-gray-700 group-hover:scale-105 transition">
                                    <div>
                                        <h3 class="font-bold text-white text-lg group-hover:text-epl-cyan transition">${p.name}</h3>
                                        <p class="text-xs text-gray-400">${p.nat} | ${p.age}岁</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 pt-4 border-t border-gray-800 grid grid-cols-3 text-center text-xs">
                                <div>
                                    <div class="text-lg font-bold text-epl-cyan">${p.goals}</div>
                                    <div class="text-gray-500">进球</div>
                                </div>
                                <div>
                                    <div class="text-lg font-bold text-white">${p.assists}</div>
                                    <div class="text-gray-500">助攻</div>
                                </div>
                                <div>
                                    <div class="text-lg font-bold text-amber-400">${p.rating}</div>
                                    <div class="text-gray-500">评分</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderTeams() {
        return `
            <div class="space-y-8">
                <div class="border-b border-gray-800 pb-4">
                    <h2 class="text-2xl font-black text-white">英超俱乐部巡礼</h2>
                    <p class="text-sm text-gray-400">2026/27 赛季英格兰超级联赛参赛球队详细档案</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${eplTeams.map(t => `
                        <div class="bg-epl-card rounded-2xl border border-gray-800 p-6 space-y-4 shadow-lg hover:border-gray-600 transition">
                            <div class="flex items-center justify-between">
                                <div class="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg shadow" style="background-color: ${t.color}">${t.short}</div>
                                <span class="text-xs text-gray-500 font-mono">EST. ${t.founded}</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">${t.name}</h3>
                                <p class="text-xs text-gray-400 mt-1"><i class="fa-solid fa-location-dot mr-1"></i> ${t.stadium}</p>
                            </div>
                            <div class="pt-3 border-t border-gray-800 flex justify-between text-xs text-gray-400">
                                <span>主教练: <strong class="text-gray-200">${t.manager}</strong></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderStats() {
        const topScorers = [...eplPlayers].sort((a, b) => b.goals - a.goals);
        const topAssists = [...eplPlayers].sort((a, b) => b.assists - a.assists);
        const topRatings = [...eplPlayers].sort((a, b) => b.rating - a.rating);

        return `
            <div class="space-y-12">
                <div class="border-b border-gray-800 pb-4">
                    <h2 class="text-2xl font-black text-white">英超数据排行榜</h2>
                    <p class="text-sm text-gray-400">实时追踪各项关键技术指标排行</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Top Scorers Table -->
                    <div class="bg-epl-card rounded-2xl border border-gray-800 p-6 shadow-lg space-y-4">
                        <h3 class="font-bold text-white flex items-center"><i class="fa-solid fa-futbol text-epl-cyan mr-2"></i>射手榜 (Goals)</h3>
                        <div class="space-y-3">
                            ${topScorers.slice(0, 5).map((p, idx) => `
                                <div onclick="app.showPlayerModal(${p.id})" class="flex items-center justify-between p-3 rounded-xl bg-epl-dark/60 hover:bg-white/5 transition cursor-pointer">
                                    <div class="flex items-center space-x-3">
                                        <span class="font-mono text-xs font-bold text-gray-500 w-4">${idx + 1}</span>
                                        <div>
                                            <div class="text-sm font-bold text-white">${p.name}</div>
                                            <div class="text-xs text-gray-400">${this.getTeamName(p.team)}</div>
                                        </div>
                                    </div>
                                    <div class="text-lg font-black text-epl-cyan">${p.goals}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Top Assists Table -->
                    <div class="bg-epl-card rounded-2xl border border-gray-800 p-6 shadow-lg space-y-4">
                        <h3 class="font-bold text-white flex items-center"><i class="fa-solid fa-wand-magic-sparkles text-epl-pink mr-2"></i>助攻榜 (Assists)</h3>
                        <div class="space-y-3">
                            ${topAssists.slice(0, 5).map((p, idx) => `
                                <div onclick="app.showPlayerModal(${p.id})" class="flex items-center justify-between p-3 rounded-xl bg-epl-dark/60 hover:bg-white/5 transition cursor-pointer">
                                    <div class="flex items-center space-x-3">
                                        <span class="font-mono text-xs font-bold text-gray-500 w-4">${idx + 1}</span>
                                        <div>
                                            <div class="text-sm font-bold text-white">${p.name}</div>
                                            <div class="text-xs text-gray-400">${this.getTeamName(p.team)}</div>
                                        </div>
                                    </div>
                                    <div class="text-lg font-black text-epl-pink">${p.assists}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Top Ratings Table -->
                    <div class="bg-epl-card rounded-2xl border border-gray-800 p-6 shadow-lg space-y-4">
                        <h3 class="font-bold text-white flex items-center"><i class="fa-solid fa-star text-amber-400 mr-2"></i>评分榜 (Rating)</h3>
                        <div class="space-y-3">
                            ${topRatings.slice(0, 5).map((p, idx) => `
                                <div onclick="app.showPlayerModal(${p.id})" class="flex items-center justify-between p-3 rounded-xl bg-epl-dark/60 hover:bg-white/5 transition cursor-pointer">
                                    <div class="flex items-center space-x-3">
                                        <span class="font-mono text-xs font-bold text-gray-500 w-4">${idx + 1}</span>
                                        <div>
                                            <div class="text-sm font-bold text-white">${p.name}</div>
                                            <div class="text-xs text-gray-400">${this.getTeamName(p.team)}</div>
                                        </div>
                                    </div>
                                    <div class="text-lg font-black text-amber-400">${p.rating}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleSearch(event) {
        this.searchQuery = event.target.value;
        this.render();
    }

    handleTeamFilter(event) {
        this.selectedTeam = event.target.value;
        this.render();
    }

    handlePosFilter(event) {
        this.selectedPosition = event.target.value;
        this.render();
    }

    getTeamName(teamId) {
        const t = eplTeams.find(item => item.id === teamId);
        return t ? t.name : '';
    }

    showPlayerModal(id) {
        const p = eplPlayers.find(item => item.id === id);
        if (!p) return;
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <div class="relative p-6 sm:p-8 space-y-6">
                <button onclick="app.closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white p-2">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
                <div class="flex items-center space-x-4">
                    <img src="${p.image}" alt="${p.name}" class="w-20 h-20 rounded-2xl object-cover border border-gray-700 shadow-md">
                    <div>
                        <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-epl-cyan/10 text-epl-cyan border border-epl-cyan/20">#${p.number} ${p.pos}</span>
                        <h2 class="text-2xl font-black text-white mt-2">${p.name}</h2>
                        <p class="text-sm text-gray-400">${this.getTeamName(p.team)} &bull; ${p.nat} &bull; ${p.age} 岁</p>
                    </div>
                </div>
                <p class="text-sm text-gray-300 bg-epl-dark/60 p-4 rounded-xl border border-gray-800">${p.bio}</p>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div class="bg-epl-dark p-3 rounded-xl border border-gray-800">
                        <div class="text-xl font-bold text-epl-cyan">${p.goals}</div>
                        <div class="text-xs text-gray-500">进球</div>
                    </div>
                    <div class="bg-epl-dark p-3 rounded-xl border border-gray-800">
                        <div class="text-xl font-bold text-white">${p.assists}</div>
                        <div class="text-xs text-gray-500">助攻</div>
                    </div>
                    <div class="bg-epl-dark p-3 rounded-xl border border-gray-800">
                        <div class="text-xl font-bold text-amber-400">${p.rating}</div>
                        <div class="text-xs text-gray-500">综合评分</div>
                    </div>
                    <div class="bg-epl-dark p-3 rounded-xl border border-gray-800">
                        <div class="text-xl font-bold text-emerald-400">${p.value}</div>
                        <div class="text-xs text-gray-500">预估身价</div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('player-modal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('player-modal').classList.add('hidden');
    }
}

const app = new App();
