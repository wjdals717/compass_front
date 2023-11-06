import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"

function MypageReview(props) {
    return (
        <div>
            <h2>📜 작성한 후기</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>학원명</td>
                            <td>후기</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ학원</td>
                            <td>~점이 좋았음</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ㅇㅇㅇ학원</td>
                            <td>잘 가르침</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageReview;