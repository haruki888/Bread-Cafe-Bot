<script>
  document.addEventListener('DOMContentLoaded', () => {
                            //↑ ブラウザが HTML文書の構造を完全に読み込み、スクリプトや外部リソース（画像、スタイルシートなど）の読み込みが完了していなくても、DOMの構築が終わった段階で発火するイベント
    const [video1, video2] = document.querySelectorAll('.background-video');

    video1.onended = () => {
      video1.hidden = true;
      video2.hidden = false;
      video2.play();
    };

    video2.onended = () => {
      video2.hidden = true;
      video1.hidden = false;
      video1.play();
    };
  });
</script>
