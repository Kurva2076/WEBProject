<script xml="http://www.w3.org/1999/html">
var i;
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for(i=0;i<details.length;i++) {
    if (details[i].tagName !== "DETAILS" || !details[i].hasAttribute('open') || event.target === details[i]) continue;
    details[i].removeAttribute("open");
  }
}
</script>

<template>
  <div class = "container1">FAQ</div>
  <div class="container2"></div>
  <details open tabindex="1">
    <summary><span class = "number">1.</span>Кто непосредственно занимается поддержкой?</summary>
    <p>Сайты поддерживают штатные сотрудники ООО «Инитлаб», г. Краснодар,
      прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора.</p>
  </details>
  <details tabindex="2">
    <summary><span class = "number">2.</span>Как организована работа поддержки?</summary>
    <p><br>Клиент выбирает один из тарифов и делает предоплату. Все заявки на работы по сайту заводятся в нашу систему Service desk.<br>
      В течение времени реакции по тарифу закрепленный за проектом специалист приступает к выполнению заявки, фиксирует время,
      потраченное на выполнение заявки и закрывает заявку по окончанию работы.
      Клиент может посмотреть все заявки в работе и отработанные часы в своем кабинете через веб-интерфейс.</p>
    </details>
    <details tabindex="3">
    <summary><span class = "number">3.</span>Что происходит, когда отработаны все предоплаченные часы за месяц?</summary>
    <p>Мы уведомляем Клиента, о том, что последующие заявки в этом месяце будут выполняться с доплатой согласно тарифу либо будут перенесены по срокам на следующий месяц.
      В конце месяца, в котором были заявки с доплатой, клиентам отправляется счет на доплату по факту выполненных работ сверх предоплаты тарифного плана.</p>
  </details>
  <details tabindex="4">
    <summary><span class = "number">4.</span>Что происходит, когда не отработаны все предоплаченные часы за месяц?</summary>
    <p>Предоплата не переносится на следующий месяц и деньги не возвращаются.
      Для продолжения поддержки сайта необходимо оплатить предоплату согласно выбранному тарифу за следующий месяц.</p>
  </details>
  <details  tabindex="5">
    <summary><span class = "number">5.</span>Как происходит оценка и согласование планируемого времени на выполнение заявок?</summary>
    <p>Заявки, выполнение которых укладывается в оставшееся предоплаченное время, по умолчанию не оцениваются и время не согласовывается, мы стараемся сэкономить время и быстро выполнить работу.
      Если видим, что задача не укладывается в предоплаченное время, то делаем примерную оценку по времени и согласовываем оценку трудоемкости с Клиентом.
      Клиент может явно попросить предварительно оценить работу по времени и согласовать трудоемкость, направив заявку с припиской в теме письма «Оценить работу».
      В этом случае время на оценку также оплачивается согласно тарифу поддержки.
      Если время фактического выполнения превышает заранее согласованное, то уточняем оценку, договариваемся о возможной доплате и переносе сроков по задаче.
      На наше усмотрение большие задачи, трудоемкость которых мы можем заранее оценить, например, разработка отдельных модулей или самостоятельных разделов сайта по подробному техническому заданию,
      могут быть вынесены из поддержки в отдельный проект на договорных условиях.
    </p>
  </details>
  <details tabindex="6">
    <summary><span class = "number">6.</span>Сколько программистов выделяется на проект?</summary>
    <p>1-2 человека. За каждым проектом закрепляется один ответственный специалист, через которого проходят все заявки. Все заявки становятся в очередь к ответственному в порядке их поступления в Helpdesk.
      Возможно привлечение дополнительных штатных специалистов в поддержку проекта в случаях, когда:</p>
      <li>объем заявок стабильно большой и ответственный не успевает выполнять задачи;</li>
      <li>ответственный не может начать работу по заявке в срок (заболел, ушел в отпуск);</li>
      <li>специфика задачи такова, что кто-то в команде сделает эту работу существенно быстрее.</li>
  </details>
  <details tabindex="8">
    <summary><span class = "number">7.</span>Как подать заявку на внесение изменений на сайте?</summary>
    <p>Для подачи заявки на внесение изменений на сайте необходимо написать письмо на email поддержки с указанием в теме письма домена сайта и подробным описанием вносимых изменений.</p>
  </details>
  <details tabindex="8">
    <summary><span class = "number">8.</span>Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач по администрированию?</summary>
    <p>Для любых задач по администрированию необходимо написать письмо на email поддержки с указанием домена сайта и описанием задачи.</p>
  </details>
  <details tabindex="9">
    <summary><span class = "number">9.</span>В течение какого времени начинается работа по заявке?</summary>
    <p>Время реакции зависит типа заявки и от выбранного тарифного плана. Время реакции на сбои, обнаруживаемые системой мониторинга, от 2-х часов в рабочее время.
      Время реакции на заявки по доработке сайта от 24-х часов в рабочее время. Время реакции может быть более гибко определено в SLA.
    </p>
  </details>
  <details tabindex="10">
    <summary><span class = "number">10.</span>В какое время работает поддержка?</summary>
    <p>Предоплата не переносится на следующий месяц и деньги не возвращаются.
      Для продолжения поддержки сайта необходимо оплатить предоплату согласно выбранному тарифу за следующий месяц.</p>
  </details>
  <details tabindex="11">
    <summary><span class = "number">11.</span>Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей?</summary>
    <p>Обновление безопасности в рамках одной ветки Drupal делается в режиме поддержки на всех тарифных планах.
      Обновление, связанное с переходом на следующую ветку Drupal,
      например апгрейд с 6.х на 7.х, лучше делать в рамках отдельного проекта, стоимость и сроки которого мы можем предложить после проведения аудита апгрейда.
      Аудит апгрейда включает в себя анализ путей миграции и трудоемкости обновления для всех модулей,
      блоков кода, Views, тем оформления, стоит от 6500 рублей и, как правило, занимает 1-3 дня, в зависимости от размера сайта.
    </p>
  </details>
  <details tabindex="12">
    <summary><span class = "number">12.</span>Можно ли пообщаться со специалистом голосом или в мессенджере?</summary>
    <p>Для этого нужно написать заявку на консультацию на email поддержки и сообщить удобное время и контактные данные.</p>
  </details>
</template>

<style scoped lang="scss">
body{background: #ffffff;}
@font-face {
  font-family: "Montserrat-Bold";
  src: url('../assets/fonts/Montserrat/Montserrat-Bold.ttf') format("truetype");
}
details{
  font-family: "Montserrat-Bold", system-ui !important;
  margin: auto;
  font-family: sans-serif;
  display:block;
  background: #fff;
  width:400px;
  overflow:hidden;
  width: 1000px;
}
.container1{
  font-family: "Montserrat-Bold", system-ui !important;
  display: flex;
  justify-content: center;
  font-size: 50px;
  height: 100px;
}
.container2{
  display: flex;
  justify-content: center;
  font-size: 50px;
}
.number {
  font-family: "Montserrat-Bold", system-ui !important;
  color: grey;
}
summary::-webkit-details-marker{display:none;}
summary::-moz-list-bullet{list-style-type:none;}
summary::marker{display:none;}
summary {
  font-family: "Montserrat-Bold", system-ui !important;
  width: 1000px;
  display:block;
  padding: .3rem 1rem .3rem .9rem;
  border-bottom: 1px solid #e2e8f0;
  font-size:  20px;
  cursor: pointer;
  position: relative;
}
summary:before {
  width: 1000px;
  top: .4em;
  right: .3em;
  color: transparent;
  width: 1em;
  height: 1em;
  content: "";
  position: absolute;
  color: black;
}
details[open] > summary:before {
  transition: all 1s ease;
}
summary ~ * {
  padding: 0 1em 10px 1.4em;
  color: black;
}
summary:focus {
  outline:none;
}
details:focus-within{
  border:solid orangered;
  color: orangered;
}
@media(min-width:480px){
  .container2{
    height: 100%;
  }
  details{
    font-size: 25px;
    height: auto;
  }
  summary{
    font-size: 31px;
    height: auto;
  }
}
@media(max-width:479px){
  .container2{
    height: 100%;
  }
  details{
    font-size: 30px;
    height: auto;
  }
  summary{
    font-size: 36px;
    height: auto;
  }
}

@media(min-width:768px){
  .container2{
    margin: 9px;
    padding: 15px;
    height: 100%;
  }
  details{
    font-size: 20px;
    height: auto;
  }
  summary{
    font-size: 26px;
    height: auto;
  }
}
@media(min-width:992px){
  .container2{
    margin: 11px;
    padding: 15px;
  }
  details{
    font-size: 15px;
    height: auto;
  }
  summary{
    font-size: 21px;
    height: auto;
  }
}
</style>