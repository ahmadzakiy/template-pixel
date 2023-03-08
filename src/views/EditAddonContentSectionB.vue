<template>
  <mp-flex flex-direction="column" width="700px">
    <mp-heading as="h2" color="dark" font-size="xl">
      Add-ons content on Marketplace
    </mp-heading>
    <mp-text as="p" color="gray.600" margin-bottom="5">
      You are required to fill in the add-ons content in Bahasa Indonesia and
      English.
    </mp-text>
    <mp-tabs>
      <mp-tab-list>
        <mp-tab width="100%">Bahasa Indonesia</mp-tab>
        <mp-tab width="100%">English</mp-tab>
      </mp-tab-list>
      <mp-tab-panels>
        <mp-tab-panel>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>One liner</mp-form-label>
                <mp-input
                  placeholder="Example: Manage your transaction more efficiently"
                />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Description</mp-form-label>
                <mp-textarea rows="8" />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Setup info</mp-form-label>
                <mp-textarea rows="8" />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="row" gap="5">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Developer name</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
            <mp-flex
              flex-direction="column"
              justify-content="flex-end"
              flex="1 0 0"
            >
              <mp-form-control margin-bottom="5">
                <mp-form-label>Privacy policy</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="row" gap="5">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="12">
                <mp-form-label>Support</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
            <mp-flex
              flex-direction="column"
              justify-content="flex-end"
              flex="1 0 0"
            >
              <mp-form-control margin-bottom="12">
                <mp-form-label>Terms of service</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
        </mp-tab-panel>
        <mp-tab-panel>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>One liner</mp-form-label>
                <mp-input
                  placeholder="Example: Manage your transaction more efficiently"
                />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Description</mp-form-label>
                <mp-textarea rows="8" />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Setup info</mp-form-label>
                <mp-textarea rows="8" />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="row" gap="5">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="5" is-required>
                <mp-form-label>Developer name</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
            <mp-flex
              flex-direction="column"
              justify-content="flex-end"
              flex="1 0 0"
            >
              <mp-form-control margin-bottom="5">
                <mp-form-label>Privacy policy</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
          <mp-flex flex-direction="row" gap="5">
            <mp-flex flex-direction="column" flex="1 0 0">
              <mp-form-control margin-bottom="12">
                <mp-form-label>Support</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
            <mp-flex
              flex-direction="column"
              justify-content="flex-end"
              flex="1 0 0"
            >
              <mp-form-control margin-bottom="12">
                <mp-form-label>Terms of service</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-flex>
          </mp-flex>
        </mp-tab-panel>
      </mp-tab-panels>
    </mp-tabs>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpHeading,
  MpFormControl,
  MpFormLabel,
  MpTextarea,
  MpInput,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";

export default {
  name: "EditAddonContentSectionB",
  components: {
    MpFlex,
    MpText,
    MpHeading,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpTextarea,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
  },
};
</script>
