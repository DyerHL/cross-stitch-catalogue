import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getThreads = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/threads.json?`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getThreadsByPattern = (patternfirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${dbUrl}/threads.json?orderBy="patternfirebaseKey"&equalTo="${patternfirebaseKey}"`,
    )
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createThread = (obj, patternfirebaseKey) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/threads.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/threads/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getThreadsByPattern(patternfirebaseKey).then(resolve);
        });
    })
    .catch(reject);
});

const updateThread = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/threads/${firebaseKey}.json`, updateObj)
    .then(() => getThreads().then(resolve))
    .catch(reject);
});

const deleteThread = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/threads/${firebaseKey}.json`)
    .then(() => {
      getThreads().then(resolve);
    })
    .catch(reject);
});

const getSingleThread = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/threads/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const getThreadsByOwn = (value) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/threads.json?orderBy="own"&equalTo=${value}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const updateOwn = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/threads/${obj.firebaseKey}.json`, obj)
    .then(() => getThreadsByPattern(obj.patternfirebaseKey).then(resolve))
    .catch(reject);
});

const getNeededThreads = (uid) => new Promise((resolve, reject) => {
  getThreadsByOwn(false)
    .then((allThreads) => {
      const filtered = allThreads.filter((threads) => threads.uid === uid);
      resolve(filtered);
    })
    .catch(reject);
});

export {
  getThreads,
  createThread,
  updateThread,
  deleteThread,
  getSingleThread,
  getThreadsByOwn,
  getThreadsByPattern,
  getNeededThreads,
  updateOwn,
};
