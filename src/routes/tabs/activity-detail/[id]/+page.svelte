<script lang="ts">
  import axios from "axios";
  import Skeleton from "$lib/Skeleton.svelte";
  import Modal from "$lib/Modal.svelte";

  import { page } from "$app/stores";
  import { 
    add, 
    play,
    share,
    star 
  } from "ionicons/icons";
  import { API } from "$lib/api";
  import { onMount } from "svelte";
  import type { Activity } from "$lib/types";

  import { modalController } from "ionic-svelte";

  const ID = $page.params.id;
  let activityDetail: Activity | null;

  const getActivity = async () => {
    const res = await axios.get(`${API}/id/${ID}`);

    activityDetail = res.data;
  }

  const openModal = async () => {
    const modal = await modalController.create({
      component: Modal,
      showBackdrop: true,
      backdropDismiss: false
    });

    modal
      .onDidDismiss()
      .then((value) => {
        console.log('Dismissed the modal', value)
      });

    await modal.present();
  }

  onMount(() => {
    getActivity();
  });
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start" class="can-go-back">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

{#if !activityDetail}
  <Skeleton />
{:else}
  <ion-img src={activityDetail.image}></ion-img>

  <ion-card style="margin: 0;">
    <ion-card-header>
      <ion-card-title>{activityDetail.name}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {activityDetail.description}
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-list lines="none">
      <ion-item>
        <ion-label>Duration</ion-label>
        <ion-chip color="primary">{activityDetail.duration}</ion-chip>
      </ion-item>

      <ion-item>
        <ion-label>Category</ion-label>
        <ion-chip color="primary">{activityDetail.category}</ion-chip>
      </ion-item>

      <ion-item>
        <ion-label>Popularity</ion-label>
        <ion-chip color="primary">{activityDetail.popularity}</ion-chip>
      </ion-item>
    </ion-list>
  </ion-card>
{/if}

<ion-fab vertical="top" horizontal="end">
  <ion-fab-button>
    <ion-icon icon={add}></ion-icon>
  </ion-fab-button>

  <ion-fab-list side="bottom">
    
    <ion-fab-button on:click={openModal}>
      <ion-icon color="success" icon={play}></ion-icon>
    </ion-fab-button>

    <ion-fab-button>
      <ion-icon color="dark" icon={share}></ion-icon>
    </ion-fab-button>

    <ion-fab-button>
      <ion-icon color="danger" icon={star}></ion-icon>
    </ion-fab-button>

  </ion-fab-list>
</ion-fab>