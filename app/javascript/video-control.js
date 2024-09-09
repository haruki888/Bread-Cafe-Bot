document.addEventListener("DOMContentLoaded", function() {
  var video1 = document.getElementById('video1');
  var video2 = document.getElementById('video2');

  // video1が終了したらvideo2を再生
  video1.addEventListener('ended', function() {
      video1.style.display = 'none';  // video1を非表示
      video2.style.display = 'block'; // video2を表示
      video2.play(); // video2を再生
  });

  // video2が終了したらvideo1を再生
  video2.addEventListener('ended', function() {
      video2.style.display = 'none';  // video2を非表示
      video1.style.display = 'block'; // video1を表示
      video1.play(); // video1を再生
  });

  // 初期状態でvideo2を非表示にする
  video2.style.display = 'none';
});
n
