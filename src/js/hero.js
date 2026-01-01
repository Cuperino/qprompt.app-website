let qtInstance = null;
let wasmLoaded = false;
let videoEnded = false;
let revealTriggered = false;
let introVideoCleaned = false;
let isMobile = false;
let isHashLanding = false;

const dom = {
  screen: null,
  status: null,
  video: null,
  placeholder: null,
  lastFrame: null,
  monitorScreen: null,
};

const VIDEO_CONFIG = {
  scale: 0.88,
  width: 1016,
  height: 583,
};

function cleanupIntroVideo() {
  if (introVideoCleaned) return;
  introVideoCleaned = true;

  try {
    if (dom.video) {
      dom.video.pause();
      dom.video.removeAttribute('src');
      dom.video.load();
      dom.video.classList.add('hidden');
    }
    if (dom.lastFrame) dom.lastFrame.hidden = true;
  } catch (e) {
    console.log(e);
  }
}

function startMonitorSync() {
  const sourceCanvas = document.querySelector('#qt-window-canvas');
  const monitorCanvas = document.querySelector('#monitor-canvas');

  if (!sourceCanvas || !monitorCanvas) {
    setTimeout(startMonitorSync, 500);
    return;
  }

  const ctx = monitorCanvas.getContext('2d');
  if (dom.monitorScreen) dom.monitorScreen.style.opacity = '0.4';

  function sync() {
    if (sourceCanvas.width !== monitorCanvas.width || sourceCanvas.height !== monitorCanvas.height) {
      monitorCanvas.width = sourceCanvas.width;
      monitorCanvas.height = sourceCanvas.height;
    }
    ctx.clearRect(0, 0, monitorCanvas.width, monitorCanvas.height);
    ctx.drawImage(sourceCanvas, 0, 0);
    requestAnimationFrame(sync);
  }

  sync();
}

function revealHeroContent() {
  if (!videoEnded) return;

  const appContainer = document.querySelector('#qt-shadow-container');

  if (wasmLoaded) {
    revealTriggered = true;

    if (appContainer) {
      appContainer.style.transition = 'opacity 1.0s ease-in';
      appContainer.style.opacity = '0.75';
      startMonitorSync();
    }

    if (dom.placeholder) {
      dom.placeholder.style.opacity = '0';
      setTimeout(() => dom.placeholder.classList.add('hidden'), 200);
    }

    // Only once WASM is visible do we retire the video/last-frame.
    setTimeout(() => cleanupIntroVideo(), 250);
  } else if (dom.placeholder) {
    dom.placeholder.style.transition = 'opacity 1.0s ease-in';
    dom.placeholder.style.opacity = '0.75';
    dom.placeholder.classList.remove('hidden');

    // Keep the last frame visible as a fallback while waiting for WASM.
    if (dom.lastFrame) dom.lastFrame.hidden = false;
    if (dom.video) dom.video.classList.remove('hidden');
  }

  if (dom.monitorScreen) {
    dom.monitorScreen.style.transition = 'opacity 1.0s ease-in';
    dom.monitorScreen.style.opacity = '0.4';
  }
}

function applyFixedVideoSize() {
  const Mcx = 1520 + 1016 / 2;
  const Mcy = 503 + 583 / 2;

  const scale = VIDEO_CONFIG.scale;
  const sw = VIDEO_CONFIG.width;
  const sh = VIDEO_CONFIG.height;

  if (dom.screen) {
    dom.screen.style.maxWidth = `${sw}px`;
    dom.screen.style.maxHeight = `${sh}px`;
  }

  const videoTop = sh / 2 - Mcy * scale;
  const videoLeft = sw / 2 - Mcx * scale;

  [dom.video, dom.lastFrame].forEach((el) => {
    if (el) {
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${scale})`;
      el.style.top = `${videoTop}px`;
      el.style.left = `${videoLeft}px`;
    }
  });

  const updateDynamicElements = () => {
    const qtElements = document.querySelectorAll('#qt-shadow-container, [id*="qt-shadow-container"], #qt-window-canvas');
    [...qtElements, dom.placeholder].forEach((el) => {
      if (el) {
        el.style.transformOrigin = 'center';
        el.style.transform = `scale(${scale})`;
      }
    });

    if (dom.monitorScreen) {
      dom.monitorScreen.style.transformOrigin = 'center';
      dom.monitorScreen.style.transform = `scaleY(-1) scale(${scale})`;
      dom.monitorScreen.style.top = `${600 * scale}px`;
    }
  };

  updateDynamicElements();

  const observer = new MutationObserver(updateDynamicElements);
  if (dom.screen) {
    observer.observe(dom.screen, { childList: true, subtree: true });
  }
}

function loadWasm(screen, status) {
  if (qtInstance || isMobile) return;

  const config = {
    qt: {
      onLoaded: () => {
        console.log('WASM Loaded and ready');
        wasmLoaded = true;
        revealHeroContent();
      },
      onExit: (exitData) => {
        status.innerHTML = "QPrompt demo couldn't load";
        status.innerHTML += exitData.code !== undefined ? ` with code ${exitData.code}` : '';
        status.innerHTML += exitData.text !== undefined ? ` (${exitData.text})` : '';
      },
      entryFunction: window.qprompt_entry,
      containerElements: [screen],
    },
  };

  qtLoad(config)
    .then((instance) => {
      qtInstance = instance;
    })
    .catch((e) => {
      wasmLoaded = false;
      revealHeroContent();
      console.error(e);
    });
}

export async function init() {
  dom.screen = document.querySelector('#screen');
  dom.status = document.querySelector('#qtstatus');
  dom.video = document.querySelector('#top-video');
  dom.placeholder = document.querySelector('#placeholder-prompter');
  dom.lastFrame = document.querySelector('#last-frame');
  dom.monitorScreen = document.querySelector('#monitor-screen');

  if (dom.placeholder) dom.placeholder.style.opacity = '0';
  if (dom.lastFrame) dom.lastFrame.hidden = true;
  applyFixedVideoSize();

  window.mobile = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a.substr(0, 4),
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4),
        )
      ) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  isMobile = window.mobile();
  isHashLanding = window.location.hash && window.location.hash.length > 1;

  if (isMobile) {
    if (dom.lastFrame) dom.lastFrame.hidden = false;
    if (dom.video) dom.video.classList.add('hidden');
    videoEnded = true;
    wasmLoaded = false;
    revealHeroContent();
  } else {
    if (isHashLanding) {
      videoEnded = true;
      if (dom.video) dom.video.classList.add('hidden');
      loadWasm(dom.screen, dom.status);
      revealHeroContent();
    } else {
      if (navigator.userAgent.search('Firefox') !== -1) {
        if (dom.video) dom.video.classList.remove('hidden');
        if (dom.lastFrame) dom.lastFrame.hidden = true;
      } else if (dom.video) {
        dom.video.addEventListener('canplay', () => {
          if (!isMobile) {
            dom.video.classList.remove('hidden');
            dom.lastFrame.hidden = true;
          }
        });
      }

      loadWasm(dom.screen, dom.status);
    }
  }

  if (dom.video) {
    dom.video.addEventListener('play', () => {
      if (isMobile) return;
      dom.lastFrame.hidden = true;
      dom.placeholder.style.opacity = '0';
    });

    dom.video.addEventListener('playing', () => {
      if (isMobile) return;
      dom.lastFrame.hidden = true;
      dom.placeholder.style.opacity = '0';
    });

    const handleVideoEnd = () => {
      if (videoEnded) return;
      videoEnded = true;
      if (dom.lastFrame) dom.lastFrame.hidden = false;
      revealHeroContent();
    };

    dom.video.addEventListener('ended', handleVideoEnd);
    dom.video.addEventListener('timeupdate', () => {
      if (!videoEnded && dom.video.duration > 0 && dom.video.currentTime >= dom.video.duration - 0.1) {
        handleVideoEnd();
      }
    });

    dom.video.addEventListener('abort', () => {
      if (isMobile) return;
      dom.video.classList.add('hidden');
      dom.lastFrame.hidden = false;
      handleVideoEnd();
    });

    dom.video.addEventListener('error', () => {
      if (isMobile) return;
      dom.video.classList.add('hidden');
      dom.lastFrame.hidden = false;
      handleVideoEnd();
    });
  }

  window.addEventListener('scroll', updateParallax);
  window.addEventListener('resize', updateParallax);
  updateParallax();
}

function updateParallax() {
  const parallax = document.querySelector('.parallax-bg');
  if (parallax) {
    const rect = parallax.getBoundingClientRect();
    const winHeight = window.innerHeight;
    if (rect.top < winHeight && rect.bottom > 0) {
      const offset = winHeight - rect.top;
      parallax.style.backgroundPositionY = `calc(50% + ${(offset - winHeight / 2) * 0.15}px)`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const parallax = document.querySelector('.parallax-bg');
  if (parallax && window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      updateParallax();
    });
    ro.observe(parallax);
  }
});

