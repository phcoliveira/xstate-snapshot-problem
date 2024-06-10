import { useActor } from '@xstate/svelte';

import {statusMachine} from './status-machine'

export const statusMachineId = Symbol();

export function createStatusContext() {
	const {
		actorRef: statusActorRef,
		send: statusSend,
		snapshot: statusSnapshot,
	} = useActor(statusMachine);

	return {statusActorRef, statusSend, statusSnapshot};
}