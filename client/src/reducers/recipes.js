export default (recipes = [], action) => {
    switch(action.type){
        case 'FETCHALL':
            return action.payload;
        case 'CREATE':
            return [...recipes, action.payload];
        default:
            return recipes;
    }
}