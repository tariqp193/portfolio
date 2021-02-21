<template>
  <v-container class="align-center justify-center mt-8">
      <h1>Projects</h1>
      <div id="project">
        <v-layout row wrap class="mt-8" >      
        <v-flex id="icon" xs12 sm6 lg4 xl3 v-for="project in projects" :key="project.name">
            <v-hover>
                <v-card class="ma-3 tiles paragraph--text rounded-xl" max-width="450" color="#CCCCC">
                    <v-img height="250" :src="require(`@/assets/${project.img}`)">
                        <!-- <v-expand-transition>
                            <div class="d-flex transition-fast-in-fast-out white v-card--reveal teal lighten-2 white--text d-flex flex-column" v-if="hover" style="height: 100%;">
                                <p class="project-decription">{{project.description}}</p>
                                    <v-btn :to="project.url" class="white--text" elevation="2" rounded outlined>
                                      
                                        <span>Visit website</span>
                                        <v-icon right="">keyboard_arrow_right</v-icon>
                                    </v-btn>
                            </div>
                        </v-expand-transition> -->
                    </v-img>
                    <v-layout>
                        <v-card-title class="text-center font-weight-bold paragraph--text ">{{project.name}}</v-card-title>
                        <v-spacer></v-spacer>
                        <div class="icon-group">
                            <v-icon class="ma-1 paragraph--text" v-for="i in project.platforms" :key="i.plat">{{i.icon}}</v-icon>
                        </div>
                    </v-layout> 
                </v-card>   
            </v-hover>
       </v-flex>
      </v-layout>
      </div>
  </v-container>

</template>

<script>
export default {
    beforeEnter: to => {
  window.open(to.fullPath.substring(1), '_blank');
},

    data() {
        return{
    projects:[
        {name: 'Mixpanel', img: 'mixpanel.png', url:'www.mixpanel.com', description: 'The most powerful self-serve product analytics to help you convert, engage, and retain more users.', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'Buildstack', img: 'Buildstack.png', description: 'Get more productive by tracking your timelines, deliverables, next steps, file versions and clients. No surprise fees. Just an all-in-one platform where you can do it all.', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'LemonPerfect', img: 'lemonperfect.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'Agilent', img: 'Agilent.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'},
            { plat:'Desktop',  icon: 'mdi-desktop-classic'}]},          
        {name: 'Abby&Finn', img: 'abby.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'Salesmessage', img: 'salesmsg.png',  platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'},
            {  plat: 'iOS', icon: 'mdi-apple'}, 
            {plat: 'ChromeExtension', icon: 'mdi-puzzle'}]},
        {name: 'Pertronix', img: 'pertronix.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'FairShake', img: 'fairshake.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'Footsteps2Brilliance', img: 'F2B.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'},
            {  plat: 'iOS', icon: 'mdi-apple'}]},
        {name: 'F2BD: Dashboard', img: 'dashboard.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]},
        {name: 'CKU: Pre-reader', img: 'red.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'},
            {  plat: 'iOS', icon: 'mdi-apple'}]},
        {name: 'CKU: I can read', img: 'orange.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'},
            {  plat: 'iOS', icon: 'mdi-apple'}]},
            ]
        }
    }

}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

h1{
    color: #4DB6AC;
    text-transform: uppercase ;
}


.project-decription {
    text-align: center;
    font-weight: 700;
}

.icon-group { 
    margin:auto;
    padding-right: 10px;
}

#icon { 
    margin-bottom: 20px;
}

</style>