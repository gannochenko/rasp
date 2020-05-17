import { applicationReducer } from '../components';
import {
    homePageReducer,
    boardPageReducer,
    cookiePolicyPageReducer,
} from '../pages';

export default {
    application: applicationReducer,
    home: homePageReducer,
    board: boardPageReducer,
    cookiePolicy: cookiePolicyPageReducer,
};
