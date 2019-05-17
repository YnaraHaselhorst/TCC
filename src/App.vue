<template>
  <v-app>
    <v-toolbar color="#00ACC1">
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
    <v-navigation-drawer absolute>
      <v-toolbar color="#00ACC1">
        <h1>Carrinho Automotivo</h1>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon color="#00ACC1">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Início
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/login">
          <v-list-tile-action>
            <v-icon color="#00ACC1">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Login
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>
