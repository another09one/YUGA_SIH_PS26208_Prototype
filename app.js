const app=document.getElementById("app");
const KEY="yuga_sih_26208";
let state=JSON.parse(localStorage.getItem(KEY)||"null")||{
 name:"Explorer",xp:0,played:0,correct:0,streak:1,badges:[],scores:[]
};
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function pct(){return state.played?Math.round(state.correct/state.played*100):0}
function level(){return Math.floor(state.xp/500)+1}
function header(){
return `<header class="top"><a class="brand" href="#home">YUGA<span>•</span></a><nav>
<a href="#home">Home</a><a href="#games">Games</a><a href="#culture">Culture</a><a href="#leaderboard">Leaderboard</a><a href="#profile">Profile</a>
</nav><button class="ghost" onclick="editName()">👤 ${esc(state.name)}</button></header>`;
}
function layout(content){app.innerHTML=header()+`<main>${content}</main><footer>YUGA • Student Innovation • SIH PS 26208</footer>`;}
function editName(){
 const n=prompt("Enter your player name:",state.name);
 if(n&&n.trim()){state.name=n.trim().slice(0,24);save();render();}
}
function render(){let p=location.hash.slice(1)||"home"; if(p.startsWith("play/"))return playPage(p.split("/")[1]); if(p==="home")home(); else if(p==="games")games(); else if(p==="culture")culture(); else if(p==="leaderboard")leaderboard(); else if(p==="profile")profile(); else home();}
function home(){
layout(`<section class="hero"><div class="heroText"><div class="pill">🇮🇳 SIH PS 26208 • TOYS & GAMES</div>
<h1>Discover India.<br><span>Play its History.</span></h1>
<p>YUGA turns India's civilization, history and culture into interactive challenges that make learning feel like a game.</p>
<div class="actions"><a class="btn primary" href="#games">Start Exploring →</a><a class="btn secondary" href="#culture">Explore Culture</a></div>
<div class="miniStats"><div><b>${state.xp}</b><small>XP Earned</small></div><div><b>${state.played}</b><small>Challenges</small></div><div><b>${pct()}%</b><small>Accuracy</small></div></div>
</div><div class="heroArt"><div class="mandala">☼</div><div class="cardFloat c1">🏛️ Heritage</div><div class="cardFloat c2">📜 History</div><div class="cardFloat c3">🪔 Culture</div></div></section>
<section class="section"><div class="sectionHead"><div><div class="eyebrow">WHY YUGA</div><h2>Learn through play.</h2></div></div>
<div class="featureGrid"><div class="feature"><span>🎮</span><h3>Interactive Games</h3><p>Short, engaging challenges instead of passive reading.</p></div><div class="feature"><span>🧠</span><h3>Learning Moments</h3><p>Every answer reveals a cultural or historical fact.</p></div><div class="feature"><span>🏆</span><h3>Gamified Progress</h3><p>Earn XP, unlock levels and collect heritage badges.</p></div><div class="feature"><span>🌏</span><h3>India in One Journey</h3><p>Explore diverse eras, regions, traditions and monuments.</p></div></div></section>`);
}
function games(){
layout(`<section class="pageTitle"><div class="eyebrow">GAME LIBRARY</div><h1>Choose your challenge</h1><p>Each game combines entertainment with a cultural learning moment.</p></section>
<div class="gameGrid">${GAMES.map(g=>`<article class="gameCard"><div class="gameIcon">${g.icon}</div><div class="difficulty">${g.difficulty}</div><h2>${g.title}</h2><p>${g.desc}</p><div class="gameMeta"><span>5 challenges</span><a class="btn small primary" href="#play/${g.id}">Play →</a></div></article>`).join("")}</div>`);
}
let current=null, qi=0, score=0, answered=false;
function playPage(id){
current=GAMES.find(x=>x.id===id)||GAMES[0]; qi=0; score=0; answered=false; gameQuestion();
}
function gameQuestion(){
const q=current.questions[qi];
layout(`<section class="gameShell"><div class="gameTop"><a href="#games" class="back">← Games</a><span>${current.icon} ${current.title}</span><b>${qi+1}/${current.questions.length}</b></div>
<div class="progress"><i style="width:${((qi)/current.questions.length)*100}%"></i></div>
<div class="questionCard"><div class="questionTag">CHALLENGE ${qi+1}</div><h1>${esc(q.q)}</h1><div class="options">${q.o.map((x,i)=>`<button class="option" onclick="answer(${i})"><span>${String.fromCharCode(65+i)}</span>${esc(x)}</button>`).join("")}</div><div id="feedback"></div></div>
<div class="scoreBar"><span>⭐ Current XP <b>${score}</b></span><span>🏆 Level ${level()}</span></div></section>`);
}
function answer(i){
if(answered)return; answered=true;
const q=current.questions[qi], buttons=document.querySelectorAll(".option");
buttons.forEach((b,n)=>{b.disabled=true;if(n===q.a)b.classList.add("correct");if(n===i&&i!==q.a)b.classList.add("wrong");});
let good=i===q.a; state.played++; if(good){state.correct++;score+=100;state.xp+=100;} else score+=20;
if(state.correct>=5&&!state.badges.includes("Heritage Explorer"))state.badges.push("Heritage Explorer");
save();
document.getElementById("feedback").innerHTML=`<div class="feedback ${good?"good":"bad"}"><strong>${good?"✓ Correct! +100 XP":"✕ Not quite. +20 XP"}</strong><p>${q.fact}</p><button class="btn primary" onclick="nextQ()">${qi===current.questions.length-1?"Finish Game":"Next Challenge →"}</button></div>`;
}
function nextQ(){
qi++;
if(qi>=current.questions.length){state.scores.push({game:current.title,score,date:new Date().toLocaleDateString()});state.scores=state.scores.slice(-10);save();finishGame();}else gameQuestion();
}
function finishGame(){
layout(`<section class="result"><div class="resultIcon">🏆</div><div class="eyebrow">JOURNEY COMPLETE</div><h1>Well played, ${esc(state.name)}!</h1><p>You completed <b>${current.title}</b> and discovered new pieces of Indian heritage.</p><div class="resultStats"><div><b>${score}</b><small>XP this game</small></div><div><b>${state.correct}</b><small>Total correct</small></div><div><b>${pct()}%</b><small>Accuracy</small></div></div><div class="actions center"><a class="btn primary" href="#games">Play Another</a><a class="btn secondary" href="#leaderboard">View Leaderboard</a></div></section>`);
}
function culture(){
layout(`<section class="pageTitle"><div class="eyebrow">CULTURE AT A GLANCE</div><h1>Stories behind the game</h1><p>YUGA connects gameplay with context so players don't just answer—they discover.</p></section>
<div class="cultureGrid">${CULTURE.map(c=>`<article class="cultureCard"><div class="cultureIcon">${c.icon}</div><div><span class="era">${c.era}</span><h2>${c.title}</h2><b>${c.place}</b><p>${c.text}</p></div></article>`).join("")}</div>
<section class="mapMock"><div><div class="eyebrow">EXPLORE INDIA</div><h2>A future interactive heritage map</h2><p>Prototype concept: players will select regions to unlock monuments, traditions, stories and location-based challenges.</p></div><div class="indiaMap">🇮🇳<span>●</span><span>●</span><span>●</span><span>●</span><span>●</span></div></section>`);
}
function leaderboard(){
const base=[["Aarav",12450],["Riya",11820],[state.name,state.xp],["Rahul",9870],["Ananya",9420]];
const rows=base.sort((a,b)=>b[1]-a[1]).map((x,i)=>`<div class="rankRow"><strong>#${i+1}</strong><span class="avatar">${i===0?"🥇":i===1?"🥈":i===2?"🥉":"👤"}</span><b>${esc(x[0])}</b><span>${x[1].toLocaleString()} XP</span></div>`).join("");
layout(`<section class="pageTitle"><div class="eyebrow">COMPETE & LEARN</div><h1>Leaderboard</h1><p>Prototype leaderboard demonstrating gamified engagement.</p></section><div class="leaderCard"><div class="leaderHead"><b>PLAYER</b><b>SCORE</b></div>${rows}</div>`);
}
function profile(){
layout(`<section class="profileHero"><div class="avatarBig">👤</div><div><div class="eyebrow">PLAYER PROFILE</div><h1>${esc(state.name)}</h1><p>Heritage Explorer • Level ${level()}</p></div><button class="btn secondary" onclick="editName()">Edit name</button></section>
<div class="statGrid"><div><b>${state.xp}</b><small>Total XP</small></div><div><b>${state.played}</b><small>Challenges</small></div><div><b>${pct()}%</b><small>Accuracy</small></div><div><b>${state.streak}</b><small>Day streak</small></div></div>
<section class="section compact"><div class="sectionHead"><h2>Achievements</h2></div><div class="badges">${["Heritage Explorer","Monument Master","History Scholar","Bharat Navigator"].map((b,i)=>`<div class="badge ${state.badges.includes(b)?"unlocked":""}"><span>${["🏺","🏛️","📜","🗺️"][i]}</span><b>${b}</b><small>${state.badges.includes(b)?"Unlocked":"Locked"}</small></div>`).join("")}</div></section>
<section class="section compact"><div class="sectionHead"><h2>Recent games</h2></div>${state.scores.length?state.scores.slice().reverse().map(s=>`<div class="history"><span>${esc(s.game)}</span><b>${s.score} XP</b><small>${s.date}</small></div>`).join(""):"<p>No games played yet. Start your journey!</p>"}</section>`);
}
window.addEventListener("hashchange",render); render();