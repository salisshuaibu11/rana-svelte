<script>
  import { page } from "$app/stores";

  const ID = $page.params.id;
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start" class="can-go-back">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-fab vertical="top" horizontal="end">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>

  <ion-fab-list side="bottom">
    
    <ion-fab-button>
      <ion-icon color="success" name="play"></ion-icon>
    </ion-fab-button>

    <ion-fab-button>
      <ion-icon color="dark" name="share"></ion-icon>
    </ion-fab-button>

    <ion-fab-button>
      <ion-icon color="danger" name="star"></ion-icon>
    </ion-fab-button>

  </ion-fab-list>
</ion-fab>