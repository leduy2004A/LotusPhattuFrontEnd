<template>
  <div class="ContentModal">
    <div class="header-modal">
      <div class="title-modal-phattu d-flex justify-space-between align-center">
        <h4 class="title-modal">Thông tin chùa</h4>

        <v-btn icon size="small" @click="offModal">
          <v-icon>mdi-xmpp</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="all-input-modal">
      <v-container>
        <v-row justify="start">
          <v-col cols="6">
            <v-sheet>
              <p>Tên chùa</p>
              <input
                type="text"
                class="input-modal"
                v-model="chuadata.tenchua"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Địa chỉ</p>
              <input
                type="text"
                class="input-modal"
                v-model="chuadata.diachi"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Ngày thành lập</p>
              <input
                type="Date"
                class="input-modal"
                v-model="chuadata.ngaythanhlap"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Ngày cấp nhập</p>
              <input
                type="Date"
                class="input-modal"
                v-model="chuadata.capnhat"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Trụ trì</p>
              <input
                type="Text"
                class="input-modal"
                v-model="chuadata.trutri"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-btn class="bg-primary nut-gui mx-auto" width="100" @click="adddata()">
        <input type="submit" />
      </v-btn>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("chua");
import Swal from "sweetalert2";
export default {
  data() {
    return {
      chuadata: {
        capnhat: "",
        tenchua: "",
        ngaythanhlap: "",
        trutri: "",
        diachi: "",
        chuaid: "",
      },
    };
  },
  props: {
    chuaid: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      chua: (state) => state.chuas,
    }),
  },
  methods: {
    offModal() {
      this.$emit("offModal");
    },
    adddata() {
      if (this.chuadata.chuaid !== "") {
        
            this.$store.dispatch("chua/suachua", this.chuadata);
            this.offModal();
          Swal.fire({
          icon: "success",
          title: "Sửa chùa thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        }
       else {
        this.chuadata.chuaid = null;
        this.$store.dispatch("chua/themchua", this.chuadata);
        this.offModal();
        Swal.fire({
          icon: "success",
          title: "Thêm chùa thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    formatDate(dateString) {
      const dateObject = new Date(dateString);
      const year = dateObject.getFullYear();
      let month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Đảm bảo tháng có 2 chữ số
      let day = dateObject.getDate().toString().padStart(2, "0"); // Đảm bảo ngày có 2 chữ số
      return `${year}-${month}-${day}`;
    },

  },
  created() {
    for (let i=0;i<=this.chua.length-1;i++) {
      if (this.chua[i].chuaid === this.chuaid) {
        const { capnhat, tenchua, ngaythanhlap, trutri, diachi } =
          this.chua[i];
        this.chuadata.tenchua = tenchua;
        this.chuadata.capnhat = this.formatDate(capnhat);
        this.chuadata.ngaythanhlap = this.formatDate(ngaythanhlap);
        this.chuadata.trutri = trutri;
        this.chuadata.diachi = diachi;
        this.chuadata.chuaid = this.chuaid;
      }
    }
  },
};
</script>

<style scoped>
.addimage {
  width: 150px;
}
.input-file {
  width: 100px;
  height: 20px;
}
.input-modal {
  border: 1px solid #d9d9d9;
  width: 90%;
  margin-left: -15px;
  padding-left: 10px;
  border-radius: 5px;
}
.nut-gui {
  display: block;
}
.title-modal-phattu {
  width: 100%;
}
</style>
