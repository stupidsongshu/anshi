<template>
  <div class="page-security-check">
    <ServiceHeader :title="data.title"></ServiceHeader>

    <template v-if="data.children">
      <ServiceTemplate
        v-for="(item, index) in data.children"
        :key="item.path"
        :index="index"
        :data="item"
      />
    </template>
  </div>
</template>

<script>
import ServiceHeader from './service-header.vue';
import ServiceTemplate from './service-template.vue';

export default {
  components: { ServiceHeader, ServiceTemplate },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.page-security-check {
  padding: 42px 100px 78px 138px;
}
</style>
