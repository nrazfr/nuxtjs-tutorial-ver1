<template>
    <div>
        <ProductDetails :product="product"/>
    </div>
    
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
// fetch the product
const {data: product }= await useFetch(uri)

definePageMeta({layout: 'products'})

</script>

<style  scoped>



</style>