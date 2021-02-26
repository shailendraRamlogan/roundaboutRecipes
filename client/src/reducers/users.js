export default (users = [], action) => {
    switch(action.type){
        case 'FETCHALL':
            return action.payload;
        case 'CREATE':
            return [...users, action.payload];
        case 'LOGIN':
            return [...users, action.payload];
        case 'LOGOUT':
            return [...users, action.payload];
        case 'FINDUSER':
            return [...users, action.payload];
        default:
            return users;
    }
}