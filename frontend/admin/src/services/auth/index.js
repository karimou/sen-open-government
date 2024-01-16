import http from '../https';
import { useAuthStore  } from '@/stores/auth';
import router from '@/router';

const params = {
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
    }
};
const logUserIn = async ({email, password}) => {
    await http.post('/api/v1/users/login', { email, password }, params)
        .then(res => {
            if (res.status == 200) {
                const authStore = useAuthStore();
                authStore.storeUser(res.data);
                router.push('/admin');
            }
        });
};

const logUserOut = async (userId) => {
    await http.get('/api/v1/users/logout')
        .then(res => {
            if (res.status == 200) {
                const authStore = useAuthStore();
                authStore.removeUser();
                router.push('/admin/login');
            }
        });
};

export default {
    logUserIn,
    logUserOut
}