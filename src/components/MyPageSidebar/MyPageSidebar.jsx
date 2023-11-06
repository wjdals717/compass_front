import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import {AiFillSetting} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function MyPageSidebar({ role, children }) {
    return (
        <div css={S.MySidebarLayout}>
            <div css={S.UserContainer}>
                <h2>닉네임</h2>
                <div>
                    🍀<span>{role}</span>
                </div>
            </div>
            { children }
        </div>
    );
}

export default MyPageSidebar;