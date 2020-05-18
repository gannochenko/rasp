import styled from 'styled-components';
import { backgroundCover } from '@gannochenko/etc';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// eslint-disable-next-line global-require
const Board4b = require('./assets/4b.svg').default as string;

// add page-level styles here
export const Picture = styled.div`
    ${backgroundCover(Board4b)}
    width: 512px;
    height: 344px;
    margin-bottom: 1rem;
`;

export const ConsumptionIndicator = withStyles({
    root: {
        height: 20,
        borderRadius: 2,
    },
    bar: {
        borderRadius: 20,
    },
})(LinearProgress);

export const Buttons = styled.div`
    & > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const Indicators = styled.div`
    margin-top: 3rem;
`;

export const IndicatorPanel = styled.div`
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
`;
