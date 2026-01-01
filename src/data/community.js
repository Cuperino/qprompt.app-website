export const communityCards = [
  {
    icon: 'fas fa-bullhorn',
    color: 'text-brand-primary',
    title: 'Share your feedback',
    description: 'We listen to all our users.',
    hoverClass: 'hover:border-brand-primary/50',
    actions: [
      { label: 'File Bug Report', href: 'https://github.com/Cuperino/QPrompt/issues/new?template=bug_report.md', variant: 'primary' },
      { label: 'Request New Feature', href: 'https://github.com/Cuperino/QPrompt/issues/new?template=feature-request.md', variant: 'primary' },
      { label: 'Sorting Priorities', href: 'https://github.com/Cuperino/QPrompt#priorities', variant: 'primary' },
    ],
  },
  {
    icon: 'fas fa-language',
    color: 'text-brand-accent',
    title: 'Translate QPrompt',
    description: 'QPrompt supports 182+ languages. Help others by translating QPrompt to your native language.',
    hoverClass: 'hover:border-brand-accent/50',
    actions: [
      { label: 'Contribute Translation', href: 'https://l10n.cuperino.com/projects/qprompt/', variant: 'info' },
    ],
  },
  {
    icon: 'fas fa-code',
    color: 'text-brand-primary',
    title: 'Build QPrompt yourself',
    description: 'QPrompt is open source software. You can build almost any iteration in its history yourself.',
    hoverClass: 'hover:border-brand-primary/50',
    actions: [
      { label: 'Source Code', href: 'https://github.com/Cuperino/QPrompt-Teleprompter/', variant: 'primary' },
      { label: 'Build Instructions', href: 'https://github.com/Cuperino/QPrompt-Teleprompter/blob/main/BUILD.md', variant: 'primary' },
    ],
  },
  {
    icon: 'fab fa-github',
    color: 'text-brand-accent',
    title: 'Develop QPrompt',
    description: 'Written in C++ and QML. Code contributions are welcome with open arms.',
    hoverClass: 'hover:border-brand-accent/50',
    actions: [
      { label: 'Contributing Code', href: 'https://github.com/Cuperino/QPrompt-Teleprompter#code-contributions', variant: 'info' },
      { label: 'Developer Tasks', href: 'https://github.com/users/Cuperino/projects/3/views/1/', variant: 'info' },
    ],
  },
  {
    icon: 'fab fa-patreon',
    color: 'text-red-500',
    title: 'Become a Patron',
    description: 'Get early access to development builds and vote on polls that determine development focus.',
    hoverClass: 'hover:border-red-500/50',
    actions: [
      { label: 'Patreon Benefits', href: 'https://www.patreon.com/qpromptapp/membership', variant: 'primary' },
    ],
  },
  {
    icon: 'fas fa-book',
    color: 'text-brand-primary',
    title: 'Write Documentation',
    description: 'Help users by contributing to our User Documentation. Licensed FDL 1.3.',
    hoverClass: 'hover:border-brand-primary/50',
    actions: [
      { label: 'Write Docs', href: 'https://docs.cuperino.com/0cbWB74kSWC1C1mph2nbKA?both', variant: 'primary' },
      { label: 'Discord', href: 'https://discord.gg/8TSCZH2WyK', variant: 'primary' },
    ],
  },
  {
    icon: 'fas fa-users',
    color: 'text-brand-accent',
    title: 'Join the Forum',
    description: 'Share resources and tips about your setup. For all video creators.',
    hoverClass: 'hover:border-brand-accent/50',
    actions: [
      { label: 'Share Experiences', href: 'https://forum.cuperino.com/c/qprompt/5', variant: 'info' },
    ],
  },
  {
    icon: 'fas fa-comments',
    color: 'text-brand-primary',
    title: 'Join the Chat',
    description: 'Connect with the project manager and community members instantly.',
    hoverClass: 'hover:border-brand-primary/50',
    actions: [
      { label: 'Join Discord', href: 'https://discord.gg/8TSCZH2WyK', variant: 'primary' },
      { label: 'Join Telegram', href: 'https://t.me/imaginaryteleprompter', variant: 'primary' },
    ],
  },
  {
    icon: 'fas fa-heart',
    color: 'text-brand-accent',
    title: 'Be Excellent',
    description: '"Be excellent to each other", for being "bogus" is "most non-triumphant".',
    hoverClass: 'hover:border-brand-accent/50',
    actions: [
      { label: 'Participation Guidelines', href: 'https://github.com/Cuperino/QPrompt-Teleprompter#code-of-conduct', variant: 'info' },
    ],
  },
];

export const donationOptions = [
  {
    label: 'One Time',
    href: 'https://www.paypal.com/donate/?business=K2M9BF8WFAASG&no_recurring=1&item_name=Your+contribution+goes+towards+the+development+of+QPrompt+Teleprompter+app+and+its+infrastructure.&currency_code=USD',
    variant: 'neutral',
  },
  {
    label: 'Patreon',
    href: 'https://www.patreon.com/qpromptapp',
    variant: 'primary',
  },
];

export const assistanceLinks = [
  {
    label: 'Read User Manual',
    href: 'https://docs.qprompt.app',
    variant: 'neutral',
  },
];

export const communitySupportLinks = [
  { label: 'Forum', href: 'https://forum.cuperino.com/c/qprompt/5', variant: 'outline' },
  { label: 'Discord', href: 'https://discord.gg/8TSCZH2WyK', variant: 'outline' },
  { label: 'Telegram', href: 'https://t.me/imaginaryteleprompter', variant: 'outline' },
];


