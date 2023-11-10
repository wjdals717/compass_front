import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';

function FindAcademiesBox(props) {
    // 현재 페이지 번호를 관리하는 상태 변수
    const [ page, setPage ] = useState(1);

    const getAcademies = useQuery(["getAcademies"], async () => {
        try {
            const options = {
                // (key(필수 type), value(변수설명)) 형식
                params: {
                    KEY: "5234f1f7767447b4abc251d862f281e5",
                    Type: "json",
                    pIndex: page,
                    pSize: 20,
                    ATPT_OFCDC_SC_CODE: ""
                }
            }

            // api, options를 get 요청
            return await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        
    })

    return (
        <ul css={S.UlBox}>
                            <li css={S.LiBox}>
                                <img src="" alt="로고" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                        </ul>
    );
}

export default FindAcademiesBox;