<script>
  import { onMount } from 'svelte';
  import { thirdPartyContext } from './store';

  const tmapApiKey = 'l7xx61efedce3b574b4cb1c880c051da7a66';
  const lat = 37.5046955;
  const lng = 127.0412371;
  let map;

  $: if ($thirdPartyContext.kakaoMap.ready) {
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
      draggable: true,
      scrollwheel: true,
    };
    var _map = new kakao.maps.Map(map, options);
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });
    marker.setMap(_map);
    _map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }

  function handleResize(event) {
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
      draggable: true,
      scrollwheel: true,
    };
    var _map = new kakao.maps.Map(map, options);
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });
    marker.setMap(_map);
    _map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }

  const handleKakaoNavi = () => {
    Kakao.Navi.start({
      name: '마리드블랑',
      x: lng,
      y: lat,
      coordType: 'wgs84',
    });
  };

  const handleTmap = () => {
    window.open(`https://api2.sktelecom.com/tmap/app/routes?appKey=${tmapApiKey}
    &name=마리드블랑&lon=${lng}&lat=${lat}`);
  };
</script>

<style lang="scss">

  .comeon {
    background-color: #f7f7f7;
  }

  .contact-wrap {
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

  .ic {
    &-car {
      background-image: url('/assets/images/ic-car.png');
    }
    &-train {
      background-image: url('/assets/images/ic-train.png');
    }
    &-shtlbus {
      background-image: url('/assets/images/ic-shtlbus.png');
    }
    &-bus {
      background-image: url('/assets/images/ic-bus.png');
    }
    &-subway {
      background-image: url('/assets/images/ic-subway.png');
    }
    &-parking {
      background-image: url('/assets/images/ic-parking.png');
    }
    &-guitar {
      background-image: url('/assets/images/ic-guitar.png');
    }
  }

  .map-list {
    font-size: 18px;
    line-height: 1.5;
  }

  .map-bus-blue {
    color: blue;
    font-size: 18px;
    line-height: 1.5;
  }

  .map-bus-green {
    color: green;
    font-size: 18px;
    line-height: 1.5;
  }

  .location-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;

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
    }
  }
</style>

<svelte:window on:resize={handleResize}/>

<div id="id-map" class="section comeon">
  <div class="grid">
    <div class="contact-wrap">
      <p class="sub-title align-center">오시는 길</p>

      <div class="map" bind:this={map} />

      <div class="location-wrap">
        <p class="info-hall align-left">
          <strong>마리드블랑</strong>
          <br />
          서울 강남구 언주로 517 신라스테이 역삼 지하
          <br />
          <a href="tel:02-554-6000">02-554-6000</a>
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

      <ul>
        <li class="map-title map-title-first">
          <i class="map-icon ic-parking" />
          주차
        </li>
        <li class="map-list">
          - 신라스테이 역삼 B2~B5(2시간 무료 주차)
        </li>
        <li class="map-title">
          <i class="map-icon ic-subway" />
          지하철안내
        </li>
        <li class="map-list">
          - 2호선, 분당선 선릉역 6번 출구에서 도보로 10분
        </li>
        <li class="map-title">
          <i class="map-icon ic-shtlbus" />
          셔틀버스안내
        </li>
        <li class="map-list">
          - 선릉역 6번 출구에서 10분 간격 수시운행
        </li>
        <li class="map-title">
          <i class="map-icon ic-bus" />
          버스안내
        </li>
        <li class="map-list">
          - KT 강남지사 하차(마리드블랑 앞 정차)
        </li>
        <li class="map-bus-blue">
          &#9679 141, 242
        </li>
        <li class="map-bus-green">
          &#9679 3422
        </li>
        <li class="map-title">
          <i class="map-icon ic-guitar" />
          기타안내
        </li>
        <li class="map-list">- 식사 시간은 오후 1시 30분부터 3시 30분까지 입니다.</li>
      </ul>
    </div>
  </div>
</div>
