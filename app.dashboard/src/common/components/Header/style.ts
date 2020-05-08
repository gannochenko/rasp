import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { foregroundColor } from '@gannochenko/etc';
import { Container } from '../Container';

export const HeaderRoot = styled.div`
    height: 3rem;
`;

export const HeaderBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.background.dark};
    color: ${({ theme }) => theme.palette.text.contrast};
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
    z-index: ${({ theme }) => theme.zIndex.appBar};
    min-height: 3rem;
    display: flex;
    align-items: stretch;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
`;

export const Logo = styled(Link)`
    ${({ theme }) => foregroundColor(theme.palette.white, theme.palette.white)};
    text-decoration: none;
`;
