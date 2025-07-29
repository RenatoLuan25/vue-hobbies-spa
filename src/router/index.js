import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PescaNatureza from '../views/PescaNatureza.vue';
import Jogos from '../views/Jogos.vue';
import RockClassico from '../views/RockClassico.vue';
import Sobre from '../views/Sobre.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pesca-natureza', component: PescaNatureza },
  { path: '/jogos', component: Jogos },
  { path: '/rock-classico', component: RockClassico },
  { path: '/sobre', component: Sobre }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
