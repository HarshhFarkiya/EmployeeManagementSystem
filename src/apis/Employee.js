import { getSessionVariable } from "../Components/Session";
export const AddEmployee = async (employee) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/addEmployee`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  employee.admin_id = id;
  employee.token = token;
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify(employee),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}


export const DeleteEmployee = async (employee_id) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/removeEmployee?employee_id=${employee_id}`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");

  return fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify({ "employee_id": employee_id, "token": token, "admin_id": id }),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}


export const FetchAllEmployees = async () => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  const apiUrl = `${SERVER_BASE_URL}/getEmployees?token=${token}&id=${id}`;

  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    }
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error in GET request:', error);
    });
}

export const UnassignEmployee = async (employee_id) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/unassignEmployee`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");

  return fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify({ "employee_id": employee_id, "token": token, "admin_id": id }),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}

export const AssignEmployee = async (employee_id, project_id) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/assignEmployee`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify({ "employee_id": employee_id, "token": token, "admin_id": id, "project_id": project_id }),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}

export const EditEmployee = async (employee) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/updateEmployee`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  employee.token=token;
  employee.admin_id=id;
  return fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify(employee),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in PUT request:', error);
    });
}

export const AddSkills = async (skills) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/addSkills`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  return fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify({"token":token,"employee_id":id,"add_skills":skills}),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in PUT request:', error);
    });
}

export const FetchEmployee = async () => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  const apiUrl = `${SERVER_BASE_URL}/getEmployee?token=${token}&id=${id}&employee_id=${id}`;

  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    }
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error in GET request:', error);
    });
}