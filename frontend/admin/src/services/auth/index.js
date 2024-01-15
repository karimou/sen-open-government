import http from '../https';

const logUserIn = async ({email, password}) => {
    console.log('logUserIn');
};

const logUserOut = async (userId) => {
    console.log('logUserOut');
};

export default {
    logUserIn,
    logUserOut
}