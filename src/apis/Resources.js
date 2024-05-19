import { getSessionVariable } from "../Components/Session";
export const FetchAllResources = async () => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
    const apiUrl = `${SERVER_BASE_URL}/getResourceRequests?token=${token}&id=${id}`;
  
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

  export const ApproveResourceRequest = async (request) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
    request.admin_id=id;
    request.token=token;
    const apiUrl = `${SERVER_BASE_URL}/approveRequest`;
  
    return fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify(request)
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }

  export const RejectResourceRequest = async (request) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");
    request.admin_id=id;
    request.token=token;
    const apiUrl = `${SERVER_BASE_URL}/rejectRequest`;
  
    return fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify(request)
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }

  export const RequestResource = async (project_id,resource_id) => {
    const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    const token = getSessionVariable("token");
    const id = getSessionVariable("id");

    const apiUrl = `${SERVER_BASE_URL}/requestResource`;
  
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header for JSON data
      },
      body: JSON.stringify({"resource_id":resource_id,"project_id":project_id,"manager_id":id,"token":token})
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  }