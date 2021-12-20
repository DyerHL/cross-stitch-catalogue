import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

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
      const patternfirebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/patterns/${patternfirebaseKey}.json`, {
          patternfirebaseKey,
        })
        .then(() => {
          getPatterns(uid).then(resolve);
        });
    })
    .catch(reject);
});

const updatePattern = (patternfirebaseKey, updateObj, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/patterns/${patternfirebaseKey}.json`, updateObj)
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

const getSinglePattern = (patternfirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/patterns/${patternfirebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const filterPattern = (status, uid) => new Promise((resolve, reject) => {
  getPatterns(uid)
    .then((userCards) => {
      const filtered = userCards.filter(
        (patternCard) => patternCard.status === status,
      );
      resolve(filtered);
    })
    .catch(reject);
});

const getPatternName = (patternfirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/patterns/${patternfirebaseKey}.json`)
    .then((response) => resolve(Object.values(response.data.name)))
    .catch(reject);
});

export {
  getPatterns,
  createPattern,
  updatePattern,
  deletePattern,
  getSinglePattern,
  filterPattern,
  getPatternName,
};
