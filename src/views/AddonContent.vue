<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Marketplace CMS</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Add-ons content
            </mp-heading>
          </mp-box>
          <mp-flex gap="6" align-items="center">
            <mp-text as="p" color="gray.600">
              Last synced: 12 Dec 2022 at 19:03
            </mp-text>
            <mp-button @click="onSyncModalToggle(true)">
              Sync add-ons data
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-flex justify="space-between" align-items="center" padding-x="6">
          <mp-tabs @change="onHandleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Add-ons list</mp-tab>
              <mp-tab>Activity log</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-box v-if="this.tabIndex === 0">
            <AddonContentFilter />
            <AddonContentTable />
            <AddonContentSyncModal
              :isModalOpen="isSyncModalOpen"
              :onModalToggle="onSyncModalToggle"
            />
          </mp-box>
          <mp-box v-else>
            <AddonContentLogFilter />
            <AddonContentLogTable />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";
import AddonContentFilter from "./AddonContentFilter";
import AddonContentLogFilter from "./AddonContentLogFilter";
import AddonContentTable from "./AddonContentTable";
import AddonContentLogTable from "./AddonContentLogTable";
import AddonContentSyncModal from "./AddonContentSyncModal";

export default {
  name: "AddonContent",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    Header,
    Sidebar,
    SidebarChild,
    AddonContentFilter,
    AddonContentLogFilter,
    AddonContentTable,
    AddonContentLogTable,
    AddonContentSyncModal,
  },
  data: function () {
    return {
      tabIndex: 0,
      isSyncModalOpen: false,
    };
  },
  methods: {
    onHandleTab: function (data) {
      this.tabIndex = data;
    },
    onSyncModalToggle: function (data) {
      this.isSyncModalOpen = data;
    },
  },
};
</script>