import { atom } from 'recoil';


export const selectedLocationState = atom({
    key: 'selectedLocationState',
    default: {
        atpt_ofcdc_sc_code: "",
        si_do_name:"",
        admst_zone_nm: ""
    }
});


export const selectedCategoryState = atom({
    key: 'selectedCategoryState',
    default: {
        realm_sc_nm: "",
        le_crse_nm: ""
    }
});

export const selectedContentState = atom({
    key: 'selectedContentState',
    default: ""
});

export const selectedAgeState = atom({
    key: 'selectedAgeState',
    default: []
});

export const selectedConvenienceState = atom({
    key: 'selectedConvenienceState',
    default: []
});