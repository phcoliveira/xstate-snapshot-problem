<script>
  import { useSelector } from '@xstate/svelte';
  import { goto } from '$app/navigation';
  import { getStatusContext } from '$lib/status-provider';

  const { statusActorRef, statusSnapshot } = getStatusContext();

  const isActivated = useSelector(statusActorRef, (snapshot) => {
    return snapshot.matches('activated');
  });
</script>

<!-- Using `$isActivated` will work -->
<!-- {#if $isActivated} -->

<!-- Using `$statusSnapshot` will NOT work -->
{#if $statusSnapshot.matches('activated')}
  <slot />
{:else}
  {#await goto('/activating')}
    <p>Going to activating</p>
  {/await}
{/if}
