<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-select size="md" value="all-product" width="200px">
          <option value="all-product">All product</option>
          <option value="talenta">Talenta</option>
          <option value="jurnal">Jurnal</option>
          <option value="klikpajak">Klikpajak</option>
          <option value="qontak">Qontak</option>
          <option value="esign">eSign</option>
        </mp-select>
        <mp-select size="md" value="all-content-status" width="200px">
          <option value="all-content-status">All content status</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
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
  name: "AddonContentFilter",
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