<script>
  import { onMount } from 'svelte';
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

  .account {
    > .flex {
      padding: 42px 20px;
      box-sizing: border-box;
      > div {
        width: 50%;
      }
    }

    .account-title {
      font-size: 18px;
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }

    .account-wrap {
      text-align: center;
      &.father {
        margin-bottom: 20px;
      }
      .name {
        display: block;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
        > em {
          font-size: 16px;
          font-weight: normal;
          margin-right: 5px;
        }
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

    .couple {
      .relation {
        font-size: 14px;
        > strong {
          font-size: 15px;
        }
      }
    }

    .account {
      .account-title {
        font-size: 15px;
      }
      .account-wrap {
        .name {
          font-size: 15px;
          > em {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

<div id="id-coronanotice" class="section">
  <div class="grid">
    <div class="reception-wrap">
      <p class="sub-title align-center">마음 전하실 곳</p>
      <p class="info-reception align-center">
        <em>어려운 시기를 보내고 있는 요즘,</em>
        <br />
        <em>온전히 잠잠해질 날이 언제일지
        <br />
        <em>누구도 예측하기 어렵기에</em>
        <br />
        <em>긴 고심끝에
        <br />
        <em>결혼식을 예정대로 진행하기로 결정했습니다.</em>
        <br />
        <em>결혼식 참석에 대한 부담은 갖지 마시고</em>
        <br />
        <em>멀리서나마 저희를 축복해 주시길 바랍니다.</em>
        <br />
        <em>참석은 어렵지만</em>
        <br />
        <em>축의를 보내시려는 분들을 위해</em>
        <br />
        <em>부득이 계좌번호를 기재하게 되어 죄송합니다.</em>
        <br />
        <em>새로운 출발을 축하해주시는 모든 분들께</em>
        <br />
        <em>진심으로 감사드리며
        <br />
        <em>항상 건강하시기를 기원드립니다.</em>
      </p>
    </div>
  </div>

  <div class="section account">
    <div class="grid flex">
      <!-- 신랑측 혼주 계좌번호 -->
      <div class="groom">
        <p class="account-title">신랑측</p>
        <div class="account-wrap father">
          <div>
            <span class="name">
              <em>예금주 : 김남걸</em>
              <br />
              <strong> 경남은행 548-21-0295780 </strong>
            </span>
          </div>
        </div>
      </div>
      <!-- 신부측 혼주 계좌번호 -->
      <div class="bride">
        <p class="account-title">신부측</p>
        <div class="account-wrap father">
          <div>
            <span class="name">
              <em>예금주 : 이수송</em>
              <br />
              <strong> 국민은행 080-24-0120-369 </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 혼주 계좌번호 끝 -->
  </div>
</div>
