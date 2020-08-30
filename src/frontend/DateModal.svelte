<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import Modal from './Modal.svelte';

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9;
    width: 80%;
    max-width: 400px;
    min-width: 200px;
    transform: translate(-50%, -50%);
    border-radius: 0.2em;

    .btn-close {
      display: block;
      width: 100%;
      font-size: 18px;
      text-align: left;
      margin: 0 auto 20px;
      padding: 15px 20px 15px 50px;
      border-radius: 5px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position: 15px 50%;
      box-shadow: 4px 6px 10px 2px rgba(0, 0, 0, 0.5);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 411px) {
    .modal {
      .btn-close {
        font-size: 14px;
      }
    }
  }
</style>

<Modal on:close>
  <div class="modal" slot="modal">
    <button
      class="btn-close"
      on:click|preventDefault={() => dispatch('close')}>
      닫기
    </button>
  </div>
</Modal>
