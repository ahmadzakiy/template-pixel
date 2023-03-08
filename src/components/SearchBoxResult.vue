<template>
    <mp-box>
      <mp-text font-weight="semibold" mb="2" px="5"> {{ categoryName }} </mp-text>
      <mp-box px="3">
        <mp-flex
          v-for="(item, index) in getItems"
          :key="`${categoryName}-${index}`"
          :id="`${categoryName}-${index}`"
          @click="handleSelect(item)"
          as="button"
          width="full"
          height="10"
          p="2"
          align="center"
          rounded="md"
          role="group"
          :_hover="{ bg: '#F6F9FC' }"
        >
          <!-- Icon -->
          <template v-if="item.type === 'icon'">
            <mp-icon
              :name="item.iconName"
              size="sm"
              :_groupHover="{ display: 'none' }"
            />
            <mp-icon
              :name="item.iconName"
              size="sm"
              variant="duotone"
              display="none"
              :_groupHover="{ display: 'block' }"
            />
          </template>
  
          <!-- Avatar -->
          <mp-avatar
            v-if="item.type === 'avatar'"
            size="sm"
            :name="item.name"
            :src="item.imageUrl"
          />
  
          <!-- Text -->
          <mp-text ml="2">
            <span v-html="getHighlight(item.name, query)"></span>
          </mp-text>
  
          <!-- Caption -->
          <mp-text v-if="item.caption" ml="2" font-size="sm" color="gray.400">
            {{ item.caption }}
          </mp-text>
        </mp-flex>
      </mp-box>
  
      <mp-text
        v-if="isShowExpandAction"
        @click.native="handleExpand"
        is-link
        text-decoration="underline"
        mt="2"
        px="4"
      >
        {{ isExpanded ? "Show less" : "Show more" }}
      </mp-text>
    </mp-box>
  </template>
  
  <script>
  import { MpBox, MpFlex, MpText, MpAvatar, MpIcon } from "@mekari/pixel";
  export default {
    name: "SearchBoxResult",
    components: {
      MpBox,
      MpFlex,
      MpText,
      MpAvatar,
      MpIcon,
    },
    props: {
      query: String,
      categoryName: String,
      slice: {
        type: Number,
        default: 3,
      },
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isExpanded: false,
      };
    },
    computed: {
      getItems() {
        if (this.isExpanded) {
          return this.items;
        }
  
        return this.items.slice(0, this.slice);
      },
      isShowExpandAction() {
        return this.items.length > this.slice;
      },
    },
    methods: {
      handleExpand() {
        this.isExpanded = !this.isExpanded;
      },
      handleSelect(data) {
        this.$emit("select", data);
      },
      getHighlight(str, query) {
        if (query) {
          const regex = new RegExp(query.split("").join("-?"), "i");
          return str.replace(regex, (match) => "<b>" + match + "</b>");
        }
  
        return str;
      },
    },
  };
  </script>
  
  <style scoped>
  b {
    font-weight: 600;
  }
  </style>
  