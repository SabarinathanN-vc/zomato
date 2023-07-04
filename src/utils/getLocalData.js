import * as rs from '../localstorageData';

export const addLocalStorage = (() => {
    localStorage.setItem("restaurentDetails", JSON.stringify(rs.RestaurentDetails));
    let data = JSON.parse(localStorage.getItem("restaurentDetails"));
    return (data);

})

