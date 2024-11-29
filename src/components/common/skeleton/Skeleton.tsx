import { Box } from './Skeleton.style';

interface SkeletonPropsType {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

function Skeleton({ width, height, margin, borderRadius }: SkeletonPropsType) {
  return <div style={{ width, height, margin, borderRadius }} css={Box}></div>;
}
export default Skeleton;
