<script lang="ts">
    import {redirect} from "$sveltejs/kit";

    export function load() {
        redirect("/home");
    }

</script>
