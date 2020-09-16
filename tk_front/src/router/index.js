import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/account/login'
import home from '@/components/home'
import center from '@/components/account/center'
import myCourses from '@/components/myCourses/container_mc'
import questionBank from '@/components/questionBank/container_qb'

// SAT
import containerSAT from '@/components/questionBank/SAT/container_SAT'
import progressSAT from '@/components/questionBank/SAT/main_SAT/progress_SAT'
import practiceSAT from '@/components/questionBank/SAT/main_SAT/practice_SAT'
import testSAT from '@/components/questionBank/SAT/main_SAT/test_SAT'
import reviewSAT from '@/components/questionBank/SAT/main_SAT/review_SAT'
import answerSheet from '@/components/questionBank/SAT/main_SAT/answerSheet'
import grade from '@/components/questionBank/SAT/main_SAT/grade'
import reading from '@/components/questionBank/SAT/main_SAT/sections/reading'
import wl from '@/components/questionBank/SAT/main_SAT/sections/wl'
import mathNC from '@/components/questionBank/SAT/main_SAT/sections/mathNC'
import math from '@/components/questionBank/SAT/main_SAT/sections/math'
import essay from '@/components/questionBank/SAT/main_SAT/sections/essay'

// SAT Teacher
import containerTeacherSAT from '@/components/qb_teacher/SAT/container_SAT'
import overview from '@/components/qb_teacher/SAT/main_SAT/overview_SAT'
import studentProfile from '@/components/qb_teacher/SAT/main_SAT/studentProfile'

// CB
import containerCB from '@/components/questionBank/CBEnglish/container_CB'
import progressCB from '@/components/questionBank/CBEnglish/main_CB/progress_CB'
// IB
import containerIB from '@/components/questionBank/IBEnglish/container_IB'
import progressIB from '@/components/questionBank/IBEnglish/main_IB/progress_IB'

import toDoList from '@/components/toDoList/container_tdl'

Vue.use(Router)
//Error: Avoided redundant navigation to current location
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/center',
          name: 'center',
          component: center,
        },
        {
          path: '/home/myCourses',
          name: 'myCourses',
          component: myCourses,
        },
        {
          path: '/home/questionBank',
          name: 'questionBank',
          component: questionBank,
        },
        {
          // SAT
          path: '/home/questionBank/SAT',
          name: 'containerSAT',
          component: containerSAT,
          children: [
            {
              path: '/home/questionBank/SAT/progress',
              name: 'progressSAT',
              component: progressSAT,
            },
            {
              path: '/home/questionBank/SAT/practice',
              name: 'practiceSAT',
              component: practiceSAT,
            },
            {
              path: '/home/questionBank/SAT/test',
              name: 'testSAT',
              component: testSAT,
            },
            {
              path: '/home/questionBank/SAT/review',
              name: 'reviewSAT',
              component: reviewSAT,
            },
            {
              path: '/home/questionBank/SAT/answerSheet',
              name: 'answerSheet',
              component: answerSheet,
              children: [
                {
                  path: '/home/questionBank/SAT/answerSheet/reading',
                  name: 'reading',
                  component: reading,
                },
                {
                  path: '/home/questionBank/SAT/answerSheet/wl',
                  name: 'wl',
                  component: wl,
                },
                {
                  path: '/home/questionBank/SAT/answerSheet/mathNC',
                  name: 'mathNC',
                  component: mathNC,
                },
                {
                  path: '/home/questionBank/SAT/answerSheet/math',
                  name: 'math',
                  component: math,
                },
                {
                  path: '/home/questionBank/SAT/answerSheet/essay',
                  name: 'essay',
                  component: essay,
                },
                {
                  path: '/home/questionBank/SAT/answerSheet/grade',
                  name: 'grade',
                  component: grade,
                }
              ]
            }
          ]
        },
        {
          // SAT Teacher
          path: '/teacher/home/questionBank/SAT/',
          name: 'containerTeacherSAT',
          component: containerTeacherSAT,
          children: [
            {
              path: '/teacher/home/questionBank/SAT/overview',
              name: 'overview',
              component: overview,
            },
            {
              path: '/teacher/home/questionBank/SAT/studentProfile',
              name: 'studentProfile',
              component: studentProfile,
            }
          ]
        },
        {
          path: '/home/questionBank/CBEnglish',
          name: 'containerCB',
          component: containerCB,
          children: [
            {
              path: '/home/questionBank/CBEnglish/progress',
              name: 'progressCB',
              component: progressCB,
            }
          ]
        },
        {
          path: '/home/questionBank/IBEnglish',
          name: 'containerIB',
          component: containerIB,
          children: [
            {
              path: '/home/questionBank/IBEnglish/progress',
              name: 'progressIB',
              component: progressIB,
            }
          ]
        },
        {
          path: '/home/toDoList',
          name: 'toDoList',
          component: toDoList,
        }
      ]
    },
  ]
})
