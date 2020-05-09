import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { foregroundColor } from '@gannochenko/etc';
import { Link as RouterLink } from 'react-router-dom';

type PropLinks = {
    to?: string;
    href?: string;
    fontSize?: string;
    bright?: boolean;
    theme?: any;
};

const fgColors = ({ bright, theme }: PropLinks) => {
    if (bright) {
        return css`
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        `;
    }

    return foregroundColor(
        theme.palette.primary.main,
        theme.palette.primary.dark,
        '200ms',
    );
};

export const RouterLinkStyled = styled(RouterLink)<PropLinks>`
    ${(props) => fgColors(props)};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.typography.fontSize[fontSize] : 'inherit'};
`;

export const LinkStyled = styled.a<PropLinks>`
    ${(props) => fgColors(props)};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.typography.fontSize[fontSize] : 'inherit'};
`;

export const Link: FunctionComponent<PropLinks> = (props) => {
    const { to, href } = props;
    const link = to || href || '';

    if (!link.startsWith('/')) {
        return <LinkStyled {...props} href={link} target="_blank" />;
    }

    return <RouterLinkStyled to={link} {...props} />;
};
