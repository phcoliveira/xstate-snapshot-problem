<script>
  import { goto } from '$app/navigation';

  import { getStatusContext } from '$lib/status-provider';

  const { statusSend } = getStatusContext();

  async function activate() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => statusSend({ type: 'activate' }));
  }
</script>

{#await activate()}
  <p>Activating</p>
{:then}
  {#await goto('/activated')}
    <p>Going to activated</p>
  {/await}
{/await}
