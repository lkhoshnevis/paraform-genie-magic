
export interface UserSession {
  id: string;
  roles: string[];
  pains: string[];
  created_at: string;
  demo_clicked: boolean;
}

export interface RoleTestimonial {
  company: string;
  role: string;
  outcome?: string;
  link?: string;
}

export interface PainSolution {
  title: string;
  description: string;
}

export const ROLE_OPTIONS = [
  'Senior',
  'C-Suite', 
  'Founding',
  'VP',
  'Engineering',
  'Sales',
  'Growth',
  'Design'
];

export const PAIN_OPTIONS = [
  'Long hiring periods',
  'Finding skill fit',
  'Finding culture fit',
  'Recruiters - quality of prospects',
  'Too much manual work',
  'Recruiters - too much oversight needed',
  'Recruiters - too expensive',
  'Job boards - too much sifting'
];

export const ROLE_TESTIMONIALS: Record<string, RoleTestimonial[]> = {
  'C-Suite': [
    {
      company: 'Monad',
      role: 'Founding Front-end Engineer',
      outcome: 'resulted in $82k in billing in the first month',
      link: 'https://www.paraform.com/blog/how-monad-hired-a-full-stack-engineering-team-with-paraform'
    },
    {
      company: 'Decagon',
      role: 'Founding Engineer',
      outcome: 'in under one month',
      link: 'https://www.paraform.com/blog/decagon'
    },
    {
      company: 'Carma',
      role: 'Founding Engineer',
      link: 'https://www.paraform.com/blog/how-carma-found-their-perfect-founding-engineer-on-paraform'
    },
    {
      company: 'Statics',
      role: 'Founding Engineer',
      outcome: 'in 28 days',
      link: 'https://www.paraform.com/blog/how-static-hired-founding-engineer-with-paraform'
    }
  ],
  'VP': [
    {
      company: 'Sailes',
      role: 'Staff Software Engineer',
      outcome: 'in 1 week'
    },
    {
      company: 'Hightouch',
      role: 'Engineering Leader, Distributed Systems',
      link: 'https://www.paraform.com/blog/hightouch'
    }
  ],
  'Senior': [
    {
      company: 'Aspire',
      role: 'Senior Software Engineer (Full Stack)',
      outcome: 'in 1 week'
    },
    {
      company: 'Traba',
      role: 'Senior Software Engineer (Backend)',
      outcome: 'in 1 month'
    },
    {
      company: 'Explo',
      role: 'Senior Software Engineer'
    },
    {
      company: 'Magna',
      role: 'Senior Software Engineer'
    }
  ],
  'Founding': [
    {
      company: 'Monad',
      role: 'Founding Front-end Engineer',
      outcome: 'resulted in $82k in billing in the first month',
      link: 'https://www.paraform.com/blog/how-monad-hired-a-full-stack-engineering-team-with-paraform'
    },
    {
      company: 'Decagon',
      role: 'Founding Engineer',
      outcome: 'in under one month',
      link: 'https://www.paraform.com/blog/decagon'
    },
    {
      company: 'Carma',
      role: 'Founding Engineer',
      link: 'https://www.paraform.com/blog/how-carma-found-their-perfect-founding-engineer-on-paraform'
    },
    {
      company: 'Statics',
      role: 'Founding Engineer',
      outcome: 'in 28 days',
      link: 'https://www.paraform.com/blog/how-static-hired-founding-engineer-with-paraform'
    }
  ],
  'Engineering': [
    {
      company: 'Hightouch',
      role: 'Engineering Leader, Distributed Systems',
      link: 'https://www.paraform.com/blog/hightouch'
    },
    {
      company: 'Vellum',
      role: 'Two Full Stack Engineers (incl. Frontend/Fullstack)',
      outcome: 'in one month',
      link: 'https://www.paraform.com/blog/how-vellum-hires-diverse-engineering-talent-to-support-their-growth'
    }
  ],
  'Sales': [
    {
      company: 'Atomus',
      role: 'Sales Development Representative (SDR)',
      outcome: 'in 2 weeks',
      link: 'https://www.paraform.com/blog/how-atomus-hires-the-best-sales-talent'
    },
    {
      company: 'Decagon',
      role: 'Founding Account Executive',
      outcome: 'in under one month',
      link: 'https://www.paraform.com/blog/decagon'
    }
  ],
  'Growth': [
    {
      company: 'Pylon',
      role: 'Growth Marketer',
      outcome: 'in 10 days',
      link: 'https://www.paraform.com/blog/how-anna-malayan-placed-a-founding-marketer-in-10-days'
    },
    {
      company: 'Keeper',
      role: 'Head of Marketing',
      outcome: 'in 3 weeks',
      link: 'https://www.paraform.com/blog/how-keeper-hired-their-head-of-marketing-in-3-weeks-on-paraform'
    }
  ],
  'Design': [
    {
      company: 'Beam',
      role: 'Mechanical Design Engineer',
      outcome: 'in 3 weeks',
      link: 'https://www.paraform.com/blog/how-beam-hired-their-mechanical-design-engineer'
    }
  ]
};

export const PAIN_SOLUTIONS: Record<string, PainSolution> = {
  'Long hiring periods': {
    title: '🕒 Long hiring periods',
    description: 'Dragging out hiring for weeks or months kills startup momentum—every unfilled role stalls product, growth, or fundraising. Paraform cuts time-to-hire to ~26 days by letting multiple expert recruiters work your job in parallel as a bounty. All communication is centralized in Slack, and candidates come pre-screened and ready.'
  },
  'Finding skill fit': {
    title: '🎯 Finding skill fit',
    description: 'Mis-hires with weak technical or role alignment set teams back and waste cash. Paraform assigns recruiters specialized in the exact function you\'re hiring for—plus integrates with your ATS and uses structured pre-screen Qs so only qualified, high-signal candidates hit your desk. ~70% of submissions get interviews. This model has unusually worked for specialized, hard to find talent, such as scientists, "10x engineers, Forward Deployment, and Chief positions.'
  },
  'Finding culture fit': {
    title: '🧬 Finding culture fit',
    description: 'Hiring someone with the wrong energy or mindset poisons team dynamics and morale. Paraform uses async calibration loops, shared candidate Q&A logs, and founder-recruiter chat channels to align on soft filters early—like pace, mission buy-in, and communication style—so cultural red flags don\'t get through.'
  },
  'Recruiters - quality of prospects': {
    title: '💩 Recruiters - quality of prospects',
    description: 'Getting spammed with low-quality resumes wastes time and trust. Paraform only allows vetted recruiters with niche domain experience to claim your job, and they must pass a quality bar or get removed. You get fewer but better candidates—pre-screened with real justification, not just buzzwords.'
  },
  'Too much manual work': {
    title: '🛠️ Too much manual work + scaling issues',
    description: 'Founders shouldn\'t be digging through resumes, writing outreach, or coordinating interviews—it pulls focus from building and horrible for scaling. Paraform automates sourcing, outreach, resume vetting, and scheduling. You review centralized candidate profiles with notes, answers, and activity logs—all in one workspace. It also flexibly scales up or down as needed, similar to a "WeWork" model where you only pay if you hire. This means using recruiter networks without the commitment of hiring full-time recruiters, which is crucial for dynamic growth stages.'
  },
  'Recruiters - too much oversight needed': {
    title: '🔍 Recruiters - too much oversight needed',
    description: 'Managing external recruiters is usually a slow, high-touch process with endless back-and-forth. Paraform replaces that with async workflows, shared docs, and Slack integration—so you give feedback once, and it syncs across everyone working your role. No check-ins, no duplicate convos.'
  },
  'Recruiters - too expensive': {
    title: '💸 Recruiters - too expensive',
    description: 'You pay thousands for one recruiter\'s bandwidth and cross your fingers—bad ROI if they miss. Paraform costs 35–40% less than agencies and gives you access to a pool of recruiters at once after a small listing fee. It\'s pay-per-hire, no retainers, and higher throughput.'
  },
  'Job boards - too much sifting': {
    title: '🧹 Job boards - too much sifting',
    description: 'You post, wait, then drown in noise—most inbound applicants are unqualified. Paraform skips job boards entirely. Your role is actively sourced by real recruiters using tools like Apollo, HireEZ, and their own private networks. Every candidate is hand-picked and pre-screened before reaching you.'
  }
};
