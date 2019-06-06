<template>
    <v-app>
        <v-content>
            <router-views></router-views>
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
            ></v-text-field>
        </v-content>
    </v-app>
</template>
