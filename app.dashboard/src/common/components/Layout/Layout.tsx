import React, { FunctionComponent } from 'react';
import { TripleVerticalLayout } from '@gannochenko/ui';
import { CentralContainer } from './style';

import { LayoutProperties } from './type';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FunctionComponent<LayoutProperties> = ({
    children,
    topPadding,
    bottomPadding,
}) => (
    <TripleVerticalLayout top={<Header />} bottom={<Footer />}>
        <CentralContainer topPadding={topPadding} bottomPadding={bottomPadding}>
            {children}
        </CentralContainer>
    </TripleVerticalLayout>
);

Layout.defaultProps = {
    topPadding: true,
    bottomPadding: true,
};
