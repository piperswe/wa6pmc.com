<script type="ts" context="module">
	import { sortedByTimestamp as contacts, contactToString } from '$lib/contacts';
	import { reverse } from '$lib/generators';

	export const prerender = true;
</script>

<h1>WA6PMC</h1>
<h2>Contacts</h2>
<ul>
	<!-- TODO: use the iterator directly eventually once Svelte supports it -->
	{#each [...reverse(contacts())] as contact}
		<li><a href="/contacts/{contact.id}">{contactToString(contact)}</a></li>
	{/each}
</ul>
