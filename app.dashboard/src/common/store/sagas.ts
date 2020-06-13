import { applicationSaga } from '../components';
import {
    homePageSaga,
    boardPageSaga,
    cookiePolicyPageSaga,
    ledsPageSaga,
} from '../pages';

export default [
    applicationSaga,
    homePageSaga,
    boardPageSaga,
    cookiePolicyPageSaga,
    ledsPageSaga,
];
