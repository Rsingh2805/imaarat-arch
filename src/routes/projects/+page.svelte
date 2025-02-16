<script lang="ts">
    import landing from "$lib/assets/landing.webp";
    import type { WheelEventHandler } from "svelte/elements";

    import { fade } from "svelte/transition";

    let element: HTMLElement | null = $state(null);

    let projects = [
        {
            name: "Aryan Hospital",
            location: "Panipat, Haryana",
            status: "Completed",
            year: "2023",
            description:
                "Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",
            images: [landing, landing, landing, landing, landing],
            tags: ["Hospital", "Commercial", "Public"],
        },
        {
            name: "Vihaan Hospital",
            location: "Panipat, Haryana",
            status: "Completed",
            year: "2023",
            description:
                "Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",
            images: [landing, landing, landing, landing, landing],
            tags: ["Hospital", "Commercial", "Public"],
        },
        {
            name: "Rihaan Hospital",
            location: "Panipat, Haryana",
            status: "Completed",
            year: "2023",
            description:
                "Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",
            images: [landing, landing, landing, landing, landing],
            tags: ["Hospital", "Commercial", "Public"],
        },
    ];

    let currIndex = $state(0);
    let visible = $state(true);

    let currentProject = $derived(projects[currIndex]);

    const scroll: WheelEventHandler<HTMLDivElement> = (e: WheelEvent) => {
        if (!element) return;
        // if already transitioning, return
        if (!visible) return;
        // if already at end of element, change currIndex
        const scrollAmount = e.deltaX + e.deltaY;
        if (
            scrollAmount + element.scrollLeft >=
            element.scrollWidth - element.clientWidth
        ) {
            increment();
        } else {
            element.scrollBy({
                left: scrollAmount * 30,
                behavior: "smooth",
            });
        }

        // cancel the event
        e.preventDefault();
    };

    const increment = () => {
        if (!element) return;
        visible = false;
        currIndex = (currIndex + 1) % projects.length;
        // move to the start
        element.scrollTo({
            left: 0,
        });
        setTimeout(() => {
            visible = true;
        }, 600);
    };
</script>

<!-- when the user scrolls vertically, capture the event -->
{#if visible}
    <div
        class="flex h-full w-full overflow-auto no-scrollbar items-center scroll-smooth snap-x snap-proximity"
        bind:this={element}
        onwheel={scroll}
        transition:fade={{
            duration: 300,
        }}
    >
        <!-- this will be a carousel, if you scroll, carousel should snap to the next image -->
        <!-- PAGE 1 - A full size landing with basic text -->
        <div
            class="relative bg-center bg-cover h-full w-full md:w-4/5 shrink-0"
            style="background-image: url('{currentProject.images[0]}');"
        >
            <div class="pb-1 absolute bottom-8 md:bottom-0 text-center w-full text-white">
                <div class="flex justify-center flex-wrap">
                    {#each currentProject.tags as tag}
                        <span
                            class="text-sm glass text-white rounded-xl px-6 py-1 uppercase serif mr-2 mb-2 md:mr-6"
                            >{tag}</span
                        >
                    {/each}
                </div>
                <h1 class="text-4xl md:text-[7rem] leading-none font-black">
                    {currentProject.name}
                </h1>
                <h3 class="text-2xl font-black">{currentProject.location}</h3>
            </div>
        </div>
        <div
            class="w-full md:w-1/5 serif text-sm uppercase p-4 shrink-0 snap-end"
        >
            <div>
                <div class="flex">
                    <span class="w-[6rem]">Name</span>
                    <span>{currentProject.name}</span>
                </div>
                <div class="flex">
                    <span class="w-[6rem]">Location</span>
                    <span>{currentProject.location}</span>
                </div>
                <div class="flex">
                    <span class="w-[6rem]">Status</span>
                    <span>{currentProject.status}</span>
                </div>
                <div class="flex">
                    <span class="w-[6rem]">Year</span>
                    <span>{currentProject.year}</span>
                </div>
            </div>
            <p class="mt-[10rem]">
                {currentProject.description}
            </p>
        </div>
        {#each currentProject.images as image}
            <div
                class="w-[75vw] md:w-[45vw] ml-10 h-[45vh] shrink-0 snap-end bg-center bg-cover"
                style="background-image: url('{image}');"
            ></div>
        {/each}
        <button
            class="w-[30vw] h-full flex flex-col justify-center bg-black text-white pl-8 pr-16 snap-end md:snap-none"
            onclick={increment}
        >
            Next Project
        </button>
    </div>
{/if}
