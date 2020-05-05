import React, { FunctionComponent } from 'react';

import { FooterRoot } from './style';
import { FooterPropsType } from './type';
import { Container } from '../Container';

export const Footer: FunctionComponent<FooterPropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <FooterRoot {...restProps}>
            <Container contentAlign="center">
                &copy; 2020 &mdash; current &laquo;Dashboard&raquo; team
            </Container>
        </FooterRoot>
    );
};
