<template>

  <section class="src-components-http-client">
     <div class="jumbotron">
    <h1>Respuestas</h1>
    <br>
     <hr>
    <table class="table table-dark">
      <tr>
        <th>Nro de pregunta</th>
        <th>respuesta</th>
        
      </tr>
     <tr v-for="(post,index) in posts" :key="index">
    <td class="my-3 mr-3">{{post.preg}}</td>
    <td class="my-3 mr-3">{{post.res}}</td>
    
    </tr>
    </table>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url:"https://634271f73f83935a78433ad7.mockapi.io/Usuarios",
        posts:[ {preg:1,res:"d/b"},{preg:2,res:"c"},{preg:3,res:"e"}],

      }
    },
    methods: {
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    .jumbotron{
    background-color: red;
    color: black;
  }
  hr{
    background-color: black;
  }
</style>
