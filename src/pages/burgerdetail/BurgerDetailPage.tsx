import { useEffect, useState } from 'react';
import * as S from './BurgerDetailPage.style';
import { Ellipse, IcMinus, IcPlus } from '@assets/svgs/detail';
import NutritionTable from '@components/BurgerDetail/NutritionTable';
import Spacing from '@components/common/spacing/Spacing';
import { IcNext, IcPrev } from '@assets/svgs';
import { formatName } from './../../utils/formatName';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDetail } from '@apis/details/queries';
import { DETAIL_LIST } from '@constants/detailList';
import { burgerList } from 'src/types/burgerlist';

const BurgerDetailPage = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const [prevVisible, setPrevVisible] = useState<boolean>(true);
  const [nextVisible, setNextVisible] = useState<boolean>(true);
  const { burger_id } = useParams();
  const { data, isLoading, error } = useDetail(Number(burger_id));
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const currentId = Number(burger_id);
    const currentIndex = state?.findIndex(
      (burger: burgerList) => burger.id === currentId,
    );

    setPrevVisible(currentIndex > 0);
    setNextVisible(currentIndex < state?.length - 1);
  }, [burger_id, state]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const toggle = (index: number) =>
    setActiveIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 열려있으면 닫기
          : [...prev, index], // 닫혀있으면 열기
    );

  const movePrev = () => {
    if (!state) return;
    const currentId = Number(burger_id);
    const currentIndex = state.findIndex(
      (burger: burgerList) => burger.id === currentId,
    );

    if (currentIndex > 0) {
      navigate(`/detail/${state[currentIndex - 1].id}`, { state });
    }
  };

  const moveNext = () => {
    if (!state) return;
    const currentId = Number(burger_id);
    const currentIndex = state.findIndex(
      (burger: burgerList) => burger.id === currentId,
    );

    if (currentIndex < state.length - 1) {
      navigate(`/detail/${state[currentIndex + 1].id}`, { state });
    }
  };

  const BurgerImg = burger_id && DETAIL_LIST[Number(burger_id)];

  return (
    <main>
      {data && (
        <div key={data.id}>
          <section css={S.InfoWrapper}>
            <div css={S.titleStyle}>
              <div className="korean">{formatName(data.burger_name)}</div>
              <div className="english">{formatName(data.burger_name_eng)}</div>
              <Spacing size="1" />
              <div css={S.burgerImg}>
                <IcPrev
                  css={S.buttonStyle('left', prevVisible)}
                  onClick={movePrev}
                />
                {BurgerImg ? <BurgerImg width={346} /> : <></>}
                <IcNext
                  css={S.buttonStyle('right', nextVisible)}
                  onClick={moveNext}
                />
              </div>
            </div>

            <Ellipse css={S.ellipse} />
            <div css={S.info}>
              <div className="up">{data.description}</div>
              <div className="down">*판매시간 : 오전 10시 30분 ~ 새벽 4시</div>
            </div>
          </section>
          <ul>
            <li css={S.nutrition}>
              <div
                className="nutritionQuestion"
                onClick={() => toggle(0)}
                css={S.questionStyle}
              >
                <h4>영양정보</h4>
                {activeIndex.includes(0) ? (
                  <IcMinus width={24} height={24} />
                ) : (
                  <IcPlus width={24} height={24} />
                )}
              </div>
              <div
                className={`nutritionAnswer ${activeIndex.includes(0) ? 'active' : ''}`}
              >
                <NutritionTable
                  nutritionContent={data.nutritionContent}
                  nutrition_reference={data.nutritionRef}
                />
              </div>
            </li>

            <li css={S.allergy}>
              <div
                className="allergyQuestion"
                onClick={() => toggle(1)}
                css={S.questionStyle}
              >
                <h4>알레르기 정보</h4>
                {activeIndex.includes(1) ? (
                  <IcMinus width={24} height={24} />
                ) : (
                  <IcPlus width={24} height={24} />
                )}
              </div>

              <div
                className={`allergyAnswer ${activeIndex.includes(1) ? 'active' : ''}`}
              >
                <div>
                  <p className="first">알레르기 유발 가능 식재료</p>
                  <p className="second">({data.allergy.join(', ')})</p>
                </div>
                <p className="third">
                  * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고
                  있습니다.
                </p>
              </div>
            </li>

            <li css={S.origin}>
              <div
                className="originQuestion"
                onClick={() => toggle(2)}
                css={S.questionStyle}
              >
                <h4>원산지 정보</h4>
                {activeIndex.includes(2) ? (
                  <IcMinus width={24} height={24} />
                ) : (
                  <IcPlus width={24} height={24} />
                )}
              </div>

              <div
                className={`originAnswer ${activeIndex.includes(2) ? 'active' : ''}`}
              >
                <p>{data.origin}</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default BurgerDetailPage;
