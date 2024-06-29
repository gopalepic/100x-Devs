import {atom, selector} from 'recoil'

export const authState = atom ({
    key:'authState',
    default:{token:null,username:null}
})

// export const currentUser = selector({
//     key:'currentUser',
//     get:({get}) =>{
//         const username = get(username);
//     }
// })