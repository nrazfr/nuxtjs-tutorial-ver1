<template>
    <div>
      <!-- Grid container -->
      <div class="grid grid-cols-4 gap-4">
        <!-- Loop through products -->
        <div v-for="p in products" :key="p.id">
          <ProductCard :product="p"/>
        </div>
      </div>
    </div>
  </template>
  

<script setup>

definePageMeta({
    layout: 'products'
})

//fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')   
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>