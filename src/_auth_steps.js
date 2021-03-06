/*
1. Create project in console.firebase.google.com
2. npm install firebase
3. Create firebase/init/js and import getauth to export auth
4. Go to authentication & enable email/password auth
5. Create login, Signup component, setup router
6. Attach Form field and submit handle
7.npm install --save react-firebase-hooks
8.useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks
9. If user is created, redirect to home page
10.useSignInWithEmailAndPassword for sign in
11. Create RequireAuth component ==>check if user exists & track user location
12. In route in app.js, wrap protected component by using RequireAuth component
 */

// Hosting Steps
// 1. npm install -g firebase-tools(one time for computer)
// 2. firebase login(one time for computer)
// 3. firebase init(one time for each project)
// 4. npm run build (every time you want to deploy)
// 5. firebase deploy  (every time you want to deploy)