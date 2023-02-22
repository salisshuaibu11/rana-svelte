<script lang="ts">
  import { modalController } from "ionic-svelte";
	import { close, add } from "ionicons/icons";

  export let videoUrl: string | undefined = undefined;

  const closeModal = () => {
    modalController.dismiss({data: Date.now()})
  }

</script>

<ion-content color="dark" style="height: 30rem;">
  <video autoplay class="activity-video">
    <source src={videoUrl}>
  </video>
  <ion-fab
    vertical="bottom"
    horizontal="center"
    slot="fixed"
  >
  
  <ion-fab-button on:click={closeModal} color="danger">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </ion-fab-button>
</ion-fab>
</ion-content>

<style>
  .activity-video {
    width: 100%;
    height: auto;
    margin-top: 25vh;
  }

  .close {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>