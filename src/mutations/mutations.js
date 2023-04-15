import axios from "axios";
const { API_ENDPOINT } = require("../constants/constants");

const mutations = {
  // fetch all jobs from mock API
  getData: async function () {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  },

  // create jobs
  createData: async function (formData) {
    await axios
      .post(API_ENDPOINT, formData)
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  },

  // delete a job by ID
  deleteData: async function (id) {
    await axios
      .delete(`${API_ENDPOINT}/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  },

  // update a job by ID
  updateData: async function (id, data) {
    axios
      .put(`${API_ENDPOINT}/${id}`, data)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default mutations;
