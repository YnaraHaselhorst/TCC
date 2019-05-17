<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Carrinho Automotivo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="localhost:8080/QuemSomos" >Quem somos?</v-btn> 
        <v-btn flat to="localhost:8080/Processo">Processo</v-btn>
        <v-btn flat to="localhost:8080/Invista">Invista</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>
