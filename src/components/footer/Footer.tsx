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
    <form>
      <div className="highlightMenu">개인정보 처리방침</div>
      <div>위치정보 이용약관</div>
      <div>사이트맵</div>
      <div>임차문의</div>
      <div>고객문의</div>
      <div>인재채용</div>
      <div className="bottomMenu">PC버전</div>
      <div className="bottomMenu">ENG</div>
    </form>

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
      <IcFacebook className="icFacebook" />
      <IcInstagram className="icInstagram" />
      <IcYoutube className="icYoutube" />
      <IcKakaostory className="icKakaostory" />
      <ImgFooterWa className="imgFooterWa" />
    </div>
  </footer>
);

export default Footer;
