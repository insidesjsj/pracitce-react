import {emotionList} from "../util";    // 5개의 감정 이미지를 데이터 형태로 저장한 emotionList를 불러온다.
import "./Viewer.css";
const Viewer = ({ content, emotionId }) => {
    const emotionItem = emotionList.find((it) => it.id === emotionId);

    return (
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <div
                    className={[
                    "emotion_img_wrapper",
                    `emotion_img_wrapper_${emotionId}`
                    ].join(" ")}
                >
                    <img alt={emotionItem.name} src={emotionItem.img} />
                    <div className="emotion_descript">{emotionItem.name}</div>
                </div>
                <h4>오늘의 일기</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
};
export default Viewer;