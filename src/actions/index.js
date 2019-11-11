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

export const addPrimaryProject = (name, description, role, technologies, desktopImage, mobileImage, url, github) => async (dispatch, getState) => {
    const data = new FormData()
    data.append('name', name);
    data.append('description', description);
    data.append('tech', technologies);
    data.append('desktopImage', desktopImage);
    data.append('mobileImage', mobileImage);
    data.append('role', role);
    data.append('url', url);
    data.append('github', github);

    try {
        const response = await test.post('addPrimaryProject', data)
        console.log(response);
        if(response) {
            dispatch({
                type: "ADD_PROJECT",
                payload: response.data
            });
        }
    } catch (e) {
        console.log(e);
    }
}

//function that gets every project from the database.
export const getProjects = () => async (dispatch, getState) => {
    const response = await test.get('getPrimaryProjects');
    if(response) {
        console.log(response.data);
        dispatch({
            type: "GET_PROJECTS",
            payload: response.data
        });
    }
}

export const getProject = (id) => async (dispatch, getState) => {
    console.log("Looking for item: " + id);
    const response = await test.get('getPrimaryProject/' + id);
    if(response) {
        console.log(response.data);
        dispatch({
            type: "GET_PROJECT",
            payload: response.data
        });
    }
}

export const updateProject = (id, name, description, role, technologies, desktopImage, mobileImage, url, github) => async (dispatch, getState) => {
    const data = new FormData()
    data.append('name', name);
    data.append('description', description);
    data.append('role', role);
    data.append('tech', technologies);
    data.append('url', url);
    data.append('github', github);
    if(desktopImage) {
        data.append('desktopImage', desktopImage);
    }

    if(mobileImage) {
        data.append('mobileImage', mobileImage);
    }

    try {
        const response = await test.post('updatePrimaryProject/' + id, data);
        if(response) {
            console.log(response.data);
            dispatch({
                type: "UPDATE_PROJECT",
                payload: response.data
            })
        }
    } catch (e) {
        console.log(e);
    }
}

//action to delete a specific primary action.
export const deletePrimaryProject = (id) => async (dispatch, getState) => {
    try {
        const response = await test.post('detetePrimaryProject/' + id);
    } catch (e) {
        console.log(e);
    }
}

// name: "Fashionify",
// description: "Pseudo E-Commerce website which allows users to view an inventory of items and add any wanted items to a basket.",
// role: "Designed, developed and tested the website",
// image: karrotKing,
// video: karrotKingVideo
export const addSecondaryProject = (name, description, role, images, background, backgroundType, url, github) => async (dispatch, getState) => {
    var data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('role', role);
    data.append('url', url);
    data.append('github', github);
    for(var i = 0; i < images.length; i++) {
        data.append('images[]', images[i]);
    }
    // data.append('images', images);
    data.append('background', background);
    data.append('backgroundType', backgroundType);

    const response = await test.post('addSecondaryProject', data);
    if(response) {
        // getProjects();
        console.log(response);
    }
}