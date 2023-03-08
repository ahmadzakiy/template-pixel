<template>
  <mp-box
    role="group"
    width="full"
    z-index="1"
    max-height="calc(100vh - 60px)"
    border-right="1px"
    border-color="gray.100"
    transition="all .2s ease"
    background-color="white"
    :position="isStacked ? 'relative' : 'absolute'"
    :max-width="isToggle ? '3.75rem' : '13.5rem'"
    :display="['none', 'block']"
    :box-shadow="
      isToggle
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : isStacked
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    "
    @mouseenter="!isStacked ? handleMouseEnter() : {}"
    @mouseleave="!isStacked ? handleMouseLeave() : {}"
  >
    <mp-box
      as="section"
      class="sidebar-content"
      data-id="sidebar"
      width="full"
      height="calc(100vh - 60px)"
      overflow-y="auto"
      overflow-x="hidden"
      padding-y="4"
      padding-x="2"
    >
      <!-- // FIRST MENU -->
      <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
        <mp-tooltip
          position="right"
          :label="menu.name"
          :visibility="isToggle ? 'visible' : 'hidden'"
          use-portal
        >
          <mp-pseudo-box
            role="group"
            flex="1"
            border-radius="sm"
            as="router-link"
            transition="all .2s ease"
            padding-x="2.5"
            padding-y="2"
            :to="menu.link"
            :background-color="menu.isActive ? 'ice.50' : 'inherit'"
            :color="menu.isActive ? 'blue.400' : 'inherit'"
            :_hover="{
              backgroundColor: 'ice.50',
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-icon
                :name="menu.icon"
                :color="menu.isActive ? 'blue.400' : 'gray.600'"
              />
              <mp-text
                white-space="nowrap"
                :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                :color="menu.isActive ? 'blue.400' : 'dark'"
                :opacity="isToggle ? '0' : '1'"
              >
                {{ menu.name }}
              </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-tooltip>
      </mp-flex>
      <mp-divider />
      <!-- // SECOND MENU -->
      <mp-flex
        flex-direction="column"
        v-for="menu in secondMenus"
        :key="menu.id"
      >
        <mp-tooltip
          position="right"
          :label="menu.name"
          :visibility="isToggle ? 'visible' : 'hidden'"
          use-portal
        >
          <mp-pseudo-box
            role="group"
            flex="1"
            border-radius="sm"
            as="router-link"
            transition="all .2s ease"
            padding-x="2.5"
            padding-y="2"
            :to="menu.link"
            :background-color="menu.isActive ? 'ice.50' : 'inherit'"
            :color="menu.isActive ? 'blue.400' : 'inherit'"
            :_hover="{
              backgroundColor: 'ice.50',
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-icon
                :name="menu.icon"
                :color="menu.isActive ? 'blue.400' : 'gray.600'"
              />
              <mp-text
                white-space="nowrap"
                :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                :color="menu.isActive ? 'blue.400' : 'dark'"
                :opacity="isToggle ? '0' : '1'"
              >
                {{ menu.name }}
              </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-tooltip>
      </mp-flex>
      <mp-divider />
      <!-- // THIRD MENU -->
      <mp-flex
        flex-direction="column"
        v-for="menu in thirdMenus"
        :key="menu.id"
      >
        <mp-tooltip
          position="right"
          :label="menu.name"
          :visibility="isToggle ? 'visible' : 'hidden'"
          use-portal
        >
          <mp-pseudo-box
            role="group"
            flex="1"
            border-radius="sm"
            as="router-link"
            transition="all .2s ease"
            padding-x="2.5"
            padding-y="2"
            :to="menu.link"
            :background-color="menu.isActive ? 'ice.50' : 'inherit'"
            :color="menu.isActive ? 'blue.400' : 'inherit'"
            :_hover="{
              backgroundColor: 'ice.50',
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-icon
                :name="menu.icon"
                :color="menu.isActive ? 'blue.400' : 'gray.600'"
              />
              <mp-text
                white-space="nowrap"
                :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                :color="menu.isActive ? 'blue.400' : 'dark'"
                :opacity="isToggle ? '0' : '1'"
              >
                {{ menu.name }}
              </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-tooltip>
      </mp-flex>

      <!-- // COLLAPSE BUTTON -->
      <mp-flex
        flex-direction="column"
        position="absolute"
        bottom="16px"
        left="0"
        right="0"
        padding-x="2"
        width="100%"
      >
        <mp-pseudo-box
          role="group"
          flex="1"
          border-radius="sm"
          transition="all .2s ease"
          padding-x="2.5"
          padding-y="2"
          :_hover="{
            backgroundColor: 'ice.50',
            color: 'blue.400',
            cursor: 'pointer',
          }"
          @click="isToggle = !isToggle"
        >
          <mp-stack direction="row" align="center">
            <mp-icon :name="isToggle ? 'arrow-collapse' : 'arrow-expand'" />
            <mp-text white-space="nowrap" :opacity="isToggle ? '0' : '1'">
              Collapse
            </mp-text>
          </mp-stack>
        </mp-pseudo-box>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpStack,
  MpPseudoBox,
  MpDivider,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "SidebarDashboard",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isStacked: [Boolean],
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpDivider,
    MpTooltip,
  },
  data() {
    return {
      isToggle: this.isCollapsed
        ? this.defaultIsToggle || true
        : this.defaultIsToggle || false,
      menus: [
        {
          id: 1,
          name: "Inbox",
          icon: "inbox",
          link: "/",
        },
        {
          id: 2,
          name: "Broadcast",
          icon: "broadcast",
          link: "/",
        },
        {
          id: 3,
          name: "Contact",
          icon: "contact",
          link: "/",
        },
        {
          id: 4,
          name: "Chatbot",
          icon: "chatbot",
          link: "/",
        },
        // {
        //   id: 1,
        //   name: "Marketplace CMS",
        //   icon: "application",
        //   link: "/",
        //   isActive:
        //     this.$router.currentRoute.name === "AddonContent" ||
        //     this.$router.currentRoute.name === "EditAddonContent" ||
        //     this.$router.currentRoute.name === "Category",
        // },
      ],
      secondMenus: [
        {
          id: 11,
          name: "Reports",
          icon: "reports",
          link: "/",
          isActive: true,
        },
        {
          id: 12,
          name: "Transfer",
          icon: "transfer",
          link: "/",
        },
      ],
      thirdMenus: [
        {
          id: 21,
          name: "Add ons",
          icon: "add-ons",
          link: "/",
        },
        {
          id: 32,
          name: "Settings",
          icon: "settings",
          link: "/",
        },
      ],
    };
  },
  methods: {
    handleMouseEnter() {
      !this.isToggle && this.isCollapsed
        ? (this.isToggle = true)
        : (this.isToggle = false);
    },
    handleMouseLeave() {
      !this.isToggle && this.isCollapsed
        ? (this.isToggle = false)
        : (this.isToggle = true);
    },
  },
};
</script>

<style>
/* custom scroll bar */
.sidebar-content::-webkit-scrollbar {
  width: 0px;
}
.sidebar-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.sidebar-content:hover::-webkit-scrollbar {
  width: 5px;
  position: absolute;
}
.sidebar-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
