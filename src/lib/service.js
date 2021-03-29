import axios from 'axios';


//https://jsonplaceholder.typicode.com/users/1
const baseEndpoint = 'https://jsonplaceholder.typicode.com';
const postId = 1;

const getData = (userId) => {
const getUser = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(`${baseEndpoint}/users/${userId}`);
    resolve(data);
  });
};

const getPost = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(`${baseEndpoint}/posts?userid=${userId}`);
    resolve(data);
  });
};

(async () => {
  await (async () => {
    const post = await getUser();  
  })();

  await (async () => {
    const comments = await getPost();
    console.log('Comments alındı!');
    console.log(comments);
  })();
})();

};
getData(9);