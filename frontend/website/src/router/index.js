
import { createRouter, createWebHistory } from 'vue-router';
import ElectionView from '@/views/ElectionView.vue';

import { API } from '@/services/api';
import { useElectionsStore } from '@/stores/elections';

const fetchElection = async (to, from) => {
  let electionId = to.params.electionId;
  let election = await API.elections.getElection(electionId);
  const electionsStore = useElectionsStore();
  electionsStore.storeCurrentElection(election);
  console.log('fetchElection', electionsStore.currentElection);

};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/elections',
      name: 'elections',
      component: () => import('@/views/ElectionsView.vue')
    },
    {
      path: '/election/:electionId',
      name: 'election',
      component: ElectionView,
      beforeEnter: [fetchElection],
      children: [
        {
          path: '',
          name: 'election',
          component: () => import('@/views/ElectionMainView.vue')
        },
        {
          path: 'candidate/:candidateId',
          name: 'electionCandidate',
          component: () => import('@/views/ElectionCandidate.vue')
        },
        {
          path: 'issue/:issueId',
          name: 'electionIssue',
          component: () => import('@/views/ElectionIssue.vue')
        },
        {
          path: 'comparator/:candidateId1/:candidateId2',
          name: 'comparator',
          component: () => import('@/views/ComparatorView.vue')
        },
        {
          path: 'comparator',
          name: 'comparator',
          component: () => import('@/views/ComparatorView.vue')
        },
      ]
    },
  ]
})

export default router
