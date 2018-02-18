import { NavigationActions, StackNavigator } from 'react-navigation';
import {AppNavigator} from '../navigations/index';


//const welcomeAction = AppNavigator.router.getActionForPathAndParams('Home');
//const initialState = AppNavigator.router.getStateForAction(welcomeAction);

const navReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToHome':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Home' }), state);
            break;
        case 'goToDashboard':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Dashboard' }), state);
            break;
        /*
        case 'goToHouseHold':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'HouseHold' }), state);
            break;
        case 'goToAddIndividual':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'AddIndividual' }), state);
            break;
        case 'goToViewCluster':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ViewCluster' }), state);
            break;
        case 'goToViewHousehold':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ViewHousehold' }), state);
            break;
        case 'goToEditIndividual':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'EditIndividual' }), state);
            break;
        case 'goToRandomListScreen':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'RandomListScreen' }), state);
            break;
        case 'goToViewSurveyDetails':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ViewSurveyDetails' }), state);
            break;
        case 'goToHouseholdForm':
            newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'HouseholdForm' }), state);
            break; */
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default navReducer;