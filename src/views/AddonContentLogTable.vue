<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Edited by
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Activity
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">Changes</mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">1/1/2022 05:20:11</mp-table-cell>
            <mp-table-cell as="td">Rizal Candra</mp-table-cell>
            <mp-table-cell as="td">Update</mp-table-cell>
            <mp-table-cell as="td">
              Publish: Jurnal - Acumatica integrations
            </mp-table-cell>
            <mp-table-cell as="td">
              <ul :style="{ marginLeft: '20px' }">
                <li>Content status: Draft → Published</li>
              </ul>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">1/1/2022 05:20:11</mp-table-cell>
            <mp-table-cell as="td">Rizal Candra</mp-table-cell>
            <mp-table-cell as="td">Update</mp-table-cell>
            <mp-table-cell as="td">
              SKU data synced: Integration with Moka POS
            </mp-table-cell>
            <mp-table-cell as="td">
              <ul :style="{ marginLeft: '20px' }">
                <li>Name in billing: Moka POS → Moka</li>
                <li>Price: Rp150.000 → Rp200.000</li>
                <li>
                  Requirement: Jurnal Pro (Minimum) → Jurnal Enterprise
                  (Minimum)
                </li>
              </ul>
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
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import AddonContentPagination from "./AddonContentPagination";

export default {
  name: "AddonContentLogTable",
  components: {
    MpBox,
    MpIcon,
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