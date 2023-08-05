<template>
  <div class="ContentModal">
    <div class="header-modal">
      <div class="title-modal-phattu d-flex justify-space-between align-center">
        <h4 class="title-modal">Sửa đạo tràng</h4>

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
              <p>Nội dung</p>
              <input
                type="text"
                class="input-modal"
                v-model="daotrangthem.noidung"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Thời gian tổ chức</p>
              <input
                type="Date"
                class="input-modal"
                v-model="daotrangthem.thoigiantochuc"
              />
            </v-sheet>
          </v-col>
          <v-col cols="6">
            <v-sheet>
              <p>Nơi tổ chức</p>
              <input
                type="Text"
                class="input-modal"
                v-model="daotrangthem.noitochuc"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        class="bg-primary nut-gui mx-auto"
        width="100"
        @click="submitdaotrang(daotrangthem)"
      >
        Gửi
      </v-btn>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { suadaotrang } from "../apis/daotrang";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("daotrang");
export default {
  data() {
    return {
      daotrangthem: {
        noidung: "",
        thoigiantochuc: "",
        noitochuc: "",
        sothanhvienthamgia: 0,
        daotrangid: "",
      },
    };
  },
  props: {
    daotrangid: {
      type: Number,
    },
  },
  methods: {
    offModal() {
      this.$emit("offModal");
    },
    submitdaotrang(daotrangthem) {
      if (this.daotrangthem.daotrangid !== "") {
        this.$store.dispatch("daotrang/suadaotrang", daotrangthem);
        suadaotrang(this.daotrangthem);
        this.offModal();
        Swal.fire({
          icon: "success",
          title: "Sửa đạo tràng thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        this.daotrangthem.daotrangid = null;
        this.$store.dispatch("daotrang/themdaotrang", daotrangthem);
        this.offModal();
        Swal.fire({
          icon: "success",
          title: "Thêm đạo tràng thành công",
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
    for (let i = 0; i <= this.daotrang.length - 1; i++) {
      if (this.daotrang[i].daotrangid === this.daotrangid) {
        this.daotrangthem.noidung = this.daotrang[i].noidung;
        this.daotrangthem.noitochuc = this.daotrang[i].noitochuc;
        this.daotrangthem.thoigiantochuc = this.formatDate(
          this.daotrang[i].thoigiantochuc
        );
        this.daotrangthem.daotrangid = this.daotrangid;
      }
    }
  },
  computed: {
    ...mapState({
      daotrang: (state) => state.daotrangs,
    }),
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
