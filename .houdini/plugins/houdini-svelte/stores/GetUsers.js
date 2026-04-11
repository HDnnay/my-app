import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/GetUsers'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class GetUsersStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "GetUsersStore",
			variables: false,
		})
	}
}

export async function load_GetUsers(params) {
  await initClient()

	const store = new GetUsersStore()

	await store.fetch(params)

	return {
		GetUsers: store,
	}
}
