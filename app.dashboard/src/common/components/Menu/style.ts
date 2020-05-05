import styled, { css } from 'styled-components';
import { align, gap, foregroundColor } from '@gannochenko/etc';
import { Link } from 'react-router-dom';

export const MenuRoot = styled.div``;

export const Items = styled.nav`
    ${gap(null, '1rem')}
    ${align('center', 'right')}
    ${({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    })}
`;

export const Item = styled(Link)`
    ${(props) =>
        foregroundColor(
            props.theme.palette.link.altNormal,
            props.theme.palette.link.altNormal,
        )};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    font-size: ${(props) => props.theme.font.small};
    font-weight: bold;

    &:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: white;
        transition: width ease 200ms;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export const Right = styled.div`
    ${align('center', 'center')};
    flex-shrink: 0;
    position: relative;
`;

export const Hamburger = styled.div`
    ${align('center', 'center', 'column')};
    width: 2.5rem;
    height: 2.5rem;
    ${gap('0.2rem', null)};
    padding: 0.5rem;
    cursor: pointer;
    ${({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    })}
`;

export const Bar = styled.div`
    background-color: ${(props) => props.theme.palette.backgroundPrimary};
    height: 10px;
    width: 100%;
    display: block;
`;

export const MobileItems = styled.nav<{ open: boolean }>`
    background-color: white;
    position: absolute;
    top: 100%;
    right: ${(props) => (props.open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: right ease 200ms;
`;

export const MobileItem = styled(Link)`
    padding: 1rem 2rem;
    position: relative;
    display: block;
    text-decoration: none;
    ${(props) =>
        foregroundColor(
            props.theme.color.textPrimary,
            props.theme.color.textPrimary,
        )};
    border-bottom: 1px solid ${(props) => props.theme.color.backgroundSecondary};

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.color.link.normal};
        transition: width 200ms ease;
    }

    &:hover {
        &:before {
            width: 10px;
        }
    }
`;
