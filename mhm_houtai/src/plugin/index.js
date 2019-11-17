export default {
    install(Vue){
        Vue.prototype.$mongo = function () {
            console.log(11111);          
        }
    }
};