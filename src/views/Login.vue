<template>
    <v-layout align-center justify-center row fill-height>
      <v-card width="500px" class="pa-5">
        <v-flex xs12>
          <v-text-field
              v-model="firstname"
              label="E-mail"
              required
              color="black"
          ></v-text-field>
        </v-flex>
        
      <v-flex xs12>
        <v-text-field
          label="Senha"
          type= "password"
          color="black"
          
        ></v-text-field>
       </v-flex>
      
        
      <v-flex xs12 class="text-xs-center">
        <v-btn
            :loading="loading4"
            :disabled="loading4"
            color="black"
            @click="loader = 'loading4'"
            class="white--text"
          >
            <template v-slot:loader >
                <span class="custom-loader" >
                  <v-icon light color="red">cached</v-icon>
                </span>
             
            </template>
            Login
          </v-btn>

          <v-btn
            :loading="loading4"
            :disabled="loading4"
            color="black"
            @click="loader = 'loading4'"
            class="white--text"
          >
            <template v-slot:loader >
                <span class="custom-loader" >
                  <v-icon light color="red">cached</v-icon>
                </span>
             
            </template>
            Cadastre-se
          </v-btn>
      </v-flex> 
       
    </v-card>
  </v-layout>
</template>

<script>
        export default {
          data: () => ({
            firstname: '',
          })
        }
</script>
<script>
    export default {
      data () {
        return {
          loader: null,
          loading: false,
          loading2: false,
          loading3: false,
          loading4: false,
          firstname: "",
        }
      },
      watch: {
        loader () {
          const l = this.loader
          this[l] = !this[l]
  
          setTimeout(() => (this[l] = false), 3000)
  
          this.loader = null
        }
      }
    }
  </script>


<style>
    
    .custom-loader {
      animation: loader 1s infinite;
      display: flex;
    }
    @-moz-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @-o-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
 </style>
