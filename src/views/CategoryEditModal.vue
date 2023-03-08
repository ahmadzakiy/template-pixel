<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-overlay />
    <mp-modal-content>
      <mp-modal-header>Edit category</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex align-items="center">
          <mp-form-control is-disabled>
            <mp-input value="HRIS" is-full-width />
          </mp-form-control>
          <mp-icon name="arrows-right" margin-x="4" />
          <mp-form-control>
            <mp-input is-full-width />
          </mp-form-control>
        </mp-flex>
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
  MpFlex,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpFormControl,
  MpInput,
  MpIcon,
} from "@mekari/pixel";

export default {
  name: "CategoryEditModal",
  components: {
    MpFlex,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpFormControl,
    MpInput,
    MpIcon,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>