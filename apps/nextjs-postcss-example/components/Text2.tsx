import * as stylex from '@stylexjs/stylex';
import { fonts as t } from '@stylexjs/open-props/lib/fonts.stylex';

import { type ReactNode } from 'react';

const styles = stylex.create({
  text: {
    color: 'hotpink',
  },
});

const variants = stylex.create({
  small: {
    fontSize: t.size1
  },
  big: {
    fontSize: t.size7
  }
})

export interface TextProps {
  children: ReactNode;
  size: keyof typeof variants;
}

export function Text2({ children, size: t }: TextProps) {
  return <div {...stylex.props(styles.text, variants[t])}>{children}</div>;
}
