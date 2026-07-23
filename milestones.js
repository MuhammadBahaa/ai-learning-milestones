/* =============================================================
   YOUR MILESTONES LIVE HERE — this is the only file you edit.
   Add new entries at the BOTTOM of the list (newest last).

   Copy this template, paste it just above the closing ]; and
   fill it in:

   {
     title: 'What you achieved',
     date: '23 Jul 2026',            // day is optional: 'Jul 2026' works too
     category: 'LLMs',               // any short label you like
     description: 'One or two sentences about what you did and learned.',
     skills: ['Skill A', 'Skill B'], // [] if none
     resources: [                    // [] if none
       { label: 'GitHub repo', url: 'https://github.com/...' },
     ],
     cvWorthy: false,                // true = gold ★ CV-worthy badge
   },

   Optional per entry: status: 'done' | 'progress' | 'planned' — adds a
   status pill ('planned' renders dimmed). Omitted = plain milestone.
   ============================================================= */

window.CONFIG = {
  accentColor: '#8B6CFF', // designer options: '#8B6CFF' | '#FF6B4A' | '#2FD6A0' | '#FF4D9D'
  newestFirst: false,     // true = show the latest milestone at the top
};

window.MILESTONES = [
  {
    title: 'AI Agent as shortcut',
    date: '2025 - 2026',
    category: 'Foundations',
    description: 'Used AI assistants — Copilot, Gemini and ChatGPT — as day-to-day shortcuts for code and answers, before thinking in workflows and agents.',
    skills: ['Copilot', 'Gemini', 'ChatGPT'],
    resources: [],
    cvWorthy: false,
  },
  {
    title: 'Context awareness',
    date: 'Jan 2026 - Apr 2026',
    category: 'Foundations',
    description: 'Moved from one-off prompts to context-aware AI work: fed the agent real project context and drove the big cards refactor with it — a deep, wide restructure that landed with only two bugs. Built that context as a tree at first, without skills — until the end of March, when the skill concept caught my attention for the first time.',
    skills: [],
    resources: [],
    cvWorthy: false,
  },
  {
    title: 'Python foundations for AI',
    date: '12 Jan 2026',
    category: 'Foundations',
    description: 'Got comfortable with Python, NumPy and Pandas — the toolkit behind everything that follows.',
    skills: ['Python', 'NumPy', 'Pandas'],
    resources: [{ label: 'Course notes', url: '#' }],
    cvWorthy: false,
  },
  {
    title: 'Machine learning basics',
    date: '25 Feb 2026',
    category: 'ML',
    description: 'Finished an intro ML course: regression, classification, train/test splits, and evaluating models properly.',
    skills: ['scikit-learn', 'Regression', 'Classification'],
    resources: [],
    cvWorthy: true,
  },
  {
    title: 'First neural network from scratch',
    date: '8 Apr 2026',
    category: 'Deep Learning',
    description: 'Built and trained a small neural net by hand — backprop finally clicked.',
    skills: ['PyTorch', 'Backpropagation'],
    resources: [{ label: 'GitHub repo', url: '#' }],
    cvWorthy: true,
  },
  {
    title: 'Prompt engineering deep dive',
    date: '15 Jun 2026',
    category: 'LLMs',
    description: 'Learning to design, test and iterate prompts — few-shot, chain-of-thought, and structured outputs.',
    skills: ['Prompting', 'Evaluation'],
    resources: [],
    cvWorthy: false,
  },
  {
    title: 'Build a RAG chatbot',
    date: '1 Aug 2026',
    category: 'LLMs',
    description: 'A retrieval-augmented chatbot over my own notes — embeddings, vector search, and a clean chat UI.',
    skills: ['RAG', 'Embeddings', 'Vector DB'],
    resources: [],
    cvWorthy: true,
  },
  {
    title: 'Fine-tune a small model',
    date: '10 Oct 2026',
    category: 'Deep Learning',
    description: 'Fine-tune an open-source model on a custom dataset and publish the results.',
    skills: ['Fine-tuning', 'Hugging Face'],
    resources: [],
    cvWorthy: true,
  },
];
