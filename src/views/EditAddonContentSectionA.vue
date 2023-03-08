<template>
  <mp-flex flex-direction="column" width="700px" position="relative">
    <mp-heading as="h2" color="dark" font-size="xl">
      Add-ons data from billing
    </mp-heading>
    <mp-text as="p" color="gray.600" margin-bottom="5">
      The information below is synchronized from the billing internal dashboard
      and cannot be edited.
    </mp-text>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Status
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-badge variant="subtle" variant-color="green">Active</mp-badge>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Product
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">Jurnal</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Name in billing
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">
          Integration MOKA POS
        </mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Billing type
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">Recurring</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Price/component
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">Rp150.000</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Package type
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">Add-ons</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Quantity
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">1</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex>
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          Requirement packages
        </mp-text>
      </mp-flex>
      <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
        <mp-text font-size="md" line-height="md">
          Jurnal Pro (Minimum)
        </mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex margin-top="3">
      <mp-flex flex="2 0 0%" padding-y="2">
        <mp-text color="gray.600" font-size="md" line-height="md">
          <mp-icon name="protection" size="sm" margin-right="2" />
          Last synced: 12 Dec 2022 at 19:03
        </mp-text>
      </mp-flex>
    </mp-flex>
    <mp-divider margin-y="6" />
    <mp-flex flex-direction="row" gap="5">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Name in Marketplace</mp-form-label>
          <mp-input />
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Name in Zoho</mp-form-label>
          <mp-select placeholder="Select name in Zoho">
            <option value="moka-pos">Moka POS</option>
            <option value="integration-jurnal ">Integration Jurnal</option>
            <option value="talenta-form">Talenta form</option>
            <option value="sap-by-harmonia">SAP by harmonia</option>
            <option value="sap-beone">SAP beone</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column" width="50%" padding-right="2.5">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Component unit</mp-form-label>
          <mp-input />
          <mp-form-help-text>Example: /outlet/month.</mp-form-help-text>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Purchase type</mp-form-label>
          <mp-radio-group name="inquiry-type" spacing="10" is-inline>
            <mp-radio value="self-service">Self service</mp-radio>
            <mp-radio value="form-inquiry">Form Inquiry</mp-radio>
          </mp-radio-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Category</mp-form-label>
          <mp-input-tag
            :content-style="{ width: '64' }"
            placeholder="Select category"
          />
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="row" width="50%" padding-right="2.5">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Eligibility criteria</mp-form-label>
          <mp-select placeholder="Select eligibility criteria" />
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="12">
          <mp-form-label>Add-ons type</mp-form-label>
          <mp-radio-group name="addon-type" spacing="10" is-inline>
            <mp-radio value="integration">Integration</mp-radio>
            <mp-radio value="additional-feature">Additional feature</mp-radio>
          </mp-radio-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpHeading,
  MpBadge,
  MpIcon,
  MpDivider,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpInput,
  MpInputTag,
  MpSelect,
  MpRadioGroup,
  MpRadio,
} from "@mekari/pixel";

export default {
  name: "EditAddonContentSectionA",
  components: {
    MpFlex,
    MpText,
    MpHeading,
    MpBadge,
    MpIcon,
    MpDivider,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpInput,
    MpInputTag,
    MpSelect,
    MpRadioGroup,
    MpRadio,
  },
};
</script>
