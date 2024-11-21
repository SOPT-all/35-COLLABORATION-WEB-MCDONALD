import { footerStyle } from "./Footer.style"

const Footer = () => {
  return (
    <footer css={footerStyle}>
        <form>
            <div className='highlightMenu'>개인정보 처리방침</div>
            <div>위치정보 이용약관</div>
            <div>사이트맵</div>
            <div>임차문의</div>
            <div>고객문의</div>
            <div>인재채용</div>
            <div className="bottomMenu">PC버전</div>
            <div className="bottomMenu">ENG</div>
        </form>
        <div></div>
        <div></div>

        <div></div>
    </footer>
  )
}

export default Footer