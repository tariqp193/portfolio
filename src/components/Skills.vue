<template>
  <div>
    <h1 class="mt-10">Skills & Tools</h1>
    <v-container class="paragraph--text mt-10">
        <v-row justify-content="center" class="ma-2">
          <v-card
          class="mx-auto rounded-lg tiles ma-2"
          max-width="150"
          max-height="50"
          v-for="skill in skills" :key="skill.name"
          hover
        >
          <v-card-text class="paragraph--text">
            <p>{{skill.name}}</p>
          </v-card-text>
        </v-card>
        </v-row>
      <hr class="my-10" style="border-top: 3px solid;">
        <v-row justify-content="center" class="ma-2">
          <v-card
          class="mx-auto rounded-lg tiles ma-2"
          max-width="150"
          max-height="50"
          hover
          v-for="tool in tools" :key="tool.name">
          <v-card-text class="paragraph--text">
            <p>{{tool.name}}</p>
          </v-card-text>
        </v-card>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Java" },
        { name: "C#" },
        { name: "Javascript" },
        { name: "Cypress.io" },
        { name: "Nightwatch.js" },
        { name: "Selenium" },
        { name: "Specflow" },
        { name: "Mocha" },
        { name: "Chai" },
        { name: "Appium" }
      ],
        tools: [
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Azure DevOps" },
        { name: "Asana" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "TestRail" },
        { name: "Qase.io" },
        { name: "VS Code" },
        { name: "Jenkins"}, 
      ],
    };
  },
};
</script>