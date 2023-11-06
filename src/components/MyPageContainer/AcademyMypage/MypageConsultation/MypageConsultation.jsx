import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"

function MypageConsultation(props) {
    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>문의사항</td>
                            <td>등록자</td>
                            <td>답변</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ에 대해 문의드립니다.</td>
                            <td>aaa</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ㅇㅇㅇ에 대해 문의드립니다.</td>
                            <td>bbb</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageConsultation;