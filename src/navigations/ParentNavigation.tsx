import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {
  SplashScreen,
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  VerificationScreen,
  HomeScreen,
  RestaurantScreen,
  FoodScreen,
} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {GeneralAction} from '../actions';

export type ParentStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Signin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  RegisterPhone: undefined;
  Verification: {};
  HomeScreen: undefined;
  Restaurant: {phoneNumber: undefined};
  Food: {};
  HomeTabs: undefined;
};
const ParentStack = createNativeStackNavigator<ParentStackParamList>();
const ParentNavigator = () => {
  const {isAppLoading, token, isFirstTimeUse} = useSelector(
    state => state?.generalState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <ParentStack.Navigator screenOptions={{headerShown: false}}>
      {isAppLoading ? (
        <ParentStack.Screen name="Splash" component={SplashScreen} />
      ) : !token || token === null || token === '' ? (
        <>
          {isFirstTimeUse && (
            <ParentStack.Screen name="Welcome" component={WelcomeScreen} />
          )}
          <ParentStack.Screen name="Signin" component={SigninScreen} />
          <ParentStack.Screen name="Signup" component={SignupScreen} />
          <ParentStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <ParentStack.Screen
            name="RegisterPhone"
            component={RegisterPhoneScreen}
          />
          <ParentStack.Screen
            name="Verification"
            component={VerificationScreen}
          />
        </>
      ) : (
        <>
          <ParentStack.Screen name="HomeTabs" component={TabNavigator} />
          <ParentStack.Screen name="Restaurant" component={RestaurantScreen} />
          <ParentStack.Screen name="Food" component={FoodScreen} />
        </>
      )}
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
