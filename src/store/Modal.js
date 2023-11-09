import { atom, useRecoilState } from 'recoil';

export const selectedLocationState = atom({
    key: 'selectedLocationState',
    default: {
        atpt_ofcdc_sc_code: "",
        admst_zone_nm: ""
    },
});