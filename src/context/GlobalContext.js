import React,{useState,useContext,createContext} from 'react'
import { UserAuth } from './AuthContext';
const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [accountVisible, setAccountVisible] = useState(false);
    const [account, setAccount] = useState({});
    const [contactVisible, setContactVisible] = useState(false);
    const [contact, setContact] = useState({});
    const [materialVisible, setMaterialVisible] = useState(false);
    const [material, setMaterial] = useState({});
    const [truckTypeVisible, setTruckTypeVisible] = useState(false);
    const [truckType, setTruckType] = useState({});
    const [locationVisible, setLocationVisible] = useState(false);
    const [location, setLocation] = useState({});

    const { accounts, contacts, materials, truckTypes, locations } = UserAuth();

    const showAccountPopUp = (Account) =>{
        for(let i=0; i<accounts.length; i++)if(accounts[i].ID===Account.ID)setAccount({...accounts[i]})
        setAccountVisible(true);
    }
    const showContactPopUp = (Contact) =>{
        if(Contact.ID){
            for(let i=0; i<contacts.length; i++)if(contacts[i].ID===Contact.ID)setContact({...contacts[i]})
        }else setContact({...Contact})
        setContactVisible(true);
    }
    const showMaterialPopUp = (Material) =>{
        for(let i=0; i<materials.length; i++)if(materials[i].ID===Material.ID)setMaterial({...materials[i]})
        setMaterialVisible(true);
    }
    const showTruckTypePopUp = (TruckType) =>{
        for(let i=0; i<truckTypes.length; i++)if(truckTypes[i].ID===TruckType.ID)setTruckType({...truckTypes[i]})
        setTruckTypeVisible(true);
    }
    const showLocationPopUp = (Location) =>{
        for(let i=0; i<locations.length; i++)if(locations[i].ID===Location.ID)setLocation({...locations[i]})
        setLocationVisible(true);
    }
    return (
        <GlobalContext.Provider value={{
            account, setAccount, accountVisible, setAccountVisible, showAccountPopUp,
            contact, setContact, contactVisible, setContactVisible, showContactPopUp, 
            material, setMaterial, materialVisible, setMaterialVisible, showMaterialPopUp, 
            truckType, setTruckType, truckTypeVisible, setTruckTypeVisible, showTruckTypePopUp, 
            location, setLocation, locationVisible, setLocationVisible, showLocationPopUp, 
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
export const useGlobal= () => useContext(GlobalContext);