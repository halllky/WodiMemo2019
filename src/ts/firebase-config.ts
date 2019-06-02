import * as firebase from 'firebase';

export default {
  connect: () => {
    return firebase.initializeApp({
      apiKey: 'AIzaSyDZxOoDU8VfL4dNxGLIp1jwof8FN5GkqKM',
      authDomain: 'studying-e3e03.firebaseapp.com',
      databaseURL: 'https://studying-e3e03.firebaseio.com',
      projectId: 'studying-e3e03',
      storageBucket: 'studying-e3e03.appspot.com',
      messagingSenderId: '561616119013',
      appId: '1:561616119013:web:c3cf628699525818',
    });
  },
};
