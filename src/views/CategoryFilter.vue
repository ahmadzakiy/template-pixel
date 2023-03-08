<template>
  <mp-box>
    <mp-flex justify-content="flex-end" margin-bottom="5">
      <mp-flex gap="2" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input width="65" placeholder="Search by category or add-ons" />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";

export default {
  name: "CategoryFilter",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
  },
};
</script>
