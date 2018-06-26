export type Styles<S extends string = string> = Record<S, React.CSSProperties>;
export type ButtonStyle = 'default' | 'ghost';

type ColorKey =
  | 'white'
  | 'offWhite'
  | 'ash'
  | 'translucent'
  | 'primaryLighter'
  | 'primary'
  | 'primaryDarker'
  | 'primaryDark'
  | 'shadow';
export const colorMap: Record<ColorKey, string> = {
  white: '#ffffff',
  offWhite: '#fafafa',
  ash: '#d9d9d9',
  translucent: 'rgba(255, 255, 255, 0.6)',
  primaryLighter: '#afa0f3',
  primary: '#9a86f0',
  primaryDarker: '#8674d6',
  primaryDark: '#594f8b',
  shadow: 'rgba(89, 79, 139, 0.3)',
};

type FontFamilyKey = 'title' | 'body';
export const fontFamilyMap: Record<FontFamilyKey, string> = {
  title: 'Nunito, Open Sans, sans-serif',
  body: 'Open Sans, sans-serif',
};

type LengthKey =
  | 'border'
  | 'borderRadius'
  | 'chapterMax'
  | 'categoryIcon'
  | 'categoryImg'
  | 'footerCircle'
  | 'footerTop'
  | 'gameImg'
  | 'hero'
  | 'heroCircle'
  | 'minWidth';
export const lengthMap: Record<LengthKey, string> = {
  border: '1px',
  borderRadius: '4px',
  chapterMax: '960px',
  categoryIcon: '100px',
  categoryImg: '180px',
  footerCircle: '2000px',
  footerTop: '54px',
  gameImg: '140px',
  hero: '640px',
  heroCircle: '3200px',
  minWidth: '320px',
};

export type SizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const baseSpace: number = 16;
export const spaceMap: Record<SizeKey, string> = {
  xs: `${baseSpace * 0.25}px`,
  sm: `${baseSpace * 0.5}px`,
  md: `${baseSpace}px`,
  lg: `${baseSpace * 1.5}px`,
  xl: `${baseSpace * 2}px`,
  xxl: `${baseSpace * 3}px`,
};

export const baseFontSize: number = 24;
export const fontSizeMap: Record<SizeKey, string> = {
  xs: `${baseFontSize * 0.5 + 2}px`,
  sm: `${baseFontSize * 0.75}px`,
  md: `${baseFontSize}px`,
  lg: `${baseFontSize * 1.5}px`,
  xl: `${baseFontSize * 2.5}px`,
  xxl: `${baseFontSize * 3}px`,
};
