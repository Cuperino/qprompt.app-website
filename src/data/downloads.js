export const platformFilters = [
  { id: 'all', label: 'All' },
  { id: 'linux', label: 'Linux', icon: 'fab fa-linux' },
  { id: 'macos', label: 'macOS', icon: 'fab fa-apple' },
  { id: 'windows', label: 'Windows', icon: 'fab fa-windows' },
];

export const downloadVersions = [
  {
    id: '2.0',
    label: 'v2.0 (Stable)',
    cards: [
      {
        platform: 'linux',
        title: 'Linux',
        icon: 'fab fa-linux',
        iconColor: 'text-brand-primary',
        sections: [
          {
            title: 'Universal',
            links: [
              {
                label: 'Flatpak (x86_64, arm64)',
                href: 'https://flathub.org/apps/details/com.cuperino.qprompt',
                icon: 'fas fa-store',
                variant: 'ghost',
              },
            ],
          },
          {
            title: 'Debian 13 / Ubuntu 26.04',
            links: [
              {
                label: 'Download .deb (amd64)',
                href: '#',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
              {
                label: 'Download .deb (arm64)',
                href: '#',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
            ],
            notes: ['The above ver. plus RPi OS Trixie'],
          },
        ],
      },
      {
        platform: 'macos',
        title: 'macOS',
        icon: 'fab fa-apple',
        iconColor: 'text-white',
        sections: [
          {
            title: 'Apple Silicon',
            links: [
              {
                label: 'Download DMG (Apple Silicon)',
                href: '#',
                icon: 'fas fa-download',
                variant: 'primary',
              },
            ],
          },
          {
            title: 'Intel',
            links: [
              {
                label: 'Download DMG (Intel)',
                href: '#',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
            ],
          },
        ],
      },
      {
        platform: 'windows',
        title: 'Windows',
        icon: 'fab fa-windows',
        iconColor: 'text-brand-accent',
        sections: [
          {
            title: 'Windows 10 and later',
            links: [
              {
                label: 'Download Installer (.exe)',
                href: '#',
                icon: 'fas fa-download',
                variant: 'accent',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1.2',
    label: 'v1.2 (Legacy)',
    cards: [
      {
        platform: 'linux',
        title: 'Linux',
        icon: 'fab fa-linux',
        iconColor: 'text-brand-primary',
        sections: [
          {
            title: 'Universal',
            links: [
              {
                label: 'Download AppImage (x86_64)',
                href: 'https://sourceforge.net/projects/qprompt/files/v1.2.0-early-access-06/qprompt-v1.2-bc58e78-v1.2-linux-gcc-x86_64.AppImage/download',
                icon: 'fas fa-download',
                variant: 'primary',
              },
            ],
          },
          {
            title: 'Debian 11 / Ubuntu 22.04',
            links: [
              {
                label: 'Download .deb (amd64)',
                href: 'https://sourceforge.net/projects/qprompt/files/v1.2.0-early-access-06/qprompt-v1.2-bc58e78-v1.2-linux-gcc-x86_64.deb/download',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
              {
                label: 'Download .deb (arm64)',
                href: 'https://sourceforge.net/projects/qprompt/files/v1.2.0-early-access-06/qprompt-v1.2-bc58e78-v1.2-linux-gcc-arm64.deb/download',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
            ],
            notes: ['The above ver. plus RPi OS Bullseye'],
          },
        ],
      },
      {
        platform: 'macos',
        title: 'macOS',
        icon: 'fab fa-apple',
        iconColor: 'text-white',
        sections: [
          {
            title: 'Intel',
            links: [
              {
                label: 'Download DMG (Intel)',
                href: 'https://sourceforge.net/projects/qprompt/files/v1.2.0-early-access-06/qprompt-v1.2-bc58e78-v1.2-macos-clang-x86_64.dmg/download',
                icon: 'fas fa-download',
                variant: 'ghost',
              },
            ],
          },
        ],
      },
      {
        platform: 'windows',
        title: 'Windows',
        icon: 'fab fa-windows',
        iconColor: 'text-brand-accent',
        sections: [
          {
            title: 'Windows 7 and later',
            links: [
              {
                label: 'Download Installer (.exe)',
                href: 'https://sourceforge.net/projects/qprompt/files/v1.2.0-early-access-06/qprompt-v1.2-bc58e78-v1.2-windows-cl-msvc2019-x86_64.exe/download',
                icon: 'fas fa-download',
                variant: 'accent',
              },
            ],
          },
        ],
      },
    ],
  },
];


