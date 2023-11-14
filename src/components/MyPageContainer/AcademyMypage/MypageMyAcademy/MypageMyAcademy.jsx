import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';

function MypageMyAcademy(props) {
    return (
        <div>
            <h2>🎒 나의 학원</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {/* {pagination()} */}
                </div>
            </div>
        </div>
    );
}

export default MypageMyAcademy;