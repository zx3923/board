import React, { useState } from 'react';
import styles from './Write.module.css';


const Write = () => {
    return (
        <>
            <from>
                <div className={styles.title}>
                    <div>제목</div>
                    <input type="text" />
                </div>
                <div className={styles.content}>
                    <div>내용</div>
                    <input type="text" />
                </div>
            </from>
            <div className={styles.btn_box}>
                <button>작성완료</button>
                <button>취소</button>
            </div>
        </>
    );
};

export default Write;