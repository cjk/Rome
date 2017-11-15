import React from 'react';
import Link from 'next/link';

const LevelLink = ({ children, href }) => (
  <Link prefetch href={href}>
    <a>{children}</a>
  </Link>
);

export default LevelLink;
