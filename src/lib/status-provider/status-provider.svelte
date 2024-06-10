<script>
  import { setContext } from 'svelte';

  import { createStatusContext, statusMachineId } from './private/index';

  const statusContext = createStatusContext();
  setContext(statusMachineId, statusContext);
</script>

<slot />
