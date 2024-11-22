type LikeButtonProps = {
  favorite: boolean;
};

const LikeButton = ({ favorite = false }: LikeButtonProps) => (
  <div>LikeButton</div>
);

export default LikeButton;
