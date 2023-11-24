import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style'
import LinkBtn from '../Button/LinkBtn/LinkBtn';

function EmptyBox({ comment, link, btn }) {
    return (
        <div css={S.SEmptyBox}>
            <div css={S.SEmptyComment}>{comment}</div>
            <LinkBtn link={link} btn={btn}/>
        </div>
    );
}

export default EmptyBox;