<template>
  <v-app>
    <v-toolbar color="#00ACC1">
      <v-toolbar-side-icon @click="menu = true"></v-toolbar-side-icon>
      <v-toolbar-title>Carrinho Automotivo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/QuemSomos" >Quem somos?</v-btn> 
        <v-btn flat to="/Projeto">O Projeto</v-btn>
        <v-btn flat to="/Doacao">Invista</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer absolute temporary v-model="menu">
      <v-toolbar color="#00ACC1">
        <h1>4ALL</h1>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile v-for="item in itensMenu" :keys="item.rota" :to="item.rota">
          <v-list-tile-action>
            <v-icon color="#00ACC1">{{item.icone}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.texto}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data (){
      return{
        menu : false,
        itensMenu:[
          {
            rota: "/Home",
            icone: "home",
            texto: "Página Inicial"
          },
          {
            rota: "/Doacao",
            icone: "local_atm",
            texto: "Invista"
          },
                  
          {
            rota: "/QuemSomos",
            icone: "bubble_chart",
            texto: "Quem Somos"
          },
          {
            rota: "/Projeto",
            icone: "gavel",
            texto: "O Projeto"
          },
          {
            rota: "/Login",
            icone: "person",
            texto: "Perfil"
          },
          
        ]
      }
    }
  }
</script>
