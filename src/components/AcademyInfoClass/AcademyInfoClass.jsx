import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import * as GS from "../../styles/Global/Common"

function AcademyInfoClass({academyData}) {
    return (
        <div css={S.SClassInfo} id='classinfo'>
            <h1>학원 수업 정보</h1>
            <div>
                {!!!academyData?.classInfo[0] ? 
                <div css={S.SEmpty}>학원 수업 정보가 등록되지 않았습니다.</div>
                : <table css={GS.STable}>
                    <tbody>
                        <tr>
                            <td>과정명</td>
                            <td>가격</td>
                        </tr>
                        {!!academyData?.classInfo[0] ? 
                            academyData?.classInfo?.map((data) => {
                                return (<tr>
                                    <td>{data?.className}</td>
                                    <td>{data?.classPrice}</td>
                                </tr>)
                            }) 
                            :  <tr><td colSpan='2'>학원 수업 정보를 제공하지 않습니다.</td></tr>
                        }
                    </tbody>
                </table>}
            </div>
        </div>
    );
}

export default AcademyInfoClass;