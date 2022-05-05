import Navi from "../Navi";
import "./mypage.css";
import "../community/report.css";
import "../community/reportTitle.css";
import { Link } from "react-router-dom";
import MyPageComment from "./myPageCommnet";
import MyPageRecommend from "./myPageRecommend";

const mypage = () => {
  return (
    <>
      <Navi />
      <section id="myPageTitle">
        <p className="titleText">
          <span>윤수현</span>님의 페이지.
        </p>
      </section>
      <MyPageRecommend />
      <MyPageRecommend />

      <section>
        <div className="reportTitle">
          <p>작성 댓글</p>
        </div>
      </section>
      <section id="reportClassify">
        <div className="reportName">
          <p>제목</p>
        </div>
        <div className="reportId">
          <p>ID</p>
        </div>
        <div className="reportDay">
          <p>작성일</p>
        </div>
      </section>
      <MyPageComment />
      <MyPageComment />
      <MyPageComment />

      <section>
        <div className="loginSetting">
          <div className="loginSettingBlock">
            <p href="#" className="loginModify">
              개인정보 수정
            </p>
            <Link to="/signUpDel">
              <p href="myPage/signUpDel.html" className="widrawalBlock">
                회원탈퇴
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default mypage;
