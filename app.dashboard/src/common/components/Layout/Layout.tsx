import React, { FunctionComponent } from 'react';
import { VerticalTriplet } from '@gannochenko/ui';

import { Top, Footer, Logo, Central } from './style';
import { LayoutProperties } from './type';

export const Layout: FunctionComponent<LayoutProperties> = ({ children }) => (
    <VerticalTriplet
        top={
            <Top>
                <Central>
                    <Logo to="/">
                        <div>L</div>
                    </Logo>
                </Central>
            </Top>
        }
        bottom={
            <Footer>
                <Central>&copy; 2020 &laquo;Dashboard&raquo; team</Central>
            </Footer>
        }
    >
        {children}
    </VerticalTriplet>
);
