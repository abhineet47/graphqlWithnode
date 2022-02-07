import { getAccessToken } from "./auth";

const url = "http://localhost:9000/api";

const sendRequest = async (query, variables = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + getAccessToken(),
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
  return await response.json();
};
export const loadCompany = async (id) => {
  const query = `query Company($companyId: ID!) {
        company(id: $companyId) {
          name
          description
        }
      }`;

  const variables = {
    companyId: id,
  };
  const result = await sendRequest(query, variables);
  return result.data.company;
};

export const loadJobs = async () => {
  const query = `{
    jobs {
        id
        title
        description
        company {
          name
          description
    
        }
      }
    }`;

  const result = await sendRequest(query);
  return result.data;
};

export const loadJob = async (id) => {
  const query = `query Job($jobId: ID!) {
        job(id: $jobId) {
          id
          title
          description
          company {
            name
            description
            id
          }
        }
      }`;
  const variables = {
    jobId: id,
  };
  const result = await sendRequest(query, variables);
  return result.data.job;
};

export const CreateJob = async (data) => {
  const query = `mutation Mutation($input: CreateJobInput) {
        job : createJob(input: $input) {
          title,
          description
        }
      }`;

  const variables = {
    input: data,
  };

  const result = await sendRequest(query, variables);
  return result.data.job;
};
