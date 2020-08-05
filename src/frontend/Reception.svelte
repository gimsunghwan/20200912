<script>
  import { onMount } from 'svelte';
  import { thirdPartyContext } from './store';

  const tmapApiKey = 'l7xx61efedce3b574b4cb1c880c051da7a66';
  const lat = 35.239037;
  const lng = 128.657668;
  let map;

  $: if ($thirdPartyContext.kakaoMap.ready) {
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 4,
      draggable: true,
    };
    var re_map = new kakao.maps.Map(map, options);
    var re_marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });
    re_marker.setMap(re_map);
    re_map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }

  function handleResize(event) {
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 4,
      draggable: true,
    };
    var re_map = new kakao.maps.Map(map, options);
    var re_marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });
    re_marker.setMap(re_map);
    re_map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }

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
  .reception-wrap {
    padding: 42px 20px;
    .info-reception {
      line-height: 2;
      > em {
        font-size: 16px;
      }
    }
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
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;

    .info-text {
      font-size: 16px;
      line-height: 1.5;
      padding: 42px 20px;
    }

    .info-hall {
      font-size: 18px;
      line-height: 1.5;
      margin-right: 20px;
      > a {
        text-decoration: underline;
      }
    }

    .navi-wrap {
      display: flex;

      .tmap {
        width: 40px;
        height: 40px;
        cursor: pointer;
        margin-right: 15px;
      }

      .kakaonavi {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 411px) {
    .reception-wrap {
      .info-reception {
        > em {
          font-size: 14px;
        }
      }
    }

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
    <div class="reception-wrap">
      <p class="sub-title align-center">신랑측 피로연</p>
      <p class="info-reception align-center">
        <em>혼례에 앞서 작은 자리를 마련하였습니다.</em>
        <br />
        <em>부디 참석하시어 함께 축복해 주시면 감사하겠습니다.</em>
      </p>
      <p class="info-reception align-center">
        <strong>창원컨벤션센터 1층 하트인세코</strong>
        <br />
        2020. 09. 05. 토요일 오후 6시 30분 ~ 9시
      </p>

      <div class="section location-wrap">
        <div class="grid">
          <div class="map" bind:this={map} />

          <div class="location-wrap">
            <p class="info-hall align-left">
              경남 창원시 의창구 원이대로 362
              <br />
              <a href="tel:055-212-1133">055-212-1133</a>
            </p>
            <div class="navi-wrap">
              <div class="tmap" on:click={handleTmap}>
                <img src="/assets/images/ic-tmap.png" alt="tmap" />
              </div>
              <div class="kakaonavi" on:click={handleKakaoNavi}>
                <img src="/assets/images/ic-kakaonavi.png" alt="kakaonavi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
