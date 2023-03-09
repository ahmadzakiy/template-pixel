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
            <mp-text
              font-size="sm"
              is-link
              @click.native="exportState = 'default'"
              >Export</mp-text
            >
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Chart export
            </mp-heading>
          </mp-box>
          <mp-button @click="handleOpen">Export</mp-button>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 133px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <ExportView
            v-if="exportState === 'default'"
            @export="handleOpen"
            @history="openExportHistory"
          />
          <ExportHistory v-if="exportState === 'history'" />
        </mp-box>
      </mp-box>
    </mp-flex>

    <!-- // EXPORT DRAWER -->
    <mp-drawer :is-open="isDrawerOpen" :on-close="handleClose">
      <mp-drawer-overlay />
      <mp-drawer-content>
        <mp-drawer-header>Export</mp-drawer-header>
        <mp-drawer-close-button />
        <mp-drawer-body>
          <mp-form-control control-id="period" mb="5">
            <mp-form-label
              >Period
              <mp-text as="span" color="red.400">*</mp-text></mp-form-label
            >
            <AdvancedCalendar />
          </mp-form-control>
          <mp-form-control control-id="channel" mb="5">
            <mp-form-label
              >Channel
              <mp-text as="span" color="red.400">*</mp-text></mp-form-label
            >
            <mp-input-tag
              :data="channels"
              placeholder="Select channel"
              :enable-create-new-tag="false"
              :is-show-suggestions="true"
              :is-show-icon-chevron-down="true"
              suggestion-key="label"
              :suggestions="suggestionsChannel"
            />
          </mp-form-control>
          <mp-form-control control-id="agent" mb="5">
            <mp-form-label>Agent</mp-form-label>
            <mp-input-tag
              :data="agent"
              placeholder="Select agent"
              :enable-create-new-tag="false"
              :is-show-suggestions="true"
              :is-show-icon-chevron-down="true"
              :suggestions="suggestionsAgent"
            >
              <template #default="props">
                <mp-flex direction="column">
                  <mp-text>
                    {{ props.label }}
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    {{ props.email }}
                  </mp-text>
                </mp-flex>
              </template>
            </mp-input-tag>
          </mp-form-control>
          <mp-form-control control-id="contact">
            <mp-form-label>Contact</mp-form-label>
            <mp-input-tag
              :data="contact"
              placeholder="Select contact"
              :enable-create-new-tag="false"
              :is-show-suggestions="true"
              :is-show-icon-chevron-down="true"
              :suggestions="suggestionsContact"
            />
          </mp-form-control>
        </mp-drawer-body>
        <mp-drawer-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">
            Cancel
          </mp-button>
          <mp-button @click="handleExport">Export</mp-button>
        </mp-drawer-footer>
      </mp-drawer-content>
    </mp-drawer>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpFormControl,
  MpFormLabel,
  MpInputTag,
} from "@mekari/pixel";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";
import ExportView from "./ExportView";
import ExportHistory from "./ExportHistory";
import AdvancedCalendar from "../components/AdvancedCalendar";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    Header,
    MpText,
    MpButton,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpFormControl,
    MpFormLabel,
    MpInputTag,
    Sidebar,
    SidebarChild,
    ExportView,
    ExportHistory,
    AdvancedCalendar,
  },
  data() {
    return {
      exportState: "default",
      isDrawerOpen: false,
      channels: [
        // {
        //   text: "All channels",
        //   id: "tag-all-channels",
        //   value: "All channels",
        //   ariaLabel: "All channels",
        //   isInvalid: false,
        //   isReadyOnly: true,
        // },
      ],
      agent: [],
      contact: [],
      suggestionsChannel: [
        "All channels",
        "Web chat",
        "WhatsApp",
        "Facebook Messenger",
        "Instagram",
        "Email",
        "Telegram",
      ],
      suggestionsAgent: [
        {
          id: "1",
          label: "All agents",
          value: "All agents",
        },
        {
          id: "2",
          label: "Jessie Tan",
          value: "Jessie Tan",
          email: "jessie@email.com",
        },
        {
          id: "3",
          label: "Alfian Ramadhan",
          value: "Alfian Ramadhan",
          email: "alfian@email.com",
        },
        {
          id: "4",
          label: "Christin Purnama Sari",
          value: "Christin Purnama Sari",
          email: "christin@email.com",
        },
        {
          id: "5",
          label: "Evelyn Bellinda",
          value: "Evelyn Bellinda",
          email: "evelyn@email.com",
        },
      ],
      suggestionsContact: [
        "Aisyah Pudjiastuti",
        "Ami Nuraini",
        "Anastasia Utami",
        "Budi Pradipta",
        "Candrakanta Nashiruddin",
        "Cecep Sinaga",
      ],
    };
  },
  methods: {
    handleOpen() {
      this.isDrawerOpen = true;
    },
    handleClose() {
      this.isDrawerOpen = false;
    },
    handleExport() {
      this.handleClose();
      this.openExportHistory();
      setTimeout(() => {
        this.handleShowSuccess();
      }, 500);
    },
    openExportHistory() {
      this.exportState = "history";
    },
    handleShowSuccess() {
      this.$toast({
        variant: "success",
        title:
          "Export in progress. After completed, you will be informed through email",
        position: "top",
      });
    },
  },
};
</script>
