import React from 'react';
import Link from 'next/link';
import type { UrlObject } from 'url';

interface Props {
  href: string | UrlObject;
  children: React.ReactNode;
  ariaLabel?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

export function Clickable({ href, children, ariaLabel, ref }: Props) {
  return (
    <Link href={href} aria-label={ariaLabel} ref={ref} tabIndex={0}>
      {children}
    </Link>
  );
}
