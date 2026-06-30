// ============================================================
//  SINCHANA K K — Portfolio Data
//  Edit this file to update all content across the site
// ============================================================

export const META = {
  name:           'SINCHANA K K',
  initials:       'SK',
  role:           'AI & ML Graduate | MERN Stack Developer | Data Science Practitioner',
  email:          'sinchanak856@gmail.com',
  phone:          '+91-8197297167',
  location:       'Hassan, Karnataka, India',
  github:         'https://github.com/sinchanak856-lab',
  githubHandle:   'sinchanak856-lab',
  linkedin:       'https://www.linkedin.com/in/sinchana-k-k/',
  linkedinHandle: 'sinchana-k-k',
  rollNo:         '4RA22CI049',
  degree:         'B.E. Computer Science & Engineering (AI & ML)',
  college:        'Rajeev Institute of Technology, Hassan • VTU',
  yearOfPassing:  '2026',
  availability:   'Available for opportunities',
  currentRole:    'AI & ML Student • Data Science Practitioner',
  bio: `AI & ML student passionate about Data Science and MERN Stack. I enjoy building practical web applications, exploring machine learning, and creating data-driven solutions through real-world projects.`,
};

export const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const ABOUT_TAGLINE = 'A developer passionate about building intelligent and data-driven applications.';

export const ABOUT_ROLES = [
  'AI & ML Student',
  'Data Science Practitioner',
  'MERN Frontend Developer',
];

export const ABOUT_PARAGRAPHS = [
  `I'm Sinchana K K, a Data Science Practitioner, AI & ML student, and MERN Stack Developer pursuing a B.E. in Computer Science & Engineering (AI & ML) at Rajeev Institute of Technology, Hassan (VTU).`,
  `I enjoy transforming ideas into practical solutions through data science, machine learning, and full-stack web development. My experience includes building responsive MERN applications, developing machine learning models, performing data analysis, and creating interactive Power BI dashboards.`,
  `I'm continuously expanding my knowledge in Artificial Intelligence, Data Science, and modern web technologies while building projects that solve real-world problems.`,
];

export const TYPEWRITER_ROLES = [
  'AI & ML Graduate',
  'MERN Stack Developer',
  'Data Science Practitioner',
  'Computer Vision Engineer',
  'Full-Stack Builder',
];

export const STATS = [
  { value: '2',    label: 'Internships',    color: 'var(--teal)'   },
  { value: '5',    label: 'Projects',       color: 'var(--violet)' },
  { value: '8+',   label: 'Certifications', color: 'var(--coral)'  },
  { value: '2026', label: 'Graduating',     color: 'var(--green)'  },
];

// ── SKILLS ────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    label: 'Frontend Technologies',
    icon: '🖥️',
    skills: [
      { name: 'React.js',        level: 85 },
      { name: 'HTML5 / CSS3',    level: 90 },
      { name: 'JavaScript (ES6+)',level: 87 },
      { name: 'Responsive Design',level: 88 },
      { name: 'Figma / UI-UX',   level: 80 },
    ],
  },
  {
    label: 'Backend Technologies',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',         level: 83 },
      { name: 'Express.js',      level: 82 },
      { name: 'REST API Design', level: 87 },
      { name: 'PHP',             level: 65 },
      { name: 'JWT Auth',        level: 80 },
    ],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB',         level: 82 },
      { name: 'MySQL',           level: 78 },
      { name: 'Mongoose ODM',    level: 80 },
    ],
  },
  {
    label: 'AI / ML & Data Science',
    icon: '🤖',
    skills: [
      { name: 'Python',          level: 92 },
      { name: 'Machine Learning',level: 88 },
      { name: 'Deep Learning',   level: 83 },
      { name: 'Computer Vision', level: 78 },
      { name: 'Scikit-learn',    level: 85 },
      { name: 'Pandas / NumPy',  level: 86 },
    ],
  },
  {
    label: 'Data Visualisation',
    icon: '📊',
    skills: [
      { name: 'Power BI',        level: 80 },
      { name: 'Matplotlib',      level: 82 },
      { name: 'EDA',             level: 85 },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub',    level: 85 },
      { name: 'VS Code / PyCharm',level: 90 },
      { name: 'Jupyter / Colab', level: 88 },
      { name: 'Postman',         level: 82 },
      { name: 'Linux (Ubuntu)',  level: 75 },
      { name: 'UiPath / RPA',    level: 72 },
    ],
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    type:    'work',
    title:   'Data Science with Python Trainee',
    company: 'NUCOT Technologies Pvt. Ltd.',
    period:  'Apr 2026 – Jul 2026',
    location:'Remote',
    desc:    'Completed hands-on training in Data Science with Python, covering data preprocessing, exploratory data analysis (EDA), data visualisation, and machine learning using NumPy, Pandas, Matplotlib, and Scikit-learn. Developed interactive Power BI dashboards and applied analytics techniques to real-world datasets.',
    tags:    ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Power BI', 'EDA', 'Matplotlib'],
  },
  {
    type:    'work',
    title:   'MERN Stack Developer Intern',
    company: 'Aitch Nu Global Technologies Pvt. Ltd.',
    period:  'Sep 2025 – Jan 2026',
    location:'Bengaluru, Karnataka',
    desc:    'Led end-to-end development of Cartify, a production e-commerce platform. Designed three-tier architecture, implemented secure JWT authentication, integrated a payment gateway, and delivered a centralised admin panel. Gained deep expertise in API integration, component-based development, and responsive UI design.',
    tags:    ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API', 'Postman'],
  },
  {
    type:    'edu',
    title:   'B.E. Computer Science (AI & ML)',
    company: 'Rajeev Institute of Technology, Hassan · VTU',
    period:  '2022 – 2026',
    location:'Hassan, Karnataka',
    desc:    'Specialised in Artificial Intelligence and Machine Learning. Core coursework covered neural networks, deep learning, computer vision, data structures, and full-stack development. Active project work in healthcare AI, deepfake detection, and web platforms.',
    tags:    ['AI / ML', 'Neural Networks', 'Deep Learning', 'VTU', 'Full-Stack Dev'],
  },
];

// ── PROJECTS ──────────────────────────────────────────────────
export const PROJECTS = [
  {
    num:     '01',
    title:   'DeepFake Detector',
    badge:   'AI / Computer Vision',
    color:   'var(--teal)',
    desc:    'Deep learning pipeline using ResNeXt CNN for spatial feature extraction and LSTM for temporal sequence analysis. Trained on FaceForensics++, DFDC, and Celeb-DF datasets — accurately classifying real vs AI-generated synthetic video in real-world scenarios.',
    tags:    ['ResNeXt CNN', 'LSTM', 'Python', 'Deep Learning', 'Computer Vision', 'OpenCV'],
    github:  'https://github.com/sinchanak856-lab',
    live:    null,
  },
  {
    num:     '02',
    title:   'Cartify — E-Commerce Platform',
    badge:   'MERN Stack · Internship',
    color:   'var(--violet)',
    desc:    'Full production e-commerce platform built during internship. Three-tier MERN architecture with JWT auth, product catalogue, cart management, Razorpay payment gateway, real-time order tracking, and a centralised admin dashboard via RESTful APIs on MongoDB Atlas.',
    tags:    ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Mongoose', 'Razorpay'],
    github:  'https://github.com/sinchanak856-lab/mern-project',
    live:    null,
  },
  {
    num:     '03',
    title:   'Diabetes Prediction — MLP Model',
    badge:   'Machine Learning',
    color:   'var(--coral)',
    desc:    'Multilayer Perceptron trained on the Pima Indians Diabetes dataset. Tackled class imbalance with SMOTE oversampling, tuned using Adam optimiser, and evaluated with ROC-AUC and F1-score — achieving high clinical sensitivity for healthcare analytics.',
    tags:    ['Python', 'MLP', 'Scikit-learn', 'SMOTE', 'ROC-AUC', 'Backpropagation'],
    github:  'https://github.com/sinchanak856-lab',
    live:    null,
  },
  {
    num:     '04',
    title:   'Cricket T20 EDA — Power BI Dashboard',
    badge:   'Data Science',
    color:   'var(--green)',
    desc:    'Advanced EDA on T20 World Cup cricket data using Python and Pandas. Cleaned and transformed raw datasets, analysed player performance metrics across batting, bowling, and fielding, then built interactive Power BI dashboards to identify the optimal Best Playing XI.',
    tags:    ['Python', 'Pandas', 'Power BI', 'EDA', 'Data Visualisation', 'NumPy'],
    github:  'https://github.com/sinchanak856-lab',
    live:    null,
  },
  {
    num:     '05',
    title:   'JNCASR Research — UI/UX & Front-End',
    badge:   'Research · UI/UX',
    color:   'var(--teal)',
    desc:    'Real-time UI/UX design and responsive front-end development for JNCASR (Jawaharlal Nehru Centre for Advanced Scientific Research) — a Central Government research institution. Improved navigation, visual hierarchy, and overall user experience for the Summer Research Fellowship Programme.',
    tags:    ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Responsive Design', 'UI/UX'],
    github:  null,
    live:    null,
  },
];

// ── CERTIFICATIONS ────────────────────────────────────────────
export const CERTIFICATIONS = [
  { issuer: 'IBM · Cognitive Class',    name: 'Prompt Engineering for Everyone',              date: 'Apr 2025' },
  { issuer: 'UiPath',                   name: 'Automation Developer Associate (v2023.10)',     date: 'May 2025' },
  { issuer: 'UiPath',                   name: 'UI Automation with Modern Design in Studio',   date: 'May 2025' },
  { issuer: 'NPTEL · IIT Kharagpur',    name: 'Introduction to Internet of Things',           date: 'Jul–Oct 2025 · Elite' },
  { issuer: 'NPTEL · IIT Kharagpur',    name: 'Privacy & Security in Online Social Media',    date: '2025' },
  { issuer: 'PrepInsta Technologies',    name: 'Machine Learning & AI',                        date: 'May 2025' },
  { issuer: 'PrepInsta Technologies',    name: 'Data Analytics',                               date: 'May 2025' },
  { issuer: 'PrepInsta Technologies',    name: 'Data Science',                                 date: 'Jan 2025' },
];
