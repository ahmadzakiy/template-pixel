<template>
  <mp-box>
    <Header></Header>
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 61px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          v-if="exportState === 'default'"
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="5"
          heigh="18"
        >
          <mp-heading as="h1" font-size="2xl" font-weight="semibold">
            Export
          </mp-heading>
        </mp-flex>
        <mp-flex
          v-if="exportState === 'history'"
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="3"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Export</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Chart export
            </mp-heading>
          </mp-box>
          <mp-button>
            Export
          </mp-button>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 133px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <ExportView v-if="exportState === 'default'" @export="onExport" />
          <ExportHistory v-if="exportState === 'history'" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText, MpButton } from "@mekari/pixel";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";
import ExportView from "./ExportView.vue";
import ExportHistory from "./ExportHistory.vue";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    Header,
    MpText, 
    MpButton,
    Sidebar,
    SidebarChild,
    ExportView,
    ExportHistory,
  },
  data() {
    return {
      exportState: "default",
    };
  },
  methods: {
    onExport() {
      this.exportState = "history";
    },
  },
};
</script>
