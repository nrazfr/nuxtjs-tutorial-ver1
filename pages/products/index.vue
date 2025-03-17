<template>
    <div>
        <!-- Page Head Information -->
        <Head>
            <Title>Nuxt Farcame | Merchandise</Title>
            <Meta name="description" content="Nuxt 3 Merch"/>
        </Head>

        <!-- Grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <!-- Loop through products -->
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>

// Define Page Layout
definePageMeta({
    layout: 'products'
})

// Fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// Set the Head Metadata
useHead({
    title: 'Nuxt Farcame | Merchandise',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})
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
