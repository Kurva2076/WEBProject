<template>
<div class="main-function">
<div class="container content_function" style="margin:0px;">
  <div class="row " style="margin-bottom:50px;">
    <h2 class="title-function">Наши профессиональные разработчики выполняют быстро любые задачи</h2>
    <div class="row list_function">
      <div class ="col-xs-6 col-md-3 blocks" >
        <div class="top_content">
          <div class="icon">
            <img  src="../assets/img/competency-20.svg"/>
          </div>
        </div>
        <div class="bottom_title">от 1ч</div>
        <div class="bottom_content"> Настройка события GA<br>
          в интернет-магазине
        </div>
      </div>
      <div class ="col-xs-6 col-md-3  blocks"  >
        <div class="top_content">
          <div class="icon">
            <img  src="../assets/img/competency-21.svg"/>
          </div>
        </div>
        <div class="bottom_title">от 20ч</div>
        <div class="bottom_content">
          Разработка мобильной<br>
          версии сайта
        </div>
      </div>
      <div class ="col-xs-6 col-md-3 blocks"  >
        <div class="top_content">
          <div class="icon">
            <img  src="../assets/img/competency-22.svg"/>
          </div>
        </div>
        <div class="bottom_title">от 8ч</div>
        <div class="bottom_content">
          Интеграция<br>
          Модуля оплаты
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
.title-function{
  font-size: 27px;
  padding:100px 0px 25px 0px;
  font-weight: 700;
  line-height: 25px;
  color: #050c33;
}
.under_title{
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
  color:#4f5a73;
}
.list_function{
  display:flex;
  flex-wrap:wrap;
}
.bottom_title{
  font-size: 27px;
  color: #050c33;
  font-weight: 700;
  line-height: 25px;
  float: inherit;
  text-align: justify;
  word-wrap: break-word;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 201px;
}
.bottom_content{
  color:#4f5a73;
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
  float: inherit;
  text-align: justify;
  margin-bottom:30px;
  word-wrap: break-word;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 201px;
}
.top_content{
  text-align:center;
  margin-bottom:20px;
}
.icon{
  position:relative;
  display:inline-block;
}
.icon::before{
  display:block;
  height:71px;
  width:114px;
  top:15px;
  left:-55px;
  position:absolute;
  background:url("../assets/img/icon-bg.svg");
  content:"";
  z-index:-1;
}
.blocks{
  width:50%!important;
}
@media(min-width:768px){
  .blocks{
    width:25%!important;
  }
  .title-function{
    font-size: 33px;
    line-height: 32px;
    padding-top:110px;
    margin-left:20px
  }
  .under_title{
    font-size: 19px;
    line-height: 25px;
    margin-left:20px;
  }
  .bottom_content{
    margin-left:20px;
    width:fit-content;
    word-spacing:20px;
    word-wrap:normal;
    text-align: left;
  }
  .top_content{
    margin-left:20px;
  }
}
@media(min-width:992px) {
  .title-function {
    font-size: 37px;
    line-height: 35px;
  }
}
</style>