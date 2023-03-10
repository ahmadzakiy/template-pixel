<template>
  <mp-box>
    <mp-flex direction="column" mb="6">
      <mp-text font-size="xl" font-weight="semibold">Export history</mp-text>
      <mp-text color="gray.600"
        >Once exported, each exporter can download the file in their
        email.</mp-text
      >
    </mp-flex>
    <mp-flex justify="space-between" mb="6">
      <mp-flex gap="1">
        <mp-box width="240px">
          <AdvancedCalendar />
        </mp-box>
        <mp-box width="240px">
          <mp-autocomplete
            v-model="status"
            :data="['All status', 'Complete', 'In progress', 'Canceled']"
            :contentStyle="{ width: '240px' }"
          />
        </mp-box>
      </mp-flex>
      <mp-input-group width="24opx">
        <mp-input-left-addon :with-background="false">
          <mp-icon name="search" size="sm" />
        </mp-input-left-addon>
        <mp-input placeholder="Search exporter name" />
      </mp-input-group>
    </mp-flex>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              File name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Exporter
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Exporte date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th"> </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td"
              >ChatHistory-02022023-105155.csv</mp-table-cell
            >
            <mp-table-cell as="td">Christin Purnama Sari</mp-table-cell>
            <mp-table-cell as="td">2 Feb 2023 at 10:51</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="orange">
                In progress
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="ghost" @click="handleOpenModal">
                Cancel
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td"
              >ChatHistory-02022023-105155.csv</mp-table-cell
            >
            <mp-table-cell as="td">Rizal Chandra</mp-table-cell>
            <mp-table-cell as="td">2 Feb 2023 at 10:51</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Completed
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right"> </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td"
              >ChatHistory-ddmmyyyy-hhmmss.csv</mp-table-cell
            >
            <mp-table-cell as="td">Rizal Chandra</mp-table-cell>
            <mp-table-cell as="td">30 Jan 2023 at 11:33</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Canceled
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right"> </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
    <TablePagination />

    <mp-modal :is-open="isModalOpen" close-on-overlay-click>
      <mp-modal-content width="330px">
        <mp-modal-header>Cancel export ?</mp-modal-header>
        <mp-modal-close-button @click="handleCloseModal" />
        <mp-modal-body>
          <mp-text>
            Your export history will still be displayed after canceling.
          </mp-text>
        </mp-modal-body>
        <mp-box
          as="footer"
          display="flex"
          :pt="2"
          :px="4"
          :pb="4"
          justifyContent="flex-end"
          data-pixel-component="MpModalFooter"
        >
          <mp-button variant="ghost" margin-right="3" @click="handleCloseModal"
            >Continue export</mp-button
          >
          <mp-button
            variant="solid"
            variant-color="red"
            @click="handleCloseModal"
            >Cancel</mp-button
          >
        </mp-box>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpButton,
  MpBadge,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAutocomplete,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

import TablePagination from "../components/TablePagination";
import AdvancedCalendar from "../components/AdvancedCalendar";

export default {
  name: "ExportHistory",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpButton,
    MpBadge,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAutocomplete,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    TablePagination,
    AdvancedCalendar,
  },
  data() {
    return {
      status: "All status",
      isModalOpen: false,
    };
  },
  methods: {
    handleOpenModal() {
      this.isModalOpen = true;
    },
    handleCloseModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
