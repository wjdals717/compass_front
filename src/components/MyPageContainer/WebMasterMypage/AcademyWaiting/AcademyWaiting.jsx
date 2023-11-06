import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style";

function AcademyWaiting(props) {
    return (
        <div>
            <h2>📜 학원 등록 대기목록</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>학원명</td>
                            <td>신청자</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ학원</td>
                            <td>ㅁㅁㅁ원장</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ㅇㅇㅇ학원</td>
                            <td>ㅅㅅㅅ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AcademyWaiting;