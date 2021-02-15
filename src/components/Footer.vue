<template>
  <v-footer color="teal lighten-4" padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary justify-center">
        <v-btn
          fab
          v-for="link in links"
          :key="link.icon"
          class="mx-1 white--text"
          icon
          :href="link.to"
          target="_blank"
        >
          <v-icon size="30px">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="justify-center primary white--text">
        &copy;{{ new Date().getFullYear() }} — <strong>  Tarik Pelko</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { icon: "mdi-facebook", to: "https://www.facebook.com/tarik.pelko/" },
      { icon: "mdi-github", to: "https://github.com/tariqp193" },
      {
        icon: "mdi-linkedin",
        to: "https://www.linkedin.com/in/tarik-pelko-7277a4140/",
      },
      {
        icon: "mdi-instagram",
        to: "https://www.instagram.com/tarikpelko/?hl=hr",
      },
      { icon: "mdi-email", to: "mailto: tarik.pelko@gmail.com" },
    ],
  }),
};
</script>