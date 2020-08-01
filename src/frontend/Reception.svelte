<script>
  import { onMount } from 'svelte';
  import { thirdPartyContext } from './store';

  const tmapApiKey = 'l7xx61efedce3b574b4cb1c880c051da7a66';
  const lat = 35.239037;
  const lng = 128.657668;

  const handleKakaoNavi = () => {
    Kakao.Navi.start({
      name: '하트인세코',
      x: lng,
      y: lat,
      coordType: 'wgs84',
    });
  };

  const handleTmap = () => {
    window.open(`https://api2.sktelecom.com/tmap/app/routes?appKey=${tmapApiKey}
    &name=하트인세코&lon=${lng}&lat=${lat}`);
  };
</script>

<style lang="scss">
  .reception {
    padding: 42px 20px;
  }

  .map {
    width: 100%;
    height: 300px;
  }

  .map-title {
    vertical-align: middle;
    font-size: 18px;
    font-weight: bold;
    line-height: 2;
    margin-top: 10px;
    &-first {
      margin-top: 0;
    }
  }

  .map-icon {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .map-list {
    font-size: 18px;
    line-height: 1.5;
  }

  .location-wrap {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .info-hall {
      font-size: 18px;
      line-height: 2.0;
      > a {
        text-decoration: underline;
      }
    }

    .info-text {
      font-size: 16px;
      line-height: 1.5;
    }

    .navi-wrap {
      display: flex;

      .tmap {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 15px;
      }

      .kakaonavi {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 411px) {
    .map-title {
      font-size: 14px;
    }

    .map-list {
      font-size: 14px;
    }

    .location-wrap {
      .info-hall {
        font-size: 14px;
      }
      .info-text {
        font-size: 12px;
      }
    }
  }
</style>

<div id="id-reception" class="section">
  <div class="grid">
    <div class="reception">
      <p class="sub-title align-center">신랑측 피로연</p>
      <div class="location-wrap align-center">
        <p class="info-text align-center">
          혼례에 앞서 작은 자리를 마련하였습니다.
          <br />
          부디 참석하시어 함께 축복해 주시면 감사하겠습니다.
        </p>
      </div>
      <div class="location-wrap">
        <p class="info-hall align-center">
          2020년 9월 5일 토요일 오후 6시~9시
          <br />
          <strong>하트인세코</strong>
          <br />
          경남 창원시 의창구 원이대로 362 | <a href="tel:055-212-1133">055-212-1133</a>
        </p>
      </div>
    </div>
  </div>
</div>
