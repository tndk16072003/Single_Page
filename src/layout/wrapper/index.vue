<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <HeaderVue></HeaderVue>
            <MenuVue></MenuVue>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <FooterVue></FooterVue>
    </div>
</template>
<script>
import FooterVue from '../components/Footer.vue';
import HeaderVue from '../components/Header.vue';
import MenuVue from '../components/Menu.vue';
import "../../assets/rocker/js/bootstrap.bundle.min.js";
import "../../assets/rocker/js/jquery.min.js";
import "../../assets/rocker/plugins/simplebar/js/simplebar.min.js";
import "../../assets/rocker/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/rocker/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../../assets/rocker/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../../assets/rocker/plugins/chartjs/js/Chart.min.js";
import "../../assets/rocker/js/index.js";
import "../../assets/rocker/js/app.js";
export default {
    name    :   'app',
    components : {
        FooterVue,
        HeaderVue,
        MenuVue
    },
}
</script>
<style>
@import "../../assets/rocker/plugins/simplebar/css/simplebar.css";   
@import "../../assets/rocker/css/bootstrap.min.css";   
@import "../../assets/rocker/css/bootstrap-extended.css";   
@import "../../assets/rocker/plugins/perfect-scrollbar/css/perfect-scrollbar.css";   
@import "../../assets/rocker/css/bootstrap-extended.css";   
@import "../../assets/rocker/css/app.css";   
@import "../../assets/rocker/css/icons.css";   
@import "../../assets/rocker/css/dark-theme.css";   
@import "../../assets/rocker/css/semi-dark.css";   
@import "../../assets/rocker/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");   
</style>