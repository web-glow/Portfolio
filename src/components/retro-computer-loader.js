/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function Model(props) {
    const myMesh = React.useRef();
    const { nodes, materials } = useGLTF("/retro-computer.gltf");

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.y = -a / 2;
    });

    return (
        <group {...props} dispose={null} scale={230} ref={myMesh}>
            <mesh
                geometry={nodes.Part1.geometry}
                material={materials.Part1}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Part2.geometry}
                material={materials.Part2}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            />
        </group>
    );
}

useGLTF.preload("/retro-computer.gltf");
