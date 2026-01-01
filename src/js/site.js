import Alpine from 'alpinejs';
import { navLinks, navCtas } from '../data/navLinks.js';
import { downloadVersions, platformFilters } from '../data/downloads.js';
import { featureReasons, featureCards } from '../data/features.js';
import {
  communityCards,
  donationOptions,
  assistanceLinks,
  communitySupportLinks,
} from '../data/community.js';
import { init as initHero } from './hero.js';

window.Alpine = Alpine;

const buttonVariants = {
  primary: 'glass-link glass-link--primary',
  accent: 'glass-link glass-link--accent',
  ghost: 'glass-link glass-link--ghost',
  info: 'glass-link glass-link--info',
  neutral: 'glass-link glass-link--neutral',
};

const pillVariants = {
  primary: 'cta-pill cta-pill--primary',
  neutral: 'cta-pill cta-pill--neutral',
  outline: 'cta-pill cta-pill--outline',
};

Alpine.store('buttons', {
  classFor(variant = 'primary') {
    return buttonVariants[variant] ?? buttonVariants.primary;
  },
});

Alpine.data('navigation', () => ({
  mobileMenu: false,
  links: navLinks,
  ctas: navCtas,
  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  },
  closeMenu() {
    this.mobileMenu = false;
  },
}));

Alpine.data('downloads', () => ({
  versions: downloadVersions,
  filters: platformFilters,
  versionId: downloadVersions?.[0]?.id ?? '2.0',
  platform: 'all',
  setVersion(id) {
    this.versionId = id;
  },
  setPlatform(id) {
    this.platform = id;
  },
  isVersionActive(id) {
    return this.versionId === id;
  },
  isPlatformActive(id) {
    return this.platform === id;
  },
  get currentVersion() {
    return this.versions.find((v) => v.id === this.versionId) ?? this.versions[0];
  },
  get filteredCards() {
    if (this.platform === 'all') {
      return this.currentVersion?.cards ?? [];
    }
    return (this.currentVersion?.cards ?? []).filter((card) => card.platform === this.platform);
  },
  linkClasses(variant = 'ghost') {
    return Alpine.store('buttons').classFor(variant ?? 'ghost');
  },
}));

Alpine.data('featureContent', () => ({
  cards: featureCards,
  reasons: featureReasons,
}));

Alpine.data('communityContent', () => ({
  cards: communityCards,
}));

Alpine.data('supportContent', () => ({
  donations: donationOptions,
  manuals: assistanceLinks,
  communityLinks: communitySupportLinks,
  pillClass(variant = 'neutral') {
    return pillVariants[variant] ?? pillVariants.neutral;
  },
}));

window.init = initHero;
Alpine.start();


