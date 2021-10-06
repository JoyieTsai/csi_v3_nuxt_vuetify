<template>
    <div>
        <div class="wrapper" @mouseover="imageEffect">
            <div class="card">
                <div class="card__year">20<br />16</div>
                <div class="card__cometOuter">
                    <div class="card__comet"></div>
                    <div class="card__comet card__comet--second"></div>
                </div>
                <div class="card__circle"></div>
                <div class="card__smallCircle"></div>
                <div class="card__orangeShine"></div>
                <div class="card__greenShine"></div>
                <div class="card__thankyou">thank<br />you!</div>
                <div class="card__outer-year">
                    <span>2</span>
                    <span>0</span>
                    <span>1</span>
                    <span>7</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        imageEffect() {
            const $circle = document.querySelector('.card__circle')
            const $smallCircle = document.querySelector('.card__smallCircle')
            const $year = document.querySelector('.card__year')
            const $card = document.querySelector('.card')
            const $cardOrangeShine = document.querySelector('.card__orangeShine')
            const $cardThankYou = document.querySelector('.card__thankyou')
            const $cardComet = document.querySelector('.card__cometOuter')

            const generateTranslate = (el, e, value) => {
                el.style.transform = `translate(${e.clientX * value}px, ${e.clientY * value
                    }px)`
            }
            // http://stackoverflow.com/a/1480137
            const cumulativeOffset = (element) => {
                let top = 0
                let left = 0
                do {
                    top += element.offsetTop || 0
                    left += element.offsetLeft || 0
                    element = element.offsetParent
                } while (element)

                return {
                    top,
                    left,
                }
            }
            const e = window.event
            const x = ((e.pageX - cumulativeOffset($card).left - 350 / 2) * -1) / 100
            const y = ((e.pageY - cumulativeOffset($card).top - 350 / 2) * -1) / 100

            const matrix = [
                [1, 0, 0, -x * 0.00005],
                [0, 1, 0, -y * 0.00005],
                [0, 0, 1, 1],
                [0, 0, 0, 1],
            ]

            generateTranslate($smallCircle, e, 0.03)
            generateTranslate($cardThankYou, e, 0.03)
            generateTranslate($cardOrangeShine, e, 0.5)
            generateTranslate($circle, e, 0.05)
            generateTranslate($year, e, 0.03)
            generateTranslate($cardComet, e, 0.05)

            $card.style.transform = `matrix3d(${matrix.toString()})`
        },
    },
}
</script>

<style lang="scss" scoped>
$outerYearSpacing: 35px;
$cardWidth: 655px;
$cardHeight: 342px;
.wrapper {
  position: absolute;
  margin: (-$cardHeight/2) 0 0 (-$cardWidth/2);
  left: 50%;
  top: 50%;
  height: $cardHeight;
  width: $cardWidth;
}

.card {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/2017_bg.png);
  background-size: cover;
  width: $cardWidth;
  height: $cardHeight;
  border-radius: 5px;
  position: absolute;
  box-shadow: -20px 30px 116px 0 rgba(92, 15, 15, 0.54);
  overflow: hidden;
  z-index: 4;
  &__orangeShine,
  &__greenShine {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__orangeShine {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/orange_shine.png);
    right: -150px;
    top: -90px;
    bottom: 50px;
    z-index: 2;
    width: 570px;
    height: 500px;
  }
  &__greenShine {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/green_shine.png);
    left: 20%;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 400px;
  }
  &__year {
    font-family: 'Oswald', sans-serif;
    text-align: center;
    color: #fff;
    font-size: 110px;
    line-height: 110px;
    padding: 55px 0;
    font-weight: 100;
    position: relative;
    z-index: 2;
  }
  &__thankyou {
    font-family: 'Oswald', sans-serif;
    position: absolute;
    text-transform: uppercase;
    font-weight: 100;
    left: 33%;
    bottom: 20%;
    z-index: 2;
    color: #fff;
    letter-spacing: 5px;
    line-height: 17px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
  &__circle,
  &__smallCircle {
    position: absolute;
    border-radius: 100%;
    background-image: linear-gradient(-239deg, #3b4576 0%, #242a48 59%);
    box-shadow: -10px -15px 90px 0 #191c41;
    z-index: 2;
  }
  &__circle {
    right: 68px;
    bottom: 34px;
    width: 230px;
    height: 230px;
  }
  &__smallCircle {
    right: 40%;
    top: -7%;
    width: 50px;
    height: 50px;
  }
  &__outer-year {
    font-family: 'Orbitron';
    span {
      position: absolute;
      color: #fff;
      font-size: 16px;
      z-index: 4;
      &:nth-child(1),
      &:nth-child(4) {
        &:after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          border-bottom: 2px solid #fff;
        }
      }
      &:nth-child(1) {
        top: $outerYearSpacing;
        left: $outerYearSpacing;
      }
      &:nth-child(2) {
        left: none;
        top: $outerYearSpacing;
        right: $outerYearSpacing;
      }
      &:nth-child(3) {
        top: none;
        bottom: $outerYearSpacing;
        left: $outerYearSpacing;
      }
      &:nth-child(4) {
        top: none;
        left: none;
        right: $outerYearSpacing;
        bottom: $outerYearSpacing;
      }
    }
  }
  &__comet {
    position: relative;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 100%;
    &Outer {
      position: absolute;
      top: 30%;
      left: 25%;
    }
    &--second {
      right: -30px;
      top: -15px;
      transform: scale(0.6);
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.2) 27%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 20px;
      transform: rotate(-45deg);
    }
    &:before {
      width: 18px;
      height: 70px;
      transform-origin: -2px 13px;
    }
    &:after {
      width: 12px;
      height: 80px;
      transform-origin: 0px 8px;
    }
  }
}

.source {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -30px;
  opacity: 0.5;
  font-size: 12px;
  a {
    color: #000;
  }
}
</style>
