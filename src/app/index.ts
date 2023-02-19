import { createApp } from 'vue';
import { router, pinia } from '@/app/providers';
import App from '@/app/app.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);

export default app;