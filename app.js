(function(){
/* ============ DATA ============ */
const LOCS=[
 {id:'entrance',n:'Entrance Hall',i:'🚪',x:500,y:545,area:'Ground floor',d:'A vast stone hall where four giant hourglasses count the House points. Every journey in the castle starts here.',who:'Argus Filch patrols nearby.',tip:'Watch the hourglasses: points are lost loudly, and gained quietly.',kw:['entrance','front door','hourglass','entry']},
 {id:'great_hall',n:'Great Hall',i:'🕯️',x:500,y:410,area:'Ground floor',d:'Floating candles, a ceiling that mirrors the sky, four long House tables. All feasts, the Sorting Ceremony and every meal happen here.',who:'Headmaster Dumbledore and the staff at the High Table.',tip:'Sit at your own House table. Owl post swoops in around 8am.',kw:['great hall','dining','feast','eat','breakfast','lunch','dinner','food','hungry','mail','owl post']},
 {id:'grand_stair',n:'Grand Staircase',i:'🪜',x:330,y:455,area:'Ground to 7th floor',d:'Over 140 staircases that love to change direction. Portraits will gossip about you as you pass.',who:'Portraits, Peeves, and the odd lost first-year.',tip:'If a stair is moving the wrong way, wait: it will swing back. Skip the trick step on the staircase to the 3rd floor!',kw:['staircase','stairs','grand staircase','moving stairs','stair']},
 {id:'library',n:'Library',i:'📚',x:170,y:335,area:'1st floor',d:'The biggest collection of magical books in Britain. Shhh! The Restricted Section needs a signed teacher note.',who:'Madam Pince, the fierce librarian.',tip:'Never damage a book. Madam Pince knows.',kw:['library','books','study','restricted section','pince']},
 {id:'hospital',n:'Hospital Wing',i:'🩹',x:130,y:480,area:'1st floor',d:'Where Madam Pomfrey mends everything from broken bones to jinxed noses, usually by teatime.',who:'Madam Pomfrey.',tip:'Skele-Gro tastes foul, but it works.',kw:['hospital','hospital wing','sick','injured','pomfrey','nurse','hurt']},
 {id:'transfig',n:'Transfiguration Classroom',i:'🐈',x:350,y:270,area:'1st floor',d:'Turn matchsticks into needles, beetles into buttons. Precise and demanding magic.',who:'Professor McGonagall, who is secretly a cat.',tip:'Never arrive late. Ever.',kw:['transfiguration classroom','transfiguration room','mcgonagall room']},
 {id:'charms',n:'Charms Classroom',i:'✨',x:560,y:255,area:'3rd floor',d:'Bright, cheerful lessons where you learn to make things fly, glow and sing.',who:'Professor Flitwick, who stands on a stack of books.',tip:'Say the incantation clearly: it\'s Wing-GAR-dium Levi-O-sa.',kw:['charms classroom','charms room','flitwick room']},
 {id:'dada',n:'Defence Against the Dark Arts',i:'🛡️',x:765,y:305,area:'2nd floor',d:'Learn to protect yourself from dark creatures and curses. The post is famously hard to keep staffed.',who:'The current professor (check the Great Hall).',tip:'Bring a wand AND your courage.',kw:['dada','defence against the dark arts','defense against the dark arts','dark arts classroom']},
 {id:'astronomy',n:'Astronomy Tower',i:'🔭',x:540,y:75,area:'Tallest tower',d:'The tallest tower in the castle, with telescopes and a great view over the grounds. Midnight lessons on Wednesdays.',who:'Professor Sinistra.',tip:'Bring a coat: it gets windy up there.',kw:['astronomy','astronomy tower','telescope','stars']},
 {id:'gryffindor',n:'Gryffindor Tower',i:'🦁',x:320,y:105,area:'7th floor',d:'Behind the portrait of the Fat Lady. Red and gold, roaring fireplaces and squashy armchairs.',who:'The Fat Lady (she\'s grumpy if you forget the password).',tip:'Passwords change often, so check the notice board.',kw:['gryffindor common room','gryffindor tower','fat lady','gryffindor dorm']},
 {id:'ravenclaw',n:'Ravenclaw Tower',i:'🦅',x:720,y:110,area:'5th floor, West Tower',d:'Blue and bronze, with arched windows and a ceiling of stars. The door has no password: only a riddle.',who:'The bronze eagle knocker.',tip:'Think it through. Cleverness opens the door, not memory.',kw:['ravenclaw common room','ravenclaw tower','eagle knocker','ravenclaw dorm']},
 {id:'hufflepuff',n:'Hufflepuff Basement',i:'🦡',x:800,y:525,area:'Basement near the Kitchens',d:'Round, warm, full of plants and golden light. Enter by tapping the right barrel in the right rhythm.',who:'Friendly faces and fantastic snacks nearby.',tip:'Tap the barrel two from the bottom of the middle row, in the rhythm of "Helga Hufflepuff". Wrong barrel and you get soaked in vinegar!',kw:['hufflepuff common room','hufflepuff basement','hufflepuff dorm','barrels']},
 {id:'slytherin',n:'Slytherin Dungeon',i:'🐍',x:170,y:590,area:'Dungeons, beneath the Black Lake',d:'Green-lit, silver-lamped and slightly eerie: windows look out into the lake, with the occasional giant squid.',who:'The Bloody Baron (give him space).',tip:'The wall opens only with the password. Stay on the Baron\'s good side.',kw:['slytherin common room','slytherin dungeon','slytherin dorm']},
 {id:'potions',n:'Potions Classroom',i:'⚗️',x:335,y:600,area:'Dungeons',d:'Cold, dim, full of jars and bubbling cauldrons. Precision and silence are everything.',who:'Professor Snape.',tip:'Follow every instruction exactly, and don\'t talk.',kw:['potions classroom','potions room','dungeon classroom','dungeons','potion class']},
 {id:'kitchens',n:'The Kitchens',i:'🍽️',x:655,y:610,area:'Basement',d:'Where hundreds of house-elves make every meal. Tickle the pear in the fruit-bowl painting to enter.',who:'The Hogwarts house-elves. Be polite.',tip:'Ask nicely and you might get a midnight snack.',kw:['kitchens','kitchen','house elves','pear','snack']},
 {id:'greenhouses',n:'Greenhouses',i:'🌱',x:900,y:415,area:'Grounds',d:'Snapping, singing, squirming plants. Herbology class is wonderfully messy.',who:'Professor Sprout.',tip:'Wear dragon-hide gloves, and earmuffs for the mandrakes!',kw:['greenhouse','greenhouses','herbology classroom','herbology room','plants']},
 {id:'hagrid',n:'Hagrid\'s Hut',i:'🛖',x:955,y:545,area:'Grounds, edge of the Forbidden Forest',d:'A warm cabin with a roaring fire, rock cakes (beware), and a very large dog called Fang.',who:'Rubeus Hagrid, Keeper of Keys and Grounds.',tip:'Tea is always on. Don\'t eat the rock cakes.',kw:['hagrids hut','hut']},
 {id:'forest',n:'Forbidden Forest',i:'🌲',x:960,y:300,area:'Grounds, strictly out of bounds',d:'Home to centaurs, unicorns, acromantulas and worse. Students are forbidden.',who:'Centaurs, unicorns and... other things.',tip:'The name is not a joke. Go in only with Hagrid.',kw:['forbidden forest','forest','woods','centaur']},
 {id:'quidditch',n:'Quidditch Pitch',i:'🧹',x:880,y:195,area:'Grounds',d:'Three goal hoops each side, a Quaffle, two Bludgers and a Golden Snitch. The season\'s highlight.',who:'Madam Hooch referees and teaches flying here.',tip:'First-years cannot join a House team... usually.',kw:['quidditch','pitch','flying lesson','broom','broomstick']},
 {id:'headmaster',n:'Headmaster\'s Office',i:'🗿',x:215,y:195,area:'Behind the stone gargoyle',d:'A circular room of whirring instruments, portraits of past headmasters, and Fawkes the phoenix.',who:'Albus Dumbledore.',tip:'The gargoyle needs the right sweet-themed password.',kw:['headmaster office','headmasters office','dumbledore office','gargoyle']}
];
const EDGES='entrance-great_hall entrance-grand_stair entrance-potions entrance-kitchens entrance-greenhouses great_hall-grand_stair potions-slytherin kitchens-hufflepuff greenhouses-hagrid hagrid-forest greenhouses-quidditch quidditch-ravenclaw grand_stair-library grand_stair-hospital grand_stair-transfig grand_stair-charms library-hospital library-headmaster transfig-headmaster transfig-gryffindor transfig-charms charms-dada charms-ravenclaw ravenclaw-astronomy gryffindor-astronomy dada-greenhouses'.split(' ').map(e=>e.split('-'));
const L=Object.fromEntries(LOCS.map(l=>[l.id,l]));
const ADJ={};LOCS.forEach(l=>ADJ[l.id]=[]);EDGES.forEach(([a,b])=>{ADJ[a].push(b);ADJ[b].push(a)});

const SUBJ=[
 {id:'potions',n:'Potions',e:'⚗️',p:'Professor Snape',loc:'potions',diff:4,tags:['puzzles','danger','plants'],b:'Brewing magical concoctions with exact measurements. Part chemistry, part cooking, part danger.',first:'Your first potion is probably a Boil-Cure.',spell:'Wolfsbane, Felix Felicis, Polyjuice'},
 {id:'charms',n:'Charms',e:'✨',p:'Professor Flitwick',loc:'charms',diff:2,tags:['creativity','fun'],b:'Giving objects new properties: make them float, glow, open or unlock. The friendliest subject.',first:'Wingardium Leviosa: make a feather float.',spell:'Lumos, Alohomora, Accio'},
 {id:'transfig',n:'Transfiguration',e:'🐈',p:'Professor McGonagall',loc:'transfig',diff:5,tags:['puzzles','creativity'],b:'Changing one object into another. Exact, complex, and the one you absolutely cannot slack on.',first:'Matchsticks into needles.',spell:'Animagus transformations (advanced!)'},
 {id:'dada',n:'Defence Against the Dark Arts',e:'🛡️',p:'Varies each year',loc:'dada',diff:4,tags:['danger','creatures','fun'],b:'Practical defence against dark creatures, curses and hexes. Exciting, and occasionally eventful.',first:'Duelling basics and handling a Boggart.',spell:'Expelliarmus, Protego, Riddikulus'},
 {id:'herbology',n:'Herbology',e:'🌱',p:'Professor Sprout',loc:'greenhouses',diff:2,tags:['plants','creatures','fun'],b:'Magical plants, from Fanged Geraniums to Mandrakes. Hands-on, dirty, and useful for Potions.',first:'Repotting a Fanged Geranium.',spell:'No spells: dragon-hide gloves instead.'},
 {id:'astronomy',n:'Astronomy',e:'🔭',p:'Professor Sinistra',loc:'astronomy',diff:3,tags:['stars','puzzles'],b:'Maps of the night sky, planets, and their magical influence. Class meets at midnight.',first:'Charting Jupiter\'s moons.',spell:'Star charts and telescope work.'},
 {id:'history',n:'History of Magic',e:'📜',p:'Professor Binns (a ghost!)',loc:'library',diff:2,tags:['history'],b:'Goblin rebellions and wizarding wars, taught in an extremely monotone voice by a ghost.',first:'Goblin Rebellions of the 18th century.',spell:'Plenty of note-taking.'},
 {id:'flying',n:'Flying',e:'🧹',p:'Madam Hooch',loc:'quidditch',diff:3,tags:['fun','danger'],b:'First-year broom lessons: "Up!" is harder than it sounds.',first:'Saying "UP!" and hovering.',spell:'Broomsticks, brooms, brooms.'},
 {id:'creatures',n:'Care of Magical Creatures',e:'🐉',p:'Professor Hagrid',loc:'hagrid',diff:3,tags:['creatures','danger','fun'],b:'Up-close encounters with hippogriffs, flobberworms and, yes, the occasional dragon.',first:'Meeting a flobberworm (safe).',spell:'Bows, respect, and patience.'}
];
const TAGS=[['creativity','🎨 Creative'],['puzzles','🧩 Puzzles'],['danger','⚔️ Danger'],['creatures','🦄 Creatures'],['plants','🌿 Plants'],['stars','🌌 Stars'],['history','📖 History'],['fun','🎉 Pure fun']];
const PROFS=[
 {n:'Albus Dumbledore',kw:['dumbledore','headmaster','albus'],loc:'headmaster',t:'Headmaster of Hogwarts and the greatest wizard of the age. He is kind, a little eccentric, and loves sherbet lemons.'},
 {n:'Minerva McGonagall',kw:['mcgonagall','minerva'],loc:'transfig',t:'Deputy Headmistress, Transfiguration teacher and Head of Gryffindor. Strict, fair, and a cat Animagus.'},
 {n:'Filius Flitwick',kw:['flitwick','filius'],loc:'charms',t:'Charms professor and Head of Ravenclaw. A former duelling champion who is very short and very fierce.'},
 {n:'Pomona Sprout',kw:['sprout','pomona'],loc:'greenhouses',t:'Herbology professor and Head of Hufflepuff. Warm, earthy, and always covered in dirt.'},
 {n:'Severus Snape',kw:['snape','severus'],loc:'potions',t:'Potions master and Head of Slytherin. Stern, sharp-tongued, and brilliant.'},
 {n:'Rubeus Hagrid',kw:['rubeus'],loc:'hagrid',t:'Keeper of Keys and Grounds, and teacher of Care of Magical Creatures. Huge, kind, and fond of dangerous animals.'},
 {n:'Madam Pomfrey',kw:['pomfrey','nurse','matron'],loc:'hospital',t:'The school matron who can heal almost anything overnight.'},
 {n:'Madam Pince',kw:['pince','librarian'],loc:'library',t:'The school librarian. She treats every book like her own child.'},
 {n:'Madam Hooch',kw:['hooch','flying teacher'],loc:'quidditch',t:'Flying instructor and Quidditch referee. Yellow eyes like a hawk\'s.'},
 {n:'Argus Filch',kw:['filch','caretaker','mrs norris'],loc:'entrance',t:'The caretaker. His cat Mrs Norris tells him about every rule broken in the corridors.'}
];
const HOUSES=[
 {id:'gryffindor',n:'Gryffindor',e:'🦁',c:'#a3141b',c2:'#e8b73c',founder:'Godric Gryffindor',head:'Minerva McGonagall',ghost:'Nearly Headless Nick',el:'Fire',traits:'Courage, bravery, nerve, chivalry',tr:'Fat Lady portrait guards the entrance; the House that loves a comeback.',loc:'gryffindor',kw:['gryffindor','lion','nearly headless nick']},
 {id:'hufflepuff',n:'Hufflepuff',e:'🦡',c:'#e0b31d',c2:'#3a3a3a',founder:'Helga Hufflepuff',head:'Pomona Sprout',ghost:'The Fat Friar',el:'Earth',traits:'Loyalty, patience, fair play, hard work',tr:'Famed for the best food and the warmest common room; all students welcome.',loc:'hufflepuff',kw:['hufflepuff','badger','fat friar']},
 {id:'ravenclaw',n:'Ravenclaw',e:'🦅',c:'#2c58b8',c2:'#c9954a',founder:'Rowena Ravenclaw',head:'Filius Flitwick',ghost:'The Grey Lady',el:'Air',traits:'Wisdom, wit, learning, creativity',tr:'Enter by solving a riddle. Great love of libraries and clever debate.',loc:'ravenclaw',kw:['ravenclaw','eagle','raven','grey lady']},
 {id:'slytherin',n:'Slytherin',e:'🐍',c:'#1f7a4a',c2:'#b7c4bd',founder:'Salazar Slytherin',head:'Severus Snape',ghost:'The Bloody Baron',el:'Water',traits:'Ambition, cunning, resourcefulness, leadership',tr:'Dungeon common room beneath the lake. Many powerful, successful witches and wizards.',loc:'slytherin',kw:['slytherin','snake','serpent','bloody baron']}
];
const ROUTINE=[['07:30','Breakfast','Great Hall','great_hall'],['09:00','Period 1','See your timetable',null],['10:30','Period 2','See your timetable',null],['12:30','Lunch','Great Hall','great_hall'],['14:00','Period 3','See your timetable',null],['15:30','Period 4','See your timetable',null],['18:30','Dinner','Great Hall','great_hall'],['20:00','Homework & games','Your common room',null],['21:30','Curfew: back to your dormitory!','Common room',null]];
const WEEK={1:['herbology','charms','transfig','potions'],2:['transfig','dada','history','herbology'],3:['potions','charms','dada','creatures'],4:['flying','transfig','charms','herbology'],5:['dada','potions','history','creatures']};
const NIGHT={3:'astronomy'};
const QUIZ=[
 {q:'A mysterious door appears in a corridor. What do you do?',a:[['Open it immediately, who knows what\'s inside!','gryffindor'],['Examine the lock and study the carvings first.','ravenclaw'],['Check whether it\'s safe and tell a friend.','hufflepuff'],['Work out who put it there and what they\'d gain.','slytherin']]},
 {q:'Which would you most like to be known for?',a:[['Bravery that saved the day','gryffindor'],['A brilliant mind','ravenclaw'],['Being loyal and fair','hufflepuff'],['Becoming truly great','slytherin']]},
 {q:'Pick a magical creature to befriend.',a:[['A phoenix','gryffindor'],['A niffler','hufflepuff'],['A sphinx','ravenclaw'],['A serpent','slytherin']]},
 {q:'Your friend is being bullied. You...',a:[['Step in loudly and stand up for them.','gryffindor'],['Stay by their side and help them through it.','hufflepuff'],['Find a smart, quiet way to put a stop to it.','slytherin'],['Research the rules and report it properly.','ravenclaw']]},
 {q:'Pick your ideal dawn.',a:[['Out on a broomstick in the cold wind.','gryffindor'],['A quiet corner of the library.','ravenclaw'],['Hot cocoa and a good chat in the kitchens.','hufflepuff'],['Plotting my week from a lakeside window.','slytherin']]},
 {q:'Which would you choose?',a:[['Glory','gryffindor'],['Knowledge','ravenclaw'],['Friendship','hufflepuff'],['Power','slytherin']]}
];
const RIDDLES=[
 {q:'The more of me there is, the less you see. What am I?',a:['darkness','dark'],hint:'Lumos fights it.'},
 {q:'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',a:['echo'],hint:'Shout in a cave.'},
 {q:'What has roots as nobody sees, is taller than trees, up, up it goes, and yet never grows?',a:['mountain'],hint:'Think very big and very still.'},
 {q:'Voiceless it cries, wingless flutters, toothless bites, mouthless mutters. What is it?',a:['wind'],hint:'Check the Astronomy Tower.'}
];
const LORE=(window.LORE&&window.LORE.length?window.LORE:[
 {id:'lumos',name:'Lumos',type:'spell',emoji:'💡',blurb:'Lights the tip of your wand.',fact:'Nox puts it out.',danger:1,kw:['lumos','light']},
 {id:'quidditch-g',name:'Quidditch',type:'tradition',emoji:'🧹',blurb:'The wizarding sport on broomsticks.',fact:'Catching the Snitch is worth 150 points.',danger:3,kw:['quidditch']}
]);

/* ============ STATE ============ */
const KEY='hogwarts-guide-v1';
let S={name:'',house:'',pts:0,vis:[],asked:0,lore:[],badges:[],routes:0,subj:0,riddles:[],at:'entrance',routine:0,mapOpen:0};
try{S={...S,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
function h(t,a={},...c){const e=document.createElement(t);for(const k in a){if(k==='on')for(const ev in a.on)e.addEventListener(ev,a.on[ev]);else if(k==='html')e.innerHTML=a[k];else e.setAttribute(k,a[k])}c.flat().forEach(x=>x!=null&&e.append(x.nodeType?x:document.createTextNode(x)));return e}
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

const LEVELS=[[0,'Muggle-born Newcomer'],[60,'Nervous First-Year'],[150,'Confident Student'],[300,'Prefect-in-Training'],[500,'Head Boy/Girl'],[800,'Honorary Marauder']];
function level(){let l=0;LEVELS.forEach((v,i)=>{if(S.pts>=v[0])l=i});return l}
function addPts(n,why){S.pts+=n;save();hud();if(why)toast(`+${n} House points · ${why}`)}
const BADGES=[
 {id:'sorted',n:'Sorted!',i:'🎩',pts:50,d:'Take the Sorting Hat quiz.',p:()=>[S.house?1:0,1]},
 {id:'mischief',n:'Mischief Managed',i:'🗺️',pts:20,d:'Unfold the Marauder\'s Map.',p:()=>[S.mapOpen?1:0,1]},
 {id:'ex3',n:'Wandering Student',i:'🥾',pts:30,d:'Visit 3 places.',p:()=>[Math.min(S.vis.length,3),3]},
 {id:'ex10',n:'Castle Explorer',i:'🏰',pts:100,d:'Visit 10 places.',p:()=>[Math.min(S.vis.length,10),10]},
 {id:'exall',n:'Master Cartographer',i:'🧭',pts:200,d:'Visit every location on the map.',p:()=>[S.vis.length,LOCS.length]},
 {id:'route',n:'Pathfinder',i:'👣',pts:30,d:'Ask for directions to anywhere.',p:()=>[Math.min(S.routes,1),1]},
 {id:'ask5',n:'Curious Mind',i:'💬',pts:40,d:'Ask Dobby 5 questions.',p:()=>[Math.min(S.asked,5),5]},
 {id:'subj',n:'Chosen Path',i:'🎓',pts:30,d:'Find your best-fit subject.',p:()=>[Math.min(S.subj,1),1]},
 {id:'lore8',n:'Scholar of the Arcane',i:'📖',pts:60,d:'Discover 8 lore entries.',p:()=>[Math.min(S.lore.length,8),8]},
 {id:'riddle',n:'Eagle\'s Answer',i:'🦅',pts:50,d:'Solve a Ravenclaw riddle.',p:()=>[Math.min(S.riddles.length,1),1]},
 {id:'routine',n:'Clockwork Wizard',i:'⏰',pts:10,d:'Check your daily routine.',p:()=>[S.routine?1:0,1]}
];
function checkBadges(){BADGES.forEach(b=>{if(!S.badges.includes(b.id)){const[c,m]=b.p();if(c>=m){S.badges.push(b.id);S.pts+=b.pts;save();hud();setTimeout(()=>toast(`🏅 Badge unlocked: ${b.n} (+${b.pts})`),600);burst()}}});if($('#v-quests.on'))renderQuests()}
function hud(){const l=level(),cur=LEVELS[l][0],nx=LEVELS[l+1]?LEVELS[l+1][0]:cur+1;
 $('#hud').innerHTML=`<span class="pill">🧙 <b>${esc(S.name||'Newcomer')}</b>${S.house?' · '+cap(S.house):''}</span><span class="pill">⭐ <b>${S.pts}</b> pts</span><span class="pill">${LEVELS[l][1]}<span class="bar"><i style="width:${Math.min(100,(S.pts-cur)/(nx-cur)*100)}%"></i></span></span>`}
const cap=s=>s[0].toUpperCase()+s.slice(1);
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),3200)}
function setHouse(id){S.house=id;document.documentElement.dataset.house=id;save()}
function visit(id,quiet){S.at=id;if(!S.vis.includes(id)){S.vis.push(id);addPts(15,`Discovered ${L[id].n}`)}else if(!quiet)toast(`You're now at the ${L[id].n}`);save();checkBadges();if($('#v-map.on'))drawMap()}

/* ============ GATE: LETTER + SORTING ============ */
function gateLetter(){
 const b=$('#gbox');b.innerHTML='';
 b.append(h('button',{class:'seal','aria-label':'Break the seal',on:{click:()=>gateName()}},'🦉'),
  h('h2',{},'Hogwarts School of Witchcraft and Wizardry'),
  h('p',{class:'tag'},'Headmaster: Albus Dumbledore'),
  h('p',{style:'margin:14px 0'},'Dear Student, we are pleased to inform you that you have been accepted at Hogwarts. Term begins on 1 September. Break the seal to begin.'),
  h('button',{class:'btn',on:{click:gateName}},'Break the seal ✦'));
}
function gateName(){
 const b=$('#gbox');b.innerHTML='';
 const i=h('input',{placeholder:'Your name, young wizard',maxlength:20,'aria-label':'Your name',value:S.name});
 b.append(h('div',{class:'hat'},'🎩'),h('h2',{},'Welcome, newcomer!'),h('p',{},'The Sorting Hat is waiting. First, what shall we call you?'),i,h('br'),
  h('button',{class:'btn',on:{click:()=>{S.name=i.value.trim()||'Newcomer';save();hud();gateQuiz(0,{})}}},'Put on the Hat'),
  h('div',{style:'margin-top:14px'},h('button',{class:'btn ghost',style:'font-size:12px',on:{click:()=>{S.name=S.name||'Newcomer';closeGate()}}},'Skip for now')));
 i.focus();i.addEventListener('keydown',e=>{if(e.key==='Enter')$('.btn',b).click()});
}
function gateQuiz(n,tally){
 const b=$('#gbox');b.innerHTML='';
 if(n>=QUIZ.length){b.append(h('div',{class:'hat'},'🎩'),h('h2',{},'Hmmm...'),h('p',{class:'muted',style:'font-style:italic'},'Difficult. Very difficult. Plenty of courage, I see...'));return setTimeout(()=>gateResult(tally),2200)}
 const q=QUIZ[n];
 b.append(h('div',{class:'qbar'},h('i',{style:`width:${n/QUIZ.length*100}%`})),h('div',{class:'tag'},`Question ${n+1} of ${QUIZ.length}`),h('h2',{style:'font-size:22px;margin:8px 0'},q.q),
  h('div',{class:'opts'},[...q.a].sort(()=>Math.random()-.5).map(([t,hs])=>h('button',{class:'opt',on:{click:()=>{tally[hs]=(tally[hs]||0)+1;tally.last=hs;gateQuiz(n+1,tally)}}},t))));
}
function crestSVG(H){return `<svg viewBox="0 0 100 120"><defs><linearGradient id="cs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${H.c}"/><stop offset="1" stop-color="${H.c2}"/></linearGradient></defs><path d="M8 8H92V60C92 92 62 108 50 116C38 108 8 92 8 60Z" fill="url(#cs)" stroke="#d4af37" stroke-width="4"/><path d="M15 15H85V60C85 86 60 100 50 106C40 100 15 86 15 60Z" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/><text x="50" y="72" font-size="46" text-anchor="middle">${H.e}</text></svg>`}
function gateResult(t){
 const ent=HOUSES.map(x=>[x.id,t[x.id]||0]).sort((a,b)=>b[1]-a[1]);
 let win=ent[0][0];if(ent[1]&&ent[0][1]===ent[1][1]&&t.last&&(t[t.last]===ent[0][1]))win=t.last;
 const H=HOUSES.find(x=>x.id===win);setHouse(win);
 const b=$('#gbox');b.innerHTML='';
 b.append(h('div',{class:'crestbig',html:crestSVG(H)}),h('p',{class:'tag'},'The Hat ponders... "Hmm, difficult. Very difficult..."'),
  h('h1',{style:`font-size:44px;color:${H.c};margin:8px 0`},`${H.e} ${H.n.toUpperCase()}!`),
  h('p',{},`${S.name}, you have the heart of a ${H.n} - ${H.traits.toLowerCase()}.`),
  h('p',{class:'muted',style:'margin:10px 0 16px'},`Head of House: ${H.head} · House ghost: ${H.ghost}`),
  h('button',{class:'btn',on:{click:closeGate}},'Enter the castle ➜'));
 burst();addPts(50,'Sorted!');checkBadges();
}
function closeGate(){$('#gate').classList.add('off');show(location.hash.slice(1)||'home');hud();refreshHome()}

/* ============ NAV ============ */
const TABS=[['home','🏰 Home'],['map','🗺️ Map'],['ask','🧦 Ask Dobby'],['subjects','🎓 Subjects'],['life','🏡 Houses & Day'],['lore','📖 Lore'],['quests','🏅 Quests']];
const RENDER={home:renderHome,map:renderMap,ask:renderAsk,subjects:renderSubjects,life:renderLife,lore:renderLore,quests:renderQuests};
function buildNav(){const n=$('#nav');TABS.forEach(([id,t])=>n.append(h('button',{role:'tab','data-t':id,on:{click:()=>show(id)}},t)))}
function show(id){if(!RENDER[id])id='home';location.hash=id;document.body.classList.toggle('on-home',id==='home');$$('#nav button').forEach(b=>b.setAttribute('aria-selected',b.dataset.t===id));
 $$('section.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+id));RENDER[id]();window.scrollTo({top:0,behavior:'smooth'})}

/* ============ MAP ============ */
let sel=null,routeTo=null,curRoute=[];
function bfs(a,b){const q=[[a]],seen=new Set([a]);while(q.length){const p=q.shift(),n=p[p.length-1];if(n===b)return p;ADJ[n].forEach(m=>{if(!seen.has(m)){seen.add(m);q.push([...p,m])}})}return[a]}
function stepsFor(path){const out=[];for(let i=1;i<path.length;i++){const a=L[path[i-1]],b=L[path[i]],dy=b.y-a.y;
 const v=dy<-90?'Climb up to':dy>90?'Head down to':'Walk across to';out.push(`${v} the <b>${esc(b.n)}</b> <span class="muted">(${esc(b.area)})</span>`)}return out}
function renderMap(){
 const v=$('#v-map');if(v.dataset.b)return drawMap();v.dataset.b=1;
 v.innerHTML=`<div class="mapbox"><div class="parch mapwrap" id="mw"><svg id="map" viewBox="0 0 1040 680" role="img" aria-label="Interactive map of Hogwarts"></svg>
   <div class="fold" id="fold"><div style="font-size:46px">🗺️</div><h2 style="font-size:26px">The Marauder's Map</h2><p style="font-style:italic;max-width:360px">Messrs Moony, Wormtail, Padfoot and Prongs proudly present...</p><button class="btn" id="swear">✦ I solemnly swear that I am up to no good ✦</button></div></div>
  <div class="grid"><div class="parch"><h3>Find your way 👣</h3>
   <label for="rf">From</label><select id="rf"></select><div style="height:8px"></div><label for="rt">To</label><select id="rt"></select>
   <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="go">Guide me</button><button class="btn ghost" id="clr">Mischief managed</button></div><ol class="steps" id="steps"></ol></div>
   <div class="parch" id="info"></div></div></div>`;
 const opts=LOCS.map(l=>`<option value="${l.id}">${l.i} ${esc(l.n)}</option>`).join('');$('#rf').innerHTML=opts;$('#rt').innerHTML=opts;$('#rt').value='great_hall';
 $('#swear').onclick=()=>{$('#fold').classList.add('open');if(!S.mapOpen){S.mapOpen=1;save();addPts(10,'The map unfolds');checkBadges()}};
 if(S.mapOpen)$('#fold').classList.add('open');
 $('#go').onclick=()=>doRoute($('#rf').value,$('#rt').value);$('#clr').onclick=()=>{curRoute=[];$('#steps').innerHTML='';drawMap()};
 drawMap();
}
function doRoute(a,b){const fd=$('#fold');if(fd)fd.classList.add('open');if(!S.mapOpen){S.mapOpen=1;save()}curRoute=bfs(a,b);const st=stepsFor(curRoute);$('#rf').value=a;$('#rt').value=b;
 $('#steps').innerHTML=st.length?`<li>Start at the <b>${esc(L[a].n)}</b></li>`+st.map(s=>`<li>${s}</li>`).join('')+`<li><b>You've arrived!</b> ${esc(L[b].tip)}</li>`:'<li>You\'re already here!</li>';
 S.routes++;save();checkBadges();drawMap();sel=b;info()}
function drawMap(){
 const svg=$('#map');if(!svg)return;const ns='http://www.w3.org/2000/svg';let o='';
 o+=`<defs><pattern id="hat" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#4a2f0c" stroke-width=".8" opacity=".4"/></pattern></defs><rect class="keep" x="110" y="235" width="590" height="385" rx="18"/><rect class="ink" x="124" y="249" width="562" height="357" rx="10" stroke-dasharray="2 5"/><rect class="keep" x="400" y="368" width="200" height="86" rx="6"/><rect x="400" y="368" width="200" height="86" rx="6" fill="url(#hat)"/><circle class="keep" cx="320" cy="105" r="50"/><circle cx="320" cy="105" r="50" fill="url(#hat)"/><circle class="keep" cx="720" cy="110" r="50"/><circle cx="720" cy="110" r="50" fill="url(#hat)"/><circle class="keep" cx="540" cy="75" r="40"/><circle cx="540" cy="75" r="40" fill="url(#hat)"/><ellipse cx="90" cy="655" rx="115" ry="20" fill="rgba(60,90,130,.2)" stroke="#4a2f0c" stroke-dasharray="3 4" opacity=".7"/><text class="zl" x="90" y="659" style="font-size:10px;letter-spacing:.15em">BLACK LAKE</text><g transform="translate(66 66)"><circle r="34" class="ink"/><circle r="26" class="ink" stroke-dasharray="2 3"/><polygon points="0,-34 7,0 0,34 -7,0" fill="#4a2f0c" opacity=".8"/><polygon points="-34,0 0,-7 34,0 0,7" fill="#4a2f0c" opacity=".45"/><text y="-42" style="font-family:var(--fh);font-size:13px;text-anchor:middle;fill:#4a2f0c;font-weight:700">N</text></g>`;
 o+=`<ellipse class="zone" cx="500" cy="560" rx="470" ry="115"/><text class="zl" x="500" y="668">DUNGEONS · BASEMENT</text>`;
 o+=`<ellipse class="zone" cx="520" cy="170" rx="330" ry="160"/><text class="zl" x="520" y="22">TOWERS</text>`;
 o+=`<ellipse class="zone" cx="905" cy="420" rx="120" ry="190"/><text class="zl" x="905" y="635" style="font-size:11px">GROUNDS</text>`;
 EDGES.forEach(([a,b])=>o+=`<line class="edge" x1="${L[a].x}" y1="${L[a].y}" x2="${L[b].x}" y2="${L[b].y}"/>`);
 if(curRoute.length>1){let pts=[];for(let i=1;i<curRoute.length;i++){const a=L[curRoute[i-1]],b=L[curRoute[i]],d=Math.hypot(b.x-a.x,b.y-a.y),n=Math.floor(d/26);
  for(let k=1;k<=n;k++){pts.push([a.x+(b.x-a.x)*k/n,a.y+(b.y-a.y)*k/n,Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI])}}
  pts.forEach((p,i)=>{const s=i%2?7:-7,dx=-Math.sin(p[2]*Math.PI/180)*s,dy=Math.cos(p[2]*Math.PI/180)*s;
   o+=`<g transform="translate(${p[0]+dx} ${p[1]+dy}) rotate(${p[2]})"><ellipse class="foot" style="animation-delay:${i*.07}s" rx="7" ry="3.6"/><ellipse class="foot" style="animation-delay:${i*.07}s" cx="-8" rx="3" ry="3"/></g>`})}
 LOCS.forEach(l=>{const v=S.vis.includes(l.id);
  o+=`<g class="node${v?' vis':''}${sel===l.id?' sel':''}" data-id="${l.id}" tabindex="0" role="button" aria-label="${esc(l.n)}${v?', visited':''}"><circle class="ring" cx="${l.x}" cy="${l.y}"/><circle class="base" cx="${l.x}" cy="${l.y}" r="20"/><text class="ic" x="${l.x}" y="${l.y}">${l.i}</text><text class="lb" x="${l.x}" y="${l.y+36}">${esc(l.n.replace('Defence Against the Dark Arts','Defence (DADA)').replace('Transfiguration Classroom','Transfiguration').replace('Charms Classroom','Charms Classroom'))}</text>${v?`<text x="${l.x+16}" y="${l.y-14}" font-size="14">✅</text>`:''}</g>`});
 o+=`<text class="you" x="${L[S.at].x-12}" y="${L[S.at].y-26}" style="font-size:22px">📍</text>`;
 svg.innerHTML=o;
 $$('.node',svg).forEach(n=>{const pick=()=>{sel=n.dataset.id;$('#rt').value=sel;drawMap();info()};n.addEventListener('click',pick);n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();$('.node.sel',svg)&&$('.node.sel',svg).focus()}})});
 $('#rf').value=S.at;info();
}
function info(){const box=$('#info');if(!box)return;if(!sel){box.innerHTML='<h3>🪄 Tap any room</h3><p class="muted">Select a location on the map to learn about it, then get directions or tick it off as visited to earn House points.</p>';return}
 const l=L[sel],v=S.vis.includes(sel);
 box.innerHTML=`<div class="tag">${esc(l.area)}</div><h3>${l.i} ${esc(l.n)}</h3><p style="margin:6px 0">${esc(l.d)}</p><p><b>Who:</b> ${esc(l.who)}</p><p><b>Tip:</b> ${esc(l.tip)}</p>
 <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="rh">Route from here</button><button class="btn ${v?'ghost':''}" id="vh">${v?'✅ Visited · I\'m here':'I\'m here! ✦ +15'}</button></div>`;
 $('#rh').onclick=()=>doRoute(S.at,sel);$('#vh').onclick=()=>{visit(sel);info()}}

/* ============ ASK NICK (intent engine) ============ */
const ENT=[];
PROFS.forEach(p=>ENT.push({t:'prof',n:p.n,kw:[p.n.toLowerCase(),...p.kw],loc:p.loc,o:p}));
LOCS.forEach(l=>ENT.push({t:'loc',n:l.n,kw:[l.n.toLowerCase(),...l.kw],loc:l.id,o:l}));
SUBJ.forEach(s=>ENT.push({t:'subj',n:s.n,kw:[s.n.toLowerCase(),s.id,s.n.toLowerCase().replace(' class','')],loc:s.loc,o:s}));
HOUSES.forEach(x=>ENT.push({t:'house',n:x.n,kw:[x.n.toLowerCase(),...x.kw],loc:x.loc,o:x}));
LORE.forEach(x=>ENT.push({t:'lore',n:x.name,kw:[x.name.toLowerCase(),...(x.kw||[])],o:x}));
const norm=s=>' '+s.toLowerCase().replace(/[^a-z0-9' ]/g,' ').replace(/\s+/g,' ')+' ';
function findEnt(q){let best=null,bl=0;ENT.forEach(e=>e.kw.forEach(k=>{k=k.toLowerCase();if(k.length>2&&q.includes(' '+k+' ')||q.includes(' '+k+'s ')){if(k.length>bl){bl=k.length;best=e}}}));return best}
function nextClass(){const d=new Date();let day=d.getDay(),mins=d.getHours()*60+d.getMinutes();const slots=[540,630,840,930];
 for(let add=0;add<7;add++){const dd=(day+add)%7;if(!WEEK[dd])continue;const list=WEEK[dd];for(let i=0;i<4;i++){if(add>0||slots[i]>mins){const s=SUBJ.find(x=>x.id===list[i]);return{s,when:`${add===0?'today':add===1?'tomorrow':'on '+['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][dd]} at ${String(Math.floor(slots[i]/60)).padStart(2,'0')}:${String(slots[i]%60).padStart(2,'0')}`}}}}
 return{s:SUBJ[0],when:'on Monday at 09:00'}}
function routeText(to){const p=bfs(S.at,to);return p.length>1?`From the ${L[S.at].n}: `+stepsFor(p).map((s,i)=>`${i+1}. ${s}`).join('<br>'):`You're already at the ${L[to].n}!`}
function describe(e){const o=e.o,acts=[];let t='';
 if(e.t==='loc'){t=`<b>${o.i} ${esc(o.n)}</b> - ${esc(o.d)}<br><i>${esc(o.tip)}</i>`}
 else if(e.t==='subj'){t=`<b>${o.e} ${esc(o.n)}</b> with ${esc(o.p)}.<br>${esc(o.b)}<br><i>First lesson: ${esc(o.first)}</i> · Difficulty ${'★'.repeat(o.diff)}${'☆'.repeat(5-o.diff)}`}
 else if(e.t==='prof'){t=`<b>${esc(o.n)}</b> - ${esc(o.t)}`}
 else if(e.t==='house'){t=`<b>${o.e} ${esc(o.n)}</b> (founder ${esc(o.founder)}). Known for: <b>${esc(o.traits)}</b>.<br>Head: ${esc(o.head)} · Ghost: ${esc(o.ghost)}<br>${esc(o.tr)}`;acts.push(['See all Houses',()=>show('life')])}
 else {t=`<b>${o.emoji} ${esc(o.name)}</b> <span class="muted">(${esc(o.type)})</span> - ${esc(o.blurb)}<br><i>💡 ${esc(o.fact)}</i>`;markLore(o.id)}
 if(e.loc){acts.push(['Show route on map',()=>{show('map');setTimeout(()=>doRoute(S.at,e.loc),50)}])}
 return{t,acts}}
function answer(raw){const q=norm(raw),e=findEnt(q);
 if(/\b(hi|hello|hey|help|who are you)\b/.test(q)&&!e)return{t:`Greetings, ${esc(S.name||'newcomer')}! Dobby is a free house-elf, and Dobby is honoured to be your guide! Ask Dobby <i>anything</i>: where a room is, what a subject is like, what a House stands for, or what class you have next.`};
 if(/(class|lesson|period).*(next|now|today)|(next|today|my).*(class|lesson|timetable)|timetable|schedule/.test(q)){const n=nextClass();return{t:`Your next lesson is <b>${n.s.e} ${esc(n.s.n)}</b> ${n.when}, with ${esc(n.s.p)} in the ${esc(L[n.s.loc].n)}.<br>Need to get there?`,acts:[['Take me there',()=>{show('map');setTimeout(()=>doRoute(S.at,n.s.loc),50)}],['Full daily routine',()=>show('life')]]}}
 if(/(hungry|food|eat|lunch|dinner|breakfast|snack|treat)/.test(q))return{t:`Meals are served in the <b>Great Hall</b> (breakfast 07:30, lunch 12:30, dinner 18:30). Late-night snacks? Tickle the pear to enter the <b>Kitchens</b> and ask the house-elves politely.`,acts:[['Route to Great Hall',()=>{show('map');setTimeout(()=>doRoute(S.at,'great_hall'),50)}]]};
 if(/(which house|my house|sorted|sorting)/.test(q)&&!e)return S.house?{t:`You are in <b>${cap(S.house)}</b>! ${HOUSES.find(h=>h.id===S.house).tr}`}:{t:'You haven\'t been sorted yet!',acts:[['Take the Sorting Quiz',()=>{$('#gate').classList.remove('off');gateName()}]]};
 if(/where|find|locate|direction|way to|get to|take me|route|how do i (get|go)|how to reach/.test(q)&&e&&e.loc){const loc=L[e.loc];return{t:`<b>${esc(e.n)}</b> - found at the <b>${esc(loc.n)}</b> (${esc(loc.area)}).<br>${routeText(e.loc)}`,acts:[['Show it on the map',()=>{show('map');setTimeout(()=>doRoute(S.at,e.loc),50)}]],route:1}}
 if(e){const d=describe(e);return{t:d.t,acts:d.acts}}
 // fuzzy fallback
 const toks=q.trim().split(' ').filter(w=>w.length>3&&!/^(what|where|about|tell|does|which|there|their|have|this|that|with|from|know|known|class)$/.test(w));let best=null,bs=0;
 ENT.forEach(x=>{let s=0;const hay=(x.n+' '+x.kw.join(' ')+' '+(x.o.d||x.o.b||x.o.blurb||x.o.t||'')).toLowerCase();toks.forEach(w=>{if(hay.includes(w))s++});if(s>bs){bs=s;best=x}});
 if(best){const d=describe(best);return{t:`Hmm, I think you mean this:<br>${d.t}`,acts:d.acts}}
 return{t:`Dobby is stumped! Dobby has never heard of that, and Dobby will not iron his hands for it. Try asking about a <i>room, professor, subject, House, spell or creature</i>.`}}
function markLore(id){if(!S.lore.includes(id)){S.lore.push(id);save();addPts(5,'Lore discovered');checkBadges()}}
function renderAsk(){
 const v=$('#v-ask');if(v.dataset.b)return;v.dataset.b=1;
 v.innerHTML=`<div class="chat"><div class="parch ghost"><div class="g">🧝</div><h3>Dobby</h3><p class="muted" style="font-size:16px">A free house-elf. Dobby knows every shortcut, secret passage and kitchen in the castle, and never tells Filch.</p></div>
  <div class="parch"><div class="log" id="log" aria-live="polite"></div><div id="chips" style="margin-top:8px"></div>
  <form class="inp" id="f"><input id="q" autocomplete="off" aria-label="Ask a question" placeholder="Ask: Where is the Potions classroom?"><button class="btn">Ask</button></form></div></div>`;
 const log=$('#log');
 const say=(html,who,acts)=>{const m=h('div',{class:'msg '+who});m.innerHTML=html;if(acts&&acts.length){const a=h('div',{class:'acts'});acts.forEach(([t,f])=>a.append(h('button',{class:'btn',on:{click:f}},t)));m.append(a)}log.append(m);log.scrollTop=log.scrollHeight};
 const ask=txt=>{if(!txt.trim())return;say(esc(txt),'me');const typing=h('div',{class:'msg bot'},h('span',{class:'dots',html:'<span></span><span></span><span></span>'}));log.append(typing);log.scrollTop=log.scrollHeight;
  setTimeout(()=>{typing.remove();const r=answer(txt);say(r.t,'bot',r.acts);S.asked++;if(r.route)S.routes++;save();checkBadges();if(S.asked<=5)addPts(2)},550+Math.random()*400)};
 window._ask=ask;$('#f').onsubmit=e=>{e.preventDefault();const i=$('#q');ask(i.value);i.value=''};
 ['Where is the Potions classroom?','What class do I have next?','What is Ravenclaw known for?','Where can I find the library?','Tell me about this magical creature: Hippogriff','Where can I get a snack?'].forEach(c=>$('#chips').append(h('button',{class:'chip',on:{click:()=>ask(c)}},c)));
 say(`Dobby is so happy to meet you, ${esc(S.name||'newcomer')}! 🧦 Dobby knows every corridor, secret passage and teacher here. What would you like to know?`,'bot');
}

/* ============ SUBJECTS ============ */
const picked=new Set();
function renderSubjects(){
 const v=$('#v-subjects');v.innerHTML='';
 const q=h('div',{class:'parch',style:'margin-bottom:18px'},h('h2',{},'🧪 Which subject suits you?'),h('p',{},'Pick what excites you and the castle will rank the lessons for you.'),
  h('div',{id:'tg'},TAGS.map(([k,t])=>h('button',{class:'chip'+(picked.has(k)?' on':''),on:{click:()=>{picked.has(k)?picked.delete(k):picked.add(k);renderSubjects()}}},t))));
 let list=[...SUBJ];if(picked.size){list=list.map(s=>({s,m:s.tags.filter(t=>picked.has(t)).length})).sort((a,b)=>b.m-a.m);if(!S.subj){S.subj=1;save();addPts(10,'Found your path');checkBadges()}}else list=list.map(s=>({s,m:0}));
 const g=h('div',{class:'grid g3'});
 list.forEach(({s,m},idx)=>g.append(h('div',{class:'parch card'},
  picked.size&&idx<2&&m>0?h('div',{class:'tag',style:'color:#a3141b'},idx===0?'⭐ Best match':'✨ Great match'):'',
  h('div',{class:'em'},s.e),h('h3',{},s.n),h('div',{class:'muted',style:'font-size:15px'},s.p),
  h('div',{class:'meter','aria-label':'Difficulty '+s.diff+' of 5'},[1,2,3,4,5].map(i=>h('i',{class:i<=s.diff?'f':''}))),
  h('p',{style:'font-size:16px'},s.b),h('p',{style:'font-size:15px'},h('b',{},'Your first lesson: '),s.first),
  h('button',{class:'btn',style:'margin-top:8px',on:{click:()=>{show('map');setTimeout(()=>doRoute(S.at,s.loc),60)}}},'📍 Find classroom'))));
 v.append(q,g);
}

/* ============ HOUSES & DAY ============ */
function renderLife(){
 const v=$('#v-life');v.innerHTML='';
 v.append(h('h2',{class:'cinzel',style:'margin-bottom:12px;color:var(--accent)'},'The Four Houses'));
 const g=h('div',{class:'grid g2',style:'margin-bottom:28px'});
 HOUSES.forEach(x=>g.append(h('div',{class:'parch card hcard'+(S.house===x.id?' me':''),style:`--hc:${x.c}`},h('div',{style:'display:flex;gap:12px;align-items:center'},h('div',{style:'font-size:46px'},x.e),h('div',{},h('h3',{style:`color:${x.c}`},x.n),h('div',{class:'tag'},S.house===x.id?'★ Your House':'Founder: '+x.founder))),
  h('p',{style:'margin-top:8px'},h('b',{},'Values: '),x.traits),h('p',{},h('b',{},'Head: '),x.head,' · ',h('b',{},'Ghost: '),x.ghost),h('p',{},h('b',{},'Element: '),x.el),h('p',{style:'font-size:16px;font-style:italic'},x.tr),
  h('button',{class:'btn',style:'margin-top:8px',on:{click:()=>{show('map');setTimeout(()=>doRoute(S.at,x.loc),60)}}},'📍 Common room'))));
 v.append(g);
 const now=new Date(),mins=now.getHours()*60+now.getMinutes();let ci=-1;ROUTINE.forEach((r,i)=>{const[hh,mm]=r[0].split(':').map(Number);if(hh*60+mm<=mins)ci=i});
 const day=WEEK[now.getDay()],tl=h('div',{class:'timeline'});
 let pn=0;ROUTINE.forEach((r,i)=>{let name=r[1],place=r[2];if(/^Period/.test(r[1])){const sid=day?day[pn++]:null,s=sid&&SUBJ.find(x=>x.id===sid);if(s){name=`${s.e} ${s.n}`;place=`${L[s.loc].n} · ${s.p}`}else{name='Free period / weekend fun';place='Explore the castle!'}}
  tl.append(h('div',{class:'tl'+(i===ci?' now':'')},h('b',{},r[0]),' · ',name,h('div',{class:'muted',style:'font-size:15px'},place+(i===ci?' · ◀ happening now':''))))});
 if(NIGHT[now.getDay()])tl.append(h('div',{class:'tl'},h('b',{},'23:00'),' · 🔭 Astronomy (night class)',h('div',{class:'muted',style:'font-size:15px'},'Astronomy Tower · bring a coat')));
 v.append(h('div',{class:'parch'},h('h2',{},'⏰ A Day at Hogwarts'),h('p',{class:'muted'},`Live view for ${now.toLocaleDateString(undefined,{weekday:'long'})}. Your next lesson is highlighted.`),tl));
 if(!S.routine){S.routine=1;save();addPts(5);checkBadges()}
}

/* ============ LORE ============ */
let loreF='all',loreQ='';
function renderLore(){
 const v=$('#v-lore');v.innerHTML='';
 const inp=h('input',{class:'search',placeholder:'🔍 Search spells, creatures, objects and traditions...',value:loreQ,'aria-label':'Search the encyclopedia',on:{input:e=>{loreQ=e.target.value;draw()}}});
 const f=h('div',{style:'margin-bottom:16px'},['all','spell','creature','object','tradition'].map(t=>h('button',{class:'chip',style:t===loreF?'background:var(--accent);color:#1a1205':'',on:{click:()=>{loreF=t;renderLore();$('.search').focus()}}},t==='all'?'✨ All':cap(t)+'s')));
 const g=h('div',{class:'grid g3',id:'lg'});v.append(h('h2',{class:'cinzel',style:'color:var(--accent);margin-bottom:10px'},'The Interactive Encyclopedia'),inp,f,g);
 function draw(){g.innerHTML='';const q=loreQ.toLowerCase();const res=LORE.filter(x=>(loreF==='all'||x.type===loreF)&&(!q||(x.name+' '+x.blurb+' '+(x.kw||[]).join(' ')).toLowerCase().includes(q)));
  if(!res.length)g.append(h('p',{class:'muted'},'No entry... try another incantation.'));
  res.forEach(x=>{const c=h('div',{class:'flip',tabindex:0,role:'button','aria-label':'Flip card '+x.name},h('div',{},
   h('div',{class:'fa parch'},h('div',{style:'display:flex;justify-content:space-between'},h('span',{style:'font-size:36px'},x.emoji),h('span',{class:'tag'},x.type)),h('h3',{},x.name),h('p',{style:'font-size:16px'},x.blurb),h('div',{class:'muted',style:'font-size:13px;position:absolute;bottom:8px;right:14px'},'tap to flip ↻')),
   h('div',{class:'fb parch',style:'background:linear-gradient(135deg,#2a1d3a,#14102a);color:#f6e9c6'},h('div',{class:'tag'},'Did you know?'),h('p',{style:'margin:10px 0'},'💡 '+x.fact),h('div',{class:'tag'},'Danger level'),h('div',{class:'meter'},[1,2,3,4,5].map(i=>h('i',{class:i<=x.danger?'f':'',style:i<=x.danger?'background:#e8b73c':'background:#fff2'}))))));
   const flip=()=>{c.classList.toggle('f');markLore(x.id)};c.onclick=flip;c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};g.append(c)})}
 draw();
}

/* ============ QUESTS ============ */
let ridI=Math.floor(Math.random()*RIDDLES.length);
function renderQuests(){
 const v=$('#v-quests');v.innerHTML='';const l=level();
 v.append(h('div',{class:'parch',style:'margin-bottom:18px;text-align:center'},h('div',{class:'tag'},'Your standing'),h('h2',{style:'font-size:30px'},LEVELS[l][1]),h('p',{},`${S.pts} House points · ${S.badges.length}/${BADGES.length} badges · ${S.vis.length}/${LOCS.length} places discovered`)));
 const R=RIDDLES[ridI],done=S.riddles.includes(ridI);
 const out=h('div',{class:'msg-out',style:'min-height:24px'});
 const ri=h('input',{placeholder:'Your answer...','aria-label':'Riddle answer',style:'font:inherit;padding:10px;border-radius:8px;border:1px solid #8a6d1c;background:#fff9;width:min(100%,300px)'});
 const sub=()=>{const a=ri.value.toLowerCase();if(R.a.some(x=>a.includes(x))){out.innerHTML='<span class="good">✔ Correct! The door swings open.</span>';if(!S.riddles.includes(ridI)){S.riddles.push(ridI);save();addPts(25,'Riddle solved');burst();checkBadges()}}else out.innerHTML=`<span class="bad">✘ The eagle remains silent.</span> <i>Hint: ${esc(R.hint)}</i>`};
 ri.addEventListener('keydown',e=>{if(e.key==='Enter')sub()});
 v.append(h('div',{class:'parch',style:'margin-bottom:18px'},h('div',{class:'tag'},'🦅 Ravenclaw Door Riddle'),h('div',{class:'rid'},R.q),ri,' ',h('button',{class:'btn',on:{click:sub}},'Answer'),' ',h('button',{class:'btn ghost',on:{click:()=>{ridI=(ridI+1)%RIDDLES.length;renderQuests()}}},'New riddle'),h('div',{style:'margin-top:8px'},out),done?h('div',{class:'tag'},'✔ Solved before'):''));
 const g=h('div',{class:'grid g2'});
 BADGES.forEach(b=>{const got=S.badges.includes(b.id),[c,m]=b.p();g.append(h('div',{class:'parch badge'+(got?' got':'')},h('div',{class:'bi'},b.i),h('div',{style:'flex:1'},h('h3',{style:'font-size:17px'},b.n,' ',h('span',{class:'tag'},got?'EARNED':`+${b.pts} pts`)),h('div',{style:'font-size:15px'},b.d),h('div',{class:'pb'},h('i',{style:`width:${c/m*100}%`})))))});
 v.append(g,h('div',{style:'text-align:center;margin-top:20px'},h('button',{class:'btn ghost',style:'color:#f3e8c8',on:{click:()=>{if(confirm('Wipe all progress and start again?')){localStorage.removeItem(KEY);location.reload()}}}},'↺ Start over')));
}

/* ============ FX: stars, wand sparks, confetti ============ */
const cv=$('#fx'),cx=cv.getContext('2d');let W,Hh,stars=[],sparks=[];
function rs(){W=cv.width=innerWidth;Hh=cv.height=innerHeight;stars=Array.from({length:Math.min(160,W/6)},()=>({x:Math.random()*W,y:Math.random()*Hh,r:Math.random()*1.4+.2,p:Math.random()*6}))}
addEventListener('resize',rs);rs();
addEventListener('pointermove',e=>{for(let i=0;i<2;i++)sparks.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1.4,vy:Math.random()*1.2+.2,l:1,c:'#ffe28a'})});
addEventListener('pointerdown',e=>{for(let i=0;i<16;i++){const a=Math.random()*6.28,v=Math.random()*3.2+.8;sparks.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,c:['#fff6c9','#ffd86b','#ffb347'][i%3],g:.04})}});
function burst(){for(let i=0;i<90;i++){const a=Math.random()*6.28,s=Math.random()*7+2;sparks.push({x:innerWidth/2,y:innerHeight/2,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2,l:1.6,c:['#ffe28a','#fff','#e8b73c','#ff8a5c','#9ad1ff'][i%5],g:.12})}}
function loop(t){if(!cx)return;cx.clearRect(0,0,W,Hh);if(Math.random()<.3&&sparks.length<260)sparks.push({x:Math.random()*W,y:Hh+4,vx:(Math.random()-.5)*.4,vy:-(.4+Math.random()*1.1),g:-.002,d:.004,l:1,c:'#ffb347'});stars.forEach(s=>{cx.globalAlpha=.4+.6*Math.abs(Math.sin(t/1200+s.p));cx.fillStyle='#fff';cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.3);cx.fill()});
 sparks=sparks.filter(p=>p.l>0);sparks.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g||.03;p.l-=p.d||.025;cx.globalAlpha=Math.max(0,p.l);cx.fillStyle=p.c;cx.shadowBlur=10;cx.shadowColor=p.c;cx.fillRect(p.x,p.y,2.5,2.5)});cx.shadowBlur=0;requestAnimationFrame(loop)}
requestAnimationFrame(loop); // async, so an FX hiccup can never abort the boot below

/* ============ HOME (cinematic landing, from the reference design) ============ */
const FOUNDERS=[['godric','gryffindor','Godric Gryffindor'],['rowena','ravenclaw','Rowena Ravenclaw'],['helga','hufflepuff','Helga Hufflepuff'],['salazar','slytherin','Salazar Slytherin']];
const ICONS={history:'globe.png',creatures:'hippogriff.png',herbology:'mandrake.png',potions:'potion.png',dada:'dementor.png'};
const EM2={charms:'✨',transfig:'🐈',astronomy:'🔭',flying:'🧹'};
const FACS=[['dumbledore','Albus Dumbledore','Headmaster','The greatest wizard of the age'],['mcgonagall','Minerva McGonagall','Deputy Headmistress','Transfiguration · Head of Gryffindor'],['snape','Severus Snape','Potions Master','Head of Slytherin']];
const ALUM=[['harry','jpg','Harry Potter','gryffindor',"The Boy Who Lived, and the youngest Seeker in a century."],['hermione','png','Hermione Granger','gryffindor',"Brightest witch of her age. If there is a book on it, she has read it twice."],['ron','jpg','Ron Weasley','gryffindor',"Loyal, funny, and the best wizard chess player at school."],['luna','jpg','Luna Lovegood','ravenclaw',"Dreamy, fearless, and right about more things than anyone expects."],['neville','jpg','Neville Longbottom','gryffindor',"The Herbology star who grew into one of the bravest students in the castle."],['ginny','png','Ginny Weasley','gryffindor',"Fierce Chaser, brilliant hexer, and nobody's sidekick."],['draco','png','Draco Malfoy','slytherin',"Proud, sharp and complicated. Slytherin's most famous student."]];
function modal(html,btns){const m=$('#modal');m.innerHTML=`<div class="mbox" role="document"><button class="x" aria-label="Close" data-x>×</button>${html}<div class="row"></div></div>`;const row=$('.row',m);(btns||[]).forEach(([t,f,g])=>row.append(h('button',{class:g?'btn ghost':'btn',on:{click:()=>{closeModal();f()}}},t)));m.hidden=false;$('.x',m).focus()}
function closeModal(){$('#modal').hidden=true}
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal'||e.target.dataset.x!==undefined)closeModal()});
function askNick(t){show('ask');setTimeout(()=>{window._ask&&window._ask(t)},300)}
function goRoute(loc){show('map');setTimeout(()=>doRoute(S.at,loc),80)}
function startQuest(name){S.name=name||S.name||'Newcomer';save();hud();$('#gate').classList.remove('off');gateQuiz(0,{})}
function openSubj(id){const s=SUBJ.find(x=>x.id===id);if(!S.subj){S.subj=1;save();addPts(10,'You chose a path');checkBadges()}
 const ic=ICONS[id]?`<img src="assets/${ICONS[id]}" alt="" style="height:90px;float:right;margin:0 0 8px 12px">`:`<div class="big2" style="float:right">${EM2[id]||s.e}</div>`;
 modal(`${ic}<div class="tag">${esc(s.p)}</div><h2>${esc(s.n)}</h2><div class="meter" aria-label="Difficulty ${s.diff} of 5">${[1,2,3,4,5].map(i=>`<i class="${i<=s.diff?'f':''}"></i>`).join('')}</div><p>${esc(s.b)}</p><p><b>Your first lesson:</b> ${esc(s.first)}</p><p><b>Classroom:</b> ${esc(L[s.loc].n)} · ${esc(L[s.loc].area)}</p>`,
  [['📍 Find the classroom',()=>goRoute(s.loc)],['🧦 Ask Dobby',()=>askNick('Tell me about '+s.n),1]])}
function openHouse(id){const H=HOUSES.find(x=>x.id===id);
 modal(`<div class="big2">${H.e}</div><h2 style="color:${H.c2}">${H.n}</h2><p><b>Founder:</b> ${esc(H.founder)} · <b>Head:</b> ${esc(H.head)}</p><p><b>Values:</b> ${esc(H.traits)}</p><p><b>Ghost:</b> ${esc(H.ghost)} · <b>Element:</b> ${esc(H.el)}</p><p style="font-style:italic">${esc(H.tr)}</p>${S.house===id?'<p><b>★ This is your House.</b></p>':''}`,
  [['📍 Walk me to the common room',()=>goRoute(H.loc)],S.house?['🧦 Ask Dobby',()=>askNick('What is '+H.n+' known for?'),1]:['🎩 Take the Sorting Quiz',()=>{$('#gate').classList.remove('off');gateName()},1]])}
function openAlum(i){const a=ALUM[i],H=HOUSES.find(x=>x.id===a[3]);
 modal(`<h2>${esc(a[2])}</h2><p class="tag">${H.e} ${H.n}</p><p style="font-size:20px">${a[4]}</p>`,[[`📍 Visit the ${H.n} common room`,()=>goRoute(H.loc)],['🧦 Ask Dobby',()=>askNick('What is '+H.n+' known for?'),1]])}
function counters(){$$('#v-home [data-n]').forEach(el=>{if(el.dataset.d)return;el.dataset.d=1;const n=+el.dataset.n;let t0=null;const step=t=>{t0=t0||t;const p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)})}
function refreshHome(){const v=$('#v-home');$$('.fd',v).forEach(f=>f.classList.toggle('mine',f.dataset.d===S.house));const b=$('[data-a=begin]',v);if(b)b.textContent=(S.house?'Continue your journey':'Begin your journey')+' ✦';const g=$('#hgreet');if(g)g.textContent=S.name?`Welcome back, ${S.name}.`:'Your first week, made magical.'}
function renderHome(){
 const v=$('#v-home');if(v.dataset.b){refreshHome();counters();return}v.dataset.b=1;
 v.innerHTML=`
 <section class="fb hero2" aria-label="Welcome"><h1 class="sr">Hogwarts School of Magic: the Marauder's Guide</h1><img class="bg" src="assets/hero.png" alt=""><img class="tt" src="assets/t_hero.png" alt="Hogwarts School of Magic"><div class="cta"><p><span id="hgreet"></span> Your map, your elf guide, your quests.</p><button class="amber" data-a="begin"></button></div></section>
 <div class="tools rv">${[['map','🗺️',"Marauder's Map",'Routes & footprints'],['ask','🧦','Ask Dobby','Your elf guide'],['subjects','🎓','Subjects','Find your calling'],['life','🏡','Houses & Day','Live timetable'],['lore','📖','Lore','Spells & creatures'],['quests','🏅','Quests','Points & badges']].map(t=>`<button class="tool" data-a="go" data-d="${t[0]}"><span class="i">${t[1]}</span>${t[2]}<small>${t[3]}</small></button>`).join('')}</div>
 <section class="fb sec" style="overflow:hidden"><h2 class="sr">Founders of Hogwarts</h2><img class="ttl rv" src="assets/t_founders.png" alt="Founders of Hogwarts"><img class="castleL" src="assets/castle.png" alt=""><div class="founders">${FOUNDERS.map(([im,hid,nm])=>{const H=HOUSES.find(x=>x.id===hid);return `<button class="fd rv" data-a="house" data-d="${hid}" style="--hc:${H.c2===H.c?H.c:H.c}"><img src="assets/${im}.png" alt="${nm}" loading="lazy"><b>${nm}</b><small>${H.e} ${H.n} · ${esc(H.traits.split(',')[0])}</small></button>`}).join('')}</div></section>
 <section class="fb legacy"><div class="in2"><div><h2 class="sr">Over 1000 years of legacy</h2><img class="rv" src="assets/t_legacy.png" alt="Over 1000 years of legacy"></div><div class="rv"><p>Nestled in the Highlands of Scotland, Hogwarts Castle is surrounded by lawns, gardens, the Black Lake and the Forbidden Forest. It has the Astronomy, Ravenclaw and Gryffindor Towers, and 142 staircases that love to change position. Ancient magic keeps it invisible to Muggles. So how do you find your way? That is what this guide is for.</p><div class="stats"><div class="stat"><b data-n="${LOCS.length}">0</b><span>places mapped</span></div><div class="stat"><b data-n="${SUBJ.length}">0</b><span>subjects</span></div><div class="stat"><b data-n="${LORE.length}">0</b><span>lore entries</span></div><div class="stat"><b data-n="${BADGES.length}">0</b><span>badges to earn</span></div></div></div></div></section>
 <section class="fb sec curr"><h2 class="sr">Educational Curriculum</h2><img class="ttl rv" src="assets/t_curr.png" alt="Educational Curriculum" style="max-width:min(640px,86%)"><div class="doors">${SUBJ.map(s=>`<button class="door rv" data-a="subj" data-d="${s.id}" aria-label="${esc(s.n)}"><img class="dr" src="assets/door.png" alt=""><span class="nm">${esc(s.n.replace('Care of Magical Creatures','Magical Creatures').replace('Defence Against the Dark Arts','Dark Arts Defence'))}</span>${ICONS[s.id]?`<img class="st" src="assets/${ICONS[s.id]}" alt="">`:`<span class="em2">${EM2[s.id]||s.e}</span>`}</button>`).join('')}</div><p class="rv" style="margin-top:34px;color:#ecd5a3">Open a door to meet the subject, find its classroom and see the route.</p></section>
 <section class="fb sec"><h2 class="sr">Magical faculties of the wizarding school</h2><img class="ttl rv" src="assets/t_fac.png" alt="Magical faculties of the wizarding school" style="max-width:min(640px,90%)"><div class="facs">${FACS.map(f=>`<button class="fc rv" data-a="fac" data-d="${f[1]}"><span class="ph"><img src="assets/${f[0]}.png" alt="${f[1]}" loading="lazy"></span><b>${f[1]}</b><small>${f[2]}</small><em>${f[3]}</em></button>`).join('')}</div><p class="rv" style="margin-top:26px;color:#ecd5a3">Tap a professor and Dobby will tell you who they are and where to find them.</p></section>
 <section class="fb sec"><h2 class="sr">Notable alumni</h2><div class="alum"><img class="vt rv" src="assets/t_alumni.png" alt="Notable Alumni"><div class="ag">${ALUM.map((a,i)=>`<button class="al rv" data-a="alum" data-d="${i}"><img src="assets/${a[0]}.${a[1]}" alt="${a[2]}" loading="lazy"><b>${a[2]}</b><small>${HOUSES.find(x=>x.id===a[3]).e} ${cap(a[3])}</small></button>`).join('')}<div class="rv" style="align-self:center;font-family:var(--fh);font-size:28px;color:var(--tan)">and many more...</div></div></div></section>
 <section class="fb join"><div class="in3"><div><h2>Come and join the Wizarding World. Your owl is waiting.</h2><img class="broom" src="assets/broom.png" alt=""></div><form id="jf"><input id="jn" placeholder="Your name" aria-label="Your name" maxlength="20" value="${esc(S.name||'')}"><input type="email" placeholder="E-mail (optional owl address)" aria-label="E-mail"><span class="btnw"><button class="amber" style="font-size:24px;padding:10px 46px">Get Started</button><img class="scarf" src="assets/scarf.png" alt=""></span></form></div></section>
 <footer class="fb ft">The Marauder's Guide to Hogwarts · I solemnly swear that I am up to no good.</footer>`;
 v.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a,d=t.dataset.d;
  if(a==='begin'){if(S.house)show('map');else{$('#gate').classList.remove('off');gateLetter()}}
  else if(a==='go')show(d);else if(a==='house')openHouse(d);else if(a==='subj')openSubj(d);
  else if(a==='fac')askNick('Who is '+d+'?');else if(a==='alum')openAlum(+d)});
 $('#jf').onsubmit=e=>{e.preventDefault();startQuest($('#jn').value.trim())};
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.querySelector('[data-n]'))counters()}}),{threshold:.1});$$('.rv',v).forEach((x,i)=>{x.style.transitionDelay=(i%4)*.08+'s';io.observe(x)})}else $$('.rv',v).forEach(x=>x.classList.add('in'));
 refreshHome();
}
/* ============ BOOT ============ */
buildNav();hud();
if(S.house)document.documentElement.dataset.house=S.house;
show(location.hash.slice(1)||'home');
if(S.name&&S.house)$('#gate').classList.add('off');else gateLetter();

/* ============ MUSIC (Hedwig's Theme) ============ */
(function(){
 const au=$('#bgm'),btn=$('#snd'),TARGET=.45;let want=!S.muted,fade;
 const paint=()=>{const on=want&&!au.paused;btn.textContent=on?'🔊':'🔇';btn.classList.toggle('off',!on)};
 const fadeIn=()=>{clearInterval(fade);fade=setInterval(()=>{au.volume=Math.min(TARGET,au.volume+.03);if(au.volume>=TARGET)clearInterval(fade)},120)};
 const start=()=>{if(!want)return Promise.resolve();au.volume=0;return au.play().then(()=>{fadeIn();paint()})};
 // browsers only allow sound after a user gesture: try now, then on the first click/tap/key
 const unlock=()=>{start().then(()=>{['pointerdown','keydown','touchstart'].forEach(ev=>removeEventListener(ev,unlock,true))}).catch(()=>{})};
 start().catch(()=>{['pointerdown','keydown','touchstart'].forEach(ev=>addEventListener(ev,unlock,true))});
 btn.addEventListener('click',e=>{e.stopPropagation();if(au.paused||!want){want=true;S.muted=0;au.volume=0;au.play().then(()=>{fadeIn();paint()}).catch(paint)}else{want=false;S.muted=1;au.pause()}save();paint()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)au.pause();else if(want)au.play().catch(()=>{});paint()});
 au.addEventListener('play',paint);au.addEventListener('pause',paint);paint();
})();
})();
