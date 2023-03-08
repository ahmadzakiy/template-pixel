<template>
  <mp-drawer
    :is-open="isSidebarMenuOpen"
    :on-close="onSidebarMenuToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      background-color="background"
      :max-width="['full', 'xs']"
      :margin-top="['51px', '0px']"
      :height="['calc(100vh - 51px)', '100vh']"
    >
      <mp-drawer-body
        background-color="background"
        padding="0"
        max-height="calc(100vh)"
        overflow="hidden auto"
      >
        <mp-flex
          align-items="center"
          border-radius="none"
          padding-x="4"
          padding-y="2.5"
          background-color="white"
        >
          <mp-avatar
            name="Rizal Chandra"
            src="https://i.pravatar.cc/300"
            size="md"
            margin-right="2"
            :show-border="false"
          />
          <mp-flex flex-direction="column">
            <mp-text font-weight="semibold" line-height="md">
              Rizal Chandra
            </mp-text>
            <mp-text font-size="sm" color="gray.600">
              PT Central Perk Indonesia
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-box
          v-if="!isToggle"
          padding-x="2"
          padding-y="4"
          background-color="white"
        >
          <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
            <mp-pseudo-box
              v-if="!menu.isNested"
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
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon
                  v-if="menu.isNested"
                  name="chevrons-right"
                  :color="black"
                />
              </mp-stack>
            </mp-pseudo-box>
            <mp-pseudo-box
              v-else
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle(true)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon v-if="menu.isNested" name="chevrons-right" />
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-box v-else padding-x="2" padding-y="4" background-color="white">
          <mp-flex flex-direction="column">
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
              @click="handleToggle(false)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon name="arrows-left" />
                  <mp-text white-space="nowrap"> Back </mp-text>
                </mp-flex>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
          <mp-divider />
          <mp-box>
            <mp-text
              font-size="md"
              font-weight="semibold"
              color="blue.400"
              padding-x="4"
              padding-y="2"
            >
              MARKETPLACE CMS
            </mp-text>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="regular"
                  :_hover="{
                    color: 'dark',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text font-weight="semibold">Add-ons content</mp-text>
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>

            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="inherit"
                  :_hover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text>Category</mp-text>
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>
          </mp-box>
        </mp-box>
        <mp-box padding="4">
          <mp-flex flex-direction="column">
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Account settings
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company info
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company list
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Help & Support
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Change language
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Switch account
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Sign out
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Privacy
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Terms of Use
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              About Mekari Account
            </mp-text>
            <mp-text color="gray.600" padding-y="2">Mekari © 2022</mp-text>
          </mp-flex>
        </mp-box>
      </mp-drawer-body>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpStack,
  MpText,
  MpIcon,
  MpAvatar,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
} from "@mekari/pixel";

export default {
  name: "SidebarMobile",
  props: {
    isSidebarMenuOpen: [Boolean],
    onSidebarMenuToggle: [Function],
  },
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpStack,
    MpText,
    MpIcon,
    MpAvatar,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: false,
      menus: [
        {
          id: 1,
          name: "Marketplace CMS",
          icon: "application",
          link: "/",
          isNested: true,
          isActive: this.$router.currentRoute.name === "AddonContent",
        },
      ],
    };
  },
  methods: {
    handleToggle: function (data) {
      this.isToggle = data;
    },
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>
