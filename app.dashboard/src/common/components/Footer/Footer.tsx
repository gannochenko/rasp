import React, { FunctionComponent } from 'react';

import { FooterRoot, Copyright, Links } from './style';
import { FooterPropsType } from './type';
import { Container } from '../Container';
import { Link } from '../Link';

export const Footer: FunctionComponent<FooterPropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <FooterRoot {...restProps}>
            <Container contentAlign="center">
                <Copyright>
                    &copy; 2020 &mdash; current &laquo;Rasp Dashboard&raquo;
                    team
                </Copyright>
                <Links>
                    <Link to="/cookie-policy" inverse underline="hover">
                        Cookie policy
                    </Link>
                </Links>
            </Container>
        </FooterRoot>
    );
};
