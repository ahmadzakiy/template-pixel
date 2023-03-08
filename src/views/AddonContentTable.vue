<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              SKU name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Product
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Pricing
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Billing status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Content status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              Integration with Moka POS
              <mp-badge variant="subtle" variant-color="blue" margin-left="2">
                New
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">Jurnal</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rp150.000</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                /outlet/month
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">Active</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">Draft</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button as="router-link" to="/detail" variant="outline">
                Edit content
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              Jurnal to business review
              <mp-badge variant="subtle" variant-color="blue" margin-left="2">
                New
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">Jurnal</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rp250.000</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                /employee/branch/month
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">Active</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">Draft</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit content</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              Jurnal Form+
              <mp-badge variant="subtle" variant-color="blue" margin-left="2">
                Update
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">Talenta</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rp175.000</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">/month</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">Inactive</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">Draft</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit content</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">SAP Integration</mp-table-cell>
            <mp-table-cell as="td">Talenta</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rp255.000</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                /employee/month
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">Active</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Published
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit content</mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <AddonContentPagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpBadge,
  MpText,
  MpButton,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import AddonContentPagination from "./AddonContentPagination";

export default {
  name: "AddonContentTable",
  components: {
    MpBox,
    MpIcon,
    MpBadge,
    MpText,
    MpButton,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    AddonContentPagination,
  },
};
</script>