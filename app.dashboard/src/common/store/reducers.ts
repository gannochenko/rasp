import { applicationReducer } from '../components';
import { homePageReducer, page2Reducer } from '../pages';

export default {
    application: applicationReducer,
    home: homePageReducer,
    page2: page2Reducer,
};
