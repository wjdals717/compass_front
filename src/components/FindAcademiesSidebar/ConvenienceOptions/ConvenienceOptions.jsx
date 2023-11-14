import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQuery } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedConvenienceState } from '../../../store/searchOptions';

function ConvenienceOptions(props) {
    
    const [ convenienceOptions, setConvenienceOptions ] = useState([]);
    const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState);
    
    const convenienceOptionsState = useQuery(["convenienceOptionsState"], async () => {
        try {
            return await instance.get("/option/conveniences");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setConvenienceOptions(response.data.map(option => {
                return { value: option.convenienceId, label: option.convenienceName }
            }))
        }
    });

    // 선택된 ConvenienceOption의 value값을 리스트에 추가 또는 제거
    const handleCheckboxChange = (value) => {
        setSelectedConvenienceOptions((prevOptions) => {
            const updatedList = prevOptions.list.includes(value)
                ? prevOptions.list.filter(option => option !== value)
                : [...prevOptions.list, value];

            return {
                convenienceCount: updatedList.length,
                list: updatedList,
            };
        });
    };


    return (
        <div css={S.FilterContainer}>
            <h3>시설 및 편의사항</h3>
            {convenienceOptions.map((option) => (
                <div key={option.value}>
                    <input
                        type="checkbox"
                        checked={selectedConvenienceOptions.list.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                    />
                    {option.label}
                </div>
            ))}
        </div>
    );
}

export default ConvenienceOptions;