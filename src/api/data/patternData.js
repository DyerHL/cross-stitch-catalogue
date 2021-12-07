import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.dabaseUrl;

const getPatterns = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/patterns.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPattern = (obj, uid) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/patterns.json`, obj)
    .then((response) => {
      const patternFirebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/patterns/${patternFirebaseKey}`, {
          patternFirebaseKey,
        })
        .then(() => {
          getPatterns(uid).then(resolve);
        });
    })
    .catch(reject);
});

const updatePattern = (patternFirebaseKey, updateObj, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/patterns/${patternFirebaseKey}.json`, updateObj)
    .then(() => getPatterns(uid).then(resolve))
    .catch(reject);
});

const deletePattern = (patternFirebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/patterns/${patternFirebaseKey}.json`)
    .then(() => {
      getPatterns(uid).then(resolve);
    })
    .catch(reject);
});

const getSinglePattern = (patternFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/patterns/${patternFirebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

export {
  getPatterns,
  createPattern,
  updatePattern,
  deletePattern,
  getSinglePattern,
};
