<script lang="ts">
  import axios from "axios";

	import { onMount } from "svelte";
  import type { Activity } from "$lib/types";
	import { goto } from "$app/navigation";
  import { API } from "$lib/api";
  import Skeleton from "$lib/Skeleton.svelte";

  let activityList: boolean = false;

  let activities: Activity[] = [];

  const getAllActivities = async () => {
    activityList = true;
    try {
      const response = await axios.get(API);

      activities = response.data;

      activityList = false;
    } catch (error) {
      activityList = false;
    }
  }

  onMount(() => {
    getAllActivities();
  })
</script>

<ion-header>
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  {#if activityList}
    <Skeleton count={3}/>
  {:else}
    {#each activities as activity}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <ion-card on:click={() => goto(`activity-detail/${activity.id}`)}>
        <ion-img src="{activity.cropped}"></ion-img>
        <ion-card-header>
          <ion-card-title>{activity.name}</ion-card-title>
        </ion-card-header>
      </ion-card>
    {/each}
  {/if}
</ion-content>