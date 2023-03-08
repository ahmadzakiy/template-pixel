<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-overlay />
    <mp-modal-content>
      <mp-modal-header>Sync SKU’s data form Billing?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-text>
          All SKU’s data on Billing will be synced to Marketplace CMS backyard.
        </mp-text>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button>Synced</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
  </mp-modal>
</template>

<script>
import {
  MpText,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "AddonContentSyncModal",
  components: {
    MpText,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>