<template>
    <div class="card">
        <div class="flex flex-col items-center gap-y-4">
            <p class="error-code">{{ error.statusCode }}</p>
            <p class="oops">Ooops.</p>
            <p class="error-message">{{ error.message }}</p>
            <button class="btn my-7" @click="handleClearError">Back to Home..</button>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>
.card {
    margin-top: 1.75rem; /* Equivalent to Tailwind's mt-7 */
    max-width: 24rem; /* Equivalent to Tailwind's max-w-sm */
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 1rem;
    background-color: white;
    border: 1px solid #d1d5db; /* Equivalent to Tailwind's border-gray-300 */
    border-radius: 0.5rem; /* Equivalent to Tailwind's rounded-lg */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Equivalent to Tailwind's shadow-md */
}

.error-code {
    font-size: 4.5rem; /* Equivalent to Tailwind's text-7xl */
    font-weight: bold;
}

.oops {
    font-size: 3.75rem; /* Equivalent to Tailwind's text-6xl */
}

.error-message {
    font-size: 1.25rem; /* Equivalent to Tailwind's text-lg */
}
</style>
