<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-select size="md" value="all-type" width="200px">
          <option value="all-type">All type</option>
          <option value="update">Update</option>
          <option value="created">Created</option>
        </mp-select>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search" />
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
  MpSelect,
} from "@mekari/pixel";

export default {
  name: "AddContentLogFilter",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpSelect,
  },
};
</script>