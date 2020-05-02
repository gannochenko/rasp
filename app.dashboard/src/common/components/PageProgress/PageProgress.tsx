import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { PageLoadProgress } from '@gannochenko/ui';

import { PageProgressPropsType } from './type';
import { ObjectLiteral } from '../../../type';

export const PageProgress: FunctionComponent<PageProgressPropsType> = (
    props,
) => (
    <ProgressObserver {...props} observeGlobalLock>
        {(propss) => {
            console.log('11');
            console.log(propss);

            return <div>111</div>;
        }}
    </ProgressObserver>
);

export const ProgressObserver = connect((state: ObjectLiteral) => ({ state }))(
    PageLoadProgress,
);
