import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import iconMenu from '/assets/menu.png';
import Image from 'next/image';
import back from '/assets/Back.png';
import { fetcher } from 'utils/fetcher';

const Wrapper = styled.nav`
    width: 375px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    p {
        font-weight: 600;
        font-size: 15px;
        margin-left: 7.5rem;
    }
`;

const IconWrap = styled.button`
    width: 30px;
    height: 30px;
    padding: 7px;
    margin-left: 6px;
`;

interface HeaderProps {
    title: string;
    name: string;
}

const Header = ({ name }: { name: string }): JSX.Element => {
    return (
        <Wrapper>
            {name ? (
                <>
                    <IconWrap>
                        <Image src={back} alt="menu" />
                    </IconWrap>
                    <p>{name}</p>
                </>
            ) : (
                <>
                    <IconWrap>
                        <Image src={iconMenu} alt="menu" />
                    </IconWrap>
                    <p>니콘 내콘</p>
                </>
            )}
        </Wrapper>
    );
};

const HeaderBox = styled.header`
    top: 0px;
    position: fixed;
    background-color: #fff;
    height: 59px;
    display: flex;
`;

export default Header;
