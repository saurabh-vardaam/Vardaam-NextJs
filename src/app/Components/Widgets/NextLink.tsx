import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  scrollReveal?: boolean;
}

const NextLink: React.FC<CustomLinkProps> = ({ children, href, className, scrollReveal, ...other }) => {
  const internal = href.startsWith('/');

  if (internal) {
    return (
      <Link href={href} scroll={scrollReveal} {...other} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...other} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default NextLink;