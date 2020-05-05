import styled from 'styled-components';
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
    padding: 0.7rem 0;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
`;

export const Left = styled.div`
    flex-shrink: 0;
`;

export const Right = styled.div`
    flex-shrink: 0;
`;
