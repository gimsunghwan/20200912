<script>
  import { onMount } from 'svelte';
  import { thirdPartyContext } from './store';

  onMount(() => {
    loadKakao();
    loadFacebook();
    loadGoogle();
    loadNaver();
    loadKakaoMap();
    loadTwitter();
  });

  const asyncLoadScript = (url, onLoad) => {
    const tag = document.createElement('script');
    tag.src = url;
    tag.async = true;
    tag.defer = true;
    tag.onload = onLoad;
    document.body.appendChild(tag);
  };

  const loadKakao = () => {
    const url = '//developers.kakao.com/sdk/js/kakao.min.js';
    const appKey = 'd7fe6f4c257957d5c22fb9206c066beb';
    asyncLoadScript(url, () => {
      Kakao.init(appKey);
      thirdPartyContext.set({
        ...$thirdPartyContext,
        kakao: {
          ready: true,
        },
      });
    });
  };

  const loadFacebook = () => {
    const url = 'https://connect.facebook.net/ko_KR/sdk.js';
    const appId = '570597310274608';
    asyncLoadScript(url, () => {
      FB.init({
        appId,
        cookie: true,
        xfbml: true,
        version: 'v3.3',
      });
      thirdPartyContext.set({
        ...$thirdPartyContext,
        facebook: {
          ready: true,
        },
      });
    });
  };

  const loadNaver = () => {
    const url = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';
    const clientId = 'PtfLAAqT_IJKJuEc8y7g';
    asyncLoadScript(url, () => {
      var naverLogin = new naver.LoginWithNaverId({
        clientId: clientId,
        callbackUrl: `${window.location.protocol}//${window.location.hostname +
          (location.port == '' || location.port == undefined
            ? ''
            : ':' + location.port)}/naverCallback`,
        isPopup: false,
      });
      naverLogin.init();
      thirdPartyContext.set({
        ...$thirdPartyContext,
        naver: {
          ready: true,
          authorizeUrl: naverLogin.generateAuthorizeUrl(),
        },
      });
    });
  };

  const loadGoogle = () => {
    const url = 'https://apis.google.com/js/platform.js';
    const clientId =
      '200662672723-dkq11vbhlqvq3lc1jo39l17fmdspgrj8.apps.googleusercontent.com';
    asyncLoadScript(url, () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: clientId,
        });
        thirdPartyContext.set({
          ...$thirdPartyContext,
          google: {
            ready: true,
          },
        });
      });
    });
  };

  const loadKakaoMap = () => {
    const appKey = 'd7fe6f4c257957d5c22fb9206c066beb';
    const url = `//dapi.kakao.com/v2/maps/sdk.js?appKey=${appKey}&autoload=false`;
    asyncLoadScript(url, () => {
      kakao.maps.load(() => {
        thirdPartyContext.set({
          ...$thirdPartyContext,
          kakaoMap: {
            ready: true,
          },
        });
      });
    });
  };

  const loadTwitter = () => {
    const url = 'https://platform.twitter.com/widgets.js';
    asyncLoadScript(url, () => {
      thirdPartyContext.set({
        ...$thirdPartyContext,
        twitter: {
          ready: true,
        },
      });
    });
  };
</script>
