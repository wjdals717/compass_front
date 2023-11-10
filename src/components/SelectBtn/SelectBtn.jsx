import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlineDown } from 'react-icons/ai'

function SelectBtn({ children, name, setModalIsOpen, setModalName }) {

    const openModal = () => {
        setModalIsOpen(true);
        setModalName(name);
    };

    return (
        <div css={S.SSelectBox} onClick={openModal}>
            <div>{children} <AiOutlineDown/></div>
        </div>
    );
}

export default SelectBtn;