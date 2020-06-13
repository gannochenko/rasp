import React, { FunctionComponent, useState, useCallback } from 'react';

import {
    MenuRoot,
    Items,
    Item,
    Hamburger,
    Bar,
    Main,
    MobileItems,
    MobileItem,
} from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onHamburgerClick = useCallback(() => {
        setMobileMenuOpen(!mobileMenuOpen);
    }, [mobileMenuOpen, setMobileMenuOpen]);
    const onMobileItemClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    return (
        <MenuRoot>
            <Main>
                <Items>
                    <Item to="/board">Board</Item>
                    <Item to="/leds">LEDs</Item>
                </Items>
                <Hamburger onClick={onHamburgerClick}>
                    <Bar />
                    <Bar />
                    <Bar />
                </Hamburger>
            </Main>
            <MobileItems open={mobileMenuOpen}>
                <MobileItem to="/board" onClick={onMobileItemClick}>
                    Board
                </MobileItem>
                <MobileItem to="/leds" onClick={onMobileItemClick}>
                    LEDs
                </MobileItem>
            </MobileItems>
        </MenuRoot>
    );
};
