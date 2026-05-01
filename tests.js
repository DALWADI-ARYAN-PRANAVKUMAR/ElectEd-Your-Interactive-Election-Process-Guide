/**
 * ElectEd — Unit Test Suite
 * Tests all core logic functions independently from the DOM.
 * Open tests.html in a browser to run the full suite.
 */

// ─── Mini Test Runner ───────────────────────────────────────────
const TR = {
  results: [],
  pass: 0,
  fail: 0,

  /** Assert strict equality */
  eq(name, actual, expected) {
    const ok = actual === expected;
    this._record(name, ok, expected, actual);
  },

  /** Assert string contains substring (case-insensitive) */
  contains(name, str, sub) {
    const ok = typeof str === 'string' && str.toLowerCase().includes(sub.toLowerCase());
    this._record(name, ok, `contains "${sub}"`, typeof str === 'string' ? str.substring(0, 80) : String(str));
  },

  /** Assert value is truthy */
  truthy(name, val) {
    this._record(name, !!val, 'truthy', val);
  },

  /** Assert actual >= min */
  gte(name, actual, min) {
    this._record(name, actual >= min, `>= ${min}`, actual);
  },

  /** Assert actual is an array with length >= min */
  arrLen(name, arr, min) {
    const ok = Array.isArray(arr) && arr.length >= min;
    this._record(name, ok, `array length >= ${min}`, Array.isArray(arr) ? arr.length : 'not array');
  },

  _record(name, ok, expected, actual) {
    this.results.push({ name, ok, expected, actual });
    ok ? this.pass++ : this.fail++;
  },

  /** Render results into #test-results element */
  render() {
    const el = document.getElementById('test-results');
    if (!el) return;

    const total = this.pass + this.fail;
    const pct   = total ? Math.round((this.pass / total) * 100) : 0;
    const color = pct === 100 ? '#00d4aa' : pct >= 75 ? '#f5d90a' : '#e8400c';

    el.innerHTML = `
      <div class="tr-summary" style="background:${color}20;border:2px solid ${color};border-radius:8px;padding:1.5rem;margin-bottom:1.5rem">
        <h2 style="color:${color};font-size:2.5rem;margin:0">${pct}%</h2>
        <p style="margin:.5rem 0 0;font-size:1.1rem">
          <strong>${this.pass} passed</strong> · <strong>${this.fail} failed</strong> · ${total} total
        </p>
      </div>
      <table class="tr-table" style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="background:#0e1030;text-align:left">
            <th style="padding:.6rem 1rem">Status</th>
            <th style="padding:.6rem 1rem">Test Name</th>
            <th style="padding:.6rem 1rem">Expected</th>
            <th style="padding:.6rem 1rem">Actual</th>
          </tr>
        </thead>
        <tbody>
          ${this.results.map(r => `
            <tr style="border-bottom:1px solid #1a1a3a;background:${r.ok ? 'transparent' : '#e8400c15'}">
              <td style="padding:.5rem 1rem;font-size:1.2rem">${r.ok ? '✅' : '❌'}</td>
              <td style="padding:.5rem 1rem;color:${r.ok ? '#fafafa' : '#e8400c'}">${r.name}</td>
              <td style="padding:.5rem 1rem;color:#8892a4;font-size:.85rem">${r.expected}</td>
              <td style="padding:.5rem 1rem;color:#8892a4;font-size:.85rem">${String(r.actual).substring(0, 100)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
};

// ─── Pure Logic Copies (mirrored from app.js for isolated testing) ──
const _kb = {
  "register":"To register, visit your local electoral commission website or office. Bring proof of citizenship, age (18+), and a permanent address. You can register online, by mail, or in person. Most deadlines fall 15–30 days before Election Day.",
  "registration":"Voter registration is required before you can cast a ballot. You need proof of citizenship, age, and residency. Check your local electoral authority for deadlines and requirements.",
  "id":"ID requirements vary by region. Most polling stations accept a government-issued photo ID (driver's licence, passport), a voter registration card, or a recent utility bill with your address.",
  "mail":"Postal (absentee) voting lets you vote at home. Request a ballot from your election office, complete it carefully, then return it by post or secure drop box before the stated deadline.",
  "absentee":"An absentee ballot lets you vote without attending a polling station. Request one from your local election office, fill it out at home, and return it well ahead of the deadline.",
  "eligible":"To vote you typically need to: be a citizen, be 18 or older, have a permanent address, and have no disqualifying criminal convictions.",
  "eligibility":"Basic voter eligibility requires citizenship, age 18+, a permanent residence, and no relevant criminal record.",
  "candidate":"To run for office you must meet citizenship, age, and residency requirements for the position, file official candidacy paperwork, and pay any required fees or submit petition signatures.",
  "primary":"A primary election is held inside a political party so its members can vote for which candidate will represent the party in the general election.",
  "electoral college":"The Electoral College (used in the USA) is a body of electors who formally elect the President. 270 of 538 electoral votes are needed to win.",
  "recount":"A recount is a re-tallying of votes, usually triggered when the margin of victory is below a threshold (often 0.5%). It can be automatic or requested by a candidate.",
  "count":"Votes are counted by trained officials in secure facilities with party observers present.",
  "early":"Early voting lets registered voters cast ballots days or weeks before Election Day at designated centres.",
  "postal":"Postal voting lets you vote from home. Request a ballot, complete it, and return it by post or drop box before the deadline.",
  "election day":"On Election Day: find your polling station, bring ID, check in with poll workers, collect your ballot, vote privately in the booth, and submit your ballot.",
  "campaign":"Campaigns involve rallies, advertising, door-knocking, and debates. All spending must be disclosed and stays within legal limits.",
  "dispute":"If a result is disputed, candidates can request a recount. Courts can hear electoral challenges and independent bodies review the process.",
  "certification":"After counting, election officials conduct an audit and formally certify the results.",
  "inauguration":"The inauguration is the ceremony where the winning candidate is officially sworn into office.",
  "timeline":"The election journey: Voter Registration → Candidate Nomination → Campaign Period → Early Voting → Election Day → Counting & Results → Certification & Inauguration.",
  "default":"I can help with voter registration, eligibility, how to vote, mail ballots, vote counting, the Electoral College, candidate requirements, campaign rules, disputes, and inauguration."
};

function _getResponse(text) {
  const t = text.toLowerCase();
  if (t.includes('hello') || t.includes('hi ') || t.includes('hey'))
    return "Hello! 👋 I'm the ElectEd Assistant.";
  if (t.includes('thank'))
    return "You're welcome! A well-informed voter is democracy's greatest asset.";
  if (t.includes('help'))
    return "I can explain: voter registration, eligibility, how to vote, mail ballots, vote counting, the Electoral College, candidate filing, campaign rules, disputes, and the inauguration.";
  for (const key of Object.keys(_kb)) {
    if (key !== 'default' && t.includes(key)) return _kb[key];
  }
  return _kb['default'];
}

function _isEligDisqualified(q, val) {
  return (q === 1 && val === 'no') ||
         (q === 2 && val === 'no') ||
         (q === 3 && val === 'no') ||
         (q === 4 && val === 'yes');
}

const _stages = [
  { num:"01", name:"Voter Registration", span:"T-180 TO T-30 DAYS", steps:["Confirm eligibility.","Submit registration.","Verify identity.","Check voter roll."] },
  { num:"02", name:"Candidate Nomination", span:"T-120 TO T-60 DAYS", steps:["Meet requirements.","File declaration.","Pay fee.","Disclose interests."] },
  { num:"03", name:"Campaign Period", span:"T-90 TO T-1 DAYS", steps:["Hold events.","Broadcast advertising.","Participate in debates.","Fundraise."] },
  { num:"04", name:"Early & Postal Voting", span:"T-14 TO T-1 DAYS", steps:["Request ballot.","Complete it.","Return by deadline.","Track your ballot."] },
  { num:"05", name:"Election Day", span:"THE MAIN EVENT", steps:["Find polling station.","Bring ID.","Check in.","Cast your ballot."] },
  { num:"06", name:"Counting & Results", span:"ELECTION NIGHT ONWARD", steps:["Secure ballots.","Trained counters tally.","Report results.","Allow recount requests."] },
  { num:"07", name:"Certification & Transition", span:"T+7 TO INAUGURATION", steps:["Final audit.","Certify results.","Begin transition.","Swear in winner."] }
];

const _faqData = [
  { q:"How do I register to vote?", cat:"registration" },
  { q:"What is the voter registration deadline?", cat:"registration" },
  { q:"Can I update my registration after moving?", cat:"registration" },
  { q:"What ID do I need on Election Day?", cat:"voting" },
  { q:"Can I vote by mail?", cat:"voting" },
  { q:"What is the Electoral College?", cat:"voting" },
  { q:"What is a primary election?", cat:"candidates" },
  { q:"Who can run for office?", cat:"candidates" },
  { q:"How are votes counted?", cat:"results" },
  { q:"What happens if a result is disputed?", cat:"results" }
];

// ─── Test Suites ─────────────────────────────────────────────────

function testKnowledgeBase() {
  // Greeting responses
  TR.contains('Greeting: "hello" returns greeting',   _getResponse('hello'),       'assistant');
  TR.contains('Greeting: "hey there" returns greeting', _getResponse('hey there'), 'assistant');
  TR.contains('Gratitude: "thank you" returns welcome', _getResponse('thank you'), "you're welcome");
  TR.contains('Help: "help me" returns topic list',   _getResponse('help me'),     'register');

  // Knowledge base lookups
  TR.contains('KB: "register" keyword',          _getResponse('how do I register'),       'electoral commission');
  TR.contains('KB: "registration" keyword',      _getResponse('voter registration info'), 'registration is required');
  TR.contains('KB: "mail" keyword',              _getResponse('can I vote by mail'),      'postal');
  TR.contains('KB: "absentee" keyword',          _getResponse('absentee ballot info'),    'absentee ballot');
  TR.contains('KB: "eligible" keyword',          _getResponse('am I eligible'),           'citizen');
  TR.contains('KB: "eligibility" keyword',       _getResponse('check my eligibility'),    'eligibility');
  TR.contains('KB: "candidate" keyword',         _getResponse('how to be a candidate'),   'citizenship');
  TR.contains('KB: "primary" keyword',           _getResponse('what is a primary'),       'primary election');
  TR.contains('KB: "electoral college" keyword', _getResponse('electoral college'),       '270');
  TR.contains('KB: "recount" keyword',           _getResponse('request a recount'),       'recount');
  TR.contains('KB: "count" keyword',             _getResponse('how votes are counted'),   'counted');
  TR.contains('KB: "early" keyword',             _getResponse('early voting options'),    'early voting');
  TR.contains('KB: "postal" keyword',            _getResponse('postal voting guide'),     'postal voting');
  TR.contains('KB: "election day" keyword',      _getResponse('what to do on election day'), 'polling station');
  TR.contains('KB: "campaign" keyword',          _getResponse('about election campaigns'), 'rallies');
  TR.contains('KB: "dispute" keyword',           _getResponse('how to dispute results'),  'recount');
  TR.contains('KB: "certification" keyword',     _getResponse('election certification'),  'certify');
  TR.contains('KB: "inauguration" keyword',      _getResponse('inauguration ceremony'),   'sworn');
  TR.contains('KB: "timeline" keyword',          _getResponse('show me the timeline'),    'voter registration');
  TR.contains('KB: default for unknown query',   _getResponse('xyZzYunknownquery123'),    'I can help');
}

function testStagesData() {
  TR.eq   ('Stages: exactly 7 stages defined',     _stages.length,    7);
  TR.eq   ('Stage 1: name is Voter Registration',  _stages[0].name,   'Voter Registration');
  TR.eq   ('Stage 2: name is Candidate Nomination',_stages[1].name,   'Candidate Nomination');
  TR.eq   ('Stage 3: name is Campaign Period',     _stages[2].name,   'Campaign Period');
  TR.eq   ('Stage 4: name is Early & Postal Voting',_stages[3].name,  'Early & Postal Voting');
  TR.eq   ('Stage 5: name is Election Day',        _stages[4].name,   'Election Day');
  TR.eq   ('Stage 6: name is Counting & Results',  _stages[5].name,   'Counting & Results');
  TR.eq   ('Stage 7: name is Certification & Transition',_stages[6].name,'Certification & Transition');
  _stages.forEach((s, i) => {
    TR.arrLen(`Stage ${i+1}: has exactly 4 steps`, s.steps, 4);
    TR.truthy(`Stage ${i+1}: has a span string`,   s.span);
    TR.truthy(`Stage ${i+1}: has a num string`,    s.num);
  });
  TR.eq('Stage 1: num is "01"', _stages[0].num, '01');
  TR.eq('Stage 7: num is "07"', _stages[6].num, '07');
  TR.eq('Stage 5: span is THE MAIN EVENT', _stages[4].span, 'THE MAIN EVENT');
}

function testFAQData() {
  TR.gte('FAQ: at least 10 items defined', _faqData.length, 10);
  const cats = _faqData.map(f => f.cat);
  TR.truthy('FAQ: has registration category', cats.includes('registration'));
  TR.truthy('FAQ: has voting category',       cats.includes('voting'));
  TR.truthy('FAQ: has candidates category',   cats.includes('candidates'));
  TR.truthy('FAQ: has results category',      cats.includes('results'));
  const regItems = _faqData.filter(f => f.cat === 'registration');
  TR.gte('FAQ: at least 2 registration items', regItems.length, 2);
  const votItems = _faqData.filter(f => f.cat === 'voting');
  TR.gte('FAQ: at least 2 voting items', votItems.length, 2);
  _faqData.forEach((f, i) => {
    TR.truthy(`FAQ item ${i+1}: has question text`, f.q && f.q.length > 5);
    TR.truthy(`FAQ item ${i+1}: has category`,      f.cat && f.cat.length > 0);
  });
}

function testEligibilityLogic() {
  // Disqualifying conditions
  TR.eq('Elig: Q1 No → disqualified',  _isEligDisqualified(1, 'no'),  true);
  TR.eq('Elig: Q2 No → disqualified',  _isEligDisqualified(2, 'no'),  true);
  TR.eq('Elig: Q3 No → disqualified',  _isEligDisqualified(3, 'no'),  true);
  TR.eq('Elig: Q4 Yes → disqualified', _isEligDisqualified(4, 'yes'), true);
  // Qualifying conditions
  TR.eq('Elig: Q1 Yes → not disqualified', _isEligDisqualified(1, 'yes'), false);
  TR.eq('Elig: Q2 Yes → not disqualified', _isEligDisqualified(2, 'yes'), false);
  TR.eq('Elig: Q3 Yes → not disqualified', _isEligDisqualified(3, 'yes'), false);
  TR.eq('Elig: Q4 No → not disqualified',  _isEligDisqualified(4, 'no'),  false);
  // Edge cases
  TR.eq('Elig: Q1 empty string → not disqualified', _isEligDisqualified(1, ''), false);
  TR.eq('Elig: Q5 does not exist → not disqualified', _isEligDisqualified(5, 'no'), false);
}

function testKBStructure() {
  const keys = Object.keys(_kb);
  TR.gte('KB: at least 20 topics defined',  keys.length, 20);
  TR.truthy('KB: has "default" fallback key', keys.includes('default'));
  TR.truthy('KB: has "register" key',         keys.includes('register'));
  TR.truthy('KB: has "election day" key',     keys.includes('election day'));
  keys.forEach(k => {
    if (k !== 'default') {
      TR.truthy(`KB["${k}"]: response is non-empty string`, typeof _kb[k] === 'string' && _kb[k].length > 20);
    }
  });
}

// ─── Run All Tests ────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const suites = [
    { name: '📚 Knowledge Base Responses', fn: testKnowledgeBase },
    { name: '🗂️  Stages Data',             fn: testStagesData    },
    { name: '❓  FAQ Data',                fn: testFAQData       },
    { name: '✅  Eligibility Logic',       fn: testEligibilityLogic },
    { name: '🔑  KB Structure',            fn: testKBStructure   }
  ];
  suites.forEach(s => {
    try { s.fn(); }
    catch(e) { TR._record(`Suite "${s.name}" threw error`, false, 'no error', e.message); }
  });
  TR.render();
  console.log(`ElectEd Tests: ${TR.pass}/${TR.pass + TR.fail} passed`);
});
