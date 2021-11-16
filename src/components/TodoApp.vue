<template>
    <main class="antialiased min-h-screen bg-gray-100 dark:bg-gray-800 flex justify-center py-20">
        <div class="w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12">
            <div class="px-6 sm:px-10 py-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl sm:overflow-x-auto">
                <h1 class="mb-8 dark:text-white text-2xl font-bold text-center">Todo List Vue JS</h1>

                <div class="mb-5 mx-auto w-full sm:w-8/12 flex items-center relative">
                    <input type="text" v-model="task"
                        class="px-6 py-3 pr-16 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white w-full rounded-xl outline-none focus:ring-2 ring-gray-200 dark:ring-gray-500"
                        placeholder="Enter task !">
                    <button @click="addTask"
                        class="p-2 m-2  bg-teal-500 text-white rounded-xl shadow-lg focus:ring-2 ring-teal-100 dark:ring-teal-300 absolute right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
                
                <div v-if="tasks.length > 0" class="w-full overflow-x-auto">
                    <table class="mb-4 table-fixed w-96 sm:w-full">
                        <thead>
                            <tr>
                                <th class="w-72 sm:w-8/12 text-left column-style">Task</th>
                                <th class="w-40 sm:w-4/12 text-left column-style">Status</th>
                                <th class="w-20 column-style">#</th>
                                <th class="w-20 column-style">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(task, index) in tasks" :key="index" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="column-style">
                                    <span class="leading-relaxed" :class="{'line-through' : task.status === 'Finished'}">{{ task.task }}</span>
                                </td>
                                <td class="column-style">
                                    <span @click="changeStatus(index)"
                                        class="text-white text-sm rounded-xl cursor-pointer px-3 py-1" 
                                        :class="{
                                            'bg-rose-500' : task.status === 'To-do',
                                            'bg-amber-500' : task.status === 'Progress',
                                            'bg-teal-500' : task.status === 'Finished'
                                        }">
                                        {{ task.status }}
                                    </span>
                                </td>
                                <td class="column-style">
                                    <div @click="editTask(index)" class="cursor-pointer flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fill-rule="evenodd"
                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </td>
                                <td class="column-style">
                                    <div @click="deleteTask(index)" class="cursor-pointer flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rose-500"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center mb-4">
                        <span class="text-gray-400 text-sm">*click status to complete your task</span>
                    </div>
                </div>
                <div v-else class="flex justify-center">
                    <div class="py-2 w-80 text-center rounded-lg bg-rose-500 text-white">
                        No todo added
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                task: '',
                editedTask: null,
                availableStatus : ['To-do', 'Progress', 'Finished'],
                tasks: [{
                        task: 'I love you',
                        status: 'To-do'
                    },
                    {
                        task: 'Sorry :)',
                        status: 'To-do'
                    }
                ]
            }
        },
        methods: {
            addTask() {
                if(this.task === '') {
                    return false
                } else {
                    if (this.editedTask === null) {
                        this.tasks.push({
                        task: this.task,
                        status: 'To-do'
                    })
                    } else {
                        this.tasks[this.editedTask].task = this.task;
                    }
                }
                


                this.task = '';
            },
            deleteTask(index) {
                this.tasks.splice(index, 1)
            },
            editTask(index) {
                this.task = this.tasks[index].task;
                this.editedTask = index;
            },
            changeStatus(index) {
                let newIndex = this.availableStatus.indexOf(this.tasks[index].status);
                if(++newIndex > 2) newIndex = 0;
                this.tasks[index].status = this.availableStatus[newIndex];
            }
        },
    }
</script>

<style scoped>
    .column-style {
        @apply py-3 px-4 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-white;
    }
</style>