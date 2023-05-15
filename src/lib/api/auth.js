import client from "./client";

export const signUp = ({ email, username, password }) =>
    client.post('/signup', { email, username, password });

export const signIn = ({ email, password }) =>
    client.post('/signin', { email, password });

export const checkAuth = () => {
    let access_token = localStorage.getItem("access");
    let config = {
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
    };
    return client.get('/auth/check', config);
}
