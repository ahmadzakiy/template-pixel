<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-overlay />
    <mp-modal-content>
      <mp-modal-header>Create new category</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-form-control control-id="category">
          <mp-input-tag :content-style="{ width: '64' }" />
          <mp-form-help-text>
            Press Enter (↵) to add more category and max. 30 character.
          </mp-form-help-text>
        </mp-form-control>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button>Save</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
  </mp-modal>
</template>

<script>
import {
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpFormControl,
  MpFormHelpText,
  MpInputTag,
} from "@mekari/pixel";

export default {
  name: "CategoryCreateModal",
  components: {
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpFormControl,
    MpFormHelpText,
    MpInputTag,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>