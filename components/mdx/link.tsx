import Link from 'next/link';

interface PostLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function PostLink({ href, ...props }: PostLinkProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <a target="_blank" rel="nofollow noopener noreferrer" href={href} {...props}>
      {props.children}
    </a>
  );
}