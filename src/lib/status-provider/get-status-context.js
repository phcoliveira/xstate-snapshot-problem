import { getContext } from 'svelte'

import {statusMachineId} from './private/index'

export function getStatusContext() {
	return getContext(statusMachineId)
}