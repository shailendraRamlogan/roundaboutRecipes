export default (recipes = [], action) => {
    switch(action.type){
        case 'FETCHALL':
            return action.payload;
        case 'CREATE':
            return [...recipes, action.payload];
        case 'FETCHUSERRECIPES':
            return [...recipes, action.payload];
        case 'FETCHSEARCHRECIPES':
            return [...recipes, action.payload];
        case 'FETCHFAVOURITERECIPES':
            return [...recipes, action.payload];
        case 'ADDTOFAVOURITES':
            return [...recipes, action.payload];
        case 'REMOVEFROMFAVOURITES':
            return [...recipes, action.payload];
        case 'DELETERECIPE':
            return [...recipes, action.payload];
        default:
            return recipes;
    }
}