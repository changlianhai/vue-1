import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n  = new  VueI18n({
    locale: 'CN', 
    messages: {
        'CN': require('./../../../assets/i18n/zh-CN'),
        'EN':require('./../../../assets/i18n/zh-EN')
    }
});

export default i18n;