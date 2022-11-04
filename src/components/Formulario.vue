<template >

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h1>Formulario</h1>
    <hr>
    <hr>
    <br>
    <vue-form :state="formState" @submit.prevent="enviar()">
 
          <validate tag="div">
            <span>Nombre: </span>
            <input v-model="formData.nombre" required name="name" :minlength="nombreMin" :maxlength="nombreMax" />
            <field-messages name="name" show="$dirty">
              <div slot="required">Complete el campo</div>
              <div slot="minlength">Este campo debe poseer al menos {{nombreMin}} caracteres</div>
              <div slot="maxlength">Este campo debe no puede poseer mas de {{nombreMax}} caracteres</div>
            </field-messages>
          </validate>
        <br>
          <validate tag="label">
            <span>Descripcion: </span>
            <input v-model="formData.descripcion" name="descripcion" type="descripcion" required />
            <field-messages name="descripcion" show="$dirty">
              <div slot="required">Complete el campo</div>
              <div slot="descripcion">no valido de ingresar mas caracteres</div>
            </field-messages>
          </validate>
        <br>
         <br>
          <validate tag="label">
            <span>Importe: </span>
            <input v-model="formData.pago" name="pago" type="number" required :min="1"/>
            <field-messages name="pago" show="$dirty">
              <div slot="required">Complete el campo</div>
            </field-messages>
          </validate>
          <br>
         <br>

    <button type="submit" class="btn btn-success" :disabled="formState.$invalid">Submit</button>
  </vue-form>

  <hr>
   <span>Monto: </span>
  <input v-model="presupuesto" name="presupuesto" type="number" :min="1" :presupuesto="presupuesto"/>
  <h3>Actualizacion en posterior al submit</h3>
  <table>
  <tr>
    <th class="my-3 mr-3">Nombre</th>
    <th class="my-3 mr-3">Descripcion</th>
    <th class="my-3 mr-3">Importe</th>
    <th class="my-3 mr-3">Fecha</th>
  </tr>
  <tr v-for="usuario in usuarios" :key="usuario.nombre">
    <td class="my-3 mr-3">{{usuario.nombre}}</td>
    <td class="my-3 mr-3">{{usuario.descripcion}}</td>
    <td class="my-3 mr-3">${{usuario.pago}}</td>
    <td class="my-3 mr-3">${{usuario.fecha}}</td>
</tr>
<tr>
    <th class="my-3 mr-3"></th>
    <th class="my-3 mr-3"></th>
    <th class="my-3 mr-3"></th>
    <th class="my-3 mr-3" :style="{color:setColor(total)}">total:{{total}}</th>
    <th class="my-3 mr-3"></th>
  </tr>
</table>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{},
        formData:this.getDataInicial(),
        nombreMin:3,
        nombreMax:15,
        montoMax:999999999999,
        montoMin:1,
        usuarios:new Array(),
        pago:0,
        descripcion:"",
        total:0,
        presupuesto:0
        
       
        
      }
    },
    methods: {
      enviar(){
        let today = new Date();
        
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + 
            today.getSeconds();
        let dateTime = date+' '+time;
        console.log(this.formData.montoAPagar)
        this.usuarios.push({nombre:this.formData.nombre,pago:Number(this.formData.pago),descripcion:this.formData.descripcion,deuda:(this.formData.pago),fecha:dateTime})
        this.total=this.total+Number(this.formData.pago)
        this.formData= this.getDataInicial()
        this.formState._reset()
      },
      getDataInicial(){
         return {
          nombre:null,
          edad:null,
          email:null
         }
      },
        setColor(monto) {
          let color="orange"

        if(this.presupuesto!=0){
          if(this.total>this.presupuesto){
            color="red"
          }else{
            if(monto < 1000) {
            color = 'green';
        } else if(monto>=1000 && monto<5000) {
          color = 'magenta';
        }
          }

        }else{
          if(monto < 1000) {
            color = 'green';
        } else if(monto>=1000 && monto<5000) {
          color = 'magenta';
        }
        }

       return color;
  }
  ,     noEspacios(value) {
        if(value!=null){
          return !value.includes(" ");
        }else{
          return "";
        }
    
      }
      

    },
    computed: {

    
 }
}



</script>

<style scoped lang="css">
  .src-components-formulario {

  }
  .jumbotron{
    background-color: yellow;
    color: black;
  }
  hr{
    background-color: black;
  }
</style>
