<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Add-ons content</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Edit add-ons content
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <EditAddonContentSectionA />
          <EditAddonContentSectionB />
          <EditAddonContentSectionC />
          <mp-flex flex-direction="column" width="700px">
            <mp-flex
              gap="4"
              justify-content="space-between"
              align-items="center"
              margin-top="6"
            >
              <mp-flex>
                <mp-text color="gray.600" text-decoration-line="underline">
                  Preview content
                </mp-text>
              </mp-flex>
              <mp-flex>
                <mp-button variant="ghost">Save as draft</mp-button>
                <mp-button>Publish</mp-button>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";
import EditAddonContentSectionA from "./EditAddonContentSectionA";
import EditAddonContentSectionB from "./EditAddonContentSectionB";
import EditAddonContentSectionC from "./EditAddonContentSectionC";

export default {
  name: "EditAddonContent",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    Header,
    Sidebar,
    SidebarChild,
    EditAddonContentSectionA,
    EditAddonContentSectionB,
    EditAddonContentSectionC,
  },
};
</script>
