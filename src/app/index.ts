import { createApp } from 'vue';
import router from '@/app/providers/router';
import App from '@/app/app.vue';

const app = createApp(App);

app.use(router);

export default app;