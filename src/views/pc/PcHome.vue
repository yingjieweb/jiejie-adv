<template>
  <div class="pc">
    <div class="header">
      <span>24小时热线电话，199-4945-2059</span>
    </div>
    <div class="carousel">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">宣传图{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <img src="../../assets/images/adv1.jpg" alt="">
      <img src="../../assets/images/adv2.jpg" alt="">
    </div>
    <div class="footer">
      <span>企业名称等信息</span>
      <span>©copyright</span>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "PcHome"
  }
</script>

<style lang="scss" scoped>
  .pc {
    .header {
      height: 45px;
      text-align: center;
      background-color: orange;
      color: white;

      span {
        font-size: 20px;
        font-weight: 600;
        line-height: 45px;
      }
    }

    .carousel {
      text-align: center;

      ::v-deep .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      ::v-deep .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      ::v-deep .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }

    .main {
      width: 1200px;
      margin: 0 auto;
    }

    .footer {
      height: 200px;
      text-align: center;
      background-color: slategray;

      span {
        color: white;
        font-size: 30px;
        line-height: 200px;
      }
    }
  }
</style>
