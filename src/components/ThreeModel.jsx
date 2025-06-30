import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import wizzardCat from "../assets/wizzardCat.glb";

const ThreeModel = () => {
  const mount = useRef(null);
  let scene, camera, renderer, model;

  useEffect(() => {
    const container = mount.current;

    const initScene = () => {
      scene = new THREE.Scene();

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 0, 5);
      scene.add(pointLight);
    };

    const initCamera = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 4;
      camera.position.y = 2;
    };

    const initRenderer = () => {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.innerHTML = "";
      container.appendChild(renderer.domElement);
      renderer.setClearColor(0xffffff, 0); // Transparent background
    };

    const loadModel = () => {
      const loader = new GLTFLoader();
      loader.load(
        wizzardCat,
        (gltf) => {
          if (model) scene.remove(model);
          model = gltf.scene;
          scene.add(model);
          model.lookAt(new THREE.Vector3(0, 0, 0));
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model", error);
        }
      );
    };

    const animate = () => {
      if (model) {
        const time = performance.now() * 0.001;
        const yOffset = 0.2 * Math.sin(2 * Math.PI * 0.5 * time);
        model.position.y = yOffset + 1.5;
        model.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    initScene();
    initCamera();
    initRenderer();
    loadModel();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mount}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        position: "relative",
      }}
    />
  );
};

export default ThreeModel;
