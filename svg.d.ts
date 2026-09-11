declare module '*.svg?react' {
  import { SVGProps, FC } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}