// 뷰 인스턴스 역할
// import Vue from 'vue';
import * as Vue from 'vue';

// main.js와 NumberBaseBall.vue파일이 합쳐짐
import NumberBaseball from './NumberBaseBall';

// $mount() == el
new Vue(NumberBaseball).$mount('#root');