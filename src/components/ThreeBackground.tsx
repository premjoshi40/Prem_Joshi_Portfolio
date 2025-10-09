import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const NetworkNodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create network nodes and connections
  const { nodes, lines } = useMemo(() => {
    const nodePositions: [number, number, number][] = [
      [-6, 2, -5],
      [-4, 3, -4],
      [-2, 2.5, -5],
      [0, 3.5, -4],
      [2, 2.8, -5],
      [4, 3.2, -4],
      [6, 2.5, -5],
      [-5, 1, -4],
      [-3, 1.5, -5],
      [-1, 0.8, -4],
      [1, 1.3, -5],
      [3, 0.9, -4],
      [5, 1.6, -5],
    ];

    // Create connections between nearby nodes
    const connections: [number, number][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
          Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
          Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
        );
        if (dist < 3.5) {
          connections.push([i, j]);
        }
      }
    }

    return { nodes: nodePositions, lines: connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render nodes */}
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial 
            color="#7DD3E8" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#7DD3E8"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Render connections */}
      {lines.map(([start, end], index) => {
        const startPos = new THREE.Vector3(...nodes[start]);
        const endPos = new THREE.Vector3(...nodes[end]);
        const direction = new THREE.Vector3().subVectors(endPos, startPos);
        const length = direction.length();
        const midpoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);

        return (
          <mesh key={`line-${index}`} position={midpoint}>
            <cylinderGeometry args={[0.01, 0.01, length, 4]} />
            <meshStandardMaterial 
              color="#7DD3E8" 
              transparent 
              opacity={0.3}
              metalness={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 3, -2]} intensity={0.5} color="#7DD3E8" />
      
      <NetworkNodes />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-[400px] opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 3], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
