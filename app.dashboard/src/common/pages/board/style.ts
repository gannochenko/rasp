import styled from 'styled-components';
import { backgroundCover } from '@gannochenko/etc';

// eslint-disable-next-line global-require
const Board4b = require('./assets/4b.svg').default as string;

// add page-level styles here
export const Picture = styled.div`
    ${backgroundCover(Board4b)}
    width: 512px;
    height: 344px;
`;
