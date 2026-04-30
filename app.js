// ===== STAGE DATA =====
const stages = [
  { num:"01", name:"Voter Registration", span:"T-180 TO T-30 DAYS",
    desc:"Eligible citizens enroll on the official electoral roll so they can cast a ballot.",
    steps:["Confirm eligibility (age, citizenship, residency).","Submit registration online, by mail, or in person.","Verify identity documents with the election authority.","Check the public voter roll before the deadline."]
  },
  { num:"02", name:"Candidate Nomination", span:"T-120 TO T-60 DAYS",
    desc:"Political parties and independents formally declare candidates and file the required paperwork.",
    steps:["Meet age, citizenship, and residency requirements.","File official candidacy declaration with the electoral body.","Pay the filing fee or submit required voter signatures.","Disclose financial interests and party affiliation."]
  },
  { num:"03", name:"Campaign Period", span:"T-90 TO T-1 DAYS",
    desc:"Candidates seek voter support through speeches, advertising, debates, and community outreach.",
    steps:["Hold public rallies, town halls, and community events.","Broadcast TV, radio, and digital advertising.","Participate in official televised debates.","Fundraise within legally permitted limits and disclose donations."]
  },
  { num:"04", name:"Early & Postal Voting", span:"T-14 TO T-1 DAYS",
    desc:"Registered voters who cannot attend on Election Day cast ballots early or by post.",
    steps:["Request an absentee or postal ballot from the election office.","Complete the ballot carefully at home or at an early voting site.","Return by post or drop box before the stated deadline.","Track your mail ballot to confirm it was received."]
  },
  { num:"05", name:"Election Day", span:"THE MAIN EVENT",
    desc:"Polling stations open and registered voters cast their official ballots in person.",
    steps:["Find your assigned polling station via your registration card.","Bring required photo ID or other accepted documents.","Check in with poll workers and receive your ballot.","Mark your ballot privately and deposit it in the secure box."]
  },
  { num:"06", name:"Counting & Results", span:"ELECTION NIGHT ONWARD",
    desc:"Ballots are tallied in secure facilities with party observers present and results are reported publicly.",
    steps:["Polls close — all ballots are secured and transported.","Trained counters tally votes under observation.","Unofficial results are reported as counting progresses.","Candidates may request a recount if the margin is narrow."]
  },
  { num:"07", name:"Certification & Transition", span:"T+7 TO INAUGURATION",
    desc:"Election officials certify final results and the winning candidate prepares to take office.",
    steps:["Election authority conducts a final audit of all ballots.","Official results are certified and publicly declared.","Outgoing officials begin the formal transition process.","The elected official is sworn in at the inauguration ceremony."]
  }
];

// ===== FAQ DATA =====
const faqData = [
  { q:"How do I register to vote?", a:"Visit your local electoral commission website or office. You'll need proof of citizenship, age (18+), and a permanent address. Registration can be done online, by mail, or in person.", cat:"registration" },
  { q:"What is the voter registration deadline?", a:"Most regions require registration 15–30 days before Election Day. Some allow same-day registration. Always check your local electoral authority for the exact cutoff date.", cat:"registration" },
  { q:"Can I update my registration after moving?", a:"Yes — if you move, update your registration. Voting with a stale address may mean you're sent to the wrong polling station or your ballot is challenged.", cat:"registration" },
  { q:"What ID do I need on Election Day?", a:"Requirements vary. Most regions accept a government-issued photo ID (driver's licence, passport), voter registration card, or a utility bill showing your address.", cat:"voting" },
  { q:"Can I vote by mail?", a:"Many regions offer absentee or postal voting. Request the ballot in advance, complete it at home, and return it by post or drop box before the deadline.", cat:"voting" },
  { q:"What is the Electoral College?", a:"Used in the USA, the Electoral College is a body of state-level electors who formally elect the President. Citizens vote for electors who then cast the official presidential votes. 270 of 538 electoral votes are needed to win.", cat:"voting" },
  { q:"What is a primary election?", a:"A primary is held within a political party so members can choose which candidate will represent the party in the general election.", cat:"candidates" },
  { q:"Who can run for office?", a:"Candidates must generally be citizens, meet minimum age requirements, have a permanent residence, and file official candidacy papers with any required fees or petition signatures.", cat:"candidates" },
  { q:"How are votes counted?", a:"Ballots are tallied in secure facilities by trained officials with party observers present. Electronic machines or hand counts are used, and results are verified before being certified.", cat:"results" },
  { q:"What happens if a result is disputed?", a:"A candidate or party can request a recount if the margin is very close. Courts can also hear electoral challenges. Independent observer bodies review the process.", cat:"results" },
];

// ===== KNOWLEDGE BASE =====
const kb = {
  "register":"To register, visit your local electoral commission website or office. Bring proof of citizenship, age (18+), and a permanent address. You can register online, by mail, or in person. Most deadlines fall 15–30 days before Election Day.",
  "registration":"Voter registration is required before you can cast a ballot. You need proof of citizenship, age, and residency. Check your local electoral authority for deadlines and requirements.",
  "id":"ID requirements vary by region. Most polling stations accept a government-issued photo ID (driver's licence, passport), a voter registration card, or a recent utility bill with your address.",
  "mail":"Postal (absentee) voting lets you vote at home. Request a ballot from your election office, complete it carefully, then return it by post or secure drop box before the stated deadline.",
  "absentee":"An absentee ballot lets you vote without attending a polling station. Request one from your local election office, fill it out at home, and return it well ahead of the deadline.",
  "eligible":"To vote you typically need to: be a citizen, be 18 or older, have a permanent address, and have no disqualifying criminal convictions. Use our Eligibility Checker section above!",
  "eligibility":"Basic voter eligibility requires citizenship, age 18+, a permanent residence, and no relevant criminal record. Scroll up to our Eligibility Checker to find your status.",
  "candidate":"To run for office you must meet citizenship, age, and residency requirements for the position, file official candidacy paperwork, and pay any required fees or submit petition signatures.",
  "primary":"A primary election is held inside a political party so its members can vote for which candidate will represent the party in the general election.",
  "electoral college":"The Electoral College (used in the USA) is a body of electors who formally elect the President. Citizens vote for state electors, who then cast the official presidential votes. 270 of 538 electoral votes are needed to win.",
  "recount":"A recount is a re-tallying of votes, usually triggered when the margin of victory is below a threshold (often 0.5%). It can be automatic or requested by a candidate. Results rarely change significantly.",
  "count":"Votes are counted by trained officials in secure facilities with party observers present. Paper ballots are tallied by hand or machine; electronic votes are recorded automatically. Results are certified after verification.",
  "early":"Early voting lets registered voters cast ballots days or weeks before Election Day at designated centres. Check your local election calendar for exact dates.",
  "postal":"Postal voting lets you vote from home. Request a ballot, complete it, and return it by post or drop box before the deadline. Track your ballot online if your region offers tracking.",
  "election day":"On Election Day: find your polling station, bring ID, check in with poll workers, collect your ballot, vote privately in the booth, and submit your ballot. If you're in line when polls close, you still have the right to vote!",
  "campaign":"Campaigns involve rallies, advertising, door-knocking, and debates. Candidates communicate their platform to win votes. All spending must be disclosed and stays within legal limits.",
  "dispute":"If a result is disputed, candidates can request a recount. Courts can hear electoral challenges and independent bodies review the process. Certified results stand unless overturned by a legal ruling.",
  "certification":"After counting, election officials conduct an audit and formally certify the results. This process takes days to weeks and legal challenges can still be filed during this period.",
  "inauguration":"The inauguration is the ceremony where the winning candidate is officially sworn into office. It marks the beginning of their term and the peaceful transfer of power.",
  "timeline":"The election journey: Voter Registration → Candidate Nomination → Campaign Period → Early Voting → Election Day → Counting & Results → Certification & Inauguration. Scroll up to the Timeline section to explore each stage!",
  "default":"Great question! I can help with voter registration, eligibility, how to vote, mail ballots, how votes are counted, the Electoral College, candidate requirements, campaign rules, disputes, and inauguration. What would you like to know?"
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initHamburger();
  initStages();
  initEligibility();
  renderFAQ('all');
  initFAQCats();
  initChat();
  initScrollTop();
  initBallotCard();
  initScrollReveal();
});

// ===== PARTICLES =====
function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;
      width:${size}px;height:${size}px;
      background:rgba(${Math.random()>.5?'108,99,255':'0,212,170'},${Math.random()*.5+.15});
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      animation:particleRise ${Math.random()*7+5}s linear infinite;
      animation-delay:${Math.random()*5}s;opacity:0`;
    c.appendChild(p);
  }
  const s = document.createElement('style');
  s.textContent = `@keyframes particleRise{0%{transform:translateY(0) rotate(0);opacity:0}10%{opacity:1}90%{opacity:.5}100%{transform:translateY(-90vh) rotate(360deg);opacity:0}}`;
  document.head.appendChild(s);
}

// ===== NAVBAR =====
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('at-top', window.scrollY < 20);
  });
  nav.classList.add('at-top');
}

// ===== HAMBURGER =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ===== STAGES =====
function initStages() {
  document.querySelectorAll('.stab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderStage(parseInt(tab.dataset.stage));
    });
  });
  renderStage(0);
}

function renderStage(i) {
  const s = stages[i];
  document.getElementById('stageSpan').textContent = s.span;
  document.getElementById('stageTitle').textContent = s.name;
  document.getElementById('stageDesc').textContent = s.desc;
  const el = document.getElementById('stageSteps');
  el.innerHTML = '';
  s.steps.forEach((step, idx) => {
    const d = document.createElement('div');
    d.className = 'step-row';
    d.style.animationDelay = `${idx * 0.06}s`;
    d.innerHTML = `<span class="step-rn">${String(idx+1).padStart(2,'0')}</span><span class="step-rt">${step}</span>`;
    el.appendChild(d);
  });
  document.getElementById('askStageBtn').onclick = () => {
    document.getElementById('chatInput').value = `Tell me more about the ${s.name} stage.`;
    document.getElementById('assistant').scrollIntoView({ behavior:'smooth' });
    setTimeout(sendMessage, 500);
  };
}

// ===== ELIGIBILITY =====
let eligQ = 1;
function initEligibility() {
  document.querySelectorAll('.eq-opt').forEach(b => b.addEventListener('click', () => handleElig(+b.dataset.q, b.dataset.val)));
  document.getElementById('eligRestart').addEventListener('click', resetElig);
}
function handleElig(q, val) {
  const disq = (q===1&&val==='no')||(q===2&&val==='no')||(q===3&&val==='no')||(q===4&&val==='yes');
  setEligBar(q);
  if (disq) { showEligResult(false, q); return; }
  if (q < 4) {
    document.querySelector(`.elig-q[data-q="${q}"]`).classList.remove('active');
    document.querySelector(`.elig-q[data-q="${q+1}"]`).classList.add('active');
    setEligBar(q+1);
  } else { showEligResult(true, q); }
}
function setEligBar(q) { document.getElementById('eligFill').style.width = `${(q/4)*100}%`; }
function showEligResult(ok, q) {
  document.querySelector(`.elig-q[data-q="${q}"]`).classList.remove('active');
  setEligBar(4);
  const msgs = {
    1:'You must be 18 or older to vote. Once you reach that age, you can register!',
    2:'Voting is generally restricted to citizens. Some local elections may allow resident voting — check your local laws.',
    3:'A permanent address is usually required. Speak to your electoral authority about options.',
    4:'Some convictions restrict voting rights. Rights can often be restored after serving — check your local legislation.'
  };
  const r = document.getElementById('eligResult');
  r.classList.remove('hidden','ok');
  r.innerHTML = ok
    ? `<strong>✅ You appear eligible to vote!</strong>Make sure you're registered at your current address. Visit your local electoral commission to register or confirm your status.`
    : `<strong>ℹ️ You may not currently be eligible.</strong>${msgs[q]}`;
  if (ok) r.classList.add('ok');
  document.getElementById('eligRestart').classList.remove('hidden');
}
function resetElig() {
  eligQ = 1;
  document.querySelectorAll('.elig-q').forEach(q => q.classList.remove('active'));
  document.querySelector('.elig-q[data-q="1"]').classList.add('active');
  document.getElementById('eligResult').classList.add('hidden');
  document.getElementById('eligRestart').classList.add('hidden');
  setEligBar(1);
}

// ===== FAQ =====
function renderFAQ(cat) {
  const list = document.getElementById('faqList');
  list.innerHTML = '';
  (cat === 'all' ? faqData : faqData.filter(f => f.cat === cat)).forEach(item => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `<div class="faq-q" tabindex="0"><span>${item.q}</span><span class="faq-arr">⌄</span></div><div class="faq-a"><div class="faq-ai">${item.a}</div></div>`;
    el.querySelector('.faq-q').addEventListener('click', () => {
      const open = el.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) el.classList.add('open');
    });
    list.appendChild(el);
  });
}
function initFAQCats() {
  document.querySelectorAll('.fcat').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.fcat').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderFAQ(b.dataset.cat);
    });
  });
}

// ===== CHAT =====
function initChat() {
  const input = document.getElementById('chatInput');
  document.getElementById('chatSend').addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
  document.querySelectorAll('.sq').forEach(b => {
    b.addEventListener('click', () => { input.value = b.dataset.q; sendMessage(); });
  });
}
function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  hidePlaceholder();
  addMsg(text, 'user');
  input.value = '';
  const t = addTyping();
  setTimeout(() => { t.remove(); addMsg(getResponse(text), 'bot'); }, 700 + Math.random() * 400);
}
function hidePlaceholder() {
  const p = document.getElementById('chatPlaceholder');
  if (p) p.remove();
}
function addMsg(text, role) {
  const wrap = document.getElementById('chatMsgs');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = `<div class="msg-lbl">${role==='user'?'YOU':'ELECTED ASSISTANT'}</div><div class="msg-txt">${text}</div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}
function addTyping() {
  const wrap = document.getElementById('chatMsgs');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `<div class="msg-lbl">ELECTED ASSISTANT</div><div class="msg-txt"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}
function getResponse(text) {
  const t = text.toLowerCase();
  if (t.includes('hello')||t.includes('hi ')||t.includes('hey')) return "Hello! 👋 I'm the ElectEd Assistant. Ask me anything about elections — registration, voting, counting, or any stage of the process.";
  if (t.includes('thank')) return "You're welcome! A well-informed voter is democracy's greatest asset. What else can I help you understand?";
  if (t.includes('help')) return "I can explain: voter registration, eligibility, how to vote, mail ballots, vote counting, the Electoral College, candidate filing, campaign rules, disputes, and the inauguration. Just ask!";
  for (const key of Object.keys(kb)) {
    if (key !== 'default' && t.includes(key)) return kb[key];
  }
  return kb['default'];
}

// ===== BALLOT CARD INTERACTIVITY =====
function initBallotCard() {
  document.querySelectorAll('.bopt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.bopt').forEach(o => { o.classList.remove('selected'); o.querySelector('.brad').classList.remove('filled'); });
      opt.classList.add('selected');
      opt.querySelector('.brad').classList.add('filled');
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.elig-card, .chat-shell, .stats-bar, .faq-hd').forEach(el => {
    el.style.cssText += 'opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease';
    obs.observe(el);
  });
}

// ===== SCROLL TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}
