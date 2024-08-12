import React from 'react';

import AccountPopUp from './AccountPopUp';
import ContactPopUp from './ContactPopUp';
import MaterialPopUp from './MaterialPopUp';
import TruckTypePopUp from './TruckTypePopUp';
import LocationPopUp from './LocationPopUp';

function PopUpParent() {

 
  return ( 

    <React.Fragment>
        <AccountPopUp />
        <ContactPopUp />
        <MaterialPopUp />
        <TruckTypePopUp />
        <LocationPopUp />
    </React.Fragment>
 
  );
}

export default PopUpParent;