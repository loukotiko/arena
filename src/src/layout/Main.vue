<template>
  <div>
    <header-bar/>
    <b-container class="mt-5">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";

export default {
  name: "MainLayout",
  components: { HeaderBar }
};
</script>
