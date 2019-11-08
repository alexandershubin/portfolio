var port = new Vue({
  el: ".portfolio",
  data: {
    portEl: [
      {img:"img/img.png", filter: "Graphics"},
      {img:"img/img_2.png", filter: "Web"},
      {img:"img/img_3.png", filter: "Marteting"},
      {img:"img/img_4.png", filter: "Photoshop"},
      {img:"img/img_5.png", filter: "Illustrator"}
    ],

    filterEl: []
  },
  methods: {
    sort (e) {
      const tabs = document.querySelectorAll(".tabs__item button");

      tabs.forEach(tab => {
        tab.classList.remove("active")
      });
      e.target.classList.add("active")
       this.filterEl = this.portEl.filter(function (item) {
        return item.filter == e.target.innerText
      })
    },
    allItems () {
      this.filterEl = this.portEl
    },
    adActive (e) {

    }
  },
  mounted () {
    this.allItems()
  }
})

//прямое вхождение строки