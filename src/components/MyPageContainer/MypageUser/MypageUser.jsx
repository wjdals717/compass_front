import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function MypageUser(props) {
    return (
        <div>
            <h2>🛠️ 개인정보수정</h2>
            <div>
                <table css={S.STable}>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>aaa@gmail.com</td>
                            <td><button>인증하기</button></td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>ㅁㅁㅁ</td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>aaaaa</td>
                            <td><button>변경하기</button></td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>01012345678</td>
                            <td><button>변경하기</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageUser;