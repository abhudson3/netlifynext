import dynamic from "next/dynamic";
const MapComp = dynamic(() => import("../test/page"), { ssr: false });
export default function App (){
    return (
  <div>
    <MapComp/>
  </div>
);
}
