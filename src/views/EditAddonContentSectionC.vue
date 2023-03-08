<template>
  <mp-flex flex-direction="column" width="700px">
    <mp-heading as="h2" color="dark" font-size="xl">
      Supporting images
    </mp-heading>
    <mp-text as="p" color="gray.600" margin-bottom="5">
      You are required to add the add-ons logo/icon and feature images.
    </mp-text>
    <mp-flex flex-direction="column">
      <mp-flex flex-direction="column" flex="1 0 0">
        <LogoUpload />
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column">
      <mp-flex flex-direction="column" flex="1 0 0">
        <CustomUpload />
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpHeading } from "@mekari/pixel";
import CustomUpload from "./uploader/CustomUpload";
import LogoUpload from "./uploader/LogoUpload";

export default {
  name: "EditAddonContentSectionC",
  components: {
    MpFlex,
    MpText,
    MpHeading,
    CustomUpload,
    LogoUpload,
  },
};
</script>
