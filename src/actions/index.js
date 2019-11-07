import test from '../apis/test';

export const login = (username, password) => async (dispatch, getState) => {
    const response = await test.post('login', {
        username: username,
        password: password
    })
    console.log(response);
    if(response) {
        dispatch({
            type: "LOGIN",
            payload: response.data
        });
    }
}


// name: "Fashionify",
// description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
// role: "Designed, developed and tested the website",
// technologies: [
//     "html", "css", "javascript", "sass", "react", "php", "laravel"
// ],
// desktopImage: fashionify1,
// mobileImage: fashionify2

export const addPrimaryProject = (name, description, role, technologies, desktopImage, mobileImage) => async (dispatch, getState) => {
    
}

// name: "Fashionify",
// description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
// role: "Designed, developed and tested the website",
// image: karrotKing,
// video: karrotKingVideo
export const addSecondaryProject = (name, description, role, images, video) => async (dispatch, getState) => {
    
}