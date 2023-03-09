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
          <mp-button variant="outline" mr="4" @click="handleExport"
            >Export</mp-button
          >
          <mp-button variant="link" @click="handleOpenHistory">
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
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton } from "@mekari/pixel";

export default {
  name: "ExportView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
  },
  data() {
    return {};
  },
  methods: {
    handleExport() {
      this.$emit("export");
    },
    handleOpenHistory() {
      this.$emit("history");
    },
  },
};
</script>
