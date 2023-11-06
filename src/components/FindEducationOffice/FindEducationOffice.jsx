import React, { useEffect, useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from "./Style"
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';

function FindEducationOffice({ educationOfficeCode }) {
    const [ academyNameInput, setAcademyNameInput ] = useState("");
    const lastAcademyRef = useRef();
    const [ page, setPage ] = useState(1);
    const [ academyData, setAcademyData ] = useState({
        totalCount: 0,
        list: []
    });
    const [ selectedAcademy, setSelectedAcademy ] = useState(null);

    useEffect(() => {
        const observerService = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    getAcademies.refetch();
                }
            });
        }

        const observer = new IntersectionObserver(observerService, {threshold: 1});
        observer.observe(lastAcademyRef.current);
    }, []);

    const getAcademies = useQuery(["getAcademies"], async () => {
        try {
            const options = {
                params: {
                    KEY: "5234f1f7767447b4abc251d862f281e5",
                    Type: "json",
                    pIndex: page,
                    pSize: 20,
                    ATPT_OFCDC_SC_CODE: educationOfficeCode,
                    ACA_NM: academyNameInput
                }
            }
            return await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response);
            if(Object.keys(response?.data).includes("acaInsTiInfo")) {
                setAcademyData({
                    totalCount: response?.data?.acaInsTiInfo[0].head[0].list_total_count, 
                    list: [...academyData.list].concat(response.data.acaInsTiInfo[1]?.row)
                });
                setPage(page + 1);
            }
        },
        enabled: false
    })

    const handleAcademyNameInput = (e) => {
        setAcademyNameInput(e.target.value);
    }

    const handleSearchClick = () => {
        const promise = new Promise((resolve, reject) => {
            setAcademyData({...academyData, list: []});
            setPage(1);
            resolve(true);
        });

        promise.then(() => {
            getAcademies.refetch();
        })
    }

    const selectedChoiceClick = (academy) => {
        setSelectedAcademy(academy);
        console.log("선택됨?")
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SHeadContainer}>
                <input type="text" onChange={handleAcademyNameInput} placeholder='학원명을 입력해주세요.'/>
                <button onClick={handleSearchClick}>검색</button>
            </div>
            <ul css={S.SBodyContainer}>
                <li css={S.SList}>
                    <div>학원번호</div>
                    <div>행정구</div>
                    <div>학원명</div>
                    <div></div>
                </li>
                {academyData?.list?.map((academy) => {
                    return (
                        <li key={academy.ACA_ASNUM} css={S.SList}>
                            <div>{academy.ACA_ASNUM}</div>
                            <div>{academy.ADMST_ZONE_NM}</div>
                            <div>{academy.ACA_NM}</div>
                            <div><button onClick={() => selectedChoiceClick(academy)}>선택</button></div>
                        </li> 
                    );
                })}
                <li ref={lastAcademyRef}></li>
            </ul>
            <div css={S.SChoiceBox}>
                {selectedAcademy && (
                    <div>
                        {selectedAcademy.ACA_NM}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FindEducationOffice;