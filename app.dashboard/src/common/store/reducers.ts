import { applicationReducer } from '../components';
import {
    homePageReducer,
    boardPageReducer,
    cookiePolicyPageReducer,
    ledsPageReducer,
} from '../pages';

export default {
    application: applicationReducer,
    home: homePageReducer,
    board: boardPageReducer,
    cookiePolicy: cookiePolicyPageReducer,
    leds: ledsPageReducer,
};
