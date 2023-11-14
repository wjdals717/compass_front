import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQuery } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedAgeState } from '../../../store/searchOptions';

function AgeOptions(props) {
    
    const [ ageOptions, setAgeOptions ] = useState([]);
    const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState);
    
    const ageOptionsState = useQuery(["ageOptionsState"], async () => {
        try {
            return await instance.get("/option/ages");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAgeOptions(response.data.map(option => {
                return { value: option.ageId, label: option.ageRange }
            }))
        }
    });

    // 선택된 ConvenienceOption의 value값을 리스트에 추가 또는 제거
    const handleCheckboxChange = (value) => {
        setSelectedAgeOptions((prevOptions) => {
            const updatedList = prevOptions.list.includes(value)
                ? prevOptions.list.filter(option => option !== value)
                : [...prevOptions.list, value];

            return {
                AgeCount: updatedList.length,
                list: updatedList,
            };
        });
    };

    return (
        <div css={S.FilterContainer}>
            <h3>수강 연령</h3>
            {ageOptions.map((option) => (
                <div key={option.value}>
                    <input
                        type="checkbox"
                        checked={selectedAgeOptions.list.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                    />
                    {option.label}
                </div>
            ))}
        </div>
    );
}

export default AgeOptions;