import {fromPromise, setup} from 'xstate';

export const statusMachine = setup({}).createMachine({
	initial: 'inactive',
	states: {
		inactive: {
			on: {
				activate: {
					target: 'activated'
				}
			}
		},
		activated: {}
	}
})