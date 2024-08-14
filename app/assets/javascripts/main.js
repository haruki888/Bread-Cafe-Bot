<script>
  document.addEventListener('DOMContentLoaded', () => {
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
