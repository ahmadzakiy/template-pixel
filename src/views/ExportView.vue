<template>
  <mp-box>
    <mp-flex gap="6">
      <mp-flex
        width="full"
        direction="column"
        p="4"
        border="1px solid"
        border-color="gray.100"
        border-radius="md"
      >
        <mp-text color="blue.400" font-weight="semibold" font-size="lg"
          >Chat</mp-text
        >
        <mp-text color="gray.600"
          >Exporting all chats, including time, based on selected period and
          channel.</mp-text
        >
        <mp-flex align="center" mt="4">
          <mp-button variant="outline" mr="4">Export</mp-button>
          <mp-button variant="link" @click="handleOpen">
            View export history
          </mp-button>
        </mp-flex>
      </mp-flex>
      <mp-flex
        width="full"
        direction="column"
        p="4"
        border="1px solid"
        border-color="gray.100"
        border-radius="md"
      >
        <mp-text color="blue.400" font-weight="semibold" font-size="lg"
          >List of conversation</mp-text
        >
        <mp-text color="gray.600"
          >Exporting the list of created conversation rooms.</mp-text
        >
        <mp-flex align="center" mt="4">
          <mp-button variant="outline" mr="4">Export</mp-button>
          <mp-button variant="link">View export history</mp-button>
        </mp-flex>
      </mp-flex>
    </mp-flex>
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
  MpFormHelpText,
  MpFormErrorMessage,
  MpInputTag,
} from "@mekari/pixel";

import AdvancedCalendar from "../components/AdvancedCalendar.vue";

export default {
  name: "ExportView",
  components: {
    MpBox,
    MpFlex,
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
    MpFormHelpText,
    MpFormErrorMessage,
    MpInputTag,
    AdvancedCalendar,
  },
  data() {
    return {
      isDrawerOpen: true,
      channels: [
        {
          text: "All channels",
          id: "tag-all-channels",
          value: "All channels",
          ariaLabel: "All channels",
          isInvalid: false,
          isReadyOnly: true,
        },
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
			this.handleClose()
      this.$emit('export')
    },
  },
};
</script>
