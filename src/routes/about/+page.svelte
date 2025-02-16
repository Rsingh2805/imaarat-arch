<script lang="ts">
    import sarthak from "$lib/assets/sarthak.jpeg";

</script>

<div class="w-full h-full overflow-scroll top-0 left-0 bg-black p-12">
    <div class="text-white">
        <h1 class="text-5xl md:text-8xl font-black text-center mb-8">Imaarat Architects</h1>
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div style="background-image: url('{sarthak}');"
                class="w-full md:w-1/2 h-[40vh] bg-center bg-cover rounded-3xl"></div>
                <div class="w-full md:w-1/2 text-justify mt-4 md:p-12 serif">
                    Delivering the best architectural services in Panipat, Haryana.
                    <br />
                    Lorem ipsum dolor sit amet, do magna Lorem ad exercitation elit Lorem eu pariatur et. Cupidatat quis et pariatur excepteur pariatur exercitation velit laborum consequat elit tempor non Lorem sint commodo id ut. Adipisicing cillum esse tempor voluptate veniam commodo laboris irure dolor id ad reprehenderit ad enim do labore irure sunt. Ut ea cupidatat cupidatat minim duis elit sint quis veniam nulla in. Laborum officia magna elit aute ipsum esse magna do qui. Magna esse sit duis. Ut pariatur quis est enim in dolor do anim labore exercitation nisi cillum aute. Dolor cillum aliqua irure fugiat proident adipisicing mollit eiusmod fugiat dolor nulla duis laborum tempor labore irure aliqua cupidatat enim. 
                </div>
        </div>
        <div class="text-center mt-8 bg-white text-black rounded-3xl p-6">
            <h3 class="font-black text-3xl mb-4 uppercase">Solutions</h3>
            <div class="flex flex-wrap justify-center">
                <!-- show 10 times -->
                 {#each new Array(10) as _, i}
                    <button class="m-2 px-4 md:px-8 py-2 bg-black text-white rounded uppercase serif">Interior Planning</button>
                {/each}
            </div>

        </div>
    </div>

</div>