import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { instance } from '../../../api/config/instance';
import { useQuery } from 'react-query';
import ReactModal from 'react-modal';
import { selectedCategoryState } from '../../../store/Modal';

function CategoryModal({ modalIsOpen, setModalIsOpen }) {
    
    const [ categoryOptions, setCategoryOptions ] = useState([]); // 카테고리 목록
    const [ categoryOption, setCategoryOption ] = useState(""); // 선택된 카테고리
    const [ detailOptionShow, setDetailOptionShow ] = useState(false); // 교육청이 선택 됐을 때 행정구역 정보
    const [ categoryDetailOptions, setCategoryDetailOptions ] = useState([]); // 상세 카테고리 목록
    const [ categoryDetailOption, setCategoryDetailOption ] = useState(""); // 선택된 상세 카테고리 
    const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // api로 넘길 카테고리 정보



    const closeModal = () => {
        // api로 넘길 카테고리 검색 정보
        setSelectedCategory({
            ...selectedCategory,
            realm_sc_nm: categoryOption,
            le_crse_nm: categoryDetailOption
        })
        setModalIsOpen(false);
    };


    const categoryOptionsState = useQuery(["categoryOptionsState"], async () => {
        try {
            return await instance.get("/option/categories");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCategoryOptions(response.data.map(option => {
                return { value: option.categoryValue, label: option.categoryName }
            }))
        }
    });

    const categoryDetailOptionsState = useQuery(["categoryDetailOptionsState"], async () => {
        try {
            return await instance.get("/option/category-details");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCategoryDetailOptions(response.data);
        }
    });

    // categoryOption 일치하는 categoryDetailOptions 필터링
    const filteredCategoryDetailOptions = categoryDetailOptions.filter(option => {
        return option.categoryValue === categoryOption;
    });

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
            <div>카테고리 선택</div>
            <div css={S.SListContainer}>
                <ul css={S.SCategoryList}>
                    {categoryOptions.map((option) => (
                        <li key={option.value} 
                            onClick={() => {
                                setCategoryOption(option.value);
                                setDetailOptionShow(true);
                                setCategoryDetailOption("");
                            }}
                            css={[
                                S.SCategoryListItem, // 기존 스타일을 포함
                                option.value === categoryOption && S.SCategoryListItemSelected // 선택된 li에 대한 스타일
                            ]}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
                <ul css={S.SCategoryDetailList(detailOptionShow)}>
                    {filteredCategoryDetailOptions.map((option) => (
                        <li key={option.categoryDetailValue} 
                        onClick={() => {setCategoryDetailOption(option.categoryDetailValue)}}>
                            {option.categoryDetailName}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={closeModal}>선택</button>
        </ReactModal>
    );
}

export default CategoryModal;