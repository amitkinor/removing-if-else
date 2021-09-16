/* eslint-disable no-console */
import { naiveGetUserData } from './ifelse.services';
import { User } from './ifElse.types';

const IfElse = () => {
  const user:User = {
    name: 'user1', 
    //! sending user with no title should NOT COMPILE !!
    role: 'shopper', 
    // role: 'driver'
    // customKey:'sdfds',  //!  should raise an alert for non existing key!!
    // role: 'sdg' //!  should raise an alert for non existing title !!
  };

  /**
   ** Calls external service that handles fetching
   */
  const getData = () => naiveGetUserData(user);
  // const getData = () => betterGetUserData(user);


  return <div>{getData()}</div>;
};

export default IfElse;

