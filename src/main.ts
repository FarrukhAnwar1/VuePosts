import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAUkk9hmeBrUeaYING3pE74EARmGCykHaU",
    authDomain: "test-628e9.firebaseapp.com",
    databaseURL: "https://test-628e9-default-rtdb.firebaseio.com",
    projectId: "test-628e9",
    storageBucket: "test-628e9.appspot.com",
    messagingSenderId: "912708423531",
    appId: "1:912708423531:web:6dddc325b5bf8e3041862e",
    measurementId: "G-6E8GTLD04S"
};
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
