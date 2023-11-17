import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import * as GS from "../../../../../styles/Global/Common"
import { instance } from '../../../../../api/config/instance';
import { useQuery, useQueryClient } from 'react-query';
import AgeOptions from '../../../../FindAcademiesSidebar/AgeOptions/AgeOptions';
import ConvenienceOptions from '../../../../FindAcademiesSidebar/ConvenienceOptions/ConvenienceOptions';

function DetailMyAcademy({ type, selectedAcademy }) {

    const queryClient = useQueryClient();
    
        const [ academyInfo, setAcademyInfo ] = useState({
            "academyInfo": "",
            "ageRange": [],
            "convenienceInfo": [],
            "classInfo": []
        });

    const [ newAcademyInfo, setNewAcademyInfo ] = useState({
        "academyInfo": "",
        "ageRange": [],
        "convenienceInfo": [],
        "classInfo": []
    })

    const [tableData, setTableData] = useState([
        { id: 1, courseName: '', price: '' }, // 초기에 하나의 행을 가진 배열로 시작
    ]);
    
    const addRow = () => {
        setTableData([
            ...tableData,
            { id: tableData.length + 1, courseName: '', price: '' },
        ]);
    };

    const [ ageOptions, setAgeOptions ] = useState([]);
    const [ convenienceOptions, setConvenienceOptions ] = useState([]);

    const [ selectedAgeOptions, setSelectedAgeOptions ] = useState([]);
    const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useState([]);

    // 학원 정보 가져오기
    const getAcademy = useQuery(["getAcademy"], async () => {
        try {
            const options = {
                params: {
                    pIndex: 1,
                    pSize: 1,
                    ACADEMY_ID: selectedAcademy.academyId
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            // api, options를 get 요청
            return await instance.get("/academy", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyInfo({
                "academyInfo": response.data.academyInfo,
                "ageRange": response.data.ageRange,
                "convenienceInfo": response.data.convenienceInfo,
                "classInfo": response.data.classInfo
            });
            setNewAcademyInfo(academyInfo);
            setSelectedAgeOptions(response.data.ageRange);
            setSelectedConvenienceOptions(response.data.convenienceInfo);
            setTableData(
                response.data.classInfo.map((classItem, index) => ({
                    id: index + 1,
                    courseName: classItem.className,
                    price: classItem.classPrice
                }))
            );
        }
    })

    const ageOptionsState = useQuery(["ageOptionsState"], async () => {
        try {
            return await instance.get("/option/ages");
        } catch(error) {
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
    
    const handleInfoInputChange = (e) => {
        setNewAcademyInfo({
            ...newAcademyInfo,
            "academyInfo": {
                ...newAcademyInfo.academyInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleCheckboxChange = (option, optionType) => {
        const updatedSelectedOptions = optionType === 'age'
            ? [...selectedAgeOptions]
            : [...selectedConvenienceOptions];
      
        const optionIndex = updatedSelectedOptions.indexOf(option.label);
      
        if (optionIndex !== -1) {
            // 이미 선택된 항목일 경우 제거
            updatedSelectedOptions.splice(optionIndex, 1);
        } else {
            // 선택되지 않은 항목일 경우 추가
            updatedSelectedOptions.push(option.label);
        }
        
        if (optionType === 'age') {
            setSelectedAgeOptions(updatedSelectedOptions);
            setNewAcademyInfo({
                ...newAcademyInfo,
                ageRange: updatedSelectedOptions,
            });
        } else {
            setSelectedConvenienceOptions(updatedSelectedOptions);
            setNewAcademyInfo({
                ...newAcademyInfo,
                convenienceInfo: updatedSelectedOptions,
            });
        }
    };

    const handleClassInputChange = (id, fieldName, value) => {
        const updatedTableData = tableData.map((row) =>
            row.id === id ? { ...row, [fieldName]: value } : row
        );
        setTableData(updatedTableData);
    };
    
    const handleEditBtnClick = async () => {
        try {
            const updatedClassInfo = tableData.map((row) => ({
                className: row.courseName,
                classPrice: row.price,
            }));
    
            setNewAcademyInfo((prev) => ({
                ...prev,
                classInfo: updatedClassInfo,
            }));

            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }

            if(academyInfo?.academyInfo?.academyInfoId === null) {   // academyInfotb에 저장되지 않은 경우 insert 해줘야 함.
                await instance.post("/academyInfo", newAcademyInfo, option);
            } else {
                if(JSON.stringify(newAcademyInfo) !== JSON.stringify(academyInfo)) {    // 기존 academyInfo와 달라졌을 때만 수정
                    await instance.put("/academy", newAcademyInfo, option);
                }
            }

            console.log(academyInfo)
            console.log(newAcademyInfo)
            console.log(ageOptions)
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>선택된 학원</span>
                </div>
                <div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                        <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
                    </div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
                    </div>
                </div>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>학원 상세 정보 수정</span>
                    <button css={GS.SButton} onClick={handleEditBtnClick}>수정하기</button>
                </div>
                <div css={S.SInfoContainer}>
                    <div css={S.SInfoBox}>
                        <div css={S.STitleBox}>
                            <span>학원 정보</span>
                        </div>
                        
                        <div>로고 이미지<input type="file" /></div>
                        <div>수강 인원<input type="text" name="classSize" value={newAcademyInfo?.academyInfo?.classSize} onChange={handleInfoInputChange}/></div>
                        <div>수강 기간<input type="text" name="coursePeriod" value={newAcademyInfo?.academyInfo?.coursePeriod} onChange={handleInfoInputChange}/></div>
                        <div>수강 목적<input type="text" name="purpose" value={newAcademyInfo?.academyInfo?.purpose} onChange={handleInfoInputChange}/></div>
                        <div>홈페이지<input type="text" name="homePage" value={newAcademyInfo?.academyInfo?.homePage} onChange={handleInfoInputChange}/></div>
                        <div>학원 전화번호<input type="text" name="phone" value={newAcademyInfo?.academyInfo?.phone} onChange={handleInfoInputChange}/></div>
                    </div>
                    <div>
                        <div css={S.STitleBox}>
                            <span>수강 연령</span>
                        </div>
                        <div css={S.SCheckBox}>
                        {!ageOptions.isLoading && ageOptions?.map((option) => (
                            <div key={option.value}>
                                <input
                                    type="checkbox"
                                    checked={selectedAgeOptions.includes(option.label)}
                                    onChange={() => handleCheckboxChange(option, 'age')}
                                />
                                {option.label}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <div css={S.STitleBox}>
                            <span>시설 및 편의사항</span>
                        </div>
                        <div css={S.SCheckBox}>
                        {!convenienceOptionsState.isLoading && convenienceOptions?.map((option) => (
                            <div key={option.value}>
                                <input
                                    type="checkbox"
                                    checked={selectedConvenienceOptions.includes(option.label)}
                                    onChange={() => handleCheckboxChange(option, 'convenience')}
                                />
                                {option.label}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div css={S.SClassBox}>
                        <div css={S.STitleBox}>
                            <span>학원 수업 정보</span>
                            <button onClick={addRow} css={GS.SButton}>추가</button>
                        </div>
                        <table css={S.STable}>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>과정명</th>
                                    <th>가격</th>
                                    <th>과정 삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tableData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>
                                        <input type="text"
                                            value={row.courseName}
                                            onChange={(e) => handleClassInputChange(row.id, 'courseName', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text"
                                            value={row.price}
                                            onChange={(e) => handleClassInputChange(row.id, 'price', e.target.value)}/>
                                    </td>
                                    <td>
                                        <button css={GS.SButton}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailMyAcademy;