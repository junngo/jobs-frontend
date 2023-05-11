import client from "./client";

export const readJobsList = () =>
    client.get('/jobs');

export const readJobDetail = (id) =>
    client.get(`/job/${id}`);
