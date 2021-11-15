<template>
    <main class="antialiased h-screen bg-gray-100 flex justify-center items-center">
        <div class="lg:w-6/12 sm:w-8/12">
            <div class="px-10 py-6 bg-white shadow-lg rounded-xl">
                <h1 class="mb-8 text-2xl font-bold text-center">Todo List Vue JS</h1>

                <div class="mb-5 mx-auto w-8/12 flex items-center relative">
                    <input type="text"
                        class="px-6 py-3 bg-gray-100 text-gray-800 w-full rounded-xl outline-none focus:ring-2 ring-gray-200"
                        placeholder="Enter task !">
                    <button
                        class="p-2 m-2  bg-teal-500 text-white rounded-xl shadow-lg focus:ring-2 ring-teal-100 absolute right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>

                <div class="w-full overflow-x-auto">
                    <table class="table-fixed shadow">
                        <thead>
                            <tr>
                                <th class="w-3/4 text-left border border-gray-300 py-3 px-4 text-gray-700">Task</th>
                                <th class="w-1/4 text-left border border-gray-300 py-3 px-4 text-gray-700">Status</th>
                                <th class="border border-gray-300 py-3 px-4 text-gray-700">#</th>
                                <th class="border border-gray-300 py-3 px-4 text-gray-700">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 py-3 px-4 text-gray-700">Hello World from canada</td>
                                <td class="border border-gray-300 py-3 px-4 text-gray-700">To do</td>
                                <td class="border border-gray-300 py-3 px-4 text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                                <td class="border border-gray-300 py-3 px-4 text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'HelloWorld',
    }
</script>

<style scoped>

</style>