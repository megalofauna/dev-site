import Home from './views/Home.vue'
import About from './views/About.vue'
import Resume from './views/Resume.vue'
import Tools from './views/Tools.vue'
import Projects from './views/Projects.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { 
    path: '/resume',
    meta: { title: 'Resume' },
    component: Resume,
  },
  { 
    path: '/tools',
    meta: { title: 'Tools' },
    component: Tools,
  },
  { 
    path: '/projects',
    meta: { title: 'Projects' },
    component: Projects,
  },
  { path: '/:path(.*)', component: NotFound },
]
