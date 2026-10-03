import type { ReactNode } from 'react';

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Wrapper for layout consistency; scroll reveal disabled to avoid hidden content. */
export default function RevealSection({
  children,
  className = '',
}: RevealSectionProps) {
  return <div className={className.trim()}>{children}</div>;
}
