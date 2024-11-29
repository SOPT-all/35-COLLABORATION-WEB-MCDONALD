import { useNavigate } from 'react-router-dom';
import { useFavorites } from '@apis/favorites/queries';
import * as S from './FavoriteListPage.style';
import { Cimg12, ListStyle } from '@assets/svgs/burgerList';
import BurgerPost from '@components/BurgerPost/BurgerPost';

const FavoriteListPage = () => {
  const { data: favorites } = useFavorites();
  const navigate = useNavigate();

  const navDetail = (id: number): void => {
    navigate(`/detail/${id}`, { state: favorites });
  };

  return (
    <>
      <section css={S.Banner}>
        <h1 className="banner__title">내 메뉴</h1>
        <Cimg12 />
      </section>

      <section css={S.ProductCount}>
        <ListStyle width={4} height={4} />
        <span>{`${favorites?.length} products`}</span>
      </section>

      <section css={S.ListSection}>
        <ul css={S.PostGrid}>
          {favorites?.map((burger) => (
            <li key={burger.id}>
              <BurgerPost burgerData={burger} navDetail={navDetail} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FavoriteListPage;
