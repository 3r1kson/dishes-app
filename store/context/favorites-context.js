import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    function addFavorites(id) {
        setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id)
        );
    }

    const value = { 
        ids: favoriteMealsIds,
        addFavorites: addFavorites,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;