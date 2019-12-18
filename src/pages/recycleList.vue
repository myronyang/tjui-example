<template>
  <div class="page-wrap">
    <tj-header title="RecycleList 滚动列表"></tj-header>
    <section style="height: 100%">
      <tj-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
        <template slot="item" slot-scope="{ data }">
          <tj-row
            flex
            class="mt_15 bd_b_1 pb_10 pt_10 padding_10"
            :gutter="15"
            @click="handleClick(data)"
          >
            <tj-col width="48px">
              <img width="100%" style="border-radius: 100%" :src="data.avatar">
            </tj-col>
            <tj-col class="bubble">
              <p class="f16 f_bold mb_10">{{ data.msg }}</p>
              <div class="gray">
                <time class="posted-date">{{ data.time }}</time>
              </div>
            </tj-col>
          </tj-row>
        </template>
      </tj-recycle-list>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 50,
      offset: 100
    };
  },
  methods: {
    onFetch() {
      let items = [];
      return new Promise(resolve => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 50; i++) {
            items.push({
              id: i,
              avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",
              msg: "name" + i,
              time: "Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)"
            });
          }
          resolve(items);
        }, 1000);
      });
    },
    handleClick(data) {
      console.log("Item:" + data);
    }
  }
};
</script>
