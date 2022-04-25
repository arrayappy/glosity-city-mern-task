import axios from "axios";
const apiNotices = "http://localhost:8080/api/notices";
const apiEvents = "http://localhost:8080/api/events";

export function getNotices() {
    return axios.get(apiNotices);
}

export function getEvents() {
    return axios.get(apiEvents);
}

// export function addTask(task) {
//     return axios.post(apiUrl, task);
// }

// export function updateTask(id, task) {
//     return axios.put(apiUrl + "/" + id, task);
// }

// export function deleteTask(id) {
//     return axios.delete(apiUrl + "/" + id);
// }
