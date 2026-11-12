import type { ReactNode, SVGProps } from 'react';

export type IconName = 'bubbles' | 'sparkle' | 'house' | 'spray' | 'sponge' | 'bucket' | 'broom' | 'mop' | 'building' | 'key' | 'shield' | 'clock' | 'arrow' | 'phone' | 'mail' | 'facebook' | 'menu' | 'close' | 'check' | 'chevron' | 'pin' | 'calendar' | 'plus';

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 24, ...props }: IconProps) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<IconName, ReactNode> = {
    bubbles: <><path {...common} d="M8 18.5a4.5 4.5 0 1 1 3.6-7.2A4.5 4.5 0 1 1 20 14.5a4 4 0 0 1-4 4H8Z" /><circle {...common} cx="6" cy="7" r="2.2" /><circle {...common} cx="17.5" cy="5.5" r="1.5" /><path {...common} d="m11 4 .45 1.2L12.7 5.7l-1.25.45L11 7.4l-.45-1.25-1.25-.45 1.25-.5L11 4Z" /></>,
    sparkle: <><path {...common} d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path {...common} d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16ZM5 3l.6 1.4L7 5l-1.4.6L5 7l-.6-1.4L3 5l1.4-.6L5 3Z" /></>,
    house: <><path {...common} d="m3 11 9-7 9 7" /><path {...common} d="M5.5 9.5v10h13v-10M9 19.5v-5h6v5" /></>,
    spray: <><path {...common} d="M8 9h7l2 3v8.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 8 20.5V9Z" /><path {...common} d="M10 9V6h5l2 2M15 6V3h4l1 2M5 13H3M5 17H2M5 9H3" /></>,
    sponge: <><path {...common} d="M5 8.5C5 6.6 6.6 5 8.5 5h7C17.4 5 19 6.6 19 8.5v7c0 1.9-1.6 3.5-3.5 3.5h-7C6.6 19 5 17.4 5 15.5v-7Z" /><path {...common} d="M8 8.5h8M8 12h8M8 15.5h5" /></>,
    bucket: <><path {...common} d="M5 8h14l-1.5 12h-11L5 8ZM4 8h16M8 5c1.5-2.2 6.5-2.2 8 0M8 12v5M12 12v5M16 12v5" /></>,
    broom: <><path {...common} d="m15 4 5 5M13.5 5.5 18.5 10M14 6 4 16l-1 5 5-1L18 10" /><path {...common} d="m8 17-2-2M11 14l-2-2" /></>,
    mop: <><path {...common} d="M16 3 7 15M12 3l4 3M7 15l-2 4M5 19c2 1.4 4.7 1.3 6.5-.5" /><path {...common} d="M4 21h9" /></>,
    building: <><path {...common} d="M5 21V4l7-2 7 2v17M3 21h18M8 7h1M12 7h1M16 7h1M8 11h1M12 11h1M16 11h1M10 21v-5h4v5" /></>,
    key: <><circle {...common} cx="8" cy="15" r="4" /><path {...common} d="m11 12 8-8M16 5l3 3M14 7l3 3" /></>,
    shield: <><path {...common} d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3Z" /><path {...common} d="m8 12 2.5 2.5L16 9" /></>,
    clock: <><circle {...common} cx="12" cy="12" r="8.5" /><path {...common} d="M12 7v5l3.5 2" /></>,
    arrow: <><path {...common} d="M4 12h15M14 7l5 5-5 5" /></>,
    phone: <><path {...common} d="M6.5 3.5h3l1.3 4-2 1.5a14 14 0 0 0 5.2 5.2l1.5-2 4 1.3v3c0 1.1-.9 2-2 2C10.6 18.5 5.5 13.4 5.5 6.5c0-1.7.3-3 1-3Z" /></>,
    mail: <><rect {...common} x="3" y="5" width="18" height="14" rx="2" /><path {...common} d="m4 7 8 6 8-6" /></>,
    facebook: <><path {...common} d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7.5v3h2.9v8" /></>,
    menu: <><path {...common} d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path {...common} d="m6 6 12 12M18 6 6 18" /></>,
    check: <path {...common} d="m5 12 4.5 4.5L19 7" {...common} />,
    chevron: <path {...common} d="m7 9 5 5 5-5" />,
    pin: <><path {...common} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle {...common} cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect {...common} x="3" y="5" width="18" height="16" rx="2" /><path {...common} d="M7 3v4M17 3v4M3 10h18" /></>,
    plus: <><path {...common} d="M12 5v14M5 12h14" /></>,
  };

  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...props}>{paths[name]}</svg>;
}
