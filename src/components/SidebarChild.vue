<template>
  <mp-box
    as="section"
    data-id="sidebar-child"
    max-width="12.75rem"
    width="full"
    border-right="1px"
    border-color="gray.100"
    max-height="calc(100vh - 60px)"
    padding-y="4"
    margin-left="60px"
    transition="all .2s ease"
    :display="['none', 'block']"
  >
    <mp-box
      max-height="calc(100vh - 90px)"
      overflow-y="auto"
      overflow-x="hidden"
    >
      <mp-text
        font-size="md"
        font-weight="semibold"
        color="blue.400"
        padding-x="4"
        padding-y="2"
        letter-spacing="0.24em"
      >
        REPORTS
      </mp-text>
      <mp-box v-for="menu in subMenu" :key="menu.id">
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            as="router-link"
            :to="menu.link"
            padding-x="4"
            padding-y="2"
            font-weight="regular"
            :background="menu.isActive ? 'ice.50' : 'white'"
            :color="menu.isActive ? 'blue.400' : 'dark'"
            :_hover="{
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text :font-weight="menu.isActive ? 'semibold' : 'normal'" color="inherit">
                {{ menu.name }}
              </mp-text>
              <mp-badge v-if="menu.isNew" variant-color="red">New</mp-badge>
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpStack, MpPseudoBox, MpBadge, } from "@mekari/pixel";

export default {
  name: "SidebarChild",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
    MpBadge,
  },
  data() {
    return {
      isActive: 0,
      subMenu: [
        {
          id: 1,
          name: "General",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 2,
          name: "Agent performance",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 3,
          name: "Bot performance",
          link: "/",
          isActive: false,
          isNew: true,
        },
        {
          id: 4,
          name: "Broadcast",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 5,
          name: "Contact",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 6,
          name: "CSAT",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 7,
          name: "CES",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 8,
          name: "NPS",
          link: "/",
          isActive: false,
          isNew: false,
        },
        {
          id: 9,
          name: "Export",
          link: "/",
          isActive: true,
          isNew: true,
        },
      ],
    };
  },
  methods: {
    handleChange(data) {
      this.isActive = data;
    },
  },
};
</script>
