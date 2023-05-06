import client from "./client";

export const readPostsList = () =>
    client.get('/jobs');
