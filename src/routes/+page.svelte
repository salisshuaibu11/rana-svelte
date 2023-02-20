<script lang="ts">
  let email: string = "";
  let password: string = "";

  const handleSubmit = () => {
    const DATA = {
      email,
      password
    }

    console.log(DATA);
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
          <ion-input value={email} name="email" type="email"></ion-input>
        </ion-item>  
        
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input value={password} type="password" name="password"></ion-input>
        </ion-item>

        <ion-button type="submit">
          Login
        </ion-button>
      </form>
    </ion-card-content>
  </ion-card>
</ion-content>
  