<template>
    <mp-box>
      <mp-modal
        :is-open="isOpen"
        :on-close="handleClose"
        :return-focus-on-close="false"
        close-on-overlay-click
      >
        <mp-modal-content
          mt="2"
          :width="['100%', '720px']"
          :max-width="['100%', '720px']"
          max-height="620px"
          bg="white"
          border-width="1px"
          border-color="gray.400"
          overflow-y="scroll"
        >
          <mp-box
            px="2"
            pt="2"
            position="sticky"
            top="0"
            bg="white"
            z-index="sticky"
          >
            <mp-input-group>
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input
                v-model="search"
                @input="handleSearch"
                is-clearable
                placeholder="Search employee..."
                id="search"
              />
            </mp-input-group>
          </mp-box>
  
          <mp-box v-if="isLoading" py="4" px="3">
            <mp-flex>
              <mp-spinner mr="2" />
              <mp-text> Loading </mp-text>
            </mp-flex>
          </mp-box>
  
          <mp-box v-if="!isLoading && !search" py="4">
            <mp-flex justify="space-between" mb="2" px="5">
              <mp-text font-weight="semibold">Recent searches</mp-text>
              <mp-text is-link text-decoration="underline" color="gray.600"
                >Clear</mp-text
              >
            </mp-flex>
  
            <mp-box px="3">
              <mp-flex
                v-for="value in recentSearches"
                :key="value"
                as="button"
                width="full"
                height="10"
                p="2"
                align="center"
                rounded="md"
                :_hover="{ bg: '#F6F9FC' }"
                @click="handleClickRecentSearch(value)"
              >
                <mp-text> {{ value }} </mp-text>
              </mp-flex>
            </mp-box>
          </mp-box>
  
          <mp-flex v-if="!isLoading && search" py="4" direction="column" gap="5">
            <SearchBoxResult
              v-for="result in searchResults"
              :key="result.categoryName"
              :category-name="result.categoryName"
              :slice="3"
              :items="result.datas"
              :query="search"
              @select="handleSelect"
            />
  
            <mp-text v-if="!searchResults.length" px="3" color="gray.600">
              No result found.
            </mp-text>
          </mp-flex>
        </mp-modal-content>
  
        <mp-modal-overlay />
      </mp-modal>
    </mp-box>
  </template>
  
  <script>
  import {
    MpModal,
    MpModalContent,
    MpModalOverlay,
    MpBox,
    MpFlex,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpText,
    MpSpinner,
  } from "@mekari/pixel";
  import SearchBoxResult from "./SearchBoxResult";
  
  const fakeDatasets = [
    {
      categoryName: "Employee",
      datas: [
        {
          id: 1,
          type: "avatar",
          imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
          iconName: "",
          name: "Rizal Chandra",
          caption: "CEO - Chief Executive Officer",
        },
        {
          id: 2,
          type: "avatar",
          imageUrl: "",
          iconName: "",
          name: "Ali Imran",
          caption: "CTO - Chief Technology Officer",
        },
        {
          id: 3,
          type: "avatar",
          imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
          iconName: "",
          name: "Bayu Ferdian",
          caption: "Chief Revenue Officer",
        },
        {
          id: 4,
          type: "avatar",
          imageUrl: "",
          iconName: "",
          name: "Jessie Tan",
          caption: "Chief Customer Officer",
        },
        {
          id: 5,
          type: "avatar",
          imageUrl: "",
          iconName: "",
          name: "Tony Stark",
          caption: "COO - Chief Operating Officer",
        },
      ],
    },
    {
      categoryName: "Quick Action",
      datas: [
        {
          id: 1,
          type: "icon",
          imageUrl: "",
          iconName: "employment",
          name: "Add new employee",
          caption: "",
        },
        {
          id: 2,
          type: "icon",
          imageUrl: "",
          iconName: "company",
          name: "Add new branch",
          caption: "",
        },
        {
          id: 3,
          type: "icon",
          imageUrl: "",
          iconName: "time",
          name: "Add new attendance request",
          caption: "",
        },
        {
          id: 4,
          type: "icon",
          imageUrl: "",
          iconName: "calendar",
          name: "Add new time off",
          caption: "",
        },
      ],
    },
    {
      categoryName: "File and Document",
      datas: [
        {
          id: 1,
          type: "icon",
          name: "Newton-Identity-Document.pdf",
          caption: "PDF",
          imageUrl: "",
          iconName: "pdf",
        },
      ],
    },
    {
      categoryName: "Help Center",
      datas: [
        {
          id: 1,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to add new employee?",
          caption: "",
        },
        {
          id: 2,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
        {
          id: 3,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
        {
          id: 4,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
        {
          id: 5,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
        {
          id: 6,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
        {
          id: 7,
          type: "icon",
          imageUrl: "",
          iconName: "doc",
          name: "How to create new branch?",
          caption: "",
        },
      ],
    },
  ];
  
  export default {
    name: "SearchBox",
    components: {
      MpModal,
      MpModalContent,
      MpModalOverlay,
      MpBox,
      MpFlex,
      MpInput,
      MpInputGroup,
      MpInputLeftAddon,
      MpIcon,
      MpText,
      MpSpinner,
      SearchBoxResult,
    },
    props: {
      isModalOpen: [Boolean],
    },
    watch: {
      isModalOpen(e) {
        console.log(e);
        this.isOpen = e;
      },
    },
    data() {
      return {
        isOpen: false,
        isLoading: false,
        search: "",
        simpleDebounce: "",
  
        recentSearches: [
          "Rizal Chandra",
          "Ali Imran",
          "Bayu Ferdian",
          "Jessie Tan",
        ],
        searchResults: [],
      };
    },
    methods: {
      handleOpen() {
        this.isOpen = true;
      },
      handleClose() {
        this.isOpen = false;
        this.$emit("change", this.isOpen);
      },
      handleSearch(val) {
        if (val) {
          this.isLoading = true;
          clearTimeout(this.simpleDebounce);
  
          this.simpleDebounce = setTimeout(() => {
            console.log(val);
  
            // Simulate fetch data from api
            if (val.length > 20) {
              // Will show not result found
              this.searchResults = [];
            } else {
              // Will show search result
              this.searchResults = fakeDatasets;
            }
  
            this.isLoading = false;
          }, 300);
        }
      },
      handleClickRecentSearch(value) {
        this.search = value;
        this.handleSearch(this.search);
  
        this.$nextTick(() => {
          const input = document.getElementById("search");
          const end = input.value.length;
          input.setSelectionRange(end, end);
          input.focus();
        });
      },
      handleSelect(data) {
        console.log({ data });
      },
    },
  };
  </script>
  