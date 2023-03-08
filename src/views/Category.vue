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
          padding-y="3"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Marketplace CMS</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Category
            </mp-heading>
          </mp-box>
          <mp-button @click="onCreateModalToggle(true)">
            Create category
          </mp-button>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <CategoryFilter />
          <CategoryTable />
          <CategoryCreateModal
            :isModalOpen="isCreateModalOpen"
            :onModalToggle="onCreateModalToggle"
          />
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
import CategoryFilter from "./CategoryFilter";
import CategoryTable from "./CategoryTable";
import CategoryCreateModal from "./CategoryCreateModal";

export default {
  name: "Category",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    Header,
    Sidebar,
    SidebarChild,
    CategoryFilter,
    CategoryTable,
    CategoryCreateModal,
  },
  data: function () {
    return {
      isCreateModalOpen: false,
    };
  },
  methods: {
    onCreateModalToggle: function (data) {
      this.isCreateModalOpen = data;
    },
  },
};
</script>