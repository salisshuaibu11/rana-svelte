<script>
  export let count = 1;
</script>

{#each Array(count) as _}
  <ion-card>
  <ion-skeleton-text class="skeleton-image"></ion-skeleton-text>
    <ion-card-header>
      <ion-skeleton-text animated></ion-skeleton-text>
      <ion-skeleton-text animated></ion-skeleton-text>
    </ion-card-header>
  </ion-card>
{/each}

<style>
  .skeleton-image {
    height: 200px;
  }
</style>