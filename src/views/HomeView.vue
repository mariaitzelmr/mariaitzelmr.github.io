<style>
.gradient-custom {
    /* fallback for old browsers */
    background: #a18cd1;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
      45deg,
      rgba(20, 142, 163, 0.6),
      rgba(151, 14, 214, 0.6) 100%
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      45deg,
      rgba(19, 102, 128, 0.6),
      rgba(91, 14, 214, 0.6) 100%
    );
  }
  .img-jaguar {
    background-image: url('../../public/img/jaguar.jpg');
    height: 85vh;
  }
</style>

<template>
  <div class="home bg-image img-jaguar" >
    <div class="mask gradient-custom" style="background-color: rgb(0,0,0,0.6); height: 85vh;">
      <HelloWorld msg="María Itzel Marroquín Ramírez"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
