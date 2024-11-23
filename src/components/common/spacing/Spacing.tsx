import { SpacingBox } from './Spacing.style';

interface SpacingProps {
  size: string;
}

const Spacing = ({ size }: SpacingProps) => (
  <div css={SpacingBox(size)}></div>
);

export default Spacing;
