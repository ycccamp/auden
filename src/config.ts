import * as quiz from './scenes/quiz'
import * as vote from './scenes/vote'
import {IConfig} from './core/model'

export const config: IConfig = {
  firebase: {
    apiKey: 'AIzaSyD69fVmX1N539fYPjj4X2mu7hDR4LYAnL8',
    authDomain: 'ycccamp.firebaseapp.com',
    databaseURL: 'https://ycccamp.firebaseio.com',
    projectId: 'ycccamp',
    storageBucket: 'ycccamp.appspot.com',
    messagingSenderId: '191460697180'
  },
  scenes: [quiz.scene, vote.scene]
}
