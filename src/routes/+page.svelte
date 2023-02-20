<script lang="ts">
  import { goto } from "$app/navigation";

  let email: string = "";
  let password: string = "";

  const handleSubmit = () => {
    const DATA = {
      email,
      password
    }

    goto('/tabs/home');
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <ion-card-content>
      <form on:submit|preventDefault={handleSubmit}>
        <ion-item>
          <ion-label>Email</ion-label>
          <ion-input value={email} on:ionChange={(e) => email = e.target.value} name="email" type="email"></ion-input>
        </ion-item>  
        
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input value={password} on:ionChange={(e) => password = e.target.value} type="password" name="password"></ion-input>
        </ion-item>

        <ion-button type="submit">
          Login
        </ion-button>
      </form>
    </ion-card-content>
  </ion-card>
</ion-content>
  