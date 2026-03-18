import type { PageLoad } from './$types';
import { GetUsersStore } from '$houdini';

export const load = (async (event) => {
    const store = new GetUsersStore();
    const { data } = await store.fetch({ event });
    console.log('Users:', data?.users);
    return { users: data?.users };
}) satisfies PageLoad;