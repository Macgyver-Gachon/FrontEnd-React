import { Link } from "react-router-dom";
import "./communityPosting.css";

const CommunityPosting = () => {
  return (
    <>
      <section id="cmPosting">
        <div className="cmPostingBlock">
          <div className="cmPostingContent">
            <div className="cmPostingTitle">
              <Link to="/posting">
                <p>풍경 죽이죠?</p>
              </Link>
            </div>
            <div className="cmPostingImg">
              <img src={"img/postingImg.jpg"} alt="" />
            </div>
            <div className="tag">
              <p>#풍경사진전</p>
              <p>#풍경</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPosting;
