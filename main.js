
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "1",
              campaignName: "live_project_for_testing_purpose",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const logo_a3c09eb3_840aa3c09_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_a3c09eb3_840aa3c09_texture = await loadTexture("assets/circle-fb-sm_107.svg");
  const logo_a3c09eb3_840aa3c09_image = new THREE.MeshBasicMaterial({
      map: logo_a3c09eb3_840aa3c09_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_a3c09eb3_840aa3c09 = new THREE.Mesh(logo_a3c09eb3_840aa3c09_iconGeometry, logo_a3c09eb3_840aa3c09_image);
    logo_a3c09eb3_840aa3c09.scale.set(0.4, 0.4, 1);
    logo_a3c09eb3_840aa3c09.position.set(0.003, 0.593, 0.073);
    logo_a3c09eb3_840aa3c09.rotation.set(-0.001, 0, 0);
    
    
    
const logo_b608b237_5c2cb608b_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_b608b237_5c2cb608b_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_b608b237_5c2cb608b_image = new THREE.MeshBasicMaterial({
      map: logo_b608b237_5c2cb608b_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_b608b237_5c2cb608b = new THREE.Mesh(logo_b608b237_5c2cb608b_iconGeometry, logo_b608b237_5c2cb608b_image);
    logo_b608b237_5c2cb608b.scale.set(0.4, 0.4, 1);
    logo_b608b237_5c2cb608b.position.set(0.769, -0.036, 0.04);
    logo_b608b237_5c2cb608b.rotation.set(-0.001, 0, 0);
    
    
    
const target_imagethreeeb3097_iconGeometry = new THREE.PlaneGeometry(1, 0.4767932489451477);
   const target_imagethreeeb3097_texture = await loadTexture("assets/threeeditor.png");
  const target_imagethreeeb3097_image = new THREE.MeshBasicMaterial({
      map: target_imagethreeeb3097_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imagethreeeb3097 = new THREE.Mesh(target_imagethreeeb3097_iconGeometry, target_imagethreeeb3097_image);
    target_imagethreeeb3097.scale.set(1, 1, 1);
    target_imagethreeeb3097.position.set(0.01, -0.01, 0.01);
    target_imagethreeeb3097.rotation.set(-0.001, 0, 0);
    
    
    
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      }

    })
    
      
    anchor.group.add(logo_a3c09eb3_840aa3c09)
anchor.group.add(logo_b608b237_5c2cb608b)



    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            



     
      
    };


    anchor.onTargetLost = () => {
      

        


    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    