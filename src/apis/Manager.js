import { getSessionVariable } from "../Components/Session";
export const AddManager = async (manager) => {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
  const apiUrl = `${SERVER_BASE_URL}/addManager`;
  const token = getSessionVariable("token");
  const id = getSessionVariable("id");
  manager.admin_id = id;
  manager.token = token;
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header for JSON data
    },
    body: JSON.stringify(manager),
  })
    .then((response) => {
      return response;
    })

    .catch((error) => {
      console.error('Error in POST request:', error);
    });
}

export const FetchAllManagers = async () => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
    const apiUrl = `${SERVER_BASE_URL}/getManagers?token=${token}&id=${id}`;
  
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

  export const DeleteManager = async (manager_id) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const apiUrl = `${SERVER_BASE_URL}/removeManager?manager_id=${manager_id}`;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
  
    return fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify({ "manager_id": manager_id, "token": token, "admin_id": id }),
    })
      .then((response) => {
        return response;
      })
  
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }

  export const AssignManager = async (manager_id, project_id) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const apiUrl = `${SERVER_BASE_URL}/assignManager`;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
  
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify({ "manager_id": manager_id, "token": token, "admin_id": id, "project_id": project_id }),
    })
      .then((response) => {
        return response;
      })
  
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }

  export const UnassignManager = async (manager_id, project_id) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const apiUrl = `${SERVER_BASE_URL}/unassignManager`;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
  
    return fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify({ "manager_id": manager_id, "token": token, "admin_id": id, "project_id": project_id }),
    })
      .then((response) => {
        return response;
      })
  
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }

  export const FetchManager = async () => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
    const apiUrl = `${SERVER_BASE_URL}/getManager?token=${token}&id=${id}&manager_id=${id}`;
  
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