import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '../../store/Modal';

function Modal({ modalIsOpen, setModalIsOpen, modalName }) {

    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]);
    const [ educationOfficeOption, setEducationOfficeOption ] = useState("");
    const [ districtOptionShow, setDistrictOptionShow ] = useState(false);
    const [ administrativeDistrictOptions, setAdministrativeDistrictOptions ] = useState([]);
    const [ administrativeDistrictOption, setAdministrativeDistrictOption ] = useState("");
    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);

    // api로 넘길 검색 정보
    useEffect(() => {
        setSelectedLocation({
            ...selectedLocation,
            atpt_ofcdc_sc_code: educationOfficeOption,
            admst_zone_nm: administrativeDistrictOption
        })
    },[educationOfficeOption, administrativeDistrictOption])

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const educationOfficeOptionsState = useQuery(["educationOfficeOptionsState"], async () => {
        try {
            return await instance.get("/option/education-offices");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setEducationOfficeOptions(response.data.map(option => {
                return {value: option.educationOfficeCode, label: option.educationOfficeName};
            }));
        }
    });

    const getAdministrativeDistrictOptions = useQuery(["getAdministrativeDistrictOptions"], async () => {
        try {
            return await instance.get("/option/administrative-districts");
        } catch (error) {
            console.error(error);
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAdministrativeDistrictOptions(response.data);
        }
    });

    // educationOfficeOption과 일치하는 administrativeDistrictOptions 필터링
    const filteredAdministrativeDistrictOptions = administrativeDistrictOptions.filter(option => {
        return option.educationOfficeCode === educationOfficeOption;
    });

    

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
            {modalName}
            <div css={S.SListContainer}>
                <ul css={S.SEducationOfficeList}>
                    {educationOfficeOptions.map((option) => (
                        <li key={option.value} onClick={() => {
                            setEducationOfficeOption(option.value);
                            setDistrictOptionShow(true);
                            setAdministrativeDistrictOption("");
                        }}>
                            {option.label}
                        </li>
                    ))}
                </ul>
                <ul css={S.SDistrictOptionList(districtOptionShow)}>
                    {filteredAdministrativeDistrictOptions.map((option) => (
                        <li key={option.administrativeDistrictId} 
                        onClick={() => {setAdministrativeDistrictOption(option.administrativeDistrictName)}}>
                            {option.administrativeDistrictName}
                        </li>
                    ))}
                </ul>
            </div>
            <button>선택</button>
            <button onClick={closeModal}>닫기</button>
        </ReactModal>
    );
}

export default Modal;