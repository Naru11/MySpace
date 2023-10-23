<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card post">
                    <div class="card-body ">
                        {{ post.content }}
                        <button @click="delete_a_post(post.id)" v-if="is_me" type="button"
                            class="btn btn-danger btm-sm">删除</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            required: true,
        },
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props, context) {
        const store = useStore();
        const delete_a_post = post_id => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    post_id
                },
                headers: {
                    "Authorization": "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        context.emit("delete_a_post", post_id);
                    }
                }
            })
        }
        let is_me = computed(() => store.state.user.id === props.user.id);

        return {
            delete_a_post,
            is_me,
        }
    }
}

</script>

<style scoped>
.post {
    margin-top: 20px;
}

button {
    float: right;
}
</style>