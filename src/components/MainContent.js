import React from 'react';
import { GlobalContextProvider } from '../context/GlobalContext';
import { DispatchContextProvider } from './Dispatch/DispatchContext';


import DispatchParent from './Dispatch/DispatchParent';
import PopUpParent from './PopUpComponents/PopUpParent';



const MainContent = ({ loading }) => {
 

    return (
              <div>  
            {!loading && (
                <GlobalContextProvider>
                    <DispatchContextProvider>
                        <DispatchParent />
                    </DispatchContextProvider>
        
                    <PopUpParent/>
                     
                  
                </GlobalContextProvider>
            )}
           </div>    
    );
};

export default MainContent;