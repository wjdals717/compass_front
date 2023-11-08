import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQueryClient } from 'react-query';
import { async } from 'q';
import { instance } from '../../../api/config/instance';

function MypageUser(props) {
    
    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    const [ isEdit, setIsEdit ] = useState(false);

    const [ newUser, setNewUser ] = useState({
        email: principalState.data.data.email,
        name: principalState.data.data.name,
        nickname: principalState.data.data.nickname,
        phone: principalState.data.data.phone
    })

    const handleEditBtnOnClick = () => {
        setIsEdit(true);
    }

    const handleEditSubmitOnClick = async () => {
        setIsEdit(false);
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        const response = await instance.put(`/account/user/${principalState.data.data.userId}`, newUser, option);

        queryClient.refetchQueries(["getPrincipal"]);
    }

    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div css={S.SLayout}>
            <div css={S.STitleLayout}>
                <h2>🛠️ 개인정보수정</h2>
                { isEdit? 
                    <button onClick={handleEditSubmitOnClick}>확인</button> 
                    : <button onClick={handleEditBtnOnClick}>개인정보 변경하기</button> }
            </div>
            <div>
                <table css={S.STable}>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='email' 
                                        value={newUser.email}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.email}
                                <button>인증하기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='name' 
                                        value={newUser.name}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.name}
                            </td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='nickname' 
                                        value={newUser.nickname}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.nickname}
                            </td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='phone' 
                                        value={newUser.phone}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.phone}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageUser;