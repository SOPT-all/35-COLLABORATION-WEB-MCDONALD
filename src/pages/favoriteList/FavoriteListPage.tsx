import { useFavorites } from '@apis/favorites/queries';
import * as S from './FavoriteListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';
import BurgerPost from '@components/BurgerPost/BurgerPost';

const FavoriteListPage = () => {
  const { data: favorites, isLoading, isError } = useFavorites();

  if (isLoading) {
    return <div css={isLoading}></div>;
  }

  if (isError) {
    console.log(isError);
    return <div css={isError}></div>;
  }

  if (!favorites || favorites.length === 0) {
    return <div css={!favorites}></div>;
  }

  return (
    <>
      <section css={S.Banner}>
        <h1 className="banner__title">내 메뉴</h1>
        <Cimg12 />
      </section>

      <section css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>{`${favorites.length} products`}</span>
      </section>

      <section css={S.ListSection}>
        <ul css={S.PostGrid}>
          {favorites.map((burger) => (
            <li key={burger.id}>
              <BurgerPost burgerData={burger} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FavoriteListPage;
