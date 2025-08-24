<template>
    <div class="logo-section">
        <img src="@/assets/images/new-logo.png" alt="Logo" height="80" />
    </div>
</template>



<style scoped>
.logo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000;
    margin-bottom: 4rem;
    /* Dark background */
    padding: 0 1rem;
}

.logo-section img {
    height: 80px;
    max-width: 100%;
    width: auto;
    object-fit: contain;
}

/* Tablet */
@media (max-width: 768px) {
    .logo-section {
        margin-bottom: 3rem;
        padding-top: 1.5rem;

    }

    .logo-section img {
        height: 60px;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .logo-section {
        margin-bottom: 2rem;
    }

    .logo-section img {
        height: 48px;
    }
}
</style>