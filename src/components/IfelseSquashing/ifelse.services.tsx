/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Roles, User } from './ifElse.types';
// import { possibleRoles } from "./ifElse.types";

/**
 *? Naive Approach
 ** No type usage
 ** Allowing callers to pass anything
 ** No warning to callers - undefined as a response
 ** Does not scale
 *  */

export const naiveGetUserData = (user: any) => {
  if (user.role === 'shopper') {
    return 'i am a Shopper';
  }

  if (user.role === 'driver') {
    return 'i am a Driver';
  }
};
/////////////////////////////////////////
/////////////////////////////////////////

/**
 *? No more if/else
 */
export const betterGetUserData = (user: User) => {
  /**
   ** Single source of truth
   */
  const roles: Roles = {
    shopper: getShopper,
    driver: getDriver,
    Default: getDefaultRes
  };

  const roleFunction = roles[user.role] ?? roles.Default;

  return <>{roleFunction(user)}</>;  
};

const getDriver = (user: User) => 'i am a Driver';

const getShopper = (user: User) => 'i am a Shopper';

const getDefaultRes = (user: User) => 'please give me role';

    // customer: 4,

