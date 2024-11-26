import {
  IcFacebook,
  IcInstagram,
  IcKakaostory,
  IcYoutube,
  ImgFooterIsms,
  ImgFooterWa,
} from '@assets/svgs';
import { footerStyle } from './Footer.style';
import Spacing from '@components/common/spacing/Spacing';

const Footer = () => (
  <footer css={footerStyle}>
    <ul>
      <li className="highlightMenu">개인정보 처리방침</li>
      <li>위치정보 이용약관</li>
      <li>사이트맵</li>
      <li>임차문의</li>
      <li>고객문의</li>
      <li>인재채용</li>
      <li className="bottomMenu">PC버전</li>
      <li className="bottomMenu">ENG</li>
    </ul>

    <div className="middle">
      <p>한국맥도날드(유)</p>
      <p>대표이사: 김기원</p>
      <p>사업자등록번호: 101-81-26409</p>
      <p>전화주문: 1600-5252</p>
    </div>

    <div className="copyright">
      <p>COPYRIGHT©2019 ALL RIGHT RESERVED BY McDonald’s</p>
      <Spacing size="2.7" />
    </div>

    <div className="bottom">
      <div>
        <ImgFooterIsms className="imgFooterIsms" />
      </div>
      <div className="bottomRight">
        <p>
          [인증범위 : 대외서비스(홈페이지, 맥딜리버리, 채용, VOC,
          쿠폰앱)(심사받지 않은 물리적 인프라 영역 제외)]
        </p>
        <Spacing size="1.4" />
        <p>[유효기간 : 2024. 08. 07. ~ 2025. 08. 06.]</p>
      </div>
    </div>

    <div className="icons">
      <IcFacebook width={40} height={40} />
      <IcInstagram width={40} height={40} />
      <IcYoutube width={40} height={40} />
      <IcKakaostory width={40} height={40} />
      <ImgFooterWa width={44} height={31} />
    </div>
  </footer>
);

export default Footer;
