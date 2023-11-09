import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import {AiFillSetting} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import WebMastesrSidebar from './WebMastesrSidebar/WebMastesrSidebar';
import StudentSidebar from './StudentSidebar/StudentSidebar';
import AcademySidebar from './AcademySidebar/AcademySidebar';

function MyPageSidebar({ role, children }) {

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal")
    const principal = principalState.data.data;
    const [ roleMypageSidebar, setRoleMypageSidebar ] = useState(null);
    console.log(principal)

    useEffect(() => {
        if (principal.roleId !== roleMypageSidebar) {
            setRoleMypageSidebar(principal.roleId);
        }
    }, [principal.roleId, roleMypageSidebar]);

    return (
        <div css={S.MySidebarLayout}>
            <div css={S.UserContainer}>
                <h2>닉네임</h2>
                <div>
                    🍀<span>{role}</span>
                </div>
            </div>
            <div>
                
            </div>
            { children }
        </div>
        
    );
}

export default MyPageSidebar;