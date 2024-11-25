import { useState } from 'react';
import * as S from './BurgerDetailPage.style';
import { Ellipse, Cimg11, IcMinus, IcPlus } from '@assets/svgs';

const BurgerDetailPage = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (activeIndex.includes(index)) {
      // 이미 열려있으면 닫기
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      // 닫혀있으면 열기
      setActiveIndex([...activeIndex, index]);
    }
  };

  return (
    <main>
      <div css={S.titleStyle}>
        <div className="korean">
          <p>더블 맥스파이시{'\u00ae'}</p>
          <p className="shb">상하이 버거</p>
        </div>
        <div className="english">
          Double McSpicy<span>®</span>Shanghai Burger
        </div>
      </div>

      <div>
        <Ellipse css={S.ellipse} />
        <Cimg11 css={S.burgerImg} />
      </div>

      <div css={S.info}>
        <div className="up">
          쌀가루 크럼블 시즈닝을 입힌 100% 닭가슴살 패티가 두 장! <br />
          더블패티로 더 두툼하고 푸짐하게 즐겨보세요!
        </div>
        <div className="down">*판매시간 : 오전 10시 30분 ~ 새벽 4시</div>
      </div>

      <ul>
        <li css={S.nutrition}>
          <div className="nutritionQuestion" onClick={() => toggle(0)}>
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
            <table>
              <thead>
                <tr>
                  <th>영양소</th>
                  <th>함량</th>
                  <th>영양소기준치</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>중량(g)</td>
                  <td>340g</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>중량(ml)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>열량</td>
                  <td>759kcal</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>당</td>
                  <td>10g</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>단백질</td>
                  <td>38g</td>
                  <td>69%</td>
                </tr>
                <tr>
                  <td>포화지방</td>
                  <td>4.6g</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>나트륨</td>
                  <td>1775mg</td>
                  <td>89%</td>
                </tr>
                <tr>
                  <td>카페인</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>

        <li css={S.allergy}>
          <div className="allergyQuestion" onClick={() => toggle(1)}>
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
              <p className="second">(난류,대두,밀,토마토,닭고기)</p>
            </div>
            <p className="third">
              * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고
              있습니다.
            </p>
          </div>
        </li>

        <li css={S.origin}>
          <div className="originQuestion" onClick={() => toggle(2)}>
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
            <p>닭고기:태국산(경상지역),국내산(그 외 지역)</p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default BurgerDetailPage;
