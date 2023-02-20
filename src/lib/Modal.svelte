<script>
  import { close } from "ionicons/icons";
  const closeModal = () => {}
</script>

<ion-content color="dark">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video autoplay class="activity-video">
    <source src="url">
  </video>
  <ion-fab
    vertical="bottom"
    horizontal="center"
    slot="fixed"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <ion-fab-button on:click={closeModal} color="danger">
      <ion-icon icon={close}></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>