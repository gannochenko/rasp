import React, { FunctionComponent } from 'react';

import { HeaderRoot, HeaderBar } from './style';
import { HeaderPropsType } from './type';
import { Container } from '../Container';

export const Header: FunctionComponent<HeaderPropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <HeaderRoot {...restProps}>
            <HeaderBar>
                <Container>Hello there, children!</Container>
            </HeaderBar>
        </HeaderRoot>
    );
};
