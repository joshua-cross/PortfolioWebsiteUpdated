import test from '../apis/test';
import validator from 'validator';

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

export const editSecondaryProject = (id, name, description, role, images, background, backgroundType, url, github) => async (dispatch, getState) => {
    var data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('role', role);
    data.append('url', url);
    data.append('github', github);
    data.append('backgroundType', backgroundType);
    if(images) {
        for(var i = 0; i < images.length; i++) {
            // if(typeof images[i] === 'string') {
            //     if(validator.isURL(images[i])) {
            //         images[i] = new File(images[i], "file" +  i);
            //     }
            // }
            if(typeof images[i] === 'string') {
                //converting a link to a file.
                let response = await fetch(images[i]);
                let data = await response.blob();
                let metadata = {
                    type: 'image/jpeg'
                };
                images[i] = new File([data], `file${i}.jpg`, metadata);
                console.log("file: ", images[i]);
            }
            data.append('images[]', images[i]);
        }
        console.log("images after links", images);
    }

    if(background) {
        data.append('background', background);
    }

    try {
        const response = await test.post(`editSecondaryProject/${id}`, data);
        if(response) {
            console.log(response);
        }
    } catch (e) {
        console.log(e);
    }
}

export const getSecondaryProjects = () => async (dispatch, getState) => {
    const response = await test.get("/getSecondaryProjects");
    if(response) {
        console.log("secondaryProjects", response.data);
        dispatch({
            type: "GET_SECONDARY_PROJECTS",
            payload: response.data
        });
    }
}

export const getSecondaryProject = (id) => async (dispatch, getState) => {
    try {
    const response = await test.get(`getSecondaryProject/${id}`);
    if(response) {
        console.log("secondary project: ", response.data)
        dispatch({
            type: "GET_SECONDARY_PROJECT",
            payload: response.data
        })
    }
    } catch (e) {
        console.log(e);
    }
}

export const deleteSecondaryProject = (id) => async (dispatch, getState) => {
    const response = await test.post(`deleteSecondaryProject/${id}`);
    if(response) {
        console.log(response);
        getSecondaryProjects();
    }
}