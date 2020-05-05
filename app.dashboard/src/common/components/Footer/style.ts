import styled from 'styled-components';

export const FooterRoot = styled.div`
    background-color: ${({ theme }) => theme.palette.background.dark};
    color: ${({ theme }) => theme.palette.text.contrast};
    padding: 1rem 0;
`;
