import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Cloud shape
const CloudShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
      <group position={position}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.5, 0.2, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[-0.4, 0.15, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.2, 0.4, 0]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
};

// Code bracket shape
const BracketShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group position={position} rotation={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 1.5, 0.2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.3, 0.6, 0]}>
          <boxGeometry args={[0.6, 0.2, 0.2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.3, -0.6, 0]}>
          <boxGeometry args={[0.6, 0.2, 0.2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

// AI Neural Network Node
const AINode = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={1.8}>
      <group position={position}>
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} wireframe />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

// Tag/Hash symbol
const TagShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.6}>
      <group position={position}>
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
          <boxGeometry args={[0.15, 1.2, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
          <boxGeometry args={[0.15, 1.2, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[1, 0.15, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[1, 0.15, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

// Database/Server shape
const DatabaseShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={1.4}>
      <group position={position}>
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.6, 32]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.7} color="#7DD3E8" />
      <pointLight position={[10, -5, -5]} intensity={0.5} color="#F7941D" />
      
      {/* Tech-themed floating shapes */}
      <CloudShape position={[-4, 2, -3]} color="#7DD3E8" />
      <BracketShape position={[3.5, 1, -2]} color="#F7941D" />
      <AINode position={[-2, -1.5, -4]} color="#C4D82E" />
      <TagShape position={[1, 3, -3]} color="#BFBFBF" />
      <DatabaseShape position={[4, -1, -4]} color="#7DD3E8" />
      <BracketShape position={[-3.5, -2, -2]} color="#C4D82E" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
