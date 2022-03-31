import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { SOCKET} from "@/utilities/helpers"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(store)
app.use(router)

// Prevents toasts of the same type from appearing simultaneously, discarding duplicates
const filterBeforeCreate = (toast, toasts) => {
    if (toasts.filter(t => t.type === toast.type).length !== 0)  return false;

    return toast;
}

app.use(Toast, { filterBeforeCreate });

app.mount('#app')
