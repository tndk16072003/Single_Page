import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const admin = [
    {
        path : "/admin",
        component : () => import("../layout/wrapper/index.vue"),
        children : [
            // {
            //     path : "test",
            //     name: "admin-test",
            //     component : () => import("../components/test/index.vue")
            // },
        ]
    },
]

const routes = [
    ...admin,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;