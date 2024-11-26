import { useState } from 'react';
import data from './data.json';
import * as S from './BurgerDetailPage.style';
import { Ellipse, Cimg11, IcMinus, IcPlus } from '@assets/svgs/detail';

const BurgerDetailPage = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const toggle = (index: number) => {
    setActiveIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 열려있으면 닫기
          : [...prev, index], // 닫혀있으면 열기
    );
  };

  return (
    <main>
      {data.map((burger, index) => (
        <div key={burger.id}>
          <div css={S.titleStyle}>
            <div className="korean">{burger.burger_name}</div>
            <div className="english">{burger.burger_name_eng}</div>
          </div>

          <div>
            <Ellipse css={S.ellipse} />
            <Cimg11 css={S.burgerImg} />
          </div>

          <div css={S.info}>
            <div className="up">{burger.description}</div>
            <div className="down">*판매시간 : 오전 10시 30분 ~ 새벽 4시</div>
          </div>

          <ul>
            <li css={S.nutrition}>
              <div className="nutritionQuestion" onClick={() => toggle(index)}>
                <h4>영양정보</h4>
                {activeIndex.includes(index) ? (
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
                      <td>{burger.nutrition.weight_g}g</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>중량(ml)</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>열량</td>
                      <td>{burger.nutrition.calories}kcal</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>당</td>
                      <td>{burger.nutrition.sugar}g</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>단백질</td>
                      <td>{burger.nutrition.protein}g</td>
                      <td>69%</td>
                    </tr>
                    <tr>
                      <td>포화지방</td>
                      <td>{burger.nutrition.saturated_fat}g</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>나트륨</td>
                      <td>{burger.nutrition.sodium}mg</td>
                      <td>89%</td>
                    </tr>
                    <tr>
                      <td>카페인</td>
                      <td>{burger.nutrition.caffeine}mg</td>
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
                  <p className="second">({burger.allegy.join(', ')})</p>
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
                <p>{burger.origin}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </main>
  );
};

export default BurgerDetailPage;
