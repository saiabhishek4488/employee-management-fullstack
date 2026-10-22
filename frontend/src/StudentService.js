import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const saveStudent = (student) => {
    return axios.post(API_URL, student);
};
export const getAllStudent = () => {
    return axios.get(API_URL);
};
export const deleteById = (empno) => {
    return axios.delete(`${API_URL}/${empno}`);
};
export const getStudentById = (empno) => {
    return axios.get(`${API_URL}/${empno}`);
};

export const updateStudent = (empno, student) => {
    return axios.put(`${API_URL}/${empno}`, student);
}

