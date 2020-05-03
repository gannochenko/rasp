import styled from 'styled-components';
import { align, rectangle, central } from '@gannochenko/etc';
import { Link } from 'react-router-dom';

export const Top = styled.div`
    min-height: 3rem;
    border-bottom: 1px solid gray;
`;

export const Footer = styled.div`
    border-top: 1px solid gray;
    //font-size: ${(props) => props.theme.font.xSmall};
`;

export const Logo = styled(Link)`
    ${rectangle('2rem')}
    ${align('center', 'center')}
    border: 1px solid gray;
    border-radius: 5px;
    text-decoration: none;
    color: gray;
`;

export const Central = styled.div`
    ${central()};
    width: 100%;
    padding: 1rem;
`;
