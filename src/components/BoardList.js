import React from 'react';
import styels from './BoardList.module.css';
import { Axios } from 'axios';

const BoardList = () => {
    const submitTest = () => {
        Axios.get("http://localhost:8000/", {}).then(() => {
            alert("등록 완료!");
        });
    };

    return (
        <>
            <div className={styels.table}>
                <div className={styels.t_head}>
                    <div>선택</div>
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일</div>
                </div>
                <div className={styels.t_body}>
                    <div className={styels.body_list}>
                        <input type="checkbox" />
                        <div>1</div>
                        <div>게시글1</div>
                        <div>홍길동</div>
                        <div>2022-08-30</div>
                    </div>
                    <div className={styels.body_list}>
                        <input type="checkbox" />
                        <div>2</div>
                        <div>게시글2</div>
                        <div>홍길순</div>
                        <div>2022-08-30</div>
                    </div>
                </div>
            </div>
            <div className={styels.btn_box}>
                <button onClick={submitTest}>글 쓰기</button>
                <button>수정하기</button>
                <button>삭제하기</button>
            </div>
        </>
    );
};

export default BoardList;