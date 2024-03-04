
import { createRouter, createWebHistory } from 'vue-router';
import ElectionView from '@/views/ElectionView.vue';
import DocumentPageView from '@/views/DocumentPageView.vue';

import { API } from '@/services/api';
import { useElectionsStore } from '@/stores/elections';
import { useDocumentPagesStore } from '@/stores/documentpages';

const fetchElection = async (to, from) => {
  let electionId = to.params.electionId;
  let election = await API.elections.getElection(electionId);
  const electionsStore = useElectionsStore();
  electionsStore.storeCurrentElection(election);

};

const fetchDocumentPage = async (to, from) => {
  let documentPageId = to.params.documentPageId;
  let documentPage = await API.documentPages.getDocumentPage(documentPageId);
  const documentPagesStore = useDocumentPagesStore();
  documentPagesStore.storeCurrentDocumentPage(documentPage);

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
          component: () => import('@/views/ElectionMain.vue')
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
    {
      path: '/document/:documentPageId',
      name: 'documentPage',
      component: DocumentPageView,
      beforeEnter: [fetchDocumentPage],
    }
  ]
})

export default router
