import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style'
import { useNavigate, useParams } from 'react-router-dom';

function Pagination({ totalCount, link, search }) {

    const navigate = useNavigate();
    
    const { page } = useParams();

    const pagination = () => {
        const totalAcademyCount = totalCount;
        const lastPage = totalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1;

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`${link}/${parseInt(page) - 1}${search}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`${link}/${num}${search}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`${link}/${parseInt(page) + 1}${search}`);
                }}>&#62;</button>
            </>
        )
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SPageNumbers}>
                {pagination()}
            </div>
        </div>
        
    );
}

export default Pagination;

Pagination.defaultProps = {
    search: ''
  }