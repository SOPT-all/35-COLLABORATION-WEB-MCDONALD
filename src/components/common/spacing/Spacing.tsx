import { SpacingBox } from './Spacing.style';

interface SpacingPropTypes {
  size: string;
}

const Spacing = ({ size }: SpacingPropTypes) => (
  <div css={SpacingBox(size)}></div>
);

export default Spacing;
