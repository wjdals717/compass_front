import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useQueryClient } from 'react-query';

function MyPageSidebar({ role, children }) {

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const principal = principalState.data.data;
    const [ roleMypageSidebar, setRoleMypageSidebar ] = useState(null);
    
    useEffect(() => {
        if (principal.roleId !== roleMypageSidebar) {
            setRoleMypageSidebar(principal.roleId);
        }
    }, [principal.roleId, roleMypageSidebar]);

    return (
        <div css={S.MySidebarLayout}>
            <div css={S.UserContainer}>
                <h2>{principal.nickname}</h2>
                <div>
                    🍀<span>{role}</span>
                </div>
            </div>
            { children }
        </div>
    );
}

export default MyPageSidebar;