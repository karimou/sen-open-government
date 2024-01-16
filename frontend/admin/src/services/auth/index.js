import http from '../https';

const params = {
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
    }
};
const logUserIn = async ({email, password}) => {
    await http.post('/api/v1/users/login', { email, password }, params)
        .then(res => console.log(res));
};

const logUserOut = async (userId) => {
    console.log('logUserOut');
};

export default {
    logUserIn,
    logUserOut
}