import React, { FunctionComponent } from 'react';
import { TripleVerticalLayout } from '@gannochenko/ui';
import { CentralContainer } from './style';

import { LayoutProperties } from './type';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FunctionComponent<LayoutProperties> = ({ children }) => (
    <TripleVerticalLayout top={<Header />} bottom={<Footer />}>
        <CentralContainer>{children}</CentralContainer>
    </TripleVerticalLayout>
);
