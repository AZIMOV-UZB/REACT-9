import React , {memo} from 'react'
import rasm from "../../assets/image 34.png";
import foto from "../../assets/foto.svg";
import imag from "../../assets/foto-2.svg";

const Uslogi = () => {
  return (
    <div>
        <div>
<img className='w-full h-96' src={rasm} alt="foto" />
        </div>

        <div>
<p className='text-4xl mt-3 font-bold'>Акция!</p>
<p className='mt-4'>Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.</p>

<p className='mt-4'>Наше преимущество - фиксированная стоимость доставки по Беларуси. Такой приятной цены вы не найдете у транспортных компаний. </p>

<p className='mt-4'>Наше главное преимущество – работа сразу с двумя магазинами IKEA. Это дает большую вероятность того, что нужный вам товар будет в наличии.</p>

<p className='mt-4'>Наша задача – доставить заказ своевременно и без повреждений.</p>

<p className='mt-4 text-2xl font-bold'>Как мы работаем?</p>

<p className='mt-4'>Мы закупаем выбранные вами товары в магазинах IKEA. После того как они прибывают на наши склады, мы начинаем доставлять их вам.</p>

        </div>

        <div className='mt-5'>
            <img src={foto} alt="foto" />
        </div>

        <div className='mt-5'>
     <p className='mt-4 text-xl font-extrabold'>   Доставка по Минску и Минскому р-ну</p>

<p className='mt-4 font-medium'>Доставка по Минску осуществляется в течение 1-3 дней после поставки товаров на наш склад. За это время с вами связывается оператор и согласовывает комфортное для вас время получения заказа. В согласованный день курьер заранее уведомит о скором прибытии товара.</p> 

<p className='mt-4 font-medium'>Заказ будет доставлен в течение 1-5 рабочих дней после поставки товаров на наш склад. Вам позвонит оператор и согласует удобное для вас время. В день доставки курьер за час свяжется с вами и уведомит о точном времени прибытия товара.</p>

<p className='mt-4 text-xl font-extrabold'>Доставка по Беларуси </p>

<p className='mt-4 font-medium'>Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA. Поэтому точную информацию о наличии выкупленных товаров мы узнаем после разгрузки машины на нашем складе в Минске.  </p>

<p className='mt-4 font-medium'>Из-за отсутствия некоторых позиций итоговая сумма заказа может уменьшиться. Если сумма отсутствующих товаров в заказе превышает 4 000 рос. руб, то комиссия за заказ будет пересчитана в соответствии с тарифами, которые указаны в разделе "Оплата". </p>

<p className='mt-4 text-xl font-extrabold'>Если некоторых позиций не оказалось в наличии </p>

<p className='mt-4 font-medium'>Вы имеете право отказаться от какой-либо позиции в заказе, но при этом нами удерживается комиссия за доставку этого товара.</p>

<p className='mt-4 font-medium'>Вы можете это сделать в течение 12 часов после оформления заказа</p>

<p className='mt-4 font-medium'>Согласовывая доставку с оператором, вы обязуетесь ее принять. На каждую точку курьеру дается 10 мин. Если разгрузка не начинается в течение 5 мин с момента прибытия курьера к месту назначения, курьер следует дальше по маршруту. Все непринятые заказы отправляются на возврат в магазин IKEA. Чтобы получить непринятый заказ, вам необходимо еще раз его оформить на один из последующих рейсов. За нами остаётся право отказать вам в дальнейшем сотрудничестве..</p>

<p className='mt-4 font-medium'>В течение часа проверьте комплектацию согласно акту сдачи-приемки услуг, а также каждую позицию на видимые повреждения и брак.</p>
        </div>
        <div className='my-5'>
            <img src={imag} alt="foto" />
        </div>
    </div>
  )
}

export default memo(Uslogi)