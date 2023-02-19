<script lang="ts">
  import {IonTabs} from "ionic-svelte";

  import { home, star, person} from "ionicons/icons";

  const myTabs = [
    {
      label: 'Home',
      icon: home,
      tab: 'home',
    },
    {
      label: 'Favorites',
      icon: star,
      tab: 'favorites',
    },
    {
      label: 'Profile',
      icon: person,
      tab: 'profile',
    }
  ];

  const logStuff = () => {
    console.log('id');
  }
</script>

<IonTabs slot="bottom" tabs={myTabs} ionTabsWillChange={logStuff} ionTabsDidChange={logStuff}>
  <slot />
</IonTabs>