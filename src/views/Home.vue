<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>



  <script>
    export default {
      data () {
        return {
          items: [
            {
              src: require('../assets/estudos.jpg'),
            },
            {
              src: require('../assets/fetec.jpg'),
            },
            {
              src: require('../assets/ismac.jpg'),
            },
            {
              src: require('../assets/orientador.jpg'),
            },
            {
              src: require('../assets/premiacao.jpg'),
            },
          ],
        }
      },
    }
  </script>