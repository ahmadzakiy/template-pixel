<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Category
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Add-ons name
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">HRIS</mp-table-cell>
            <mp-table-cell as="td">
              Talenta form, Talenta portal, Talenta performance reviews
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline" @click="onEditModalToggle(true)">
                Edit
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Productivity</mp-table-cell>
            <mp-table-cell as="td">
              Talenta form, Talenta portal, Recruitment, Flex benefit
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Payroll</mp-table-cell>
            <mp-table-cell as="td">
              Talenta payroll disbursement, SAP, Odoo, Dynamics365, Expense
              management
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Accounting</mp-table-cell>
            <mp-table-cell as="td">
              Integration with Jurnal, Integration with Moka, Integration with
              Hellobill
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">Edit</mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <CategoryPagination />
    <CategoryEditModal
      :isModalOpen="isEditModalOpen"
      :onModalToggle="onEditModalToggle"
    />
    <CategoryDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButton,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import CategoryPagination from "./CategoryPagination";
import CategoryEditModal from "./CategoryEditModal";

export default {
  name: "CategoryTable",
  components: {
    MpBox,
    MpIcon,
    MpButton,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    CategoryPagination,
    CategoryEditModal,
  },
  data: function () {
    return {
      isEditModalOpen: false,
    };
  },
  methods: {
    onEditModalToggle: function (data) {
      this.isEditModalOpen = data;
    },
  },
};
</script>
